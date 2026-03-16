import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public routes
  if (pathname.startsWith('/handler') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Check for Stack Auth session cookie
    const hasAuthCookie = Array.from(request.cookies.getAll()).some(
      c => c.name.startsWith('stack-')
    );

    if (!hasAuthCookie) {
      const signInUrl = new URL('/handler/sign-in', request.url);
      signInUrl.searchParams.set('after_auth_return_to', pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
