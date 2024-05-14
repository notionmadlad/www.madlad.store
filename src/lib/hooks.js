"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function useSearchFilter(obj) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("search"));
  const [filtered, setFiltered] = useState(obj);

  useEffect(() => {
    const url = new URL(window.location.href);
    
    if (query) {
      url.searchParams.set("search", query);

      setFiltered(prev => {
        const newObj = {};
        const keys = Object.keys(prev);
        keys.forEach(key => {
          const item = obj[key];

          if (JSON.stringify(item).toLowerCase().includes(query.toLowerCase())) {
            newObj[key] = item;
          }
        });

        return newObj;
      });
    } else {
      url.searchParams.delete("search");
      setFiltered(obj);
    }

    router.push(url.href.replace(window.location.origin, ""));
  }, [obj, query, router]);

  return {
    state: [query, setQuery],
    result: filtered
  };
}

export function useThemeSwitcher() {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? storedTheme : defaultTheme);
  }, []);

  useLayoutEffect(() => {
    if (theme !== null) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
      document.body.classList.add("theme-transition");
      const timeout = setTimeout(() => {
        document.body.classList.remove("theme-transition");
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [theme]);

  useEffect(() => {
    const updateTheme = () => {
      const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(newTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}

export function useThemeColors() {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem('theme'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const light = {
    900: "#ffffff",
    800: "#fafafa",
    700: "#e6e6e6",
    600: "#e6e6e6",
    500: "#e3e3e3",
    400: "#888888",
    300: "#545454",
    200: "#3d3d3d",
    100: "#333333",
    50: "#000000"
  };

  const dark = {
    900: "#101010",
    800: "#202020",
    700: "#303030",
    600: "#404040",
    500: "#505050",
    400: "#606060",
    300: "#707070",
    200: "#808080",
    100: "#909090",
    50: "#ffffff"
  };

  return theme === "light" ? light : dark;
}

export function useFormData(handleSubmit) {
  const ref = useRef(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (ref.current) {
      const formData = new FormData(ref.current);
      ref.current.onsubmit = async (event) => {
        event.preventDefault();
        try {
          setPending(true);
          const returnData = await handleSubmit(formData);
          setPending(false);
          setData(returnData);
        } catch (e) {
          setError(e);
        }
      };
    }
  }, [handleSubmit]);

  return [ref, { pending, error, data }];
}