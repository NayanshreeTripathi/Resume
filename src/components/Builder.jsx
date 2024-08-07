import React from 'react';
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpeg";
import image7 from "../assets/images/image7.jpeg";

function Builder() {
  return (
    <>
      {/* Page 2 */}
      <div className='bg-[#DBE2F2B2] px-6 md:px-36 py-12'>
        <div className='flex flex-col items-center'>
          <div className='text-center md:text-left'>
            <p className='text-3xl md:text-5xl font-bold pt-10'>Get Your Dream Job: Build Your Resume in 3 Steps</p>
            <h1 className='mt-6 text-2xl md:text-3xl font-bold'>Why Build a Professional Resume?</h1>
            <h2 className='mt-4 text-lg md:text-xl font-semibold'>
              A well-crafted resume is your ticket to landing an interview and job offer. Here are a few key reasons why you need a professional resume:
            </h2>
            <p className='mt-3 text-lg md:text-xl'>Highlights your relevant skills and experiences.</p>
            <p className='text-lg md:text-xl'>Helps you stand out from other candidates.</p>
            <p className='text-lg md:text-xl'>Shows that you are a professional who takes their career seriously.</p>
          </div>

          <div className='mt-10 flex justify-center'>
            <img className='w-full md:w-[40vw] h-auto md:h-[80vh] object-cover rounded-lg shadow-lg' src={image1} alt="Resume Building" />
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div className='px-6 md:px-36 py-12'>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:ml-[40%] md:text-4xl font-bold mb-4'>Upload Your Resume!</h1>
          <h2 className='text-2xl md:ml-[20%] md:text-3xl font-semibold mb-6'>It seems like you have not uploaded your resume till now</h2>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <img className='w-full md:w-[80%] md:ml-[10%] h-auto mb-6 md:mb-8' src={image2} alt="Upload Resume" />
          <button className='bg-[#673AB7] md:ml-[42%] text-white font-bold py-3 px-4 rounded-md w-full md:w-auto'>
            Scan Your Resume
          </button>
        </div>
      </div>

      {/* Page 4 */}
      <div className='bg-[#DBE2F2B2] flex flex-col md:flex-row h-full md:h-[80vh] w-full'>
      
      <div className='left order-2 md:order-1 md:mt-1 pb-3 w-full md:w-[60vw] pl-4 md:pl-20 md:pr-40 flex flex-col justify-center'>
        <h1 className='pt-10 md:pt-1 text-3xl md:text-5xl font-bold text-center md:text-left'>
          Rewrite your resume with AI
        </h1>
        <p className='mt-4 md:mt-6 text-lg md:text-xl font-medium text-center md:text-left'>
          Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.
        </p>
        <p className='mt-4 md:mt-6 text-lg md:text-xl font-medium text-center md:text-left'>
          Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.
        </p>
      </div>
      <div className='right  order-1 md:order-2 w-full md:w-[40vw] flex justify-center md:justify-start mt-8 md:pt-14'>
        <img className='w-full h-auto md:h-[50vh] object-cover' src={image3} alt="AI Resume" />
      </div>
    </div>

    {/* Page 5 */}
    <div className='flex flex-col md:flex-row h-full md:h-[80vh]'>
      {/* Image Section */}
      <div className='md:w-[40%] w-full flex justify-center md:justify-start order-1 md:order-1'>
        <img className='w-full md:w-[70%] h-auto md:h-[70vh] object-cover' src={image4} alt="ATS Understanding" />
      </div>

      {/* Text Section */}
      <div className='md:w-[60%]  w-full py-10 md:py-20 order-2 md:order-2'>
        <h1 className='text-3xl md:text-5xl font-bold ml-4 md:ml-8 mt-5 md:mt-7'>Get an ATS Understanding Check</h1>
        <p className='text-lg md:text-xl font-medium ml-4 md:ml-8 mt-4 md:mt-5 pr-4 md:pr-48'>
          Part of the resume checker score we assign is based on the parsability rate of your resume. We’ve reverse-engineered the most popular applicant tracking systems currently used and we look for signs of ATS compatibility. For each resume uploaded, we look for skills and keywords connected to the job and industry you’re applying for, readable contact information, file type, and length. Then, we’ll give you suggestions on how to improve your resume.
        </p>
      </div>
    </div>

      {/* Page 6 */}
      <div className='bg-[#DBE2F2B2] flex flex-col md:flex-row h-full md:h-[80vh] w-full'>
      {/* Text Section */}
      <div className='w-full md:w-[60vw] pl-4 md:pl-36 order-2 md:order-1 flex flex-col justify-center'>
        <h1 className='text-3xl pt-5 md:text-5xl font-bold'>Use the Best Resume Builder in the Industry</h1>
        <p className='mt-4 md:mt-6 text-lg md:text-xl font-medium'>
          Get your resume rewritten by the world’s best AI engine (ChatGPT 4.0) in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for to save time.
        </p>
        <p className='mt-4 mb-6 md:mt-6 text-lg md:text-xl font-medium'>
          Receive content suggestions based on the sections your resume currently has. Generate a resume summary or objective based on your experience. Get skills suggestions based on the industry you’re applying for. Omit buzzwords, filler words, and irrelevant content.
        </p>
      </div>
      <div className='w-full md:w-[40vw] order-1 md:order-2 flex justify-center'>
        <img className='w-full md:w-auto h-auto md:h-[50vh] object-cover mt-4 md:mt-20' src={image5} alt="Best Resume Builder" />
      </div>
    </div>

      {/* Page 7 */}
      <div
  className='bg-gradient-to-r from-gray-200 to-[#673AB7] p-6 md:p-20'
>
  <h1 className='text-3xl md:ml-[30%] md:text-5xl font-bold text-center md:text-left'>
    Get Your Resume Score Now!
  </h1>
  <p className='text-lg md:ml-[25%] md:text-xl mt-6 md:mt-8 font-semibold text-center md:text-left'>
    Upload your resume and you’ll get a personalized email with an actionable tasklist.
  </p>
  <p className='text-lg md:text-xl md:ml-[45%] md:mb-10 mt-6 md:mt-14 font-semibold text-center md:text-left'>
    Loved by interviewers at
  </p>
  <div className='flex flex-col md:flex-row gap-3 md:gap-9 justify-center md:ml-[10%] ml-[30%] text-white text-2xl md:text-3xl font-bold mt-8'>
    <p>Google</p>
    <p>Tesla</p>
    <p>Facebook</p>
    <p>Amazon</p>
  </div>
</div>


      {/* Page 8 */}
      <div>
        <img src={image7} alt="" />
      </div>
    </>
  );
}

export default Builder;
