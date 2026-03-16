"use client";

export function useAuth() {
  return {
    user: { displayName: "Admin", primaryEmail: "admin@local" },
    isLoading: false,
    isAuthenticated: true,
    signOut: async () => {
      window.location.href = "/";
    },
  };
}
