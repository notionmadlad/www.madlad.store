"use client";

import { useSearchFilter } from "@/lib/hooks";
import { Search } from "lucide-react";

export default function Searchbar() {
  const provider = useSearchFilter();
  return (
    <label className="group relative flex w-full overflow-hidden rounded-lg border border-border md:max-w-lg">
      <Search className="absolute left-0 h-14 w-11 overflow-hidden py-2 pl-5 transition-all duration-500 group-focus-within:-left-11 group-focus-within:h-14" />
      <input
        className="w-full bg-input py-4 pl-16 pr-9 outline-none transition-all duration-500 placeholder:text-foreground group-focus-within:pl-9"
        placeholder="Search for templates..."
        {...provider}
      />
    </label>
  );
}
