import React, { useEffect, useState } from 'react';
import { SectionProps } from './types/section';
import { SectionType } from './types/section';
import { FaExpandAlt, FaCompressAlt } from "react-icons/fa";
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
                className={`${baseClasses} ${isSelected ? selectedClasses : isMinimized ? minimizedClasses : inactiveClasses} ${className} relative`}
                onClick={onToggle}
            >
                {!isMinimized &&
                    React.Children.map(children, child => 
                        React.isValidElement(child) 
                            ? React.cloneElement(child, { isSelected } as any)
                            : child
                    )
                }            

                {(sectionType != 'experience' && sectionType != 'projects') && (
                    <div className="dark:group-hover:opacity-80 group-hover:opacity-60 opacity-0 absolute top-4 right-4 transition-all duration-200 text-sm z-10">
                        {isSelected ? <FaCompressAlt /> : <FaExpandAlt />}
                    </div>
                )}
            </div>
        </>
    );
};

export default SectionWrapper;

const getSameColumn = (selectedSection: SectionType, sectionType: SectionType): boolean => {
    switch (sectionType) {
        case 'about':
        return (selectedSection == 'experience');
        case 'experience':
        return (selectedSection == 'about');
        case 'projects':
        return (selectedSection == 'fun');
        case 'fun':
        return (selectedSection == 'projects');
        default:
        return false;
    }
};

const getBaseClasses = (sectionType: SectionProps['sectionType']): string => {
    const commonClasses = `
        p-6 flex flex-col items-start justify-between border-8
        dark:bg-gray-900 bg-amber-50
        transition-all duration-200
    `;

    switch (sectionType) {
        case 'about':
        return `border-red-400 group hover:rounded-3xl  ${commonClasses}`;
        case 'experience':
        return `border-blue-400 ${commonClasses}`;
        case 'projects':
        return `border-emerald-400 ${commonClasses}`;
        case 'fun':
        return `border-amber-400 group hover:rounded-3xl ${commonClasses}`;
    }
};

const getSelectedClasses = (sectionType: SectionProps['sectionType']): string => {
    switch (sectionType) {
        case 'about':
        return 'shadow-2xl w-[85vw] h-[90vh]';
        case 'experience':
        return 'shadow-2xl w-[85vw] h-[90vh]';
        case 'projects':
        return 'shadow-2xl w-[95vw] h-[90vh]';
        case 'fun':
        return 'shadow-2xl w-[95vw] h-[90vh]';
    }
};

const getInactiveClasses = (sectionType: SectionProps['sectionType']): string => {
    switch (sectionType) {
        case 'about':
        return 'w-[35vw] h-[35vh]';
        case 'experience':
        return 'w-[35vw] h-[65vh]';
        case 'projects':
        return 'w-[65vw] h-[85vh]';
        case 'fun':
        return 'w-[65vw] h-[15vh]';
    }
};

const getMinimizedClasses = (sectionType: SectionProps['sectionType'], sameColumn: boolean): string => {
    switch (sectionType) {
        case 'about':
        return sameColumn ? 'w-[85vw] h-[10vh]' : 'w-[5vw] h-[35vh]';
        case 'experience':
        return sameColumn ?  'w-[85vw] h-[10vh]' : 'w-[5vw] h-[65vh]';
        case 'projects':
        return sameColumn ? 'w-[95vw] h-[10vh]' : 'w-[15vw] h-[65vh]';
        case 'fun':
        return sameColumn ?  'w-[95vw] h-[10vh]' : 'w-[15vw] h-[35vh]';
    }
};