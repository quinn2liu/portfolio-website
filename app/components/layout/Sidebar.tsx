"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import NavLink from "../nav/NavLink";
import HackerText from "../HackerText";

const Sidebar = () => {
    return (
        <aside className="hidden md:flex flex-col fixed left-0 top-0 z-20 w-56 lg:w-64 h-screen bg-amber-50 dark:bg-gray-900 px-6 py-10 justify-between">
            <div className="flex flex-col gap-10">
                {/* Identity */}
                <div className="flex flex-col gap-1">
                  <div className="text-xl sm:text-2xl">
                      <HackerText text="QUINN LIU" className="font-medium" />
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-3">
                    <NavLink href="/" label="about" />
                    <NavLink href="/projects" label="projects" />
                    <NavLink href="/blog" label="blog" />
                </nav>
            </div>

            {/* Bottom: social links + theme toggle */}
            <div className="flex flex-col gap-4">
                <IconContext.Provider value={{ size: "1.1rem" }}>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                        <a
                            href="https://www.linkedin.com/in/quinnnliu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/quinn2liu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:quinn2liu@gmail.com"
                            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </IconContext.Provider>
                <ThemeToggle />
            </div>
        </aside>
    );
};

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="font-mono text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-amber-100 transition-colors text-left"
        >
            {theme === "dark" ? "💃 light mode" : "🕺 dark mode"}
        </button>
    );
};

export default Sidebar;
