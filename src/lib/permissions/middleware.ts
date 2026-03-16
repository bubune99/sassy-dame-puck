import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "../stack";

export interface AuthContext {
  user: { id: string; email: string; name: string | null };
}

export function withPermission<T extends unknown[]>(
  _permission: string,
  handler: (request: NextRequest, context: AuthContext, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      const user = await stackServerApp.getUser();
      if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const context: AuthContext = {
        user: {
          id: user.id,
          email: user.primaryEmail || "",
          name: user.displayName,
        },
      };
      return handler(request, context, ...args);
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  };
}
