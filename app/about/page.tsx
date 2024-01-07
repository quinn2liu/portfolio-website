import { Navigation, BackHome, Footer } from "../page";
import { Inter } from 'next/font/google';
import { FaStrava } from "react-icons/fa";
import './AboutPage.css';

const inter = Inter({ subsets: ['latin'] });

const ImageBlock = ({images}: {images: string[]}) => {
    return (
        <div className="flex md:flex-row sm:max-w-2xl max-w-sm sm:mb-0 mb-8">
            {images.map((image, index) => (
                <div key={index} className="tile">
                    <img src={image} alt="" />
                </div>
            ))}
        </div>
    )
}

//general info blurb with images
const AboutInfoBlock = ({images, content, imageLeft}: {images: string[], content: React.ReactElement, imageLeft: boolean}) => {
    return (
        imageLeft ? (
            <div className="sm:mb-20 mb-8 pt-6 flex flex-col sm:flex-row flex-grow items-center sm:space-x-8">
                <ImageBlock images={images} />
                <p className= {`${inter.className} flex-grow max-w-sm sm:text-xl text-lg`} >{content}</p>
            </div>
        ) : (
            <div className="sm:mb-20 mb-12 pt-6 flex flex-col sm:flex-row items-center sm:space-x-18">
                <p className= {`${inter.className} flex-grow max-w-lg sm:text-xl text-lg sm:order-1 order-2`} >{content}</p>
                <div className="sm:order-2 order-1"><ImageBlock images={images}/></div>
            </div>
        )
    )
}

//detailing my commitments and hobbies
const AboutCommunitiesHobbies = ({content}: {content: React.ReactElement}) => {
    return (
        <div>
            <div className="mb-8 border-4 p-3 border-rose-300 bg-rose-300">
                <p className="text-xl text-gray-800 font-bold">How I keep myself busy outside of work...</p>
            </div>
            <div className="mb-12 pt-6 flex flex-col sm:flex-row items-center sm:space-x-6">
                <div className="flex flex-col space-y-6 flex-grow sm:max-w-md max-w-sm sm:mb-0 mb-8">
                    <img src='/images/skyzone.jpeg' alt="" className="sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105"/>
                    <img src='/images/homiess.JPG' alt="" className="hidden sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105"/>
                    <img src='/images/board.JPEG' alt="" className="hidden sm:block transition ease-in-out hover:-translate-y-1 hover:scale-105"/>
                </div>
                <p className= {`${inter.className} flex-grow max-w-lg sm:text-lg text-md font-normal`}>{content}</p>
            </div>
        </div>
        
    )
}

//main about page layout
export default function About() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-4 mb-32" suppressHydrationWarning>
        <div className="sm:pt-16 pt-10 flex flex-col justify-start items-start">
            <div className="mb-4 text-3xl sm:text-7xl"> ABOUT ME📔</div>
            <Navigation />
            <BackHome />
        </div>
        <AboutInfoBlock images={['/images/me-kyuho.jpg', '/images/me-smile.jpeg',  'images/halloween.JPG']}
            content={ 
                <>
                    <strong>Hi! I'm Quinn, a developer (+ wannabe designer) from the Greater Boston Area.</strong> I want to solve real-world problems with digital solutions while delivering amazing user experiences.
                </>
            } imageLeft={true}/>
        <AboutInfoBlock images={['/images/PC.jpg', '/images/cleal.jpg', 'images/tip-squad.JPG']}
            content={ 
            <>
                <strong>I'm a big believer in giving back to my communities.</strong> When I find myself within a group I love, I enjoy the opportunity to make an organization larger than the sum of its parts.
            </>
                } imageLeft={false}/>
        <AboutCommunitiesHobbies
        content= {
            <p>
                <ul className="space-y-8">
                    <li>⚒️ <strong>President</strong> of <a href="https://upennthetatau.com/" target="_blank" rel="noopener noreferrer"><strong><u>Theta Tau</u></strong></a>, UPenn's co-ed preprofessional engineering fraternity.</li>

                    <li>🤸‍♂️ (Retired) <strong>Head Counselor</strong> for <a href="necysc.org"><strong><u>New Englanc Chinese Youth Summer Camp</u></strong></a> (NECYSC), a volunteer and student-run summer camp serving K-12 Chinese-American youth in the New England area.</li>

                    <li>⚽ <strong>Playing and watching soccer.</strong> Born to be a 6, forced to be a fullback. Proud and delusional Tottenham Hotspur fan (#COYS).</li>

                    <li>🏃‍♂️ <strong>Running.</strong> Went on a hero's journey from hating cardio to now training for a half marathon. <a href="https://www.strava.com/athletes/100371884" target="_blank" rel="noopener noreferrer"><strong><u>Follow me on Strava!!!<FaStrava /></u></strong></a></li>
                    
                    <li> 
                        <p className="mb-6"><strong>🎧 Listening to music.</strong> I know it's cliché but I genuinely like listening to most genres of music. I'm also a for-fun DJ. Here's my all time favorites playlist (currently ordered up to #82).</p>
                        <iframe
                            style={{borderRadius: '12px'}} 
                            src="https://open.spotify.com/embed/playlist/2ey5NmzgIlZsepWGRZf3fS?utm_source=generator" 
                            width="100%" 
                            height="152" 
                            allowFullScreen 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                        ></iframe>
                    </li>
                    <li>🎮 <strong>Video Games.</strong> Always down to play some Super Smash Bros, Mario Kart, Valorant, or anything else.</li>
                </ul>
            </p>
        }/>
        <Footer />
    </div>
    )
}
