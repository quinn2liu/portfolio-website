import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { ProjectItem } from '../../data/ProjectItemData';

const inter = Inter({ subsets: ["latin"] });

type ProjectListItemProps = {
    isSelected: boolean;
    projectItem: ProjectItem;
    onClose?: () => void;
    onClick?: () => void;
};

export const ProjectListItem = ({ isSelected, projectItem, onClose, onClick }: ProjectListItemProps) => {
    return isSelected ? 
        <SelectedProjectItem {...projectItem} onClose={onClose} /> :
        <MinimizedProjectItem {...projectItem} onClick={onClick} />;
};



const SelectedProjectItem = ({ name, date, description, technologies, image, link, onClose }: ProjectItem & { onClose?: () => void }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        return () => setShow(false);
    }, []);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShow(false);
        setTimeout(() => onClose?.(), 50);
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center 
                bg-black bg-opacity-85 transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'}
                cursor-pointer`}
            onClick={handleClose}
        >
            <div
                className={`flex flex-col items-start 
                    dark:bg-slate-950 bg-gray-200 
                    border-4 dark:border-emerald-400 dark:border-opacity-80
                    rounded-2xl p-8 w-[85vw] h-[85vh] relative
                    transform transition-all duration-200 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} cursor-default`}
                onClick={e => e.stopPropagation()}
            >
                <button className="absolute top-4 right-4 text-3xl" onClick={handleClose}>&times;</button>
                <div className='text-3xl font-semibold'>{name}</div>
                <div className='text-gray-400 sm:text-sm text-xs sm:mb-4 mb-2'>{date}</div>
                <div className={`${inter.className} sm:text-sm text-xs sm:mb-4 mb-2`}>{description}</div>
                <div className='flex flex-row space-x-4 items-start'>
                    {technologies.map((tech, idx) => <TechnologyItem key={idx} tech={tech} />)}
                </div>
                {link && <a className='pt-4 underline' href={link} target="_blank" rel="noopener noreferrer">Learn More</a>}
                <img src={image} alt="" className='sm:block hidden sm:h-32 h-20 ml-12 mr-6'/>
            </div>
        </div>
    );
};

const MinimizedProjectItem = ({ name, date, subtitle, technologies, image, onClick }: ProjectItem & { onClick?: () => void }) => (
    <div 
        className='flex flex-row items-start justify-between cursor-pointer
        dark:bg-gray-900 bg-amber-100 dark:hover:bg-gray-950 hover:bg-amber-200
        p-4 pace-y-2
        rounded-2xl border-4 hover:rounded-3xl dark:border-slate-500 border-gray-400 dark:hover:border-emerald-400 hover:border-emerald-400
        transition-all duration-200'
        onClick={onClick}
    >
        <div className='flex flex-col items-start'>
            <div className='sm:text-2xl text-lg font-semibold text-gray-900 dark:text-amber-50'>{name}</div>
            <div className='text-xs text-gray-400'>{subtitle}</div>
        </div>
        
        <img src={image} alt="" className='h-20 rounded-md'/>    
    </div>
);

const TechnologyItem = ({ tech }: { tech: string }) => (
    <div className="rounded-lg text-xs py-1 px-2 border-2 dark:bg-amber-600 bg-amber-200 dark:border-amber-600 border-amber-400 dark:bg-opacity-50">
        {tech}
    </div>
);