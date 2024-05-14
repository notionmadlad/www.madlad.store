"use client";

import { Search } from "lucide-react";
import Link from "next/link";

export default function ProductSearch() {
  return (
    <Link href="/products/search" className="rounded-[10px] border border-main-600 group flex overflow-hidden w-full md:max-w-lg cursor-pointer">
      <Search className="py-2 pl-5 h-14 w-11 bg-main-800 group-hover:bg-main-700 transition-all duration-300" />
      <input className="py-4 pl-4 pr-9 w-full bg-main-800 outline-none group-hover:bg-main-700 transition-all duration-300 placeholder:text-main-50 cursor-pointer" placeholder="Search for templates..." />
    </Link>
  );
}