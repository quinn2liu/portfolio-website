"use client";

import React from "react";
import { ExperienceItem } from "../components/experiences/ExperienceItem";
import { FaRegFileAlt } from "react-icons/fa";
import { experienceItems, ExperienceType } from "../data/ExperienceItemData";

interface ExperienceSectionProps {
    isSelected?: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isSelected }) => {
    const workItems = experienceItems.filter(item => item.experienceType === ExperienceType.WORK);
    const schoolItems = experienceItems.filter(item => item.experienceType === ExperienceType.SCHOOL);
    const volunteerItems = experienceItems.filter(item => item.experienceType === ExperienceType.VOLUNTEER);

    return (
        <div className="flex flex-col space-y-3 w-full h-full ">
            <div className="flex flex-row justify-between">
                <div className="font-semibold">{"< experience / >"}</div>
                <div>
                    <a href = "/Quinn Liu Full Time Resume - Fall 2024.pdf" target="_blank" rel="noopener noreferrer">
                        <FaRegFileAlt />
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col space-y-3 overflow-y-auto scrollbar-hide">
                {/* Work experience */}
                {workItems.map((item, idx) => (
                    <ExperienceItem 
                        key={idx}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        image={item.image}
                        darkStyling={item.darkStyling}
                        lightStyling={item.lightStyling}
                        experienceType={item.experienceType}
                    />
                ))}

                {/* Education experience */}
                <hr className="border-t-2 dark:border-gray-600 border-gray-400" />
                {schoolItems.map((item, idx) => (
                    <ExperienceItem 
                        key={idx}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        image={item.image}
                        darkStyling={item.darkStyling}
                        lightStyling={item.lightStyling}
                        experienceType={item.experienceType}
                    />
                ))}

                {/* Volunteer experience */}
                <hr className="border-t-2 dark:border-gray-600 border-gray-400" />
                {volunteerItems.map((item, idx) => (
                    <ExperienceItem 
                        key={idx}
                        title={item.title}
                        subtitle={item.subtitle}
                        date={item.date}
                        image={item.image}
                        darkStyling={item.darkStyling}
                        lightStyling={item.lightStyling}
                        experienceType={item.experienceType}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;