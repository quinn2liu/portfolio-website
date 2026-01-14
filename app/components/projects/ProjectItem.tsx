import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { SelectedProjectItem } from './SelectedProjectItem';
import { ProjectItemDetails } from '../../data/ProjectItemDetailData';
const inter = Inter({ subsets: ["latin"] });

type ProjectListItemProps = {
    isSelected: boolean;
    projectItemDetails: ProjectItemDetails;
    onClose?: () => void;
    onClick?: () => void;
};

export const ProjectListItem = ({ isSelected, projectItemDetails, onClose, onClick }: ProjectListItemProps) => {
    return isSelected ? 
        <SelectedProjectItem {...projectItemDetails} onClose={onClose} /> :
        <MinimizedProjectItem {...projectItemDetails} onClick={onClick} />;
};

const MinimizedProjectItem = ({ name, date, subtitle, technologies, image, onClick }: ProjectItemDetails & { onClick?: () => void }) => (
    <div 
        className='group flex flex-row items-start justify-between cursor-pointer
      dark:hover:bg-gray-900 hover:bg-amber-200
        p-4 space-y-2
        rounded-3xl border-4 hover:rounded-2xl dark:border-gray-900 hover:dark:border-gray-900 border-amber-100 hover:border-amber-200
        transition-all duration-300'
        onClick={onClick}
    >
        <div className='flex flex-col items-start'>
            <div className='sm:text-2xl text-lg font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400'>{name}</div>
            <div className='text-xs group-hover:text-gray-600 dark:group-hover:text-gray-300 '>{subtitle}</div>
        </div>
        
        <img src={image} alt="" className='h-20 rounded-md'/>    
    </div>
);

