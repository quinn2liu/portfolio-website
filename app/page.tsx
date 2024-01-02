'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
      <div className="mb-4 text-3xl sm:text-7xl"> QUINN LIU </div>
      <div className="mb-2">Software Developer + Designer | Boston + Philadelhpia</div>
      <div className="mb-3">CS @ UPenn '25</div>
      <div className="mb-3 flex items-center space-x-10">
        <IconContext.Provider value={{ size: "1.75rem" }}>
          <a href="https://www.instagram.com/quinnnliu/" target="_blank" rel="noopener noreferrer"> 
            <FaInstagram /> 
            {''}
          </a> 
          <a href="https://www.linkedin.com/in/quinnnliu/" target="_blank" rel="noopener noreferrer"> 
            <FaLinkedin /> 
            {''}
          </a> 
          <a href="https://github.com/quinn2liu" target="_blank" rel="noopener noreferrer"> 
            <FaGithub /> 
            {''}
          </a>
        </IconContext.Provider>
      </div>
      <div className="mb-2 flex items-center text-black font-semibold">
        <Link href="/experiences" className='bg-emerald-400  p-1.5'>EXPERIENCES</Link> {' '}
        <Link href="/projects" className='bg-blue-400 p-1.5'>PROJECTS</Link>{' '}
        <Link href="/about"className='bg-red-400 p-1.5'>ABOUT</Link>
      </div>
    </div>
  );
}
