"use client";

import React, { useState, useEffect, useRef } from "react";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import BlogSection from "./sections/BlogSection";
import { SectionType } from "./types/section";
import SectionWrapper from "./SectionWrapper";

const Home = () => {
    const [selectedSection, setselectedSection] = useState<SectionType>(null);
    
    function toggleSection(section: SectionType) {
        setselectedSection(selectedSection === section ? null : section);
    };

    useEffect(() => {
        console.log(`active section: ${selectedSection}`);
    }, [selectedSection]);

    return (
        <div className="h-screen">
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col flex-2">
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection('about')} sectionType="about">
                        <AboutSection />
                    </SectionWrapper>

                    {/* FOR EXPERIENCES  */}
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection(null)} sectionType="experiences">
                        <ExperienceSection />
                    </SectionWrapper>
                </div>
               
                <div className="flex flex-col flex-1">
                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection(null)} sectionType="projects">
                        <ProjectSection />
                    </SectionWrapper>

                    <SectionWrapper selectedSection={selectedSection} onToggle={() => toggleSection('blog')} sectionType="blog">
                        <BlogSection />
                    </SectionWrapper>   
                </div>
                
            </div>
        </div>
    );
}

export default Home;