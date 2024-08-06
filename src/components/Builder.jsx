import React from 'react'
import image1 from "../assets/images/image1.jpeg"
import image2 from "../assets/images/image2.jpeg"
import image3 from "../assets/images/image3.jpg"

function Builder() {
  return (
    <>
    <div className='pl-36 w-full bg-[#DBE2F2B2]'>
      <div>
        <p className='text-5xl pt-10 font-bold'>Get Your Dream Job: Build Your Resume in 3 Steps</p>
        <h1 className='mt-8 text-3xl font-bold'>Why Build a Professional Resume?</h1>
        <h2 className='mt-5 text-xl font-semibold pr-[44%]'>A well-crafted resume is your ticket to landing an interview and job offer. Here are a few key reasons why you need a professional resume:</h2>
        <p className='mt-3 text-xl pr-[44%]'>Highlights your relevant skills and experiences.</p>
        <p className='text-xl pr-[44%]'>Helps you stand out from other candidates.</p>
        <p className='text-xl pr-[44%]'>Shows that you are a professional who takes their career seriously.</p>
      </div>

      <div>
        <img className='ml-60 h-[80vh] w-[40vw] mt-16 mb-10' src={image1} alt="" />
      </div>
    </div>

    <div>
      <h1 className='ml-[40%] text-2xl font-bold'>Upload Your Resume!</h1>
      <h1 className='ml-[28%] mt-7 text-2xl font-semibold'>Its seems like you have not uploaded your resume till now</h1>

      <div className='ml-[15%] mt-10'>
        <img className='h-[80vh]' src={image2} alt="" />
        <button className='bg-[#673AB7] w-30 text-white font-bold py-3 px-4 rounded-md ml-[35%] mb-8'>Scan Your Resume</button>
      </div>

      <div className='bg-[#DBE2F2B2] flex h-[70vh] w-full'>
        <div className='left w-[60vw] pl-36'>
        <h1 className='pt-20 text-5xl font-bold '>Rewrite your resume with AI</h1>
        <p className='mt-6 text-xl font-medium '>Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.</p>
        <p className='mt-6 text-xl font-medium  '>Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.</p>
        </div>

        <div className='right w-[40vw]'>
          <img className='mt-20 h-[50vh] ml-7' src={image3} alt="" />
        </div>

      </div>

      <div className='flex h-[70vh]'>
        <div className='w-[40%] border-2'>left </div>
        <div className='w-[60%] border-2'>right</div>
      </div>
      
    </div>
    </>
  )
}

export default Builder
