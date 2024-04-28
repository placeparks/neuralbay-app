"use client"
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [variant, setVariant] = useState('default');

  useEffect(() => {
    const variants = ['default', 'variant2', 'variant4'];
    let currentVariant = 0;

    const interval = setInterval(() => {
      setVariant(variants[currentVariant]);
      currentVariant = (currentVariant + 1) % variants.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const variantClasses = {
    default: 'border-t-2 border-[rgba(152,95,241,1)]', 
    variant2: 'border-l-2 border-[rgba(48,35,185,1)]', 
    variant4: 'border-r-2 border-[rgba(152,95,241,1)]'
  };

  return (
    <div className="flex justify-center items-center p-2 md:pl-32 md:pr-32">
    <div className={` transition duration-300 ease-in-out ${variantClasses[variant]} transform scale-80 hover:scale-100`}>
        <div className='relative bg-gradient-to-r from-[#12113D] to-[#070132] rounded-tr-2xl rounded-tl-2xl shadow-lg border-3 border-transparent'>
          <a href="#" className="flex md:flex-row flex-col items-center">
            <img className="rounded-t-lg pt-2 md:pt-0 md:rounded-none md:rounded-l-lg w-full md:w-3/4" src="/assets/Frame4.png" alt="Create Personalized AI Solutions" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-white poppins-bold">Create Personalized AI Solutions</h5>
              <p className="mb-3 font-normal text-xl text-gray-400 poppins-regular">Fully customized and personalized AI tools designed to deliver robust and scalable AI solutions.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
