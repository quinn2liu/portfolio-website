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
    const { theme, setTheme } = useTheme();
    
    return (
        <div className="space-y-3">
            <div className="text-3xl sm:text-7xl"> <HackerText /> </div>

            <div>&lt; software engineer | boston / &gt;</div>
            
            <Links />
            
            <div>
                <button 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent onClick
                        setTheme(theme == "dark" ? "light" : "dark");
                    }}
                >
                    {theme == "light" ? "Light Mode 🕺" : "Dark Mode 💃"}
                </button>
            </div>
        </div>  
    );
}

export default AboutSection;

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
    <div className="flex items-center sm:space-x-10 space-x-7">
        <IconContext.Provider value={{ size: "1.75rem" }}>
        <a href="https://www.linkedin.com/in/quinnnliu/" target="_blank" rel="noopener noreferrer" className="hover:underline">
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