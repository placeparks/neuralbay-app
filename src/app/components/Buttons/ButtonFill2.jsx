import React from 'react'

const ButtonFill2 = ({ title }) => {
    return (
        <button className="p-[1px] relative rounded-full overflow-hidden group transition duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:hidden" />
        <div className="px-12 py-2 relative rounded-full bg-black text-white group-hover:bg-[rgba(28,25,104,0.9)] transition duration-300">
          {title}
        </div>
      </button>
    );
  };
  
  export default ButtonFill2;
  
      
