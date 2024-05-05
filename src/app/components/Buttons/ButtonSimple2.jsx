import React from 'react'
import Image from 'next/image';

const Button = ({title, iconSrc}) => {
  return (
<button 
  className="flex flex-row items-center gap-2 opacity-100 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] px-8 md:px-10 py-2 bg-gradient-to-r from-[rgba(152,95,241,1)] to-[rgba(48,35,185,1)] hover:bg-gradient-to-r hover:from-[rgba(79,12,183,1)] hover:to-[rgba(4,2,22,1)] rounded-full text-white font-light transition duration-200 ease-linear"
      >
 {iconSrc && <Image src={iconSrc} alt="Star" width={20} height={20} />}
      {title}
</button>

  )
}

export default Button