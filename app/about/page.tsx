import { Inter, Ultra } from "next/font/google";
import "./AboutPage.css";
import React from "react";
import BackHome from "../components/BackHome";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

type InvolementTypes = {
    organization: string;
    title: string;
    image: string;
    link: string;
};

const AboutHobbies = ({content}: {content: React.ReactElement}) => {
    return (
        <div>
            <div className="sm:mb-8 mb-6 p-6 dark:bg-rose-900 bg-rose-300">
                <p className="sm:text-2xl text-xl font-semi">MY HOBBIES</p>
            </div>
            <div className="mb-12 pt-6 flex flex-col sm:flex-row items-center sm:space-x-8">
                <div className="flex flex-col space-y-6 flex-grow sm:max-w-md max-w-sm sm:mb-0 mb-8">
                    <img src="/images/skyzone.jpeg" alt="" className="sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105"/>
                    <img src="/images/homiess.JPG" alt="" className="hidden sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105"/>
                </div>
                <div className= {`${inter.className} flex-grow max-w-2xl sm:text-xl text-lg font-normal`}>{content}</div>
            </div>
        </div>
        
    )
}

const AboutInvolvements = ({content}: {content: React.ReactElement}) => {
    return (
        <div className="sm:my-8 my-6 ">
            <div className="p-6 dark:bg-emerald-900 bg-emerald-300">
                <p className="sm:text-2xl text-xl font-semi">MY INVOLVEMENTS</p>
            </div>
            <div className="my-6">
                {content}
            </div>
        </div>
    )
}

const Involvement = ({organization, title, image, link}: InvolementTypes) => {
    return (
        <a href={link} className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 sm:w-44 sm:h-44 max-h-32 text-xs" target="_blank">
            <img src={image} alt="" className="sm:max-h-32 max-h-24"/>
            <p className="pt-2">{organization}</p>
            <p><i>{title}</i></p>
        </a>
        
    )
}

//main about page layout
const About = () => {
  return (
    <div className="h-full container mx-auto max-w-screen-lg sm:px-8 px-6">
        <div className="sm:pt-16 pt-10 flex flex-col justify-start items-start">
            <div className="mb-4 text-3xl sm:text-7xl"> ABOUT ME</div>
            <Navigation />
            <BackHome />
        </div>

        <div className="flex flex-row items-center justify-between mb-8">
            <div className="m-8 sm:text-lg">
                <p className="pb-4">
                    <strong>Hi! I'm Quinn, a developer from the Greater Boston Area.</strong> I want to solve real-world problems with digital solutions and am interested in cloud computing, system design, and web development.
                </p>
                <p>
                    I'm currently a Senior at the University of Pennsylvania studying Computer Science with minors in Math and Design.
                </p>
            </div>
            <img src="/images/me-pro.jpg" alt="" className="max-w-52 transition ease-in-out hover:scale-105"/>

        </div>

        <AboutInvolvements
            content={
                <div className="flex flex-row items-center justify-between sm:px-12 px-4 py-8">
                    <Involvement organization={"Theta Tau"} title={"Regent"} image={"/images/thetatau.png"} link={"https://www.upennthetatau.com"}/>
                    <Involvement organization={"ESAC"} title={"Club Liaison"} image={"/images/esac.png"} link={"https://www.pennesac.com"}/>
                    <Involvement organization={"Hexagon Senior Society"} title={"Member"} image={"/images/hex.png"} link={"https://en.wikipedia.org/wiki/University_of_Pennsylvania_senior_societies#Hexagon_Senior_Society/"}/>
                </div>
                
            }
        />

        <AboutHobbies
        content= {
            <div>
                <ul className="space-y-8">
                    <li>⚽ <strong>Playing and watching soccer.</strong> #COYS.</li>

                    <li>
                        🏃‍♂️ <strong>Running.</strong> <a href="https://www.strava.com/athletes/100371884" target="_blank" rel="noopener noreferrer"> <strong> <u>Follow my Strava!!!</u></strong></a>
                    </li>
                    
                    <li> 
                        <p className="mb-6"><strong>🎧 Listening to music.</strong> When I have time, I'm a for-fun DJ. Here's my all time favorites playlist:</p>
                        <iframe
                            style={{borderRadius: "12px"}} 
                            src="https://open.spotify.com/embed/playlist/2ey5NmzgIlZsepWGRZf3fS?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            allowFullScreen 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                        ></iframe>
                    </li>
                    <li>🎮 <strong>Video Games.</strong> I've been really enjoying Boomerang Fu recently.</li>

                    <li>🛹 <strong>Skateboarding.</strong> All I can do so far is ollie :)</li>
                </ul>
            </div>
        }/>
        <Footer />
    </div>
    )
}

export default About;