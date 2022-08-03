import { NextResponse, NextRequest } from "next/server";
// import { NextRequest } from "next/server";

export function middleware(request) {
    return NextResponse.rewrite(new URL("/profile", request.url));
}
export const config = {
    matcher: ["/ide"],
};
