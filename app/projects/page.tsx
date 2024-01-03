import React from 'react';
import { Navigation, BackHome } from "../page";

export default function Projects() {
    return (
        <div className="h-full container mx-auto max-w-screen-lg px-6 pt-6 flex flex-col justify-start items-start">
            <div className="mb-2 text-3xl sm:text-7xl"> PROJECTS </div>
            <Navigation />
            <BackHome />
        </div>
    );
}