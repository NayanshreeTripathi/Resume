import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='border-b-2  fixed top-0 right-0 left-0 z-50 flex justify-between px-4 md:px-10 w-screen h-[12%] pt-2 bg-white'>
        <div>
          <h1 className='font-bold text-xl md:text-2xl ml-4 md:ml-20 mt-[10%] md:mt-[2%]'>Resume.ai</h1>
        </div>
        <div className='hidden md:flex gap-4 mr-7'>
          <div className='text-base md:text-xl mt-[1%] flex gap-4 md:gap-14'>
            <a href="#">Home</a>
            <a href="#">ATS Resume</a>
            <a href="#">Cover Letter</a>
            <a href="#">Pricing</a>
          </div>
          <div>
            <button className='bg-[#673AB7] rounded-md p-2 md:p-3 text-white w-[24vw] md:w-[8vw]'>Get Started</button>
          </div>
        </div>
        <div className='flex md:hidden  pb-6 items-center'>
          <button onClick={toggleMenu} className='text-xl'>
            ☰
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className='flex flex-col justify-center items-center gap-4 mt-20 px-4'>
          <a href="#">Home</a>
          <a href="#">ATS Resume</a>
          <a href="#">Cover Letter</a>
          <a href="#">Pricing</a>
          <button className='bg-[#673AB7] rounded-md p-2 text-white w-full'>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
