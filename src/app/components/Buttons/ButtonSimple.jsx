import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const ButtonSimple = ({title}) => {
  return (
         <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-[rgba(54,46,116,0.9)] text-white dark:text-white flex items-center px-8 py-2"
      >
      {title}
      </HoverBorderGradient>
    </div>
  )
}

export default ButtonSimple;


