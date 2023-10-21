import { NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";
import { Password } from "@/data.json";

export function middleware(request: NextRequest) {
  const hash = request.cookies.get("session")?.value;

  if (request.nextUrl.pathname.startsWith("/edit")) {
    if (!hash) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (compareSync(Password, hash)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!hash) {
      return NextResponse.next();
    } else if (compareSync(Password, hash)) {
      return NextResponse.redirect(new URL("/edit", request.url));
    } else {
      return NextResponse.next();
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/update") || request.nextUrl.pathname.startsWith("/api/upload")) {
    if (!hash) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (compareSync(Password, hash)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  
  return NextResponse.next();
}
