import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the user is not already on the /login page
  if (request.nextUrl.pathname !== "/login") {
    // Redirect to the /login page
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // Allow the request to continue if it's the login page
  return NextResponse.next();
}
export const config = {
    matcher: ['/studentlist/:path*']
    };