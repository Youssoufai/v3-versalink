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
                    className='flex items-center justify-between h-full'
                >
                    <div
                        className='text-center space-y-4 p-6 w-3/12 shadow-slate-600 shadow-sm rounded-lg'
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
                    </div>
                    <div
                        className='text-center space-y-4 p-6 w-3/12 shadow-slate-600 shadow-sm rounded-lg'
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
                    </div>
                    <div
                        className='text-center space-y-4 p-6 w-3/12 shadow-slate-600 shadow- rounded-lg'
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials