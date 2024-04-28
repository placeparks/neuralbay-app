import React from 'react'
import Cards from './Cards'

const Features = () => {
  return (
      <div className='bgsection mix-blend-exclusion flex flex-col pb-32 pt-12 p-4 min-h-screen text-white items-center justify-center'>
<p className="text-transparent mb-4 font-medium gradient-text2 animate-gradient tracking-widest">
  FEATURES & FUNCTIONALITIES
</p>
          <h1 className='text-3xl mb-4 md:mb-8 md:text-5xl poppins-semibold'>Our Powerful Features</h1>
          <p className='poppins-regular text-gray-400 w-full md:w-2/4 text-center pb-12'>Our Web 3 AI Model Marketplace is your one-stop destination for accessing, testing, and purchasing a wide range of AI models developed by talented AI engineers from around the world. </p>
<Cards/>
    </div>
  )
}

export default Features
