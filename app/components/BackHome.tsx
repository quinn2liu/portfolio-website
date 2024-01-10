import Link from "next/link";

export default function BackHome() {
    return (
        <div className="mb-4 hover:underline">
            <Link href="/"> {"<- HOME"}</Link>
        </div>
    )
}