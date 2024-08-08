import React from 'react';
import BannerImg from './BannerImg';
import BannerImg2 from './BannerImg2';
import image9 from '../assets/images/image9.jpeg'

import image8 from "../assets/images/image8.jpeg";

function Banner() {
  return (
    <>
      <div className='md:px-9 flex flex-col md:flex-row mt-[5%] bg-[#FAFBFD] h-full w-full '>

        <div className='left px-6 py-3 order-2 md:order-1 md:py-28  md:px-20 w-[100vw] md:w-[50vw]'>
          <div>
            <p className='md:text-lg'> <span className='text-[#F89F4F]'>Resume.ai» </span>Resume Builder</p>
            <h1 className='text-[#1F2937] mt-[5%] md:text-6xl text-3xl font-bold'>The Best Online AI Resume Builder</h1>
            <p className='text-[#374151] md:text-xl font-normal mt-[2%] md:pr-44'>See what our AI resume builder can do for you by trying it for free today. We provide fast and easy options that showcase your best to employers.</p>
          </div>
          <div className='md:mt-[10%] mt-[5%]'>
            <BannerImg />
          </div>
        </div>
        <div className='w-[100vw] md:w-[50vw] object-contain right md:order-2 order-1 '>
          {/* <BannerImg2/> */}
             <img className='pt-[20%]  md:pt-[6%] pl-[5%]' src={image9} alt="" />
        </div>
          
      </div>
    </>
  );
}

export default Banner;
