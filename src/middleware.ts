import type { NextRequest } from "next/server";
import AuthenticationMiddleware from "./middleware/authentication";

export function middleware(request: NextRequest) {
  return AuthenticationMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp).*)",
  ],
};
