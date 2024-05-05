import React from 'react';
import Image from 'next/image';
import Button from './Buttons/ButtonSimple2';

const NFT = () => {
  return (
    <div>
      <section className="relative overflow-hidden mt-96 flex justify-end">
        <div className="max-w-screen-xl py-4 mb-8 lg:grid lg:grid-cols-12 gap-20 lg:py-16">
          <div className=" place-self-center -ml-20 lg:col-span-7 text-white">
            <p className="textProxima text-transparent gradient-text animate-gradient text-2xl tracking-[.15em]">
              UNLEASHING THE IMPLICIT OF
            </p>     
            <h1 className='poppins-semibold text-3xl md:text-basecustom'>
              AI Through The Power Of <span className='text-transparent bg-gradient-to-r from-customBlue-light to-customBlue-dark to-customBlue-dark gradient-text2'>NFTs</span>
            </h1>
            <p className='w-3/4 text-[#afafaf] text-xl poppins-regular'>
              As Non-Fungible Tokens (NFTs) revolutionize digital ownership, they serve as catalysts for AI's evolution. By imbuing AI with unique digital assets, NFTs empower artificial intelligence to explore new frontiers of creativity, innovation, and value creation.
            </p>
            <a href="#" className="inline-flex items-center justify-center py-8">
             <Button title="Explore more"/>
            </a>
          </div>
          <div className="relative lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="/assets/nfts/girl.png" width={500} height={500} alt="mockup" />
            <div className="absolute -bottom-12 w-full">
              <Image src='/assets/nfts/bottombg.png' layout="responsive" width={500} height={100} alt='' objectFit="cover" />
            </div>
          </div>                
        </div>
      </section>
    </div>
  );
}

export default NFT;
