import React from 'react';
import Image from 'next/image';
import styles from './ExploreCard.module.css';

const Explore = () => {
    const cardData = [
        {
            imageSrc: '/assets/Layer_1.png',
            title: 'Audio Creation',
            description: 'Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by.'
        },
        {
            imageSrc: '/assets/Layer_2.png',
            title: 'Image Generation',
            description: 'Neural bay is the ultimate AI Model Marketplace. By the help of this AI model you can easily generate images in seconds.'
        },
        {
            imageSrc: '/assets/Layer_3.png',
            title: 'Translation',
            description: 'Neural bay is the ultimate AI Model Marketplace. By the help of this AI model you can easily generate images in seconds.'
        },
        {
            imageSrc: '/assets/Layer_4.png',
            title: 'Object Detection',
            description: 'Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by..'
        },
        {
            imageSrc: '/assets/Layer_5.png',
            title: 'Text Generation',
            description: 'Neural bay is the ultimate AI Model Marketplace. By the help of this AI model you can easily generate images in seconds.'
        },
        {
            imageSrc: '/assets/Layer_6.png',
            title: 'Finance',
            description: 'Neural bay is the ultimate AI Model Marketplace. By the help of this AI model you can easily generate images in seconds.'
        }
    ];

    return (
        <div className='h-screen mb-20'>
        <div className='z-0 flex justify-end gradient-mask mt-10 md:mt-32'></div>
      <div className='z-10 text-white flex flex-col -mt-96 p-4 pl-8 md:pl-32 md:w-3/5 w-full'>
        <p className="text-transparent mb-4 font-medium gradient-text2 animate-gradient tracking-widest -mt-0 md:-mt-80">
          DISCOVER & EXPLORE
        </p>     
        <h1 className='poppins-semibold text-3xl md:text-5xl leading-[3rem]'>Discover An Extensive Range of <span className='text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>AI Models</span> To Explore</h1>
          </div>
            
          <div className='flex flex-wrap justify-center gap-12 p-4 md:p-0 mt-0 md:-mt-28'>
            {cardData.map((card, index) => (
                <div key={index} className={`${styles.card} max-w-sm p-6 bg-customCardColor-dark shadow-md`}>
                    <div className='flex flex-row justify-between mb-4'>
                        <Image src={card.imageSrc} alt={card.title} height={60} width={60} className='mb-4'/>
                        <img src='/assets/Arrow.png' alt='' className='h-8 w-16 mt-4'/>     
                    </div>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{card.title}</h5>
                    <p className="font-normal text-gray-500 dark:text-gray-400">{card.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Explore;
