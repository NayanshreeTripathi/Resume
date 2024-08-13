import image4 from '../assets/images/image4.jpg'

function Page5() {
    return (
        <div className='bg-[#FAFBFD] flex flex-col lg:flex-row w-screen h-full lg:h-[80vh] p-5 lg:p-10'>
            <div className='lg:pl-[5%] lg:w-[40vw]'>
                <img className='h-full lg:h-[70vh]' src={image4} alt="" />
            </div>
            <div className='mt-10 lg:w-[60vw] lg:p-10'>
                <h1 className='lg:text-4xl text-2xl lg:pl-[10%] font-bold'>Get an ATS understanding check</h1>
                <p className='text-normal lg:mt-[7%] lg:pl-[10%] lg:pr-[20%]'>
                    Part of the resume checker score we assign is based on the parsability rate of your resume. We’ve reverse-engineered the most popular applicant tracking systems currently used and we look for signs of ATS compatibility.
                    For each resume uploaded, we look for skills and keywords connected to the job and industry you’re applying for, readable contact information, file type, and length. Then, we’ll give you suggestions on how to improve your resume.
                </p>
            </div>
        </div>
    )
}

export default Page5
