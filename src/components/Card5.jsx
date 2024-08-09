import React from 'react'

function Card5() {
    return (
        <div className='m-5'>
            <div className='bg-[#DBE2F299] relative border-2  border-spacing-1 rounded-sm w-[85vw] h-[45vh] md:w-[22vw] md:h-[45vh]' style={{
                border: '2px dotted grey'
            }}>
                <div>
                    <p className='top-[40%] left-[26%] text-xl font-bold absolute '>Job Description</p>
                    <p className='top-[48%] left-[14%] text-sm  absolute '>Paste or type the job-desciption here</p>
                </div>
                <div className='bg-[#FAFBFD] md:w-[13vw]  w-[53vw] rounded-3xl absolute left-[15%] flex items-center top-[60%] h-[7vh] p-1'>
                    <div className='m-2'>
                        <svg width="29" height="29" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.625 28.875H21.375V21.375H28.875V17.625H21.375V10.125H17.625V17.625H10.125V21.375H17.625V28.875ZM19.5 38.25C16.9062 38.25 14.4688 37.7656 12.1875 36.7969C9.90625 35.7969 7.92188 34.4531 6.23438 32.7656C4.54688 31.0781 3.20312 29.0938 2.20313 26.8125C1.23438 24.5312 0.75 22.0938 0.75 19.5C0.75 16.9062 1.23438 14.4687 2.20313 12.1875C3.20312 9.90625 4.54688 7.92187 6.23438 6.23437C7.92188 4.54687 9.90625 3.21875 12.1875 2.25C14.4688 1.25 16.9062 0.75 19.5 0.75C22.0938 0.75 24.5313 1.25 26.8125 2.25C29.0938 3.21875 31.0781 4.54687 32.7656 6.23437C34.4531 7.92187 35.7812 9.90625 36.75 12.1875C37.75 14.4687 38.25 16.9062 38.25 19.5C38.25 22.0938 37.75 24.5312 36.75 26.8125C35.7812 29.0938 34.4531 31.0781 32.7656 32.7656C31.0781 34.4531 29.0938 35.7969 26.8125 36.7969C24.5313 37.7656 22.0938 38.25 19.5 38.25ZM19.5 34.5C23.6875 34.5 27.2344 33.0469 30.1406 30.1406C33.0469 27.2344 34.5 23.6875 34.5 19.5C34.5 15.3125 33.0469 11.7656 30.1406 8.85938C27.2344 5.95312 23.6875 4.5 19.5 4.5C15.3125 4.5 11.7656 5.95312 8.85938 8.85938C5.95312 11.7656 4.5 15.3125 4.5 19.5C4.5 23.6875 5.95312 27.2344 8.85938 30.1406C11.7656 33.0469 15.3125 34.5 19.5 34.5Z" fill="#1D1B20" />
                        </svg>

                    </div>

                    <div className='px-3 md:px-4'>Add Description</div>

                </div>

            </div>
        </div>
    )
}

export default Card5