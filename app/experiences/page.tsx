"use client";

import { Navigation, BackHome, Footer } from "../page";
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';

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
        <div onClick={() => setIsOpen(!isOpen)} className={`mb-6 sm:p-6 p-4 flex flex-col space-y-3 justify-start ${lightColor} ${darkColor} w-full transition-all duration-500 ${isOpen ? ' h-72' : 'h-32'} overflow-visible`}>
            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-row space-x-4">
                  <img src={image} alt="" className="h-8"/>
                  <p className="sm:text-3xl text-xl font-bold">{title}</p>
                </div>
                <p className="sm:text-xl text-md font-semi">{date}</p>
            </div>
            <p className="sm:text-xl text-md font-semi">{subtitle}</p>
            <div className={`${inter.className} flex-grow text-lg font-normal transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-40'}`}>
                {content}
            </div>
        </div>
    )
} 

const WorkSection = () => {
  return (
    <div className="pt-8">
      <div className="mb-4 text-3xl sm:text-5xl">WORK</div>
      <ListItem title={"Red Door Design + Staging"} subtitle={"Freelance Application Developer"} date={"January 2024 - Present"} image = {'/red-door.png'} darkColor="dark:bg-teal-600" lightColor='bg-indigo-300' 
        content = {
          <>
            <ul className="space-y-2">
              <li>{'•	Developing an end-to-end mobile application using React Native (Expo.js) and Firebase to create a user-friendly inventory management application for 50+ active users.'}</li>
              <li>{'•	Implementing Firebase operations for efficient CRUD functionalities in real time database'}</li>
              <li>{'•	Facilitating regular developer-client meetings to ensure a comprehensive custom solution.'}</li>
              <li><Link href="/projects/red-door"><strong>{'View Project Case Study >>'}</strong></Link></li>
            </ul>
          </>
        }
      />
      <ListItem title={"Symbotic"} subtitle={"Software Engineering Intern"} date={"May 2023 - August 2023"} image = {"/symbotic.png"} darkColor={"dark:bg-rose-900"} lightColor={"bg-rose-300"}
      content = {
        <>
          <ul className="space-y-2">
              <li>•	Created and analyzed Python script tests for all UI functionality in Symbotic stack as a part of UI Test Automation team. Applications built on .NET and WPF frameworks & tested using SmartBear TestComplete.</li>
              <li>{'•	Developed a PowerShell script for seamless integration with Symbotic’s Automated Test Framework, automating UI test execution and logging, improving test execution efficiency by ~75%.'}</li>
              <li>{'•	Created 40% of Breakpack functionality testing methods in the Symbotic tech stack.'}</li>
          </ul>
        </>} />
    </div>
  )
}

const EducationSection = () => {
    return (
      <div className="pt-8 mb-6 flex flex-col space-y-3 justify-start w-full">
        <p className="text-3xl sm:text-5xl">EDUCATION</p>
        <div className="sm:p-6 p-4 flex flex-col space-y-3 justify-start border-4 border-amber-100">
              <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row space-x-4">
                    <img src="/penn.png" alt="" className="h-8"/>
                    <p className="sm:text-3xl text-xl font-bold">University of Pennsylvania</p>
                  </div>
                  <p className="sm:text-xl text-md font-semi">2021 - 2025</p>
              </div>
              <p className="sm:text-xl text-md font-semi">BSE in Computer Science</p>
        </div>
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
            <EducationSection />
        </div>
      </div>
      <div className="mt-4 mb-8 flex justify-center items-center">
        <a href = "/Quinn Liu Resume.pdf">For more details, here's my resumé </a>
      </div>
      <Footer />
    </div>
    )
}

