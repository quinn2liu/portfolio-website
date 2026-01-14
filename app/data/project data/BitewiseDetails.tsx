import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const BitewiseDetails = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [showImageModal, setShowImageModal] = useState(false);

    const features = [
        {
            feature: 'News Dashboard',
            description: 'Streamlined hub delivering daily summarized top news.',
            technologies: 'Web Crawling (`Beautiful Soup`, `Exa`), Topic Modeling (`BERTopic`), Summarization (`OpenAI`)'
        },
        {
            feature: 'Local News & Tracked Topics',
            description: 'Personalized news based on interests and location.',
            technologies: 'Storage (`MongoDB`), Search (`NewsAPI`), Web Crawling, Topic Modeling'
        },
        {
            feature: 'AI Podcast',
            description: 'Engaging audio summaries of the day\'s top stories.',
            technologies: 'Generation (`Podcastfy`, `OpenAI`), Storage (`AWS S3`)'
        },
        {
            feature: 'Article Search',
            description: 'Relevant articles and summaries based on user preferences.',
            technologies: 'Search (`NewsAPI`, `MongoDB`), Data Enhancement (`MediaBias`, `OpenAI`), Filtering (`Node.js`), Summarization (`OpenAI`)'
        }
    ];

    const images = [
        {
            image: '/projects/bitewise/dashboard.png',
            description: 'News Dashboard'
        },
        {
            image: '/projects/bitewise/search.png',
            description: 'Topic Search'
        },
        {
            image: '/projects/bitewise/preferences.png',
            description: 'User Preferences'
        },
        {
            image: '/projects/bitewise/system.png',
            description: 'System Architecture'
        }
    ];

    useEffect(() => {
        if (selectedImage !== null) {
            setShowImageModal(true);
        }
    }, [selectedImage]);

    const handleCloseImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowImageModal(false);
        setTimeout(() => setSelectedImage(null), 200);
    };

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    return (
        <div className='flex flex-col items-start gap-4 w-full'>
            <div className='flex flex-row items-center gap-4 overflow-x-auto px-4'>
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image.image} 
                        alt={image.description} 
                        className='h-48 w-auto rounded-lg cursor-pointer hover:opacity-80 transition-opacity'
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>

            {selectedImage !== null && typeof window !== 'undefined' && createPortal(
                <div 
                    className={`fixed inset-0 z-[60] flex items-center justify-center 
                        bg-black dark:bg-opacity-75 bg-opacity-60 transition-opacity duration-200 ${showImageModal ? 'opacity-100' : 'opacity-0'}
                        cursor-pointer`}
                    onClick={handleCloseImage}
                >
                    <div
                        className={`flex flex-col items-center gap-4 relative
                            transform transition-all duration-200 ${showImageModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} cursor-default`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className='text-white bg-emerald-600 dark:bg-emerald-400 py-2 px-3 rounded-lg text-lg font-semibold'>{images[selectedImage].description}</div>
                        <img 
                            src={images[selectedImage].image} 
                            alt={images[selectedImage].description}
                            className='max-w-[80vw] max-h-[80vh] rounded-xl'
                            onClick={handleCloseImage}
                        />
                        
                    </div>
                </div>,
                document.body
            )}

            <table className='w-full border-collapse text-sm'>
                <thead>
                    <tr className='border-b-2 dark:border-gray-600 border-gray-400'>
                        <th className='text-left py-2 px-4 dark:text-gray-300 text-gray-700 font-semibold whitespace-nowrap'>Features</th>
                        <th className='text-left py-2 px-4 dark:text-gray-300 text-gray-700 font-semibold'>Description</th>
                        <th className='text-left py-2 px-4 dark:text-gray-300 text-gray-700 font-semibold'>Key Technologies Used</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((item, index) => (
                        <tr key={index} className='border-b dark:border-gray-700 border-gray-300 text-sm'>
                            <td className='py-2 px-4 dark:text-gray-200 text-gray-800 font-medium whitespace-nowrap'>{item.feature}</td>
                            <td className='py-2 px-4 dark:text-gray-200 text-gray-800'>{item.description}</td>
                            <td className='py-2 px-4 dark:text-gray-200 text-gray-800'>{item.technologies}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

