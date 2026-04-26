"use client";

import { useState, useEffect, useRef } from "react";

interface HackerTextProps {
    text: string;
    className?: string;
}

const HackerText = ({ text, className = "" }: HackerTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalText = text;
    const interval = useRef<NodeJS.Timeout | null>(null);
    const iteration = useRef(0);

    const handleMouseOver = () => {
        iteration.current = 0;
        if (interval.current !== null) {
            clearInterval(interval.current);
        }
        interval.current = setInterval(() => {
            setDisplayText((prevText) => {
                return prevText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration.current) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
            });

            if (iteration.current >= originalText.length) {
                if (interval.current !== null) {
                    clearInterval(interval.current);
                }
            }
            iteration.current += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        handleMouseOver();
        return () => {
            if (interval.current !== null) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return (
        <h1 className={className} onMouseOver={handleMouseOver} data-value={originalText}>
            {displayText}
        </h1>
    );
};

export default HackerText;