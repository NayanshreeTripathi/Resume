import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

function Page2() {
    return (
        <>
            <div className='bg-[#DBE2F2B2] w-screen h-full p-3 py-16 xl:py-13 lg:p-20'>
                <div className='pl-[4%] lg:pl-[15%]'>
                    <h1 className='text-2xl font-bold lg:text-4xl'>Get Your Dream Job: Build Your Resume in 3 Steps</h1>
                    <h2 className='font-bold text-xl lg:text-2xl mt-[3%]'>Why Build a Professional Resume?</h2>
                    <div className='pr-[3%] lg:pr-[44%]'>
                        <p className='font-normal lg:text-xl mt-[2%]'>A well-crafted resume is your ticket to landing an interview and job offer. Here are a few key reasons why you need a professional resume:</p>
                        <p className='font-normal lg:text-xl mt-[2%]'>Highlights your relevant skills and experiences. Helps you stand out from other candidates. Shows that you are a professional who takes their career seriously.</p>
                    </div>
                </div>
                <div className='pr-[10%]   justify-center items-center  lg:pl-[15%] mt-2 h-[160vh] lg:h-[120vh] relative'>
                    <div>
                        <Card1 />
                    </div>
                    <div className='lg:pl-[40%] lg:absolute lg:top-[30%]'>
                        <Card2 />
                    </div>
                    <div className='lg:absolute lg:top-[60%]'>
                        <Card3 />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page2;
