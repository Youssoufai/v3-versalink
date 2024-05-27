import React, { useEffect, useState } from 'react';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

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
            className={`md:flex md:flex-row md:justify-between md:items-center md:w-full p-9 sticky top-0 duration-75 ease-linear delay-100 ${scrolled ? 'bg-orange text-white' : ''} `}
        >
            <div>
                <h1 className='text-5xl'>VERSALINK</h1>
            </div>
            <ul
                className={`md:flex md:items-center gap-8 ${menuOpen ? 'visible' : 'hidden'} md:visible`}
                id='header'
            >
                <li>VDI</li>
                <li>Post</li>
                <li>Clothing Brand</li>
            </ul>
            <div>
                <button className='p-4 bg-black rounded-lg text-orange' onClick={handleClick}>
                    Book Now
                </button>
            </div>
            <div id="menu" onClick={handleClick} className="md:hidden">
                <ion-icon name="menu-outline"></ion-icon>
            </div>
        </header>
    );
};

export default Navbar;
