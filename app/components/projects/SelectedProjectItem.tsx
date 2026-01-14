import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProjectItemDetails } from '../../data/ProjectItemDetailData';
import { BitewiseDetails } from '../../data/project data/BitewiseDetails';


const inter = Inter({ subsets: ["latin"] });

export const SelectedProjectItem = ({ name, date, description, technologies, image, link, onClose }: ProjectItemDetails & { onClose?: () => void }) => {
    const [show, setShow] = useState(false);

    const itemDetails = {
        "Bitewise": <BitewiseDetails />
    }[name] || null;

    useEffect(() => {
        setShow(true);
        return () => setShow(false);
    }, []);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShow(false);
        setTimeout(() => onClose?.(), 200);
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center 
                bg-black dark:bg-opacity-75 bg-opacity-60 transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'}
                cursor-pointer`}
            onClick={handleClose}
        >
            <div
                className={`flex flex-col items-start gap-4
                    dark:bg-slate-950 bg-amber-100
                    dark:text-amber-100 text-gray-900
                    border-4 border-emerald-400 dark:border-opacity-80
                    rounded-2xl p-8 w-[85vw] h-[85vh] relative overflow-y-auto scrollbar-hide
                    transform transition-all duration-200 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} cursor-default`}
                onClick={e => e.stopPropagation()}
            >
                <button className="absolute top-4 right-4 text-3xl" onClick={handleClose}>&times;</button>

                <div className='flex flex-row items-center space-x-6'>
                    <img src={image} alt="" className='h-20 rounded-md'/>    

                    <div className='flex flex-col items-start'>
                        <div className='text-3xl font-semibold'>{name}</div>
                        <div className='text-gray-400 sm:text-sm text-xs'>{date}</div>
                    </div>

                </div>

                <div className='flex flex-col items-start gap-1'>
                    <div className='font-semibold dark:text-gray-300 text-gray-700'>Technologies:</div>
                    <div className='flex flex-row space-x-4 items-start gap-2'>
                        {technologies.map((tech, idx) => <TechnologyItem key={idx} tech={tech} />)}
                    </div>
                </div>

                <div className='flex flex-col items-start gap-1'>
                    <div className='font-semibold dark:text-gray-300 text-gray-700'>Description:</div>
                    <div className={`${inter.className} sm:text-sm text-xs`}>{description}</div>
                </div>

                <div className='text-gray-400'>{link && <a className='font-bold text-emerald-600 dark:text-emerald-400' href={link} target="_blank" rel="noopener noreferrer">Learn More <FaArrowUpRightFromSquare className='inline-block' /></a>}</div>

                {itemDetails}
            </div>

        </div>
    );
};

const TechnologyItem = ({ tech }: { tech: string }) => (
    <div className="rounded-lg text-xs py-1 px-2 border-2 dark:bg-amber-600 bg-amber-200 dark:border-amber-600 border-amber-400 dark:bg-opacity-50">
        {tech}
    </div>
);