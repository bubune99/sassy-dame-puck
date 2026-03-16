import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../stack";

export type UserRole = "admin" | "editor" | "viewer";

export interface AuthContext {
  user: { id: string; email: string; name: string | null; role: UserRole };
}

/**
 * Get user role from Stack Auth server metadata
 */
function getUserRole(user: any): UserRole {
  const metadata = user.serverMetadata as Record<string, unknown> | null;
  const role = metadata?.role as string | undefined;
  if (role === "admin" || role === "editor" || role === "viewer") {
    return role;
  }
  return "viewer"; // Default: no admin access
}

/**
 * Permission requirements for each permission level
 */
const ROLE_HIERARCHY: Record<UserRole, number> = {
  viewer: 0,
  editor: 1,
  admin: 2,
};

const PERMISSION_REQUIREMENTS: Record<string, UserRole> = {
  "pages.view": "editor",
  "pages.create": "editor",
  "pages.edit": "editor",
  "pages.delete": "admin",
  "media.view": "editor",
  "media.upload": "editor",
  "media.delete": "admin",
  "settings.view": "admin",
  "settings.edit": "admin",
};

function hasPermission(role: UserRole, permission: string): boolean {
  const required = PERMISSION_REQUIREMENTS[permission] || "admin";
  return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY[required];
}

export function withPermission<T extends unknown[]>(
  permission: string,
  handler: (request: NextRequest, context: AuthContext, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      const user = await stackServerApp.getUser();
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const role = getUserRole(user);

      if (!hasPermission(role, permission)) {
        return NextResponse.json(
          { error: "Forbidden: insufficient permissions" },
          { status: 403 }
        );
      }

      const context: AuthContext = {
        user: {
          id: user.id,
          email: user.primaryEmail || "",
          name: user.displayName,
          role,
        },
      };
      return handler(request, context, ...args);
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  };
}
