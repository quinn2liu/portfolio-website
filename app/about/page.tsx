import { Navigation, BackHome } from "../page";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

//import images and then display with an animation
const ImageAnimation = () => {
}

//general info blurb with images
const AboutInfoBlock = ({image, content, imageLeft}: {image: String, content: React.ReactElement, imageLeft: boolean}) => {
    return (
        imageLeft ? (
            <div className="mb-24 pt-6 flex flex-col sm:flex-row items-center sm:space-x-6">
                <p className="mb-12 flex-grow sm:max-w-xl max-w-sm">{image}</p>
                <p className= {`${inter.className} flex-grow max-w-sm sm:text-2xl text-lg`} >{content}</p>
            </div>
        ) : (
            <div className="mb-24 pt-6 flex flex-col sm:flex-row items-center sm:space-x-6">
                <p className= {`${inter.className} flex-grow max-w-sm sm:text-2xl text-lg mb-12 sm:order-1 order-2`} >{content}</p>
                <p className="mb-12 flex-grow sm:max-w-xl max-w-sm sm:order-2 order-1">{image}</p>
            </div>
        )
    )
}

//detailing my commitments and hobbies
const AboutCommunitiesHobbies = ({image, content}: {image: String, content: React.ReactElement}) => {
    return (
        <div className="mb-24 pt-6 flex flex-col sm:flex-row sm:items-start items-center sm:space-x-6">
            <p className="mb-12 flex-grow sm:max-w-xl max-w-sm">{image}</p>
            <p className= {`${inter.className} flex-grow max-w-sm sm:text-xl text-lg`} >{content}</p>
        </div>
    )
}

//main about page layout
export default function About() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6">
        <div className="pt-12 flex flex-col justify-start items-start">
            <div className="mb-4 text-3xl sm:text-7xl"> ABOUT ME </div>
            <Navigation />
            <BackHome />
        </div>
            <AboutInfoBlock image={'IMAGE IMAGE IMAGE (consider animating this section with a card-hand spread animation?'} 
                content={ 
                    <>
                        <strong>Hi! I'm Quinn, a developer (and wannabe designer) from the Greater Boston Area.</strong> I want to solve real-world problems with digital solutions while deliver amazing user experiences.
                    </>
                } imageLeft={true}/>
            <AboutInfoBlock image={'IMAGE IMAGE IMAGE (consider animating this section with a card-hand spread animation?'} 
                content={ 
                <>
                    <strong>I'm a big believer in giving back to my communities.</strong> When I find myself within a group I love, I enjoy the opportunity to make an organization larger than the sum of its parts.
                </>
                    } imageLeft={false}/>
            <AboutCommunitiesHobbies image={'IMAGE IMAGE IMAGE'} 
            content= {
                <>
                    {/* <strong>When I'm not coding, you can find me...</strong>
                    <ul>
                        <li>Playing the piano (I've been playing for 13 years!)</li>
                        <li>Playing video games (I'm a big fan of the <a href="https://www.halowaypoint.com/en-us" target="_blank" rel="noopener noreferrer">Halo</a> and <a href="https://www.nintendo.com/games/detail/super-smash-bros-ultimate-switch/" target="_blank" rel="noopener noreferrer">Super Smash Bros.</a> franchises)</li>
                        <li>Watching movies (I'm a big fan of the <a href="https://www.imdb.com/title/tt4154796/" target="_blank" rel="noopener noreferrer">Marvel Cinematic Universe</a> and <a href="https://www.imdb.com/title/tt0120737/" target="_blank" rel="noopener noreferrer">The Lord of the Rings</a> trilogy)</li>
                        <li>Listening to music (I'm a big fan of <a href="https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V?si=7f1d7c6c2b4b4a8d" target="_blank" rel="noopener noreferrer">Ed Sheeran</a> and <a href="https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V?si=7f1d7c6c2b4b4a8d" target="_blank" rel="noopener noreferrer">Coldplay</a>)</li>
                        <li>Playing tennis (I'm a big fan of <a href="https://www.atptour.com/en/players/roger-federer/f324/overview" target="_blank" rel="noopener noreferrer">Roger Federer</a>)</li>
                    </ul> */}
                </>
            }/>
        </div>
  )
}
