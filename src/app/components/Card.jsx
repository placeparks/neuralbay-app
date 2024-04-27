import React from 'react';

// CardItem component for individual cards
const CardItem = ({ imageSrc, title, description }) => {
  return (
    <div className="card-border max-w-sm bg-white border-t border-l border-r border-gray-200 rounded-lg shadow-md hover:scale-110 transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex justify-center items-center">
        <a href="#">
          <img className="rounded-t-lg" src={imageSrc} alt="" />
        </a>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white poppins-bold">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-xl text-gray-400 dark:text-gray-400 poppins-regular">{description}</p>
      </div>
    </div>
  );
};

  

// Main Card component that uses CardItem
const Card = () => {
  const cards = [
    {
      imageSrc: '/assets/Frame1.png',
      title: 'AI Marketplace',
      description: 'A diverse marketpace for AI models designed to  cater every need.'
    },
    {
      imageSrc: '/assets/Frame2.png',
      title: 'Github Experience',
      description: 'GitHub inspired platform  experience for AI models and solutions where you can find means to meet a AI needs under one roof.'
    },
    {
      imageSrc: '/assets/Frame3.png',
      title: 'Accessibility for All',
      description: 'A platform for everything AI ,made to meet the needs of freelancers to executives.'
    }
  ];

  return (
    <>
    <div className='flex flex-col md:flex-row gap-8 mb-8'>
      {cards.map((card, index) => (
        <CardItem key={index} imageSrc={card.imageSrc} title={card.title} description={card.description} />
      ))}
      
      </div>
   <div className='w-full md:w-5/6'>
      <a href="#" className="card-border flex flex-col items-center bg-white border-t border-l border-r border-gray-200 rounded-lg shadow md:flex-row hover:scale-110 transition-transform duration-300 ease-in-out  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal ml-0 md:ml-4 ">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white poppins-bold">Create Personalized AI Solutions</h5>
        <p className="mb-3 font-normal text-xl text-gray-400 dark:text-gray-400 poppins-regular"> Fully customized and  personalized AI tools designed  to deliver robust and highly scaleabe AI solutions</p>
          </div>
          <img className="object-cover p-4 rounded-t-lg md:rounded-none md:rounded-s-md w-full md:w-3/4" src="/assets/Frame4.png" alt="" />

        </a>
        </div>
      </>
  );
};

export default Card;
