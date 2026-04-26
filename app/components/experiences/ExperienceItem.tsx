import { ExperienceType } from "../../data/ExperienceItemData";

type ExperienceItemProps = {
    title: string;
    subtitle: string;
    date: string;
    image: string;
    darkStyling: string;
    lightStyling: string;
    experienceType: ExperienceType;
};

export const ExperienceItem = ({title, subtitle, date, image, darkStyling, lightStyling, experienceType}: ExperienceItemProps) => {
    return (
        <div className={`
            flex flex-row justify-start items-center 
            space-x-4
            `}
        >
            <div className={`flex items-center justify-center rounded-md p-2 
                ${lightStyling} ${darkStyling}
                
            `}>
                <img 
                    src={image} 
                    alt="" 
                    className={`object-contain w-7 h-7`}
                />
            </div>
            <div className="flex flex-col items-start">
                <p className="font-medium">{title}</p>
                <p className={`dark:text-amber-50 text-gray-800 text-xs`}>{subtitle} • {date}</p>
            </div>
        </div>
    )
} 
