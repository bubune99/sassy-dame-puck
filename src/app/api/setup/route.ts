import { NextResponse } from "next/server";
import { stackServerApp } from "@/lib/stack";
import { syncUser } from "@/lib/auth/sync";

/**
 * POST /api/setup - Promote the currently signed-in user to admin
 *
 * This only works if NO user has the admin role yet (first-time setup).
 * After the first admin is created, this endpoint is disabled.
 */
export async function POST() {
  try {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.json({ error: "Sign in first" }, { status: 401 });
    }

    // Check if any admin already exists by listing users
    const allUsers = await stackServerApp.listUsers();
    const existingAdmin = allUsers.items.find((u: any) => {
      const meta = (u.serverMetadata as Record<string, unknown>) || {};
      return meta.role === "admin";
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Setup already complete. An admin user already exists." },
        { status: 403 }
      );
    }

    // Promote current user to admin in Stack Auth
    await user.update({
      serverMetadata: { ...((user.serverMetadata as Record<string, unknown>) || {}), role: "admin" },
    });

    // Sync to local database
    await syncUser({
      id: user.id,
      primaryEmail: user.primaryEmail,
      displayName: user.displayName,
      serverMetadata: { role: "admin" },
    });

    return NextResponse.json({
      success: true,
      message: `User ${user.primaryEmail || user.id} has been promoted to admin.`,
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json({ error: "Setup failed" }, { status: 500 });
  }
}

/**
 * GET /api/setup - Check if setup is needed
 */
export async function GET() {
  try {
    const allUsers = await stackServerApp.listUsers();
    const existingAdmin = allUsers.items.find((u: any) => {
      const meta = (u.serverMetadata as Record<string, unknown>) || {};
      return meta.role === "admin";
    });

    return NextResponse.json({
      setupRequired: !existingAdmin,
      totalUsers: allUsers.items.length,
    });
  } catch (error) {
    console.error("Setup check error:", error);
    return NextResponse.json({ setupRequired: true, totalUsers: 0 });
  }
}
