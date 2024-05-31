import React, { useEffect } from 'react';
import Bg from '../assets/bg.jpg';
import team1 from '../assets/team-member.webp';
import awareness from '../assets/awareness.webp';
import '../index.css';
import { motion } from 'framer-motion';
import AOS from 'aos';

import 'aos/dist/aos.css';
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section
                className='bg-darkbg h-view'
            >
                <h1
                    className='text-center text-3xl p-10 text-orange'

                >Our Services</h1>
                <section
                    className='p-10 flex flex-col items-center md:flex-row gap-8'
                >
                    <div d data-aos="zoom-in-up">
                        <div
                            className=' w-[400px] p-4 flex flex-col items-center gap-6 text-center rounded-lg shadow-sm shadow-orange'
                        >
                            <img src={awareness}
                                className=' h-80 rounded'
                                alt="" />
                            <h1
                                className='text-2xl text-lightBlue'
                            >Awareness</h1>
                            <p
                                className='text-orange'
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quisquam eaque praesentium ratione enim? Doloribus illo minima velit tempora neque!</p>
                            <motion.button
                                whileHover={{
                                    scale: 1.05
                                }}
                                className='py-3 px-8 border-orange text-white border-solid border hover:bg-orange hover:text-white transition-all hover:border hover:border-orange'
                            >Read More</motion.button>
                        </div>
                    </div>

                    <div
                        data-aos="zoom-in-up"
                    >
                        <div
                            className=' w-[400px] p-4 flex flex-col items-center gap-6 text-center rounded-lg shadow-sm shadow-orange'
                        >
                            <img src={awareness}
                                className=' h-80 rounded'
                                alt="" />
                            <h1
                                className='text-2xl text-lightBlue'
                            >Awareness</h1>
                            <p
                                className='text-orange'
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quisquam eaque praesentium ratione enim? Doloribus illo minima velit tempora neque!</p>
                            <motion.button
                                whileHover={{
                                    scale: 1.05
                                }}
                                className='py-3 px-8 border-orange text-white border-solid border hover:bg-orange hover:text-white transition-all hover:border hover:border-orange'
                            >Read More</motion.button>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                    >
                        <div
                            className=' w-[400px] p-4 flex flex-col items-center gap-6 text-center rounded-lg shadow-sm shadow-orange'
                        >
                            <img src={awareness}
                                className=' h-80 rounded'
                                alt="" />
                            <h1
                                className='text-2xl text-lightBlue'
                            >Awareness</h1>
                            <p
                                className='text-orange'
                            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quisquam eaque praesentium ratione enim? Doloribus illo minima velit tempora neque!</p>
                            <motion.button
                                whileHover={{
                                    scale: 1.05
                                }}
                                className='py-3 px-8 border-orange text-white border-solid border hover:bg-orange hover:text-white transition-all hover:border hover:border-orange'
                            >Read More</motion.button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Services;