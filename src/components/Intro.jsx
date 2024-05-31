import React from 'react'
import left from '../assets/left.jpg'
import abas from '../assets/abas.webp'
import versa from '../assets/versa.webp'
import team from '../assets/team.webp'
import about from '../assets/about.avif'
const Intro = () => {
    return (
        <>
            <section className='p-9 h-screen bg-darkbg text-white  space-y-12'
                id='require'
            >
                <div
                    className='space-y-4'
                >
                    <h1 className='text-4xl text-center w-full text-orange'>About Us</h1>
                    <p
                        className=' text-center'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt officiis soluta maxime quaerat cupiditate porro labore architecto, minima
                        <br />
                        nulla ratione sint quis veniam laboriosam modi, nihil asperiores quia possimus quos, totam assumenda eos!
                    </p>
                </div>
                <div>
                    <img src={about} alt=""
                        style={{
                            height: '500px',
                            width: '70%'

                        }}
                        className='mx-auto rounded'
                    />
                </div>
            </section>
        </>
    )
}

export default Intro