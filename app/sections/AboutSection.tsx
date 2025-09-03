"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SectionProps } from "../types/section";

interface AboutSectionProps {
  isSelected?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isSelected }) => {
    
    return (
        <>
            {isSelected ? (
                <SelectedContent />
            ) : (
                <MinimizedContent />
            )}
        </>
    );
}

export default AboutSection;

const AboutImage: React.FC<{ imagePath: string }> = ({ imagePath }) => {
    return (
        <img src={imagePath} alt="profile" className="w-24 h-24 rounded-full object-cover" />
    )
}

const SelectedContent = () => {
    return (
        <div className="flex flex-col items-start justify-center h-full w-full space-y-4 p-12">
            <AboutImage imagePath="/images/me-pro.jpg" />

            <div className="text-xl sm:text-2xl"> <HackerText /> </div>

            <div>
                I'm a developer that enjoys working across the stack to build user-driven applications. Using design and engineering, I look to solve problems with simple and elegant solutions. I am primarily workting with Swift and Python at the moment, but have experience working with a range of other languages and frameworks.
            </div>

            <div>
                I recently graduated from the University of Pennsylvania and am currently located in the Greater Boston area working as a Software Engineer at Symbotic. Feel free to reach out through any of the platforms below! 
            </div>

            <Links />

            <ThemeChangeButton />
        </div>
    )
}

const MinimizedContent = () => {

    return (
        <div className="flex flex-col items-start justify-start space-y-3">
            <div className="text-2xl sm:text-6xl"> <HackerText /> </div>

            <div>&lt; software engineer | boston / &gt;</div>
        
            <ThemeChangeButton />
        </div>
    )
}

const ThemeChangeButton = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button 
            onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the parent onClick
                setTheme(theme == "dark" ? "light" : "dark");
            }}
        >
            {theme == "light" ? "Light Mode 🕺" : "Dark Mode 💃"}
        </button>
    )
}


const HackerText = () => {
    const [text, setText] = useState("QUINN LIU");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalText = "QUINN LIU";
    let interval = useRef<NodeJS.Timeout | null>(null);
    let iteration = useRef(0);

    const handleMouseOver = () => {
        iteration.current = 0;
        if (interval.current !== null) {
        clearInterval(interval.current);
        }
        interval.current = setInterval(() => {
        setText((prevText) => {
            return prevText
            .split("")
            .map((letter, index) => {
                if(index < iteration.current) {
                return originalText[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        });

        if(iteration.current >= originalText.length){ 
            if (interval.current !== null) {
            clearInterval(interval.current);
            }      
        }
        iteration.current += 1 / 3;
        }, 30);
    }

    useEffect(() => {
        handleMouseOver();
        return () => {
        if (interval.current !== null) {
            clearInterval(interval.current);
        }    
        }
    }, []);

    return (
        <h1 onMouseOver={handleMouseOver} data-value={originalText}>
        {text}
        </h1>
    );
}

const Links = () => (
    <div className="flex items-center sm:space-x-7 space-x-7">
        <IconContext.Provider value={{ size: "1.5rem" }}>
        <a href="https://www.linkedin.com/in/quinnnliu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/quinn2liu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="mailto:quinn2liu@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
        </a>
        </IconContext.Provider>
    </div>
);