'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Link from 'next/link';

export const Navigation = () => (
  <div className="mb-3 flex items-center text-gray-950 sm:font-semibold">
    <Link href="/experiences" className="bg-emerald-400 p-2">EXPERIENCES</Link>
    {' '}
    <Link href="/projects" className="bg-blue-400 p-2">PROJECTS</Link>
    {' '}
    <Link href="/about" className="bg-red-400 p-2">ABOUT</Link>
  </div>
);

const Links = () => (
  <div className="mb-3.5 flex items-center space-x-10">
        <IconContext.Provider value={{ size: '1.75rem' }}>
          <a href="https://www.linkedin.com/in/quinnnliu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/quinn2liu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/quinnnliu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://open.spotify.com/user/g7x1ihgj3kf253a6lujcu1r30?si=e76e03b2532d4966" target="_blank" rel="noopener noreferrer">
            <FaSpotify />
          </a>
          <a href="mailto:quinn2liu@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
        </IconContext.Provider>
      </div>
);

export const BackHome = () => (
  <div className="mb-2">
    <Link href="/"> {'<- HOME'}</Link>
  </div>
);

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
