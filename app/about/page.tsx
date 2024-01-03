import { Navigation, BackHome } from "../page";

export default function About() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 pt-6 flex flex-col justify-start items-start">
            <div className="mb-2 text-3xl sm:text-7xl"> ABOUT </div>
            <Navigation />
            <BackHome />
            <p className="text-white">Quinn Liu is a current student at the University of Pennsylvania majoring in Computer Science with minors in Math and Design. He is interested in full-stack development and is currently looking for full-time opportunities in software engineering.</p>
    </div>
  )
}
