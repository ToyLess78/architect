"use client";

import { useTheme } from "next-themes";
import { Computer, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const themes = [
        {
            name: "Light",
            value: "light",
            icon: <Sun className="mr-2 h-4 w-4"/>,
        },
        {
            name: "Dark",
            value: "dark",
            icon: <Moon className="mr-2 h-4 w-4"/>,
        },
        {
            name: "System",
            value: "system",
            icon: <Computer className="mr-2 h-4 w-4"/>,
        },
    ];

    // Don't render anything until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    const currentTheme = themes.find((t) => t.value === theme) || themes[2];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentTheme?.icon}
                {currentTheme?.name}
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-36 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950">
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
