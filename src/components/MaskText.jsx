import React, { useEffect, useState } from "react";
// import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
export const MaskText = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mousePosition;
  const updateMousePosition = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const [isHovered, setisHovered] = useState(false);
  const size = isHovered ? 200 : 20;

  return (
    <>
      <div className="main w-full h-screen relative ">
        <div className="absolute w-full h-screen text-zinc-500 text-center flex flex-col justify-center items-center">
          <p className="w-[800px] text-[100px] font-bold">Who am I ?</p>
        </div>

        <motion.div
          className="mask w-full h-screen text-zinc-500 text-center flex justify-center items-center"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.5,
          }}
        >
          <p
            className="w-[800px] text-[50px] font-bold"
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
          >
            This is Beeplov , Your Mentor ! 🚀
          </p>
        </motion.div>
      </div>
    </>
  );
};
