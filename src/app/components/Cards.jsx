"use client"
import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css';
import Image from 'next/image';
import Card from './Card';
const Cards = () => {
  const [variant, setVariant] = useState('default');

  useEffect(() => {
      const variants = ['variant2', 'variant4', 'default'];
      let currentVariant = 0;

      const interval = setInterval(() => {
          setVariant(variants[currentVariant]);
          currentVariant = (currentVariant + 1) % variants.length;
      }, 1000);



      return () => {
          clearInterval(interval);
      };
  }, []);

    const cardsContent = [
        {
          imageSrc: '/assets/Frame1.png',
          title: 'AI Marketplace',
          description: 'A diverse marketplace for AI models designed to cater every need.'
        },
        {
          imageSrc: '/assets/Frame2.png',
          title: 'GitHub Experience',
          description: 'GitHub inspired platform experience for AI models and solutions where you can find means to meet AI needs under one roof.'
        },
        {
          imageSrc: '/assets/Frame3.png',
          title: 'Accessibility for All',
          description: 'A platform for everything AI, made to meet the needs of freelancers to executives.'
        }
      ];

    return (
        <div className={`flex flex-col md:flex-row md:flex-wrap justify-center gap-12 p-4 ${styles.cardsContainer}`}>
        {cardsContent.map((card, index) => (
          <div key={index} className={`flex flex-col ${index === 3 ? styles.card4 : styles.card} ${styles[variant]}`}>
            <div className='flex justify-center mb-3.5'>
              <Image src={card.imageSrc} alt={card.title} width={200} height={200} className='h-48 w-customWidth'  />
            </div>
                <div className={styles.cardContent}>
                    <h1 className='text-2xl poppins-bold tracking-tight text-white poppins-bold mb-2.5'>{card.title}</h1>
                    <p className='text-lg text-gray-400 poppins-regular leading-7'>{card.description}</p>
                </div>
            </div>
        ))}
<Card/>
    </div>
    );
};

export default Cards;