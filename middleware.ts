/* eslint-disable @typescript-eslint/no-unused-vars */
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    // console.log(req);
  },
  {
    // Middleware still runs on all routes, but doesn't protect the blog route
    publicPaths: [
      "/",
      "/about-us",
      "/contact-us",
      "/contact-us",
      "/privacy-policy",
      "/help-center",
      "/terms",
    ],
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
