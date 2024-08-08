import React from 'react'

function Card4() {
    return (
        <div className='m-5'>
            <div className='bg-[#DBE2F299] relative border-2  border-spacing-1 rounded-sm w-[85vw] h-[45vh] md:w-[22vw] md:h-[45vh]' style={{
                border: '2px dotted grey'
            }}>
                <div>
                    <p className='top-[40%] left-[35%] text-xl font-bold absolute '>Resume</p>
                    <p className='top-[48%] left-[11%] text-sm  absolute '>Drag-n-drop or upload your resume</p>
                </div>
                <div className='bg-[#FAFBFD] md:w-[13vw]  w-[53vw] rounded-3xl absolute left-[15%] flex items-center top-[60%] h-[7vh] p-1'>
                    <div className='m-2'>
                    <svg width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_85_612)">
                            <path d="M30 29.9993L22.5 22.4993M22.5 22.4993L15 29.9993M22.5 22.4993V39.3743M38.2312 34.4805C40.06 33.4836 41.5047 31.906 42.3373 29.9967C43.1698 28.0875 43.3429 25.9554 42.8291 23.9368C42.3154 21.9183 41.144 20.1284 39.5 18.8495C37.856 17.5706 35.8329 16.8757 33.75 16.8743H31.3875C30.82 14.6791 29.7622 12.6412 28.2936 10.9137C26.8251 9.18614 24.9841 7.81402 22.9089 6.90044C20.8338 5.98686 18.5785 5.5556 16.3127 5.63908C14.0469 5.72256 11.8295 6.31861 9.82719 7.38242C7.8249 8.44623 6.08982 9.95012 4.7524 11.781C3.41498 13.6119 2.51003 15.7222 2.10557 17.9532C1.70112 20.1841 1.80768 22.4778 2.41726 24.6617C3.02684 26.8455 4.12357 28.8628 5.62499 30.5618" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_85_612">
                                <rect width="45" height="45" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    </div>

                    <div className='px-3'>Upload Resume</div>

                </div>

            </div>
        </div>
    )
}

export default Card4