import React from 'react'
import Card4 from './Card4'
import Card5 from './Card5'

function Page3() {
  return (
    <div className='bg-[#FAFBFD] w-screen h-full p-2 md:p-5'>
      <div className='md:p-4 md:mt-0 mt-5 justify-center flex flex-col' >
        <h1 className='md:pl-[38%] pl-[5%] md:text-4xl text-3xl font-bold '>Upload Your Resume!</h1>
        <h2 className='md:pl-[30%] pl-[5%] md:text-2xl text-lg font-normal mt-[2%]'>Its seems like you have not uploaded your resume till now</h2>
      </div>
      <div className='flex md:flex-row flex-col justify-center h-[100vh] mt-5 md:gap-20  md:p-6 md:relative md:h-[55vh]'>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
      </div>
      <div className='mt-1 md:pl-[45%] pl-[28%] p-[1%]'>
        <button className='bg-[#673AB7] text-white h-10 px-4 rounded-md  font-medium'>Scan Your Resume</button>
      </div>
    </div>
  )
}

export default Page3