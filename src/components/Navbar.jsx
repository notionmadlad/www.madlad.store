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
      <nav className="fixed left-0 right-0 top-0 z-[10] flex h-20 items-center justify-center border-b border-border backdrop-blur">
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex h-full items-center justify-between">
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
                      "border-border hover:border-b",
                      pathname === navLinks[key] && "border-b border-border",
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
                  "flex cursor-pointer flex-col gap-1.5 transition-all duration-700 *:h-[2px] *:rounded-full *:bg-foreground *:transition-all *:duration-700 md:hidden",
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
          "fixed -top-[145px] left-0 right-0 z-[5] flex h-[225px] flex-col gap-3 border-b border-border bg-background p-5 font-semibold transition-all duration-500 ease-in-out *:text-[18px] md:hidden",
          open && "top-20",
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
