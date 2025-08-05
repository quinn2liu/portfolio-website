import { useState } from "react";
import Footer from "../Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import BackHome from "../BackHome";
import Navigation from "../navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

type ExperienceItemProps = {
    title: string;
    subtitle: string;
    date: string;
    content: React.ReactElement; // stuff that goes in the list item.
    image: string;
    darkColor: string;
    lightColor: string;
  };

export const ExperienceItem = ({title, subtitle, date, content, image, darkColor, lightColor}: ExperienceItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`flex flex-col sm:space-y-3 justify-start ${lightColor} ${darkColor} overflow-visible bg-opacity-50`}
            onClick={(e) => {
                setIsOpen(!isOpen)
            }} 
        >
            <div className="flex flex-row justify-start items-center space-x-4">
                <img src={image} alt="" className="sm:h-8 h-5"/>
                <div className="flex flex-col items-start">
                  <p className="font-semibold">{subtitle}</p>
                  <p className="dark:text-amber-50 text-gray-400 text-sm font-thin">{title} • {date}</p>
                </div>
            </div>
            
            { isOpen ? <div className={`${inter.className} flex-grow sm:text-lg text-xs font-normal`}>
                {content}
            </div> : null }
        </div>
    )
} 


