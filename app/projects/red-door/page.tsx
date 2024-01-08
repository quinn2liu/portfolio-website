import React from 'react';
import { Navigation, BackHome } from "../../page";

const RedDoor = () => {
    return (
        <div className="h-full container mx-auto max-w-screen-lg sm:px-8 px-6" suppressHydrationWarning>
            <div className="sm:pt-16 pt-10 flex flex-col justify-start items-start">
                <div className="mb-4 text-3xl sm:text-7xl">RED DOOR</div>
                <Navigation />
                <BackHome />
                <p className='sm:text-2xl text-xl'>LOADING...</p>
            </div>
        </div>
    );
}

export default RedDoor;