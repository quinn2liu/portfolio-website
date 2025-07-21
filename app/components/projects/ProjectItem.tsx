import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type ProjectItemProps = {
    name: string;
    date: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
}


export const ProjectItem = ({name, date, description, technologies, image, link}: ProjectItemProps) => {
    return (
        <div className='flex flex-row items-center justify-between sm:p-6 p-3 dark:bg-slate-950 bg-gray-200 sm:mb-8 mb-6'>
            <div className='flex flex-col items-start '>
                <div className='sm:text-3xl text-lg'>{name}</div>
                <div className='text-gray-400 sm:text-sm text-xs sm:mb-4 mb-2'>{date}</div>
                <div className={`${inter.className} sm:text-sm text-xs sm:mb-4 mb-2`}>{description}</div>
                <div className='flex'>
                    {technologies.map((tech, index) => (
                        <div key={index} className="py-2 px-4 dark:bg-amber-600 bg-yellow-400 sm:mr-4 mr-2">
                            {tech}
                        </div>
                    ))}
                </div>
                {link && <a className='pt-4 underline' href={link} target="_blank">Learn More</a>}
            </div>
            <img src={image} alt="" className='sm:block hidden sm:h-32 h-20 ml-12 mr-6'/>
        </div>
    )
}