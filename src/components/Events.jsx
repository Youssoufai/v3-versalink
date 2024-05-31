import React, { useEffect } from 'react'
import avatar from '../assets/avatar.png'
import AOS from 'aos';
const Events = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div
            data-aos="fade-in"
        >
            <div
                className='h-[100vh] p-9 bg-[#282b37] space-y-4'
            >
                <h1
                    className='text-5xl text-orange text-center'
                >Testimonials</h1>
                <h2
                    className='text-center text-lightBlue'
                >What our clients say</h2>
                <section
                    className='flex flex-col gap-8 items-center md:flex-row'
                >
                    <div
                        className=' w-[400px] flex flex-col items-center gap-8 border p-6 border-orange rounded-md'
                    >
                        <img src={avatar}
                            className='mx-auto w-36'
                            alt="" />
                        <div
                            className='text-center space-y-2'
                        >
                            <h1
                                className='text-3xl text-orange'
                            >Christoper Ronald</h1>
                            <p
                                className='text-lightOrange'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!
                            </p>
                        </div>

                    </div>
                    <div
                        className=' w-[400px] flex flex-col items-center gap-8 border p-6 border-orange rounded-md'
                    >
                        <img src={avatar}
                            className='mx-auto w-36'
                            alt="" />
                        <div
                            className='text-center space-y-2'
                        >
                            <h1
                                className='text-3xl text-orange'
                            >Christoper Ronald</h1>
                            <p
                                className='text-lightOrange'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!
                            </p>
                        </div>

                    </div>
                    <div
                        className=' w-[400px] flex flex-col items-center gap-8 border p-6 border-orange rounded-md'
                    >
                        <img src={avatar}
                            className='mx-auto w-36'
                            alt="" />
                        <div
                            className='text-center space-y-2'
                        >
                            <h1
                                className='text-3xl text-orange'
                            >Christoper Ronald</h1>
                            <p
                                className='text-lightOrange'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum alias ea neque illum totam quam adipisci suscipit. Non exercitationem omnis atque vero unde, est laboriosam labore hic aliquid! A!
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Events