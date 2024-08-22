import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  let cookie = request.cookies.has("token");

  let pathName = request.nextUrl.pathname.replace("/", "");

  if (pathName === "login" || pathName === "register") {
    if (cookie) return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathName === "post") {
    if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathName === "myposts") {
    if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathName === "logout") {

    response.cookies.delete("fullName");
    response.cookies.delete("token");
    response.cookies.delete("userID");
  }

  return response;
}
