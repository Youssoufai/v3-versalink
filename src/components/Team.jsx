import React from 'react'
import Abbas from '../assets/abbas.jpg'
import team1 from '../assets/team-member.webp'
import team2 from '../assets/team-member2.webp'
const Team = () => {
    return (
        <>
            <section
                className='h-screen p-9 bg-gray text-white space-y-10'

            >
                <div
                    className=' space-y-6 text-center'
                >
                    <h1
                        className='text-5xl'
                    >Our Team</h1>
                </div>
                <div
                    className='space-y-20 flex flex-col justify-between'
                >
                    <div
                        className='w-full flex flex-col items-center justify-center gap-3'
                    >
                        <img src={team1} alt=""
                            style={{
                                width: '202px',
                                height: '202px'
                            }}
                            className='rounded-lg'
                        />
                        <div
                            className='text-center'
                        >
                            <h1
                                className=' text-orange text-4xl'
                            >John Smith</h1>
                            <p>FOUNDER & CEO</p>
                        </div>
                    </div>
                    <div
                        className='flex justify-evenly text-center'
                    >
                        <div
                            className='space-y-2 p-4 rounded-lg'
                        >
                            <img src={team2} alt=""
                                style={{
                                    width: '202px',
                                    height: '202px'
                                }}
                                className='rounded-lg'
                            />
                            <h1
                                className='text-xl text-orange'
                            >Alana Jones</h1>
                            <p
                                className='text-purple'
                            >DG</p>
                        </div>
                        <div className='space-y-2'
                        >
                            <img src={team2} alt=""
                                style={{
                                    width: '202px',
                                    height: '202px'
                                }}
                                className='rounded-lg'
                            />
                            <h1
                                className='text-xl text-orange'
                            >Sandy Albert</h1>
                            <p
                                className=' text-purple'
                            >CMO</p>
                        </div>
                        <div
                            className='space-y-2'
                        >
                            <img src={team2} alt=""
                                style={{
                                    width: '202px',
                                    height: '202px'
                                }}
                                className='rounded-lg'
                            />
                            <h1
                                className='text-2xl text-orange'
                            >Sandy Albert</h1>
                            <p>COO</p>
                        </div>
                        <div
                            className='space-y-2'
                        >
                            <img src={team2} alt=""
                                style={{
                                    width: '202px',
                                    height: '202px'
                                }}
                                className='rounded-lg'
                            />
                            <h1
                                className=' text-orange text-2xl'
                            >Sandy Albert</h1>
                            <p>CTO</p>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
export default Team