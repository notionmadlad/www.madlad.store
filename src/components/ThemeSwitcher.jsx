"use client";

import { useThemeSwitcher } from "@/lib/hooks";
import { Laptop, MoonStar, Smartphone, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export default function ThemeSwitcher({ mobile }) {
  const [defaultTheme, setDefaultTheme] = useState(null);
  const { theme, toggleTheme } = useThemeSwitcher();

  useLayoutEffect(() => {
    setDefaultTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  }, []);

  const defaultIcon = mobile ? Smartphone : Laptop;
  const themeIcon = theme === "light" ? Sun : MoonStar;
  const themeTitle = theme === "light" ? "Light" : "Dark";
  const Icon = theme === defaultTheme ? defaultIcon : themeIcon;

  return !mobile ? (
    <div
      onClick={toggleTheme}
      className="cursor-pointer p-2 bg-main-800 rounded-[5px]"
    >
      <Icon />
    </div>
  ) : (
    <div onClick={toggleTheme} className="cursor-pointer">
      {themeTitle}{" "}
      <Icon className="inline-flex p-1 bg-main-800 rounded-[5px]" />
    </div>
  );
}
