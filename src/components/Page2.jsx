import React from 'react'
import image7 from '../assets/images/image7.jpeg'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

function Page2() {
    return (
        <>
            <div className='bg-[#DBE2F2B2] w-screen h-full p-3 md:p-20'>

                <div className='pl-[4%]  md:pl-[15%] '>
                    <h1 className=' text-2xl font-bold md:text-4xl'>Get Your Dream Job: Build Your Resume in 3 Steps</h1>
                    <h2 className='font-bold text-xl md:text-2xl mt-[3%]'>Why Build a Professional Resume?</h2>
                    <div className=' pr-[3%] md:pr-[44%]'>
                        <p className='font-normal md:text-xl mt-[2%]'>A well-crafted resume is your ticket to landing an interview and job offer. Here are a few key reasons why you need a professional resume:</p>
                        <p className='font-normal md:text-xl mt-[2%]'>Highlights your relevant skills and experiences.Helps you stand out from other candidates.Shows that you are a professional who takes their career seriously.</p>
                    </div>
                </div>
                <div className='pr-[10%] md:pl-[15%] mt-2 h-[160vh] md:h-[120vh] relative'>
                    <div>
                        <Card1 />
                    </div>
                    <div className='md:pl-[40%] md:absolute md:top-[30%]'>
                        <Card2 />
                    </div>
                    <div className='md:absolute md:top-[60%]'>
                        <Card3 />
                    </div>

                </div>

            </div>
        </>

    )
}

export default Page2