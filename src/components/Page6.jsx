import React from 'react'
import image5 from '../assets/images/image5.jpeg'

function Page6() {
  return (
    <div className='bg-[#DBE2F2B2] p-5 w-screen h-full flex md:flex-row flex-col md:p-16'>

        <div className='md:order-1 order-2 md:w-[50vw] md:pl-[4%] md:py-[4%] md:p-[3%] '>

            <h1 className='text-2xl md:mt-0 mt-5 md:text-[38px] font-bold'>Use the best resume builder in the industry</h1>
            <p className='text-[16px]  text-pretty space-x-28  mt-[7%] pr-[10%]'>Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.</p>
            <p className='text-[16px] space-x-28  mt-[3%] pr-[10%]'>Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.</p>
            
        </div>
        <div className='md:order-2 order-1 w-screen md:w-[60vw]  md:pl-[2%] md:pt-[5%] '>
            <img className=' w-[90vw] md:w-[50vw] h-[full] md:h-[50vh]' src={image5} alt="" />
        </div>

    </div>
  )
}

export default Page6