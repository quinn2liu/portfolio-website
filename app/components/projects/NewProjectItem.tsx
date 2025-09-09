import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ProjectItem } from '../../data/ProjectItemData';
import { FaCompressAlt } from 'react-icons/fa';

type ProjectListItemProps = {
    isSelected: boolean;
    projectItem: ProjectItem;
    onClose?: () => void;
};

export const ProjectListItem: React.FC<ProjectListItemProps> = ({ isSelected, projectItem, onClose }) => {
    return isSelected ? 
        <MinimizedProjectItem {...projectItem} /> :
        <SelectedProjectItem {...projectItem} onClose={onClose} />;
};

const MinimizedProjectItem = ({name, date, subtitle, description, technologies, image, link}: ProjectItem) => {
    return (
        <div className='flex flex-col items-start
        dark:bg-slate-950 bg-slate-100 dark:hover:bg-slate-900 hover:bg-slate-200
        px-3 pt-6 pb-3 space-y-3
        rounded-2xl border-4 hover:rounded-3xl dark:border-slate-500 border-gray-400 dark:hover:border-emerald-400 hover:border-emerald-400
        transition-all duration-200'>
            <div className='sm:text-xl text-lg font-semibold'>{name}</div>
            <div className={`text-xs text-gray-400`}>{subtitle} • {date}</div>
            <div className='flex flex-row space-x-4 items-start'>
                {technologies.map((tech, index) => (
                    <TechnologyItem tech={tech} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}

type SelectedProjectItemProps = ProjectItem & { onClose?: () => void };

const SelectedProjectItem: React.FC<SelectedProjectItemProps> = ({
    name, date, description, technologies, image, link, onClose
}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        return () => setShow(false);
    }, []);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShow(false);
        setTimeout(() => {
            onClose && onClose();
        }, 50);
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center 
                bg-black bg-opacity-60 
                transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose} // Clicking background triggers close
        >
            <div
                className={`flex flex-col items-start 
                    dark:bg-slate-950 bg-gray-200 
                    border-4 dark:border-emerald-400 dark:border-opacity-80
                    rounded-2xl p-8 w-[85vw] h-[85vh] relative
                    transform transition-all duration-200 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} cursor-default`}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={handleClose}
                >
                    &times;
                </button>
                <div className='text-3xl font-semibold'>{name}</div>
                <div className='text-gray-400 sm:text-sm text-xs sm:mb-4 mb-2'>{date}</div>
                <div className={`${inter.className} sm:text-sm text-xs sm:mb-4 mb-2`}>{description}</div>
                <div className='flex flex-row space-x-4 items-start'>
                    {technologies.map((tech, index) => (
                        <TechnologyItem tech={tech} index={index} key={index} />
                    ))}
                </div>
                {link && <a className='pt-4 underline' href={link} target="_blank" rel="noopener noreferrer">Learn More</a>}
                <img src={image} alt="" className='sm:block hidden sm:h-32 h-20 ml-12 mr-6'/>
            </div>
        </div>
    );
};

const TechnologyItem: React.FC<{ tech: string; index: number }> = ({ tech, index }) => (
    <div className=" rounded-lg text-xs py-2 px-3 border-2 dark:bg-amber-600 bg-amber-200 dark:border-amber-600 border-amber-400  dark:bg-opacity-50" key={index}>
        {tech}
    </div>
);