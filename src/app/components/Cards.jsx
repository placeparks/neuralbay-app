"use client"
import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css';

const Cards = () => {
    const [variant, setVariant] = useState('default');

    useEffect(() => {
        const variants = ['variant2', 'variant4', 'default'];
        let currentVariant = 0;

        const interval = setInterval(() => {
            setVariant(variants[currentVariant]);
            currentVariant = (currentVariant + 1) % variants.length;
        }, 900);  // Rotate every 900ms as per your duration requirement

        return () => clearInterval(interval);
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
        },
        {  // Fourth card data (if you want to iterate over it like others)
          imageSrc: '/assets/Frame4.png',
          title: 'Create Personalized AI Solutions',
          description: 'Fully customized and personalized AI tools designed to deliver robust and highly scalable AI solutions.'
        }
      ];

    return (
        <div className={`flex flex-col md:flex-row md:flex-wrap justify-center gap-8 ${styles.cardsContainer}`}>
        {cardsContent.map((card, index) => (
            <div key={index} className={`flex flex-col ${index === 3 ? styles.card4 : styles.card} ${styles[variant]}`}>
                <img src={card.imageSrc} alt={card.title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h1 className='text-3xl font-bold tracking-tight text-white poppins-bold'>{card.title}</h1>
                    <p className='font-normal text-xl text-gray-400 poppins-regular'>{card.description}</p>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Cards;