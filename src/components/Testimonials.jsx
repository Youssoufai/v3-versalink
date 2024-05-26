import React from 'react'
import Bg from '../assets/bg.jpg'
import team1 from '../assets/team-member.webp'
import awareness from '../assets/awareness.webp'
const Testimonials = () => {
    return (
        <>
            <section
                className=' h-screen bg-darkbg p-9'
            >
                <h1
                    className=' text-white text-center text-4xl'
                >Our Services</h1>
                <div
                    className='grid grid-cols-3 place-content-center items-center h-full'
                >
                    <div
                        className='text-center space-y-12 p-6 shadow-sm rounded-lg flex flex-col justify-center items-center'
                    >
                        <img src={awareness} alt=""
                            style={{
                                height: '330px',
                                width: '300px'
                            }}
                        />
                        <h1
                            className=' text-lightBlue text-2xl'
                        >Awareness</h1>
                        <p
                            className='text-orange'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis repellat iure dolor libero minima harum modi exercitationem, asperiores quaerat!</p>
                        <button
                            className='py-3 px-8 border-white-600 border-solid border bg-orange text-white transition-all hover:border border-orange'
                        >Read More</button>
                    </div>
                    <div
                        className='text-center space-y-12 p-6 shadow-sm rounded-lg flex flex-col justify-center items-center'
                    >
                        <img src={awareness} alt=""
                            style={{
                                height: '330px',
                                width: '300px'
                            }}
                        />
                        <h1
                            className=' text-lightBlue text-2xl'
                        >Awareness</h1>
                        <p
                            className='text-orange'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis repellat iure dolor libero minima harum modi exercitationem, asperiores quaerat!</p>
                        <button
                            className='py-3 px-8 border-white-600 border-solid border bg-orange text-white transition-all hover:border border-orange'
                        >Read More</button>
                    </div>
                    <div
                        className='text-center space-y-12 p-6 shadow-sm rounded-lg flex flex-col justify-center items-center'
                    >
                        <img src={awareness} alt=""
                            style={{
                                height: '330px',
                                width: '300px'
                            }}
                        />
                        <h1
                            className=' text-lightBlue text-2xl'
                        >Awareness</h1>
                        <p
                            className='text-orange'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis repellat iure dolor libero minima harum modi exercitationem, asperiores quaerat!</p>
                        <button
                            className='py-3 px-8 border-white-600 border-solid border bg-orange text-white transition-all hover:border border-orange'
                        >Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials