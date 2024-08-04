"use client";

import { useHydrate } from "@/lib/hooks";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function NotFound() {
  const pathname = useHydrate(usePathname, ["/"], ["$base"]);

  useLayoutEffect(() => {
    const notfound = document.getElementById("404");
    const newsletter = document.getElementById("newsletter");
    const footer = document.getElementsByTagName("footer")[0];

    if (notfound) {
      newsletter.style.display = "none";
      footer.style.display = "none";
    }
  }, [pathname]);

  return null;
}