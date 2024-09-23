import Link from "next/link";

export default function Navigation() {
    return (
        <div className="mb-3 flex items-center text-gray-950 sm:font-semibold">
            <Link href="/experiences" className="bg-red-400 p-2 hover:underline">EXPERIENCES</Link>
            {" "}
            <Link href="/projects" className="bg-sky-400 p-2 hover:underline">PROJECTS</Link>
            {" "}
            <Link href="/about" className="bg-emerald-400 p-2 hover:underline">ABOUT</Link>
        </div>
    ) 
}