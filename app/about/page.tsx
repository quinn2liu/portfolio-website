import { Navigation, BackHome } from "../page";
import { Inter } from 'next/font/google';

const AboutInfoBlock = ({image, content, imageLeft}: {image: String, content: String, imageLeft: boolean}) => {
    return (
        imageLeft ? (
            <div className="pt-6 flex flex-row items-center space-x-4 ">
                <p className="flex-grow max-w-lg-qtr">{image}</p>
                <p className="flex-grow max-w-lg-qtr">{content}</p>
            </div>
        ) : (
            <div className="pt-6 flex flex-row items-center space-x-4 ">
                <p className="flex-grow max-w-lg-half">{content}</p>
                <p className="flex-grow">{image}</p>
            </div>
        )
    )
}

export default function About() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6">
        <div className="pt-6 flex flex-col justify-start items-start">
            <div className="mb-2 text-3xl sm:text-7xl"> ABOUT ME </div>
            <Navigation />
            <BackHome />
        </div>
        <AboutInfoBlock image={'IMAGE IMAGE IMAGE (consider animating this section with a hand spread animation?'} content={'this is a test'} imageLeft={true}/>
    </div>
    
  )
}
