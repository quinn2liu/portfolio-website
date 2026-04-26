"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NavLink from "../nav/NavLink";

const TopNav = () => {
    return (
        <header className="md:hidden flex items-center justify-between border-b border-amber-300 dark:border-gray-700 px-5 py-3 shrink-0">
            <span className="font-mono font-semibold text-sm text-gray-900 dark:text-amber-100">
                quinn liu
            </span>
            <nav className="flex items-center gap-5">
                <NavLink href="/" label="home" />
                <NavLink href="/projects" label="projects" />
                <NavLink href="/blog" label="blog" />
                <MobileThemeToggle />
            </nav>
        </header>
    );
};

const MobileThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="font-mono text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-amber-100 transition-colors"
        >
            {theme === "dark" ? "[light]" : "[dark]"}
        </button>
    );
};

export default TopNav;
