import Link from 'next/link';

export default function Projects() {
    return (
        <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
            <div className="mb-4 text-3xl sm:text-7xl"> PROJECTS </div>
            <div className="mb-2">Here are some of my projects! </div>
            <div className="mb-2 flex items-center text-black font-semibold">
                <Link href="/experiences" className='bg-emerald-400  p-1.5'>EXPERIENCES</Link> {' '}
                <Link href="/projects" className='bg-blue-400 p-1.5'>PROJECTS</Link>{' '}
                <Link href="/about" className='bg-red-400 p-1.5'>ABOUT</Link>
            </div>
        </div>
    );
}