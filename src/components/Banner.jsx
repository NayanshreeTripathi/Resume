import React from 'react';
import BannerImg from './BannerImg';
import image9 from '../assets/images/image9.jpeg';

function Banner() {
  return (
    <>
      <div className='lg:px-9 flex flex-col lg:flex-row mt-[5%] bg-[#FAFBFD] h-full w-full'>
        <div className='left px-6 py-3 order-2 lg:order-1 lg:py-28 lg:px-20 w-[100vw] lg:w-[50vw]'>
          <div>
            <p className='lg:text-lg'> <span className='text-[#F89F4F]'>Resume.ai» </span>Resume Builder</p>
            <h1 className='text-[#1F2937] mt-[5%] lg:text-6xl text-3xl font-bold'>The Best Online AI Resume Builder</h1>
            <p className='text-[#374151] lg:text-xl font-normal mt-[2%] lg:pr-44'>See what our AI resume builder can do for you by trying it for free today. We provide fast and easy options that showcase your best to employers.</p>
          </div>
          <div className='lg:mt-[10%] mt-[5%]'>
            <BannerImg />
          </div>
        </div>
        <div className='w-[100vw] lg:w-[50vw] flex items-center justify-center object-contain right lg:order-2 order-1'>
          <img className='pt-[20%] lg:pt-[6%] pl-[5%]' src={image9} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
