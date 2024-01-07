"use client";

import { Navigation, BackHome, Footer } from "../page";
import { Inter } from 'next/font/google';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] });

type ExListItemProps = {
  title: string;
  subtitle: string;
  date: string;
  content: React.ReactElement;
  image: string;
  darkColor: string;
  lightColor: string;
};

const ListItem = ({title, subtitle, date, content, image, darkColor, lightColor}: ExListItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className={`mb-6 sm:p-6 p-4 flex flex-col space-y-3 justify-start dark:${darkColor} ${lightColor} w-full transition-all duration-500 ${isOpen ? 'h-80' : 'h-32'} overflow-visible`}>
            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-row space-x-4">
                  <img src={image} alt="" className="h-8"/>
                  <p className="sm:text-3xl text-xl font-bold">{title}</p>
                </div>
                <p className="sm:text-xl text-md font-semi">{date}</p>
            </div>
            <p className="sm:text-xl text-md font-semi">{subtitle}</p>
            <div className={`${inter.className} flex-grow text-lg font-normal transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-28'}`}>
                {content}
            </div>
        </div>
    )
} 

const WorkSection = () => {
  return (
    <div>
      <div className="mb-4 text-3xl sm:text-5xl">WORK</div>
      <ListItem title={"Symbotic"} subtitle={"Software Engineering Intern"} date={"May 2023 - August 2023"} image = {"/symbotic.png"} darkColor={"bg-rose-900"} lightColor={"bg-rose-300"}
      content = {
        <>
          <ul className="space-y-2">
              <li>•	Created and analyzed Python script tests for all UI functionality in Symbotic stack as a part of UI Test Automation team. Applications built on .NET and WPF frameworks and tested using SmartBear TestComplete software.</li>
              <li>{'•	Developed a PowerShell script for seamless integration with Symbotic’s Automated Test Framework, automating UI test execution and logging, improving test execution efficiency by ~75%.'}</li>
              <li>{'•	Created 40% of Breakpack functionality testing methods in the Symbotic tech stack.'}</li>
          </ul>
        </>} />
        <ListItem title={"Red Door Inventory + Staging"} subtitle={"Freelance Application Developer"} date={"January 2024 - Present"} image = {"/red-door.png"} darkColor={"bg-indigo-500"} lightColor={"bg-indigo-600"} 
        content = {
        <>
        </>
      }
      />
    </div>
  )
}

export default function Experiences() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="h-full container mx-auto max-w-screen-lg px-6" suppressHydrationWarning>
        <div className="sm:pt-16 pt-10 flex flex-col justify-start items-start">
            <div className="mb-4 text-3xl sm:text-7xl">EXPERIENCES👔</div>
            <Navigation />
            <BackHome />
            <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
    )
}

