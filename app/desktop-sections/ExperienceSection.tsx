"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ExperienceItem } from "../components/experiences/ExperienceItem";
import { FaRegFileAlt } from "react-icons/fa";

interface ExperienceSectionProps {
    isSelected?: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isSelected }) => {
    return (
        <div className="flex flex-col space-y-3 w-full">
            <div className="flex flex-row justify-between">
                <div className="font-semibold">{"< experience / >"}</div>
                <div>
                    <a href = "/Quinn Liu Full Time Resume - Fall 2024.pdf" target="_blank" rel="noopener noreferrer">
                        <FaRegFileAlt />
                    </a>
                </div>
            </div>
            
            {/* work-related */}
            <ExperienceItem 
                title={"Software Engineer I"} 
                subtitle={"Symbotic"} 
                date={"July 2025 - Present"} 
                image = {"/symbotic.png"} 
                darkColor={"dark:bg-emerald-800"} 
                lightColor={"bg-emerald-300"}
            />
            <ExperienceItem 
                title={"Freelance iOS Developer"} 
                subtitle={"Red Door Design + Staging"} 
                date={"July 2024 - Present"} 
                image = {"/red-door.png"} 
                darkColor="dark:bg-rose-950" 
                lightColor="bg-red-300"
            />
            <ExperienceItem 
                title={"Software Engineering Intern"} 
                subtitle={"Symbotic"} 
                date={"May 2024 - August 2024"} 
                image = {"/symbotic.png"} 
                darkColor={"dark:bg-emerald-800"} 
                lightColor={"bg-emerald-300"}
            />

            {/* education-related */}
            <hr className="border-t-2 dark:border-gray-600 border-gray-400" />

            <ExperienceItem 
                title={"University of Pennsylvania"} 
                subtitle={"BSE Computer Science, Minor in Design"} 
                date={"Class of 2025"} 
                image = {"/penn.png"} 
                darkColor={"dark:bg-blue-950"} 
                lightColor={"bg-blue-300"}
            />
            <ExperienceItem 
                title={"President"} 
                subtitle={"Theta Tau (τγ) Professional Engineering Fraternity"} 
                date={"2024"} 
                image = {"/thetatau.png"} 
                darkColor={"dark:bg-amber-400"} 
                lightColor={"bg-amber-200"}
            />

            {/* volunteer-related */}
            <hr className="border-t-2 dark:border-gray-600 border-gray-400" />
            <ExperienceItem 
                title={"Head Counselor"} 
                subtitle={"New England Chinese Youth Summer Camp"} 
                date={"2023"} 
                image = {"/necysc.png"} 
                darkColor={"dark:bg-gray-700"} 
                lightColor={"bg-gray-500"}
            />
        </div>
    );
}

export default ExperienceSection;
