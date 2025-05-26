import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_ROUTES: RegExp[] = [
  /^\/$/,
  /^\/login(\/.*)?$/,
  /^\/register(\/.*)?$/,
  /^\/busca(\/.*)?$/,
];

const AuthenticationMiddleware = (request: NextRequest): NextResponse => {
  const path = request.nextUrl.pathname;
  const clientToken = request.cookies.get("CLIENT_TOKEN");
  const isPublicRoute = PUBLIC_ROUTES.some((rx) => rx.test(path));

  const headers = new Headers();
  headers.set("is-authenticated", clientToken ? "true" : "false");

  if (isPublicRoute || clientToken) {
    return NextResponse.next({ headers });
  }

  const nextUrl = request.nextUrl.clone();
  nextUrl.searchParams.set("redirect", path);
  nextUrl.pathname = "/login";

  return NextResponse.redirect(nextUrl, { headers });
};

export default AuthenticationMiddleware;
