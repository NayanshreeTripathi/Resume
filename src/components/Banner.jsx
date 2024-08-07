import React from 'react';

import image8 from "../assets/images/image8.jpeg";

function Banner() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row w-screen h-auto md:h-[100vh] pt-16 md:pt-32 px-6 md:px-32'>
        <div className='left w-full md:w-[60%]'>
          <div>
            <h1 className='text-lg md:text-xl'><span className='text-orange-500'>Home</span> » Resume Builder</h1>
          </div>
          <div className='pt-6 md:pt-10'>
            <h1 className='text-3xl md:text-7xl font-bold'>The Best Online AI Resume Builder</h1>
            <h2 className='pt-4 md:pt-8 text-lg md:text-2xl md:pr-32'>
              See what our AI resume builder can do for you by trying it for free today. We provide fast and easy options that showcase your best to employers.
            </h2>
          </div>
          <div className='mt-4 md:mt-6'>
            <button className='bg-[#673AB7] rounded-md text-white w-32 md:w-40 py-2 md:py-3'>Build My Resume</button>
          </div>
          <div className='mt-4 md:mt-7 flex gap-1 items-center'>
            <img src={image8} alt="" className='w-12 md:w-auto' />
          </div>
        </div>

        <div className='right w-full md:w-[40%] flex justify-center md:justify-end'>
          <img className='h-60 md:h-[70vh] w-auto md:w-[50vw]' src="https://cdn.enhancv.com/localizedImages/640/i/L2xvY2FsaXplZC9fbmV4dC9zdGF0aWMvaW1hZ2VzL2F0cy1jaGVja2VyLWRiZGY3NTA4NGUzMmQ1NmYxMDZhMzIzNTcwNmQ1ZTIyLndlYnA~.webp" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
