"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import BackHome from "../components/BackHome";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

type ListItemProps = {
  title: string;
  subtitle: string;
  date: string;
  content: React.ReactElement;
  image: string;
  darkColor: string;
  lightColor: string;
};

const ListItem = ({title, subtitle, date, content, image, darkColor, lightColor}: ListItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`mb-6 sm:p-6 p-3 flex flex-col sm:space-y-3 justify-start ${lightColor} ${darkColor} w-full transition-all duration-500 ${isOpen ? "h-72" : "sm:h-32 h-24"} overflow-visible sm:pointer-events-auto pointer-events-none`}>
            <div className="flex sm:flex-row flex-col items-start justify-between">
                <div className="flex flex-row sm:items-start items-center space-x-3 sm:mb-0 mb-3">
                  <img src={image} alt="" className="sm:h-8 h-5"/>
                  <p className="sm:text-3xl text-lg font-bold">{title}</p>
                </div>
                <p className="sm:text-xl text-md font-semi">{date}</p>
            </div>
            <p className="sm:text-xl text-md sm:font-semi font-bold sm:mb-0 mb-3">{subtitle}</p>
            <div className={`${inter.className} flex-grow sm:text-lg text-xs font-normal transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"}`}>
                {content}
            </div>
        </div>
    )
} 

const WorkSection = () => {
  return (
    <div className="sm:pt-8">
      <div className="mb-4 text-2xl sm:text-5xl">WORK</div>
      <ListItem title={"Red Door Design + Staging"} subtitle={"Freelance Application Developer"} date={"January 2024 - Present"} image = {"/red-door.png"} darkColor="dark:bg-teal-600" lightColor="bg-indigo-300" 
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
      <ListItem title={"Symbotic"} subtitle={"Software Engineering Intern"} date={"May 2023 - August 2023"} image = {"/symbotic.png"} darkColor={"dark:bg-rose-900"} lightColor={"bg-rose-300"}
      content = {
        <>
          <ul className="space-y-2">
              <li>•	Created and analyzed Python script tests for all UI functionality in Symbotic stack as a part of UI Test Automation team. Applications built on .NET and WPF frameworks & tested using SmartBear TestComplete.</li>
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
              <a href = "/Quinn Liu Resume.pdf" target="_blank" rel="noopener noreferrer" className="sm:mt-12 mt-10 sm:p-6 p-4 mb-16 flex flex-col justify-center max-w-sm items-center border-4 dark:border-amber-100 border-gray-800 hover:underline">For more details, here's my resumé</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Experiences;