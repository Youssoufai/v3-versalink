import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <>
            <section
                className='flex justify-center h-screen'
            >
                <section
                    className='p-9 text-center w-4/5 flex justify-center flex-col space-y-8'
                >
                    <h1
                        className='text-8xl'
                    >Let's Give Back</h1>
                    <p
                        className=' text-lightOrange text-lg'
                    >Hello and welcome! We're delighted to have you here. Whether you're new to our community or already "a part of the furniture," we hope you'll find everything you need.</p>
                    <div>
                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            className='py-3 px-8 border-white-600 border-solid border hover:bg-orange hover:text-white transition-all hover:border hover:border-orange'
                        >Read More</motion.button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Hero