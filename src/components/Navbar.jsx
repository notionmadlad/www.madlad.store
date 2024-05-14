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
      <nav className="border-b bg-main-900 border-main-600 h-20 fixed top-0 left-0 right-0 flex justify-center items-center z-[10]">
        <div className="h-full max-w-6xl w-full">
          <div className="h-full flex justify-between items-center mx-10">
            <Link href="/" className="flex gap-5 items-center">
              <Image
                src="/madlad-logo.png"
                alt="logo"
                width={125}
                height={25}
                className="w-[50px] h-[50px] rounded-full border border-main-600"
              />
              <h1 className="font-semibold text-[20px]">The Madlad Store</h1>
            </Link>
            <div className="flex gap-5 items-center">
              <div className="hidden md:flex gap-5 items-center font-semibold *:text-[18px]">
                {Object.keys(navLinks).map((key, index) => (
                  <Link
                    href={navLinks[key]}
                    className={cn(
                      "hover:border-b border-main-600",
                      pathname === navLinks[key] && "border-b border-main-200",
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
                  "flex md:hidden flex-col gap-1.5 cursor-pointer transition-all duration-700 *:bg-main-50 *:transition-all *:duration-700 *:rounded-full *:h-[2px]",
                  open && "rotate-[360deg]",
                )}
                onClick={() => setOpen((prev) => !prev)}
              >
                <div className={cn("w-6", open && "translate-y-2 rotate-45")} />
                <div
                  className={cn(
                    "w-6",
                    open && "translate-y-0 w-[2px] mx-[11px]",
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
          "h-[225px] fixed flex md:hidden flex-col gap-3 -top-[145px] right-0 left-0 p-5 border-b border-main-600 bg-main-900 transition-all duration-500 ease-in-out font-semibold *:text-[18px] z-[5]",
          open && "top-20",
        )}
      >
        {Object.keys(navLinks).map((key, index) => (
          <Link
            href={navLinks[key]}
            className={cn(
              pathname === navLinks[key] && "border-b border-main-200",
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
