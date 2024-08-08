import React from 'react'
import image7 from '../assets/images/image7.jpeg'

function card1() {
  return (
    <div className='bg-[#FAFBFD] md:w-[400px] md:m-5 m-8 w-[80vw] h-[50vh] relative shadow-lg ease-in md:h-[355px] border-2'style={{
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)'
    }}>

        <div style={{

            background: '#673AB7',
            position: 'absolute',
            height: '52px',
            width: '52px',
            borderRadius: "50%",
            color: 'white',
            padding: '3%',
            justifyContent: 'center',
            alignItems: 'center',
            top: '8%',
            left: '5%'
            
        }}>
            <p className='text-lg md:px-2 px-3'>1</p>
        </div>

        <div className='md:w-[13vw] md:h-[13vh] md:top-[20%] md:left-[25%]  left-[20%] top-[22%] absolute w-[50vw] h-[20vh] object-contain'>
            <img src={image7} alt="" />
        </div>

        <div className='absolute top-[83%] left-[22%] md:left-[24%]'>
            <a className='text-xl'>Pick a Resume Template</a>
        </div>
        

    </div>
  )
}

export default card1