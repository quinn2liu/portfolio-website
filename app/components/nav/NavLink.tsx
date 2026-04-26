"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
    const pathname = usePathname();

    // "/" is active only on exact match; other routes use startsWith
    const isActive =
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`font-mono text-sm transition-colors duration-150 ${
                isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-amber-100"
            }`}
        >
            {isActive ? `< ${label} />` : label}
        </Link>
    );
};

export default NavLink;
