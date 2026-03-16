import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "@/lib/stack";

/**
 * GET /api/admin/users - Get current user's role
 */
export async function GET() {
  try {
    const user = await stackServerApp.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const metadata = (user.serverMetadata as Record<string, unknown>) || {};
    const role = metadata.role || "viewer";

    return NextResponse.json({
      id: user.id,
      email: user.primaryEmail,
      name: user.displayName,
      role,
    });
  } catch {
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

    const currentMetadata = (currentUser.serverMetadata as Record<string, unknown>) || {};
    if (currentMetadata.role !== "admin") {
      return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
    }

    const { userId, role } = await request.json();
    if (!["admin", "editor", "viewer"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Use Stack Auth server API to update the target user's metadata
    const targetUser = await stackServerApp.getUser(userId);
    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await targetUser.update({
      serverMetadata: { ...((targetUser.serverMetadata as Record<string, unknown>) || {}), role },
    });

    return NextResponse.json({ success: true, userId, role });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json({ error: "Failed to update role" }, { status: 500 });
  }
}
