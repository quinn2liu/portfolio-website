"use client";

import React from "react";
import { ExperienceItem } from "../components/experiences/ExperienceItem";
import { FaRegFileAlt } from "react-icons/fa";
import { experienceItems, ExperienceType } from "../data/ExperienceItemData";

const ExperienceSection = () => {
    const workItems = experienceItems.filter(item => item.experienceType === ExperienceType.WORK);
    const schoolItems = experienceItems.filter(item => item.experienceType === ExperienceType.SCHOOL);
    const volunteerItems = experienceItems.filter(item => item.experienceType === ExperienceType.VOLUNTEER);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <h2 className="font-mono text-base">{"experience"}</h2>
                <a
                    href="/experiences/Quinn Liu Full Time Resume - Fall 2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                    <FaRegFileAlt />
                </a>
            </div>

            <div className="flex flex-col gap-3">
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

                <div className="font-mono pt-4">
                  education
                </div>

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

                <div className="font-mono pt-4">
                  volunteer
                </div>
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
