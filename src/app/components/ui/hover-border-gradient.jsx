"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(0); // Initial direction state as angle

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection(prevDirection => (prevDirection + 360 / 4) % 360); // Increment direction by 90 degrees
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  const movingGradient = `linear-gradient(${direction}deg, rgba(142, 90, 236, 1) 0%, rgba(55, 40, 189, 1) 100%)`;
  const highlightGradient = `linear-gradient(${direction}deg, rgba(250, 194, 118, 1) 20%, rgba(208, 98, 179, 1) 50%, rgba(76, 87, 207, 1) 80%)`;

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
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
        initial={{ background: movingGradient }}
        animate={{
          background: hovered ? highlightGradient : movingGradient
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
