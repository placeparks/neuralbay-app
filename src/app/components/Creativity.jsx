import React from 'react'
import Image from 'next/image'

const Creativity = () => {
  return (
    <div className='h-screen text-white mt-72 pb-40 pt-20 relative'>
          <div className='flex flex-col mb-20 text-center items-center justify-center gap-2.5'>
          <p className="text-transparent gradient-text animate-gradient text-2xl tracking-[.15em]">
          UNLOCKING THE HUMAN SPARK
              </p>  
              <h1 className=' poppins-semibold text-3xl md:text-basecustom w-2/4'>Empowering The Frontiers Of <span className='text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>AI Creativity</span></h1>
              <p className='poppins-regular text-xl'>Diving into the realms where the human spark ignites AI creativity.</p>
          </div>
          
          <div className='flex flex-row ml-36 gap-20 justify-center items-center relative'>
              <div className='flex flex-col gap-10'>
              
              <div class="relative w-[491px] h-[180px] rounded-[40px] bg-gradient-to-tr from-[#985cf1] to-[#3023b9] p-[2px] shadow-lg flex justify-center items-center transition-all duration-3000 delay-300 hover:bg-gradient-to-tr hover:from-[#4c57cf] hover:via-[#d062b3] hover:to-[#fac276]">
    <div class="bg-gradient-to-tr from-[#12113d] to-[#070232] w-full h-full p-4 rounded-[38px] flex justify-center items-center">
        <div class="flex flex-row items-center justify-center gap-4">
            <img class="h-12 w-12" src="/assets/creativity/image1.png" alt="" />
            <p class="poppins-semibold text-center text-2xl text-white">Create your unbiased AI</p>
        </div>
    </div>
</div>


              
<div class="relative w-[491px] h-[180px] rounded-[40px] bg-gradient-to-tr from-[#985cf1] to-[#3023b9] p-[2px] shadow-lg flex justify-center items-center transition-all duration-3000 delay-300 hover:bg-gradient-to-tr hover:from-[#4c57cf] hover:via-[#d062b3] hover:to-[#fac276]">
    <div class="bg-gradient-to-tr from-[#12113d] to-[#070232] w-full h-full p-4 rounded-[38px] flex justify-center items-center">
        <div class="flex flex-row items-center justify-center gap-4">
            <img class="h-12 w-12" src="/assets/creativity/image2.png" alt="" />
            <p class="poppins-semibold text-center text-2xl text-white">Reduced bias with blockchain</p>
        </div>
    </div>
</div>

              
<div class="relative w-[491px] h-[180px] rounded-[40px] bg-gradient-to-tr from-[#985cf1] to-[#3023b9] p-[2px] shadow-lg flex justify-center items-center transition-all duration-3000 delay-300 hover:bg-gradient-to-tr hover:from-[#4c57cf] hover:via-[#d062b3] hover:to-[#fac276]">
    <div class="bg-gradient-to-tr from-[#12113d] to-[#070232] w-full h-full p-4 rounded-[38px] flex justify-center items-center">
        <div class="flex flex-row items-center justify-center gap-4">
            <img class="h-12 w-12" src="/assets/creativity/image3.png" alt="" />
            <p class="poppins-semibold text-center text-2xl text-white">Explore usecases</p>
        </div>
    </div>
</div>

                  </div>

        <div>
        <img src="/assets/creativity/blob.png" alt="Blob" class="blob" height="500" width="500" />

        <Image src='/assets/creativity/Hand.png' height={800} width={800} alt='Hand' className='z-10 relative' />
        </div>
      </div>
    </div>
  )
}

export default Creativity
