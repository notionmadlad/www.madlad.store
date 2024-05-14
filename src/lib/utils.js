import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createHash } from "crypto";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generateId(string) {
  const hash = createHash("sha1");
  hash.update(string);
  const digest = hash.digest("hex");
  const key = digest.slice(0, 4);
  return key;
}

export function generateURL(string) {
  const id = generateId(string.replace("local:", "$"));
  return `/redirect/${id}`;
}

export function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
