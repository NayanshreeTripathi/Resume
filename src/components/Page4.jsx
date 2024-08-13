import React from 'react'
import image3 from '../assets/images/image3.jpg'

function Page4() {
  return (
    <div className='bg-[#DBE2F2B2] p-5 w-screen h-full flex lg:flex-row flex-col lg:p-16'>

        <div className='lg:order-1 order-2 lg:w-[50vw] lg:pl-[4%] lg:py-[4%] lg:p-[3%]'>

            <h1 className='text-2xl lg:mt-0 mt-5 lg:text-[38px] font-bold'>Rewrite your resume with AI</h1>
            <p className='text-[16px] text-pretty space-x-28 mt-[7%] pr-[10%]'>Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.</p>
            <p className='text-[16px] space-x-28 mt-[3%] pr-[10%]'>Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.</p>
            
        </div>
        <div className='lg:order-2 order-1 w-screen lg:w-[60vw] lg:pl-[2%] lg:pt-[5%]'>
            <img className='w-[90vw] lg:w-[80vw] h-[full] lg:h-[45vh]' src={image3} alt="" />
        </div>

    </div>
  )
}

export default Page4
