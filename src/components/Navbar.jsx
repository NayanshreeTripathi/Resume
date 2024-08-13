import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='border-b-2 fixed top-0 right-0 left-0 z-50 flex justify-between px-4 lg:px-10 w-full h-[12%] pt-2 bg-white'>
        <div>
          <h1 className='font-bold text-lg sm:text-xl lg:text-2xl ml-4 lg:ml-20 mt-[5%] lg:mt-[2%]'>
            Resume.ai
          </h1>
        </div>
        <div className='hidden lg:flex gap-4 mr-7 items-center'>
          <div className='text-sm sm:text-base lg:text-xl flex gap-4 lg:gap-14'>
            <a href="#" className='hover:text-gray-700 transition'>Home</a>
            <a href="#" className='hover:text-gray-700 transition'>ATS Resume</a>
            <a href="#" className='hover:text-gray-700 transition'>Cover Letter</a>
            <a href="#" className='hover:text-gray-700 transition'>Pricing</a>
          </div>
          <div>
            <button className='bg-[#673AB7] rounded-md p-2 lg:p-3 text-white w-[40vw] sm:w-[20vw] lg:w-[8vw] hover:bg-[#5E32A8] transition'>
              Get Started
            </button>
          </div>
        </div>
        <div className='flex mb-[3%] mr-[10%] lg:hidden items-center'>
          <button onClick={toggleMenu} className=' text-2xl'>
            ☰
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg fixed top-[12%] left-0 right-0 z-40`}>
        <div className='flex flex-col justify-center items-center gap-4 py-8'>
          <a href="#" className='text-lg hover:text-gray-700 transition'>Home</a>
          <a href="#" className='text-lg hover:text-gray-700 transition'>ATS Resume</a>
          <a href="#" className='text-lg hover:text-gray-700 transition'>Cover Letter</a>
          <a href="#" className='text-lg hover:text-gray-700 transition'>Pricing</a>
          <button className='bg-[#673AB7] rounded-md p-3 text-white w-[80%] hover:bg-[#5E32A8] transition'>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
