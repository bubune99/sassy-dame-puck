/**
 * Sync Stack Auth users with local database
 */

import { prisma } from "../db";

export interface StackAuthUser {
  id: string;
  primaryEmail: string | null;
  displayName: string | null;
  serverMetadata?: Record<string, unknown> | null;
}

/**
 * Ensure a Stack Auth user exists in our local database.
 * Creates or updates the user record.
 */
export async function syncUser(stackUser: StackAuthUser) {
  const role = (stackUser.serverMetadata?.role as string) || "VIEWER";
  const prismaRole = role.toUpperCase() === "ADMIN" ? "ADMIN" : role.toUpperCase() === "EDITOR" ? "EDITOR" : "VIEWER";

  const user = await prisma.user.upsert({
    where: { id: stackUser.id },
    create: {
      id: stackUser.id,
      email: stackUser.primaryEmail || `${stackUser.id}@stack.local`,
      name: stackUser.displayName,
      role: prismaRole as any,
    },
    update: {
      email: stackUser.primaryEmail || undefined,
      name: stackUser.displayName || undefined,
      role: prismaRole as any,
    },
  });

  return user;
}
