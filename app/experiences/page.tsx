"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import BackHome from "../components/BackHome";
import Navigation from "../components/Navigation";
import  { ListItem } from "../components/ListItem";

const inter = Inter({ subsets: ["latin"] });

const WorkSection = () => {
  return (
    <div className="sm:pt-8 w-full">
      <div className="mb-4 text-2xl sm:text-5xl">WORK</div>
      <ListItem title={"Red Door Design + Staging"} subtitle={"Freelance Application Developer"} date={"July 2024 - Present"} image = {"/red-door.png"} darkColor="dark:bg-rose-950" lightColor="bg-rose-300" 
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
      <ListItem title={"Symbotic"} subtitle={"Software Engineering Intern (Algorithms Analysis)"} date={"May 2024 - August 2024"} image = {"/symbotic.png"} darkColor={"dark:bg-emerald-800"} lightColor={"bg-emerald-300"}
      content = {
        <>
          <ul className="space-y-2">
              <li>{"•	Implemented pallet sequencing algorithm team’s observability platform for both historical data (logs) and live metrics. Integrated live metrics intake and storage from within the team’s C# .NET service. "}</li>
              <li>{"•	Configurated Prometheus time series database for metrics data storage and Grafana dashboards for visualization. Deployed and managed said services in Docker using Docker-Compose. Automated service processes as cron jobs."}</li>
              <li>{"•	Created 3 data visualization dashboards to for system health, algorithm performance, and release comparisons."}</li>
              <li>{"•	Improved existing logs processing PowerShell script speed and memory efficiency by 75% and 89%, respectively."}</li>
          </ul>
        </>} />
      <ListItem title={"Symbotic"} subtitle={"Software Engineering Intern (Test Automation)"} date={"May 2023 - August 2023"} image = {"/symbotic.png"} darkColor={"dark:bg-emerald-800"} lightColor={"bg-emerald-300"}
      content = {
        <>
          <ul className="space-y-2">
              <li>{"•	Created and analyzed Python script tests for all UI functionality in Symbotic stack as a part of UI Test Automation team. Applications built on .NET and WPF frameworks & tested using SmartBear TestComplete."}</li>
              <li>{"•	Developed PowerShell script for seamless integration with Symbotic’s Automated Test Framework. This automated UI test execution, improving test execution efficiency by ~75%."}</li>
              <li>{"•	Created 40% of Breakpack functionality testing methods in the Symbotic tech stack."}</li>
          </ul>
        </>} />
    </div>
  )
}

const EducationSection = () => {
    return (
      <div className="sm:pt-8 mb-6 flex flex-col space-y-3 justify-start w-full">
        <p className="text-2xl sm:text-5xl">EDUCATION</p>
        <div className="sm:p-6 p-3 flex flex-col justify-start border-4 dark:border-amber-100 border-gray-800">
              <div className="flex sm:flex-row flex-col items-start justify-between">
                  <div className="flex flex-row space-x-3 mb-3">
                    <img src="/penn.png" alt="" className="sm:h-8 h-5"/>
                    <p className="sm:text-3xl text-lg font-bold">University of Pennsylvania</p>
                  </div>
                  <p className="sm:text-xl text-md font-semi">2021 - 2025</p>
              </div>
              <p className="sm:text-xl text-md font-semi">BSE in Computer Science</p>
        </div>
      </div>
      
    )
}

const Experiences = () => {
  return (
    <div>
      <div className=" flex flex-col justify-between items-start sm:h-full h-screen">
        <div className="container mx-auto max-w-screen-lg sm:px-6 px-5" suppressHydrationWarning>
          <div className="mb-4 text-3xl sm:text-7xl sm:pt-16 pt-10">EXPERIENCES</div>
          <Navigation />
          <BackHome />
          <div className=" flex flex-col justify-start items-center">
              <WorkSection />
              <EducationSection />
              <a href = "/Quinn Liu Full Time Resume - Fall 2024.pdf" target="_blank" rel="noopener noreferrer" className="sm:mt-12 mt-10 sm:p-6 p-4 mb-16 flex flex-col justify-center max-w-sm items-center border-4 dark:border-amber-100 border-gray-800 hover:underline">For more details, here's my resumé</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Experiences;