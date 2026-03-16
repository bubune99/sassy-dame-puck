"use client";

import { useEffect, useState } from "react";
import { useUser } from "@stackframe/stack";
import { ShieldAlert, LogIn, Loader2 } from "lucide-react";

type UserRole = "admin" | "editor" | "viewer" | null;

export function RoleGuard({ children }: { children: React.ReactNode }) {
  const user = useUser();
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    async function checkRole() {
      try {
        const res = await fetch("/api/admin/users");
        if (res.ok) {
          const data = await res.json();
          setRole(data.role);
        } else {
          setRole("viewer");
        }
      } catch {
        setRole("viewer");
      } finally {
        setLoading(false);
      }
    }

    checkRole();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Checking permissions...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <LogIn className="h-12 w-12 text-muted-foreground mx-auto" />
          <h2 className="text-xl font-semibold">Sign in required</h2>
          <p className="text-muted-foreground">You need to sign in to access the admin area.</p>
          <a
            href="/handler/sign-in?after_auth_return_to=/admin"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  if (role !== "admin" && role !== "editor") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md px-4">
          <ShieldAlert className="h-12 w-12 text-destructive mx-auto" />
          <h2 className="text-xl font-semibold">Access Denied</h2>
          <p className="text-muted-foreground">
            You don&apos;t have permission to access the admin area.
            Contact an administrator to request access.
          </p>
          <p className="text-sm text-muted-foreground">
            Signed in as: <strong>{user.primaryEmail}</strong>
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium hover:bg-accent"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
