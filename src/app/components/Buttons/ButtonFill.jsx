"use client"
import React from 'react';

const Button = ({ title }) => {

  return (
<button className="buttonContainer">
      <span className="star star1">✦</span>
      <span className="star star2">✦</span>
      <span className="star star3">✦</span>
     <span className='pl-4'> {title}</span>
    </button>
  )
}

export default Button;
