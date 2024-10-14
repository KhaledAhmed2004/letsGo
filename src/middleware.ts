// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
// import { decode } from "./utils/jwtHelper";

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const accessToken = cookies().get("accessToken")?.value;

//   //Role based authorization

//   let decodedToken = null;

//   decodedToken = decode(accessToken) as any;

//   console.log(decodedToken, "decodedToken");

//   const role = decodedToken?.role;

//   console.log(role, "role");
//   console.log(pathname, "pathname");

//   if (role === "admin" && pathname === "/admin-dashboard") {
//     return NextResponse.next();
//   }

//   if (role === "agent" && pathname === "/agent-dashboard") {
//     return NextResponse.next();
//   }

//   if (role === "user" && pathname === "/dashboard") {
//     return NextResponse.next();
//   }
// }

// export const config = {
//   matcher: [
//     "/dashboard/:page*",
//     "/admin-dashboard/:page*",
//     "/agent-dashboard/:page*",
//   ],
// };
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { decode } from "./utils/jwtHelper";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the token from request headers
  const accessToken = request.cookies.get("accessToken")?.value;

  // Handle cases where there's no token
  if (!accessToken) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Decode the token
  let decodedToken = null;
  decodedToken = decode(accessToken) as any;

  const role = decodedToken?.role;

  // Log for debugging
  console.log(role, "role");
  console.log(pathname, "pathname");

  // Role-based routing logic
  if (role === "admin" && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.next();
  }

  if (role === "agent" && pathname.startsWith("/agent-dashboard")) {
    return NextResponse.next();
  }

  if (role === "user" && pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  // If the role doesn't match, redirect to the unauthorized page
  return NextResponse.redirect(new URL("/unauthorized", request.url));
}

// Specify the routes that need to be protected
export const config = {
  matcher: [
    "/dashboard/:path*", // Match all subpaths of /dashboard
    "/admin-dashboard/:path*", // Match all subpaths of /admin-dashboard
    "/agent-dashboard/:path*", // Match all subpaths of /agent-dashboard
  ],
};
