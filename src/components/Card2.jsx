import React from 'react';
import image6 from '../assets/images/image6.jpeg';

function Card2() {
  return (
    <div className='bg-[#FAFBFD] md:w-[400px] md:m-5 m-8 w-[80vw] h-[50vh] relative shadow-lg ease-in md:h-[355px] border-2' style={{
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{
        background: '#673AB7',
        position: 'absolute',
        height: '52px',
        width: '52px',
        borderRadius: "50%",
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '8%',
        left: '5%'
      }}>
        <p className='text-lg'>2</p>
      </div>

      <div className='absolute top-[22%] left-[50%] transform -translate-x-1/2 w-[70%] md:w-[30vw] h-[20vh] md:h-[30vh]'>
        <img src={image6} alt="" className='object-contain w-full h-full' />
      </div>

      <div className='absolute top-[83%] left-[50%] transform -translate-x-1/2 text-center'>
        <a className='text-xl md:text-lg'>Tell us about Yourself</a>
      </div>
    </div>
  )
}

export default Card2;
