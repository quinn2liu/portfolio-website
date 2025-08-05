import React, { useEffect, useState } from 'react';
import { SectionProps } from './types/section';
import { SectionType } from './types/section';
import { isatty } from 'tty';

interface SectionWrapperProps extends SectionProps {
    selectedSection: SectionType;
    children: React.ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
        selectedSection,
        onToggle,
        sectionType,
        children,
        className = '',
    }) => {
    const baseClasses = getBaseClasses(sectionType);
    const selectedClasses = getSelectedClasses(sectionType);
    const inactiveClasses = getInactiveClasses(sectionType);

    const [isSelected, setIsSelected] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
    const [sameColumn, setSameColumn] = useState(false);
    const [minimizedClasses, setMinimizedClasses] = useState('') 

    useEffect(() => {
    }, [])

    useEffect(() => {
        const newIsSelected = selectedSection == sectionType;
        setIsSelected(newIsSelected);
        // console.log(`isSelected for ${sectionType} is ${newIsSelected}`)

        const newIsMinimized = (selectedSection != null && !newIsSelected);
        setIsMinimized(newIsMinimized);

        const newSameColumn = getSameColumn(selectedSection, sectionType);
        setSameColumn(newSameColumn);

        const newMinimizedClasses = getMinimizedClasses(sectionType, newSameColumn);
        setMinimizedClasses(newMinimizedClasses);

        // if (newIsSelected) {
        console.log(`samecolumn for ${sectionType} is ${newSameColumn}`);
        console.log(`newMinimizedClasses for ${sectionType} is ${newMinimizedClasses}`);
        // }

    }, [selectedSection]);

    return (
        <>
            <div 
                className={`${baseClasses} ${isSelected ? selectedClasses : isMinimized ? minimizedClasses : inactiveClasses} ${className}`}
                onClick={onToggle}
            >
                {isMinimized ? 
                    `< ${sectionType} / >` : 
                    React.Children.map(children, child => 
                        React.isValidElement(child) 
                            ? React.cloneElement(child, { isSelected } as any)
                            : child
                    ) 
                }            
            </div>
        </>
    );
};

export default SectionWrapper;

const getSameColumn = (selectedSection: SectionType, sectionType: SectionType): boolean => {
    switch (sectionType) {
        case 'about':
        return (selectedSection == 'experiences');
        case 'experiences':
        return (selectedSection == 'about');
        case 'projects':
        return (selectedSection == 'blog');
        case 'blog':
        return (selectedSection == 'projects');
        default:
        return false;
    }
};

const getBaseClasses = (sectionType: SectionProps['sectionType']): string => {
    const commonClasses = `
        p-4 flex flex-col items-start justify-start border-8
        dark:bg-gray-900 bg-amber-50
        hover:shadow-lg hover:rounded-3xl
        transition-all duration-200
    `;

    switch (sectionType) {
        case 'about':
        return `border-emerald-400 ${commonClasses}`;
        case 'experiences':
        return `border-blue-400 ${commonClasses}`;
        case 'projects':
        return `border-red-400 ${commonClasses}`;
        case 'blog':
        return `border-amber-400 ${commonClasses}`;
    }
};

const getSelectedClasses = (sectionType: SectionProps['sectionType']): string => {
    switch (sectionType) {
        case 'about':
        return 'shadow-2xl w-[50vw] h-[90vh]';
        case 'experiences':
        return 'shadow-2xl w-[50vw] h-[90vh]';
        case 'projects':
        return 'shadow-2xl w-[85vw] h-[90vh]';
        case 'blog':
        return 'shadow-2xl w-[85vw] h-[90vh]';
    }
};

const getInactiveClasses = (sectionType: SectionProps['sectionType']): string => {
    switch (sectionType) {
        case 'about':
        return 'w-[35vw] h-[35vh]';
        case 'experiences':
        return 'w-[35vw] h-[65vh]';
        case 'projects':
        return 'w-[65vw] h-[65vh]';
        case 'blog':
        return 'w-[65vw] h-[35vh]';
    }
};

const getMinimizedClasses = (sectionType: SectionProps['sectionType'], sameColumn: boolean): string => {
    switch (sectionType) {
        case 'about':
        return sameColumn ? 'w-[50vw] h-[10vh]' : 'w-[15vw] h-[35vh]';
        case 'experiences':
        return sameColumn ?  'w-[50vw] h-[10vh]' : 'w-[15vw] h-[65vh]';
        case 'projects':
        return sameColumn ? 'w-[85vw] h-[10vh]' : 'w-[50vw] h-[65vh]';
        case 'blog':
        return sameColumn ?  'w-[85vw] h-[10vh]' : 'w-[50vw] h-[35vh]';
    }
};