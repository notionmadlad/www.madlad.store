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
      className="cursor-pointer rounded-full border border-border bg-card p-3 transition-all duration-300 hover:bg-secondary"
    >
      <Icon />
    </div>
  ) : (
    <div onClick={toggleTheme} className="cursor-pointer">
      {themeTitle} <Icon className="inline-flex rounded-md bg-card p-1" />
    </div>
  );
}
