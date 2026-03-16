import { NextRequest, NextResponse } from "next/server";

export interface AuthContext {
  user: { id: string; email: string; name: string | null };
}

export function withPermission<T extends unknown[]>(
  _permission: string,
  handler: (request: NextRequest, context: AuthContext, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    const context: AuthContext = {
      user: { id: "system", email: "admin@local", name: "Admin" },
    };
    return handler(request, context, ...args);
  };
}
