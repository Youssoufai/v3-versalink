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
                    className='flex items-center gap-14 text-xl'
                >
                    <li
                        className=' cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-10 after:absolute relative transition-all flex after:bottom-0'
                    >VDI</li>
                    <li
                        className=' cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-10 after:absolute relative transition-all flex after:bottom-0'
                    >Post</li>
                    <li
                        className=' cursor-pointer hover:after:content-empty hover:after:h-1 hover:after:bg-white hover:after:w-3/4 after:absolute relative transition-all flex after:bottom-0'
                    >Clothing Brand</li>
                </ul>
                <div>
                    <button
                        className='p-2 border-orange border-solid border text-white'
                    >Book Now</button>
                </div>
            </header>
        </>
    )
}

export default Navbar