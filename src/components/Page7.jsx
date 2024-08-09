import React from 'react'

function Page7() {
    return (
        <div className='w-screen h-full p-5 md:p-10' style={{
            background: 'linear-gradient(82.64deg, #D9D9D9 -1.49%, #673AB7 95.63%)'
        }}>
            <div>
                <p className='md:pl-[35%] md:text-4xl  text-2xl font-bold'>Get Your Resume Score Now!</p>
                <p className='md:pl-[27%] mt-6 text-lg md:text-xl'>Upload your resume and you’ll get a personalized email with an actionable tasklist.</p>
                <p className='md:pl-[45%] font-semibold md:text-lg mt-10 md:mt-20'>Loved by interviewers at</p>
            </div>

            <div className='text-white pl-[10%] font-bold flex md:flex-row flex-col gap-6 md:pl-[36%] text-2xl mt-4'>
                <p>Google</p>
                <p>Tesla</p>
                <p>Facebook</p>
                <p>Amazon</p>
            </div>
        </div>
    )
}

export default Page7