"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount component after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until component is mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />; // Placeholder with same dimensions
  }

  // Use resolvedTheme to get the actual theme currently applied (including system preference)
  const isDark = resolvedTheme === "dark";

  return (
      <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          title={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        {isDark ? (
            <Sun className="h-5 w-5" />
        ) : (
            <Moon className="h-5 w-5" />
        )}
      </button>
  );
}
