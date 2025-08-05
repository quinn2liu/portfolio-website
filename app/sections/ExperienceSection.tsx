"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ExperienceItem } from "../components/experiences/ExperienceItem";

interface ExperienceSectionProps {
    isSelected?: boolean;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isSelected }) => {
  
    return (
        <div>
            <ExperienceItem 
                title={"Red Door Design + Staging"} 
                subtitle={"Freelance Application Developer"} 
                date={"July 2024 - Present"} image = {"/red-door.png"} 
                darkColor="dark:bg-rose-950" 
                lightColor="bg-rose-300" 
                content = {
                    <>
                        <ul className="space-y-2">
                            <li>{"•	Developing an end-to-end mobile application using React Native (Expo.js) and Firebase to create a user-friendly inventory management application for 50+ active users."}</li>
                            <li>{"•	Implementing Firebase operations for efficient CRUD functionalities in real time database"}</li>
                            <li>{"•	Facilitating regular developer-client meetings to ensure a comprehensive custom solution."}</li>
                            <li><Link href="/projects/red-door"><strong>{"Project Case Study >>"}</strong></Link></li>
                        </ul>
                    </>
                }
            />
            <ExperienceItem 
                title={"Symbotic"} 
                subtitle={"Software Engineering Intern"} 
                date={"May 2024 - August 2024"} 
                image = {"/symbotic.png"} 
                darkColor={"dark:bg-emerald-800"} 
                lightColor={"bg-emerald-300"}
                content = {
                    <>
                        <ul className="space-y-2">
                            <li>{"•	Implemented pallet sequencing algorithm team’s observability platform for both historical data (logs) and live metrics. Integrated live metrics intake and storage from within the team’s C# .NET service. "}</li>
                            <li>{"•	Configurated Prometheus time series database for metrics data storage and Grafana dashboards for visualization. Deployed and managed said services in Docker using Docker-Compose. Automated service processes as cron jobs."}</li>
                            <li>{"•	Created 3 data visualization dashboards to for system health, algorithm performance, and release comparisons."}</li>
                            <li>{"•	Improved existing logs processing PowerShell script speed and memory efficiency by 75% and 89%, respectively."}</li>
                            <li>{"•	Created and analyzed Python script tests for all UI functionality in Symbotic stack as a part of UI Test Automation team. Applications built on .NET and WPF frameworks & tested using SmartBear TestComplete."}</li>
                            <li>{"•	Developed PowerShell script for seamless integration with Symbotic’s Automated Test Framework. This automated UI test execution, improving test execution efficiency by ~75%."}</li>
                            <li>{"•	Created 40% of Breakpack functionality testing methods in the Symbotic tech stack."}</li>
                        </ul>
                    </>
                } 
            />
        </div>
    );
}

export default ExperienceSection;
