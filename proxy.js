import { NextResponse } from "next/server";

export function proxy(request) {
  console.log("no permission");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/blog/:path*",
};
