import React from 'react'
import image1 from "../assets/images/image1.jpeg"
import image2 from "../assets/images/image2.jpeg"
import image3 from "../assets/images/image3.jpg"
import image4 from "../assets/images/image4.jpg"
import image5 from "../assets/images/image5.jpeg"
import image7 from "../assets/images/image7.jpeg"

function Builder() {
  return (
    <>
      {/* page 2 */}
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

      {/* page 3 */}
      <div>
        <h1 className='ml-[40%] text-3xl font-bold'>Upload Your Resume!</h1>
        <h1 className='ml-[28%] mt-7 text-2xl font-semibold'>Its seems like you have not uploaded your resume till now</h1>

        <div className='ml-[15%] mt-10'>
          <img className='h-[80vh]' src={image2} alt="" />
          <button className='bg-[#673AB7] w-30 text-white font-bold py-3 px-4 rounded-md ml-[35%] mb-8'>Scan Your Resume</button>
        </div>

        <div className='bg-[#DBE2F2B2] flex h-[80vh] w-full'>
          <div className='left w-[60vw] pl-36'>
            <h1 className='pt-20 text-5xl font-bold '>Rewrite your resume with AI</h1>
            <p className='mt-6 text-xl font-medium '>Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.</p>
            <p className='mt-6 text-xl font-medium  '>Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.</p>
          </div>

          <div className='right w-[40vw]'>
            <img className='mt-20 h-[50vh] ml-7' src={image3} alt="" />
          </div>

        </div>

        {/* page 4 */}

        <div className='flex h-[80vh]'>
          <div className='w-[40%] m-20 mt-5'>
            <img className='h-[70vh]' src={image4} alt="" />
          </div>
          <div className='w-[60%]  py-20'>
            <h1 className='text-5xl font-bold ml-8 mt-7'>Get an ATS understanding check</h1>
            <p className='text-xl font-medium ml-8 mt-5 pr-48'>
              Part of the resume checker score we assign is based on the parsability rate of your resume. We’ve reverse-engineered the most popular applicant tracking systems currently used and we look for signs of ATS compatibility.
              For each resume uploaded, we look for skills and keywords connected to the job and industry you’re applying for, readable contact information, file type, and length. Then, we’ll give you suggestions on how to improve your resume.
            </p>
          </div>
        </div>
        <div className='bg-[#DBE2F2B2] flex h-[80vh] w-full'>
          <div className='left w-[60vw] pl-36'>
            <h1 className='pt-20 text-5xl font-bold '>Use the best resume builder in the industry</h1>
            <p className='mt-6 text-xl font-medium '>Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.</p>
            <p className='mt-6 text-xl font-medium  '>Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.</p>
          </div>

          <div className='right w-[40vw]'>
            <img className='mt-20 h-[50vh] ml-7' src={image5} alt="" />
          </div>

        </div>

        {/* page 5 */}
        <div
          className=''
          style={{
            background: 'linear-gradient(82.64deg, #D9D9D9 -1.49%, #673AB7 95.63%)',
            padding: '20px',
          }}
        >
          <h1 className='pt-10 ml-[30%] text-5xl font-bold '>Get Your Resume Score Now!</h1>
          <p className='text-xl mt-8 font-semibold ml-[26%]'>Upload your resume and you’ll get a personalized email with an actionable tasklist.</p>
          <p className='text-xl mt-14 font-semibold ml-[42%]'>Loved by interviewers at</p>
          <div className='flex gap-7 text-white text-3xl font-bold mt-16 ml-[35%] pb-10'>
            <p>Google</p>
            <p>Tesla</p>
            <p>Facebook</p>
            <p>Amazon</p>
          </div>

        </div>

        {/* page 6 */}

        <div>
          <img src={image7} alt="" />
        </div>

      </div>
    </>
  )
}

export default Builder
