import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isAuthenticated = false // TODO: Replace with actual auth check
  
  if (!isAuthenticated && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/login"],
} 