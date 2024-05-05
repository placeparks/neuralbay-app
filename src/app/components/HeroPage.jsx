"use client"
import React, {useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import Button from './Buttons/ButtonFill';
import ButtonFill2 from './Buttons/ButtonFill2';

const Hero = () => {
  const [style, setStyle] = useState({ lineHeight: '5rem' });
  const videoRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {  
        setStyle({ lineHeight: '3rem'});  
      } else {
        setStyle({ lineHeight: '5rem'}); 
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 

    // Attempt to play video on load
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Video play failed:", error);
        }
      }
    };
    playVideo();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='bgimage md:h-screen h-[110vh] relative overflow-hidden'>
       <video autoPlay muted loop playsInline className='videoOverlay z-0 opacity-40 mix-blend-exclusion' ref={videoRef}>
          <source src="/assets/vidhero.mp4" type="video/mp4" />
        </video>
    <section className="z-10 absolute p-20 inset-0 flex items-center justify-between">
        <div className="grid w-full py-8 lg:py-16 lg:grid-cols-12">
          <div className="pt-20 w-11/12 md:pt-0 col-span-3 mr-auto place-self-center lg:col-span-7">
          <p className='text-transparent gradient-text animate-gradient text-2xl tracking-[.15em]'>WELCOME TO NEURALBAY</p>
                      <h1 className=" mb-4 text-3xl text-white md:text-basecustom xl:text-basecustom poppins-semibold" style={style}>
    Discover, Experiment, Buy & Sell Pretrained <span className='poppins-extrabold text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>AI</span> Models
</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl poppins-regular">A platform that allows individuals and organisations to buy and sell pretrained AI models and services securely and transparently using blockchain technology.</p>
            <div className='flex flex-row gap-2 md:gap-8'>
              <Button title='Explore'/>
              <ButtonFill2 title='Create' />
         </div>
          </div>
          <div className="flex lg:col-span-5 justify-center items-center lg:mt-0">
    <Image src="/assets/herosection/girl.png" alt="mockup" width={800} height={900} className='z-30 md:mr-0 h-60 md:h-full md:w-full'/>
</div>

        </div>
      </section>
      <div className="absolute -bottom-2 md:-bottom-10 left-0 w-full z-20 ">
                <Image src='/assets/herosection/Ellipse.png' layout="responsive" width={1440} height={300} alt='' objectFit="cover" />
            </div>
      </div>
  )
}

export default Hero;
