import React from 'react'
import Image from 'next/image'

const Innovation = () => {
    return (
      <>
      <div className='h-screen mt-52 flex flex-col justify-center items-center InnovationImg z-10 text-white'>
          <Image src='/assets/innovation/imagebg0.png' alt='' width={800} height={800} className='InnovationImg2' />
        
            </div>
            <div className='z-10 -mt-[600px] text-white flex flex-col justify-center items-center'>
          <p className="textProxima text-transparent gradient-text animate-gradient text-2xl tracking-[.15em]">
          THE GENESIS OF AI
        </p>     
        <h1 className='w-3/5 poppins-semibold text-center text-3xl md:text-basecustom'>Unveiling The Platform For Creative <span className='text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>AI Innovation</span></h1>
        </div>
            </>
  )
}

export default Innovation
