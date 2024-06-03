"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "@/config/main";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[9999] flex h-20 items-center justify-center p-2">
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex h-full items-center justify-between rounded-full border border-border bg-background px-2 backdrop-blur-[6px]">
            <Link href="/" className="flex items-center gap-5">
              <Image
                src="/madlad-logo.png"
                alt="logo"
                width={125}
                height={25}
                className="h-[50px] w-[50px] rounded-full border border-border"
              />
              <h1 className="text-[20px] font-semibold">The Madlad Store</h1>
            </Link>
            <div className="flex items-center gap-5">
              <div className="hidden items-center gap-5 font-semibold *:text-[18px] md:flex">
                {Object.keys(navLinks).map((key, index) => (
                  <Link
                    href={navLinks[key]}
                    className={cn(
                      "border-y border-transparent hover:border-b-border",
                      pathname === navLinks[key] && "border-y border-b-border",
                    )}
                    key={index}
                  >
                    {key}
                  </Link>
                ))}
                <ThemeSwitcher />
              </div>
              <div
                className={cn(
                  "mr-4 flex cursor-pointer flex-col gap-1.5 transition-all duration-500 *:h-[2px] *:rounded-full *:bg-foreground *:transition-all *:duration-500 md:hidden",
                  open && "rotate-[360deg]",
                )}
                onClick={() => setOpen((prev) => !prev)}
              >
                <div className={cn("w-6", open && "translate-y-2 rotate-45")} />
                <div
                  className={cn(
                    "w-6",
                    open && "mx-[11px] w-[2px] translate-y-0",
                  )}
                />
                <div
                  className={cn("w-6", open && "-translate-y-2 -rotate-45")}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed -top-[145px] left-12 right-12 z-[999] flex h-[225px] flex-col gap-3 rounded-lg border border-border bg-background p-5 font-semibold opacity-0 transition-all duration-500 ease-in-out *:text-[18px] md:hidden",
          open && "top-20 opacity-100",
        )}
      >
        {Object.keys(navLinks).map((key, index) => (
          <Link
            href={navLinks[key]}
            className={cn(
              pathname === navLinks[key] && "border-b border-border",
            )}
            key={index}
          >
            {key}
          </Link>
        ))}
        <ThemeSwitcher mobile />
      </div>
      <div className="modal" />
    </>
  );
}
