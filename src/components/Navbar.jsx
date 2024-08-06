import React from 'react'

function Navbar() {
    return (
        <>
            <div className=' border-b-2 fixed top-0 right-0 left-0 z-50 flex justify-between px-10 w-screen h-[64px] pt-2 bg-white'>
                <div>
                    <h1 className='font-bold  text-2xl ml-20 mt-[4%]'>Resume.ai</h1>
                </div>
                <div className='flex gap-4  mr-7'>
                    <div className='text-xl mt-[1%] flex gap-14'>
                        <a href="">Home</a>
                        <a href="">ATS Resume</a>
                        <a href="">Cover Letter</a>
                        <a href="">Pricing</a>
                    </div>
                    <div>
                        <button className='bg-[#673AB7] rounded-md p-3 text-white w-[8vw]'>Get Started</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar