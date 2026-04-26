"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
import HackerText from "../components/HackerText";

const AboutSection = () => {
    return (
        <div className="flex flex-col items-start gap-5">
            <img
                src="/images/me-pro.jpg"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
            />

            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Hi! I&apos;m a software developer that enjoys working across the stack to build
                user-driven applications. Using design and engineering, I look to solve problems
                with simple and elegant solutions. I am primarily working with Swift and Python
                at the moment, but have experience with a range of other languages and frameworks
                as well.
            </p>

            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                I recently graduated from the University of Pennsylvania and am currently located
                in the Greater Boston area working as a Software Engineer at Symbotic. Feel free
                to reach out through any of the platforms below!
            </p>
        </div>
    );
};

export default AboutSection;
