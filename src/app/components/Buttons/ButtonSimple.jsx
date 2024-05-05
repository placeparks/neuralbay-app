import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const ButtonSimple = ({title}) => {
  return (
         <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-[rgba(54,46,116,0.6)] text-white flex items-center px-10 py-2"
      >
      {title}
      </HoverBorderGradient>
    </div>
  )
}

export default ButtonSimple;


