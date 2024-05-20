import React from 'react'
import '../index.css'
const Navbar = () => {
    return (
        <>
            <header
                className='flex justify-between items-center p-9 sticky top-0'
            >
                <div>
                    <h1>VERSALINK</h1>
                </div>
                <ul
                    className='flex items-center gap-8'
                >
                    <li>VDI</li>
                    <li>Post</li>
                    <li>Clothing Brand</li>
                </ul>
                <div>
                    <button>Book Now</button>
                </div>
            </header>
        </>
    )
}

export default Navbar