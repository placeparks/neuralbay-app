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
    <div className='bgimage md:h-screen h-[110vh] relative -mt-20 overflow-hidden'>
       <video autoPlay muted loop playsInline className='videoOverlay z-0 opacity-40 mix-blend-exclusion' ref={videoRef}>
          <source src="/assets/vidhero.mp4" type="video/mp4" />
        </video>
    <section className="z-10 absolute inset-0 flex items-center justify-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="pt-20 md:pt-0 col-span-3 mr-auto place-self-center lg:col-span-6">
          <p className='text-transparent text-1xl font-medium gradient-text bg-gradient-to-r from-customPurple-light to-customPurple-dark to-customPurple-dark animate-gradient tracking-widest'>WELCOME TO NEURALBAY</p>
                      <h1 className=" max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl xl:text-5xl poppins-extrabold" style={style}>
    Discover, Experiment, Buy & Sell Pretrained <span className='text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>AI</span> Models
</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl poppins-regular">A platform that allows individuals and organisations to buy and sell pretrained AI models and services securely and transparently using blockchain technology.</p>
            <div className='flex flex-row gap-2 md:gap-8'>
              <Button title='Explore' iconSrc='/assets/Star.png'/>
              <ButtonFill2 title='Create' />
         </div>
          </div>
          <div className="flex lg:col-span-6 justify-center items-center lg:mt-0">
    <Image src="/assets/girl.png" alt="mockup" width={800} height={900} className='z-30 ml-32 md:ml-0 h-60 md:h-auto'/>
</div>

        </div>
      </section>
      <div className="absolute bottom-0 md:-bottom-12 left-0 w-full z-20">
                <Image src='/assets/Ellipse.png' layout="responsive" width={1440} height={100} alt='' objectFit="cover" />
            </div>
      </div>
  )
}

export default Hero;

