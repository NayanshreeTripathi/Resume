import React from 'react'
import Icons from './Icons'

function Footer() {
  return (
    <div className='bg-[#DBE2F2B2] w-screen h-full md:h-[50vh] p-3 md:p-20'>
        <div className='flex flex-col md:flex-row gap-3 md:gap-20'>
            <div className='md:w-[15vw] pl-5'>
                <h1 className='text-xl pl-3'>Resume.ai</h1>
                <p className='text-xs  mt-7'>Welcome to Resume.ai, your go-to for ATS-friendly resumes and cover letters. Our AI crafts professional documents and scores your resume for a competitive edge.</p>
            </div>
            <div className='md:w-[15vw] pl-5 '>
                <h1 className='md:text-xl'>Get Started</h1>
                <p className='text-sm'>Resume</p>
                <p className='text-sm'>Cover Letter</p>
                <p className='text-sm'>Pricing</p>
            </div>
            <div className='md:w-[15vw] pl-5 '>
                <h1 className='text-xl'>Resume</h1>
                <p className='text-sm'>Build a Resume</p>
                <p className='text-sm'>Resume Templates</p>
                <p className='text-sm'>Resume Examples</p>
            </div>
            <div className='md:w-[15vw] pl-5 '>
                <h1 className='text-xl'>Cover Letter</h1>
                <p className='text-sm'>Create a Cover Letter</p>
                <p className='text-sm'>Cover Letter Templates</p>
                <p className='text-sm'>Cover Letter Examples</p>
            </div>
            <div className='md:w-[15vw] pl-5 '>
                <h1 className='text-xl'>About Us</h1>
                <p className='text-sm'>Company</p>
                <p className='text-sm'>Reviews</p>
                <p className='text-sm'>Help</p>
            </div>
        </div>
        <div className='mt-[4%] pl-[30%] md:pl-[45%]'>
            <Icons/>
        </div>
    </div>
  )
}

export default Footer