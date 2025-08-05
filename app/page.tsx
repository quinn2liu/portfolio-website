"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import Navigation from "./components/Navigation";


const Links = () => (
  <div className="mb-3.5 flex items-center sm:space-x-10 space-x-7">
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

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-full container mx-auto max-w-screen-lg px-16 flex flex-col justify-center items-start">
      <div className="mb-3 text-3xl sm:text-7xl"> <HackerText /> </div>
      <div className="mb-2">Software Developer | Boston</div>
      <div className="mb-3.5">CS @ UPenn '25</div>
      <Links />
      <Navigation />
      <div>
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "light" ? "Light Mode 🕺" : "Dark Mode 💃"}
        </button>
      </div>
    </div>
  );
}

export default Home;