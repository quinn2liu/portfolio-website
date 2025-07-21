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
        <div className={`mb-6 sm:p-6 p-3 flex flex-col sm:space-y-3 justify-start ${lightColor} ${darkColor} overflow-visible`}>
            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-row sm:items-start items-center space-x-3 sm:mb-0 mb-3">
                  <img src={image} alt="" className="sm:h-8 h-5"/>
                  <p className="sm:text-3xl text-lg font-bold">{title}</p>
                </div>
                <div 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`sm:text-4xl text-lg transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                >
                    {isOpen ? "-" : "+"}
                </div>
            </div>
            <p className="sm:text-lg text-md font-semi">{date}</p>
            <p className="sm:text-xl text-md sm:font-semi font-bold sm:mb-0 mb-3">{subtitle}</p>
            { isOpen ? <div className={`${inter.className} flex-grow sm:text-lg text-xs font-normal`}>
                {content}
            </div> : null }
        </div>
    )
} 


