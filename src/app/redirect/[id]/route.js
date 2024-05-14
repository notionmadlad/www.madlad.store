import { NextResponse } from "next/server";
import { redirects } from "./redirects";
import { generateId } from "@/lib/utils";

export async function GET(request, context) {
  const redirect = context.params?.id;
  const values = Object.keys(redirects);
  const key = values.find((value) => generateId(value) == redirect);
  const url = key.startsWith("$")
    ? request.nextUrl.origin + redirects[key]
    : redirects[key];
  console.log();
  return NextResponse.redirect(url);
}
