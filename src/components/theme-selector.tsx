"use client";

import { useTheme } from "next-themes";
import { Computer, Moon, Sun } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const ThemeSelector = () => {
    const {theme, setTheme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Mount after hydration to avoid mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [isOpen]);

    // Handle escape key to close dropdown
    useEffect(() => {
        function handleEscKey(event: KeyboardEvent) {
            if (event.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        }

        document.addEventListener("keydown", handleEscKey);
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpen]);

    const themes = [
        {
            name: "Light",
            value: "light",
            icon: <Sun className="mr-2 h-4 w-4" />,
        },
        {
            name: "Dark",
            value: "dark",
            icon: <Moon className="mr-2 h-4 w-4" />,
        },
        {
            name: "System",
            value: "system",
            icon: <Computer className="mr-2 h-4 w-4" />,
        },
    ];

    // Don't render meaningful content until mounted to avoid hydration mismatch
    if (!mounted) {
        return <div className="h-9 w-24" aria-hidden="true" />; // Placeholder
    }

    // Get the display value for the current theme
    const currentTheme = theme || "system";
    const displayTheme = themes.find((t) => t.value === currentTheme) || themes[2];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label="Select theme"
            >
                {displayTheme.icon}
                {displayTheme.name}
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950"
                    role="listbox"
                >
                    <div className="py-1">
                        {themes.map((item) => (
                            <button
                                key={item.value}
                                className={`flex w-full items-center px-4 py-2 text-sm ${
                                    theme === item.value
                                        ? "bg-gray-100 dark:bg-gray-800"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                                onClick={() => {
                                    setTheme(item.value);
                                    setIsOpen(false);
                                }}
                                role="option"
                                aria-selected={theme === item.value}
                            >
                                {item.icon}
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
