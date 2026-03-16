import { NextResponse } from "next/server";
import { stackServerApp } from "@/lib/stack";
import { syncUser } from "@/lib/auth/sync";
import { prisma } from "@/lib/db";

/**
 * POST /api/setup - Promote the currently signed-in user to admin
 *
 * This only works if NO user has the admin role yet (first-time setup).
 */
export async function POST() {
  try {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.json({ error: "Sign in first" }, { status: 401 });
    }

    // Check if any admin exists in local DB
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Setup already complete. An admin user already exists." },
        { status: 403 }
      );
    }

    // Promote current user to admin in Stack Auth
    try {
      await user.update({
        serverMetadata: { ...((user.serverMetadata as Record<string, unknown>) || {}), role: "admin" },
      });
    } catch (e) {
      console.warn("Could not update Stack Auth metadata:", e);
    }

    // Sync to local database as admin
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
    // Check local DB for admin — more reliable than Stack Auth listUsers
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    const totalUsers = await prisma.user.count();

    return NextResponse.json({
      setupRequired: !existingAdmin,
      totalUsers,
    });
  } catch (error) {
    console.error("Setup check error:", error);
    return NextResponse.json({ setupRequired: true, totalUsers: 0 });
  }
}
