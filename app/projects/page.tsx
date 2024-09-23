import React from "react";
import BackHome from "../components/BackHome";
import Navigation from "../components/Navigation";

const Projects = () => {
    return (
        <div className="h-full container mx-auto max-w-screen-lg sm:px-8 px-6" suppressHydrationWarning>
            <div className="sm:pt-16 pt-10 flex flex-col justify-start items-start">
                <div className="mb-4 text-3xl sm:text-7xl"> PROJECTS</div>
                <Navigation />
                <BackHome />
                <p className="sm:text-2xl text-xl">COMING SOON...</p>
            </div>
        </div>
    );
}

export default Projects;