import { useState } from 'react';

function Card4() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='m-5'>
            <div 
                className='bg-[#DBE2F299] relative border-2 border-spacing-1 rounded-sm md:w-[60vw] md:h-[45vh] w-[85vw] h-[45vh] xl:w-[22vw] lg:w-[35vw] xl:h-[45vh] sm:w-[65vw] sm:h-[45vh]' 
                style={{ border: '2px dotted grey' }}
            >
                <div>
                    <p className='absolute text-xl font-bold top-[40%] left-[40%] md:left-[45%] lg:top-[40%] lg:left-[35%] sm:left-[28%]'>
                        Resume
                    </p>
                    <p className='absolute text-sm top-[50%] md:left-[30%] left-[15%] lg:left-[16%] sm:left-[25%]'>
                        Drag-n-drop or upload your resume
                    </p>
                </div>
                <div 
                    className='bg-[#FAFBFD] md:left-[30%] w-[53vw] sm:w-[25vw] lg:w-[13vw] rounded-3xl absolute left-[20%] sm:left-[25%] lg:left-[15%] flex items-center top-[60%] h-[7vh] p-1 cursor-pointer'
                    onClick={openModal}
                >
                    <div className='m-2'>
                        <svg width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_85_612)">
                                <path d="M30 29.9993L22.5 22.4993M22.5 22.4993L15 29.9993M22.5 22.4993V39.3743M38.2312 34.4805C40.06 33.4836 41.5047 31.906 42.3373 29.9967C43.1698 28.0875 43.3429 25.9554 42.8291 23.9368C42.3154 21.9183 41.144 20.1284 39.5 18.8495C37.856 17.5706 35.8329 16.8757 33.75 16.8743H31.3875C30.82 14.6791 29.7622 12.6412 28.2936 10.9137C26.8251 9.18614 24.9841 7.81402 22.9089 6.90044C20.8338 5.98686 18.5785 5.5556 16.3127 5.63908C14.0469 5.72256 11.8295 6.31861 9.82719 7.38242C7.8249 8.44623 6.08982 9.95012 4.7524 11.781C3.41498 13.6119 2.51003 15.7222 2.10557 17.9532C1.70112 20.1841 1.80768 22.4778 2.41726 24.6617C3.02684 26.8455 4.12357 28.8628 5.62499 30.5618" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_85_612">
                                    <rect width="45" height="45" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className='px-4 text-sm sm:text-base'>Upload Resume</div>
                </div>

                {isModalOpen && (
                    <div className='fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50'>
                        <div className='bg-white p-8 rounded-lg shadow-lg z-60 w-[80vw] sm:w-[50vw] lg:w-[30vw]'>
                            <h2 className='text-2xl font-bold mb-4'>Upload Resume</h2>
                            <input type='file' className='mb-4' />
                            <button
                                onClick={closeModal}
                                className='bg-blue-500 text-white px-4 py-2 rounded'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card4;
