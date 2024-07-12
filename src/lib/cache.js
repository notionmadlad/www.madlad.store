import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";
import { formatDatabase, queryDatabase } from "./notion";

export function cache(cb, keyParts, options = {},) {
  return nextCache(reactCache(cb), keyParts, options);
}

export const getProducts = cache(() => queryDatabase().then(formatDatabase), ["getProducts"], { revalidate: 60 * 60 });