import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

type ExperienceItemProps = {
    title: string;
    subtitle: string;
    date: string;
    image: string;
    darkColor: string;
    lightColor: string;
  };

export const ExperienceItem = ({title, subtitle, date, image, darkColor, lightColor}: ExperienceItemProps) => {
    return (
        <div className={`
            flex flex-row justify-start items-center 
            space-x-4
            `}
        >
            <div className={`flex items-center justify-center rounded-md p-2 ${lightColor} ${darkColor}`}>
                <img 
                    src={image} 
                    alt="" 
                    className={`object-contain w-8 h-8`}
                />
            </div>
            <div className="flex flex-col items-start">
                <p className="font-medium">{title}</p>
                <p className={`dark:text-amber-50 text-gray-800 text-xs`}>{subtitle} • {date}</p>
            </div>
        </div>
    )
} 
