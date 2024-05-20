import React from 'react'

const Hero = () => {
    return (
        <>
            <section
                className='flex justify-center h-screen'
            >
                <section
                    className='p-9 text-center w-3/6 flex justify-center flex-col gap-3'
                >
                    <h1
                        className='text-6xl'
                    >Let's Give Back</h1>
                    <p
                        className=' text-white'
                    >Hello and welcome! We're delighted to have you here. Whether you're new to our community or already "a part of the furniture," we hope you'll find everything you need.</p>
                    <div>
                        <button
                            className='p-2 border-white-600 border-solid border'
                        >Read More</button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Hero