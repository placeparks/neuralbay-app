"use client"
import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css'; // Ensure this path is correct and the CSS is properly loaded

const FourthCard = ({ variant }) => {
  return (
    <div className={`flex justify-center items-center hover:scale-110 transition-transform duration-300 ease-in-out md:p-0 p-4 `}>
      <div className='relative w-full md:w-5/6 bg-gradient-to-r from-[#12113D] to-[#070132] rounded-lg shadow-lg'>
        <a href="#" className="flex md:flex-row flex-col items-center">
          <img className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full md:w-3/4" src="/assets/Frame4.png" alt="Create Personalized AI Solutions" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-white poppins-bold">Create Personalized AI Solutions</h5>
            <p className="mb-3 font-normal text-xl text-gray-400 poppins-regular">Fully customized and personalized AI tools designed to deliver robust and highly scalable AI solutions.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
  const [variant, setVariant] = useState('default');

  useEffect(() => {
    const variants = ['variant2', 'variant4', 'default'];
    let currentVariant = 0;

    const interval = setInterval(() => {
      setVariant(variants[currentVariant]);
      currentVariant = (currentVariant + 1) % variants.length;
    }, 900); // Rotate every 900ms as per your duration requirement

    return () => clearInterval(interval);
  }, []);

  const cardsContent = [
    { imageSrc: '/assets/Frame1.png', title: 'AI Marketplace', description: 'A diverse marketplace for AI models designed to cater every need.' },
    { imageSrc: '/assets/Frame2.png', title: 'GitHub Experience', description: 'GitHub inspired platform experience for AI models and solutions where you can find means to meet AI needs under one roof.' },
    { imageSrc: '/assets/Frame3.png', title: 'Accessibility for All', description: 'A platform for everything AI, made to meet the needs of freelancers to executives.' }
  ];

  return (
    <div className='flex flex-wrap justify-center gap-8 p-4'>
      {cardsContent.map((card, index) => (
        <div key={index} className={`flex flex-col overflow-hidden rounded-t-3xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 ${styles.card} bg-gradient-to-b from-[#12113D] to-[#070132]`} style={{ width: '367px', height: '439px' }}>
          <img src={card.imageSrc} alt={card.title} className="w-full rounded-t-3xl object-cover" style={{ height: 'auto' }} />
          <div className="p-8 text-white">
            <h1 className='text-3xl font-bold tracking-tight poppins-bold'>{card.title}</h1>
            <p className='text-xl font-normal text-gray-400 poppins-regular'>{card.description}</p>
          </div>
        </div>
      ))}
      <FourthCard variant={variant} />
    </div>
  );
};

export default Cards;
