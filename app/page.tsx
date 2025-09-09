"use client";

import React, { useState, useEffect, useRef } from "react";
import AboutSection from "./desktop-sections/AboutSection";
import ExperienceSection from "./desktop-sections/ExperienceSection";
import ProjectSection from "./desktop-sections/ProjectSection";
import FunSection from "./desktop-sections/FunSection";
import { SectionType } from "./types/section";
import SectionWrapper from "./SectionWrapper";
import { useTheme } from "next-themes";

const Home = () => {
    const [selectedSection, setselectedSection] = useState<SectionType>(null);
    
    function toggleSection(section: SectionType) {
        setselectedSection(selectedSection === section ? null : section);
    };

    useEffect(() => {
        console.log(`active section: ${selectedSection}`);
    }, [selectedSection]);

    return (
        <div className="h-screen relative">
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col">
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection('about')} sectionType="about">
                        <AboutSection />
                    </SectionWrapper>

                    {/* FOR EXPERIENCES  */}
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection(null)} sectionType="experience">
                        <ExperienceSection />
                    </SectionWrapper>
                </div>
               
                <div className="flex flex-col">
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection(null)} sectionType="projects">
                        <ProjectSection />
                    </SectionWrapper>

                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection('fun')} sectionType="fun">
                        <FunSection />
                    </SectionWrapper>   
                </div>
                
            </div>

            <ThemeChangeButton />
        </div>
    );
}

const ThemeChangeButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <button
            className="absolute bottom-4 right-4 z-50 px-4 py-2 rounded-2xl bg-amber-200 dark:bg-gray-800"
            onClick={(e) => {
                e.stopPropagation();
                setTheme(theme == "dark" ? "light" : "dark");
            }}
        >
            {theme == "light" ? "🕺" : "💃"}
        </button>
    );
};

export default Home;