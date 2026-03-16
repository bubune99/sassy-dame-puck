import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "@/lib/stack";
import { syncUser } from "@/lib/auth/sync";
import { prisma } from "@/lib/db";

/**
 * GET /api/admin/users - Get current user's role
 * Checks Stack Auth metadata first, falls back to local DB
 */
export async function GET() {
  try {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check Stack Auth metadata for role
    const metadata = (user.serverMetadata as Record<string, unknown>) || {};
    let role = metadata.role as string | undefined;

    // Fallback: check local DB
    if (!role || role === "viewer") {
      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
      });
      if (dbUser) {
        role = dbUser.role.toLowerCase();
      }

      // Also check by email if ID doesn't match
      if (!dbUser && user.primaryEmail) {
        const dbUserByEmail = await prisma.user.findUnique({
          where: { email: user.primaryEmail },
        });
        if (dbUserByEmail) {
          role = dbUserByEmail.role.toLowerCase();
          // Update the DB record to use the Stack Auth ID
          await prisma.user.update({
            where: { email: user.primaryEmail },
            data: { id: user.id },
          }).catch(() => {
            // If ID conflict, just use the existing record
          });
        }
      }
    }

    if (!role) role = "viewer";

    // Sync user to local database
    await syncUser({
      id: user.id,
      primaryEmail: user.primaryEmail,
      displayName: user.displayName,
      serverMetadata: { role },
    });

    return NextResponse.json({
      id: user.id,
      email: user.primaryEmail,
      name: user.displayName,
      role,
    });
  } catch (error) {
    console.error("User role check error:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

/**
 * PUT /api/admin/users - Set a user's role (admin only)
 * Body: { userId: string, role: "admin" | "editor" | "viewer" }
 */
export async function PUT(request: NextRequest) {
  try {
    const currentUser = await stackServerApp.getUser();
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check current user is admin (from Stack Auth or DB)
    const currentMetadata = (currentUser.serverMetadata as Record<string, unknown>) || {};
    let currentRole = currentMetadata.role as string | undefined;
    if (!currentRole || currentRole !== "admin") {
      const dbUser = await prisma.user.findUnique({ where: { id: currentUser.id } });
      if (dbUser?.role === "ADMIN") currentRole = "admin";
    }

    if (currentRole !== "admin") {
      return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
    }

    const { userId, role } = await request.json();
    if (!["admin", "editor", "viewer"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Update in Stack Auth
    try {
      const targetUser = await stackServerApp.getUser(userId);
      if (targetUser) {
        await targetUser.update({
          serverMetadata: { ...((targetUser.serverMetadata as Record<string, unknown>) || {}), role },
        });
      }
    } catch (e) {
      console.warn("Could not update Stack Auth metadata:", e);
    }

    // Update in local DB
    const prismaRole = role.toUpperCase() as any;
    await prisma.user.updateMany({
      where: { id: userId },
      data: { role: prismaRole },
    });

    return NextResponse.json({ success: true, userId, role });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
