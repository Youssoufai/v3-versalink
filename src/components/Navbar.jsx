import React, { useEffect, useState } from 'react';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex justify-between items-center p-9 sticky top-0 ${scrolled ? 'bg-orange text-white' : ''}`}
        >
            <div>
                <h1>VERSALINK</h1>
            </div>
            <ul
                className='flex items-center gap-14'
            >
                <li
                    className='cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-10 after:absolute relative transition-all flex after:bottom-0'
                >VDI</li>
                <li
                    className='cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-10 after:absolute relative transition-all flex after:bottom-0'
                >Post</li>
                <li
                    className='cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-3/4 after:absolute relative transition-all flex after:bottom-0'
                >Clothing Brand</li>
            </ul>
            <div>
                <button
                    className='text-white'
                >Book Now</button>
            </div>
        </header>
    );
};

export default Navbar;
