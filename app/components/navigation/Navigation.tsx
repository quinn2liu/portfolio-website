import Link from "next/link";

export default function Navigation() {
    return (
        <div className="mb-3 flex items-center text-gray-950 sm:font-semibold">
            <Link href="/experiences" className="bg-red-400 text-gray-950 p-2 transition-all duration-500 hover:bg-amber-50 hover:text-red-400 dark:hover:bg-gray-900 dark:hover:text-red-400">EXPERIENCES</Link>
            
            <Link href="/projects" className="bg-sky-400 text-gray-950 p-2 transition-all duration-500 hover:bg-amber-50 hover:text-sky-400 dark:hover:bg-gray-900 dark:hover:text-sky-400">PROJECTS</Link>
            
            <Link href="/about" className="bg-emerald-400 text-gray-950 p-2 transition-all duration-500 hover:bg-amber-50 hover:text-emerald-400 dark:hover:bg-gray-900 dark:hover:text-emerald-400">ABOUT</Link>
        </div>
    ) 
}