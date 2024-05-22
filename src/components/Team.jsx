import React from 'react'
import Abbas from '../assets/abbas.jpg'
const Team = () => {
    return (
        <>
            <section
                className='h-screen p-9 bg-gray text-white'
            >
                <div
                    className=' space-y-6 text-center'
                >
                    <h1
                        className='text-5xl'
                    >Our Team</h1>
                </div>
                <section
                    className='flex gap-2 items-center text-center justify-center h-full'>
                    <div
                        className='flex flex-col justify-center items-center gap-3'
                    >
                        <img src={Abbas} alt=""
                            style={{
                                width: '202px',
                                height: '202px',
                                borderRadius: '10px'
                            }}
                        />
                        <div
                            className='space-y-4'
                        >
                            <h1
                                className='text-4xl text-gold font-semibold'
                            >Alamin Abbas</h1>
                            <h3
                                className='text-2xl'
                            >Founder & CEO</h3>
                            <p
                                className='text-light'
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur voluptatem, similique minus incidunt quisquam labore natus expedita. Deserunt impedit eius doloribus ab.</p>
                        </div>
                    </div>
                    <div
                        className='flex flex-col justify-center items-center gap-3'
                    >
                        <img src={Abbas} alt=""
                            style={{
                                width: '202px',
                                height: '202px',
                                borderRadius: '10px'
                            }}
                        />
                        <div
                            className='space-y-4'
                        >
                            <h1
                                className='text-4xl text-gold font-semibold'
                            >Alamin Abbas</h1>
                            <h3
                                className='text-2xl'
                            >CTO</h3>
                            <p
                                className='text-light'
                            >

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur voluptatem, similique minus incidunt quisquam labore natus expedita. Deserunt impedit eius doloribus ab.</p>
                        </div>
                    </div>
                    <div
                        className='flex flex-col justify-center items-center gap-3'
                    >
                        <img src={Abbas} alt=""
                            style={{
                                width: '202px',
                                height: '202px',
                                borderRadius: '10px'
                            }}
                        />
                        <div
                            className='space-y-4'
                        >
                            <h1
                                className=' text-4xl text-gold font-semibold'
                            >Alamin Abbas</h1>
                            <h3
                                className='text-2xl'
                            >COO</h3>
                            <p
                                className='text-light'
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aspernatur voluptatem, similique minus incidunt quisquam labore natus expedita. Deserunt impedit eius doloribus ab.</p>
                        </div>
                    </div>
                </section >
            </section >
        </>
    )
}
export default Team