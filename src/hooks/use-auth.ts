"use client";

import { useUser } from "@stackframe/stack";

export function useAuth() {
  const user = useUser();

  return {
    user: user
      ? {
          displayName: user.displayName || user.primaryEmail || "User",
          primaryEmail: user.primaryEmail || "",
        }
      : null,
    isLoading: false,
    isAuthenticated: !!user,
    signOut: async () => {
      if (user) {
        await user.signOut();
      }
      window.location.href = "/";
    },
  };
}
