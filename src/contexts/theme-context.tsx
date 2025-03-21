"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

// Add global window interface to access the initial theme
declare global {
  interface Window {
    __THEME_INITIAL?: string;
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined" && window.__THEME_INITIAL) {
      return window.__THEME_INITIAL as Theme;
    }
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    }
  };

  const applyTheme = (themeToApply: Theme) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    let effectiveTheme: "light" | "dark";

    if (themeToApply === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    } else {
      effectiveTheme = themeToApply;
    }

    root.classList.add(effectiveTheme);
    setResolvedTheme(effectiveTheme);
  };

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = storedTheme || "system";

    setThemeState(initialTheme);
    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
