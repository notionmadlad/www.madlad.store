"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const hydrate = (key) => `hydrate-dependency-at-${key}`;

export function useHydrate(useFn, { defaultState, defaultValue }, rawDeps = []) {
  const [value, setValue] = useState(defaultState || null);
  const fn = useFn(defaultValue);

  const deps = rawDeps.map(dep => {
    switch (dep) {
      case hydrate("base"):
        return fn;
      case hydrate("state"):
        return value;    
      default:
        return dep;
    }
  });

  useEffect(() => {
    setValue(fn);
  }, deps);

  return value || defaultState;
}

export function useSearchFilter(obj) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get("search"));
  const [filtered, setFiltered] = useState(obj);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (query) {
      url.searchParams.set("search", query);

      setFiltered((prev) => {
        const newObj = {};
        const keys = Object.keys(prev);
        keys.forEach((key) => {
          const item = obj[key];

          if (
            JSON.stringify(item).toLowerCase().includes(query.toLowerCase())
          ) {
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
  }, [obj, query, router, searchParams]);

  const provider = {
    value: query,
    onChange: (e) => setQuery(e.target.value),
  };

  return [provider, filtered];
}

export function useThemeSwitcher() {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
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

  useLayoutEffect(() => {
    const updateTheme = () => {
      const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
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

export function useFormAction(handleSubmit) {
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