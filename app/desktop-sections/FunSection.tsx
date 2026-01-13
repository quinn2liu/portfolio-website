"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SectionProps } from "../types/section";

interface FunSectionProps {
  isSelected?: boolean;
}

const FunSection: React.FC<FunSectionProps> = ({ isSelected }) => {
    const { theme, setTheme } = useTheme();
  
    return (
        <>
        {isSelected ?
            <SelectedContent /> :
            <div className="h-full flex items-center font-semibold">{"< fun / >"}</div>
        }
        </>
        
    );
}

export default FunSection;

const SelectedContent = () => {
    return (
        <div className="flex flex-row w-full">
            <InterestList />

            <div> SOMETHING FUN HERE </div>
        </div>
    )
}

const InterestList = () => {
    return (
        <div>
            <ul className="space-y-6">
                <li>⚽ <strong>Soccer.</strong> #COYS.</li>

                <li>
                    🏃‍♂️ <strong>Running.</strong> <a href="https://www.strava.com/athletes/100371884" target="_blank" rel="noopener noreferrer"> <strong> <u>You can find some mid runs here on my Strava.</u></strong></a>
                </li>
                
                <li> 
                    <p className="mb-6"><strong>🎧 Music.</strong> When I have time, I'm a for-fun DJ. Here's my all time favorites playlist:</p>

                    <SpotifyPlaylist />
                </li>

                <li>🛹 <strong>Skateboarding.</strong> All I can do so far is ollie :)</li>
            </ul>

            <div className="flex flex-row space-x-6">
                <img src="/images/skyzone.jpeg" alt="" className="
                    h-[20vh] object-contain
                    sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105
                "/>
                <img src="/images/homiess.JPG" alt="" className="
                h-[20vh] object-contain
                hidden sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105
                "/>
            </div>
        </div>
    )
}

const SpotifyPlaylist = () => {
    return (
        <iframe
            style={{borderRadius: "12px"}} 
            src="https://open.spotify.com/embed/playlist/2ey5NmzgIlZsepWGRZf3fS?utm_source=generator" 
            width="100%" 
            height="152" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
        />
    )
}