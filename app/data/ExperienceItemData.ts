export enum ExperienceType {
    WORK = "work",
    SCHOOL = "school", 
    VOLUNTEER = "volunteer"
}

export type ExperienceItem = {
    title: string;
    subtitle: string;
    date: string;
    image: string;
    darkStyling: string;
    lightStyling: string;
    experienceType: ExperienceType;
};

export const experienceItems: ExperienceItem[] = [
    // Work experience
    {
        title: "Software Engineer I",
        subtitle: "Symbotic",
        date: "July 2025 - Present",
        image: "/symbotic.png",
        darkStyling: "dark:bg-emerald-600",
        lightStyling: "bg-emerald-200",
        experienceType: ExperienceType.WORK
    },
    {
        title: "Freelance iOS Developer",
        subtitle: "Red Door Design + Staging",
        date: "July 2024 - Present",
        image: "/red-door.png",
        darkStyling: "dark:bg-rose-950",
        lightStyling: "bg-red-300",
        experienceType: ExperienceType.WORK
    },
    {
        title: "Software Engineering Intern",
        subtitle: "Symbotic",
        date: "May 2024 - August 2024",
        image: "/symbotic.png",
        darkStyling: "dark:bg-emerald-600",
        lightStyling: "bg-emerald-200",
        experienceType: ExperienceType.WORK
    },
    // School experience
    {
        title: "University of Pennsylvania",
        subtitle: "BSE Computer Science, Minor in Design",
        date: "Class of 2025",
        image: "/penn.png",
        darkStyling: "dark:bg-blue-950",
        lightStyling: "bg-blue-300",
        experienceType: ExperienceType.SCHOOL
    },
    {
        title: "President",
        subtitle: "Theta Tau (τγ) Professional Engineering Fraternity",
        date: "2024",
        image: "/thetatau.png",
        darkStyling: "dark:bg-amber-400",
        lightStyling: "bg-amber-200",
        experienceType: ExperienceType.SCHOOL
    },
    // Volunteer experience
    {
        title: "Head Counselor",
        subtitle: "New England Chinese Youth Summer Camp",
        date: "2023",
        image: "/necysc.png",
        darkStyling: "dark:bg-gray-700",
        lightStyling: "bg-gray-500",
        experienceType: ExperienceType.VOLUNTEER
    }
];
