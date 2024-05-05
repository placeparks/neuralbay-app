import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../../utils/cn';

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 0.3,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  const initialGradient = "linear-gradient(to right, rgba(142, 90, 236, 1), rgba(55, 40, 189, 1))";
  const hoverGradient = "linear-gradient(to right, rgba(250, 194, 118, 1), rgba(208, 98, 179, 1), rgba(76, 87, 207, 1))";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
        initial={{ background: initialGradient }}
        animate={{
          background: hovered ? hoverGradient : initialGradient
        }}
        transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.3 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
