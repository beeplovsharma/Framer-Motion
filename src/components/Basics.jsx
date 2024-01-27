import React, { useState } from "react";
import { motion } from "framer-motion";
const Basics = () => {
  const [spin, setSpin] = useState(false)
  return (
    <>
      <div
        id="page-2 "
        className="w-full h-screen bg-gradient-to-r from-[#2c5364] to-[#203a43] flex"
      >
        <div className="h-screen w-[30%] bg-red-400 flex items-center justify-center">
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 200 }}
            transition={{
              duration: 1,
              delay: 2,
              ease: [0.64, 0, 0.78, 0],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="box flex justify-center items-center w-[90px] h-[90px] bg-white rounded-[50%]"
          >
            <h1 className="font-bold text-[12px] text-center">
              Bouncing <br /> Ball
            </h1>
          </motion.div>
        </div>

        <div className="w-[40%] h-screen flex justify-around items-center flex-col">
          <motion.div
            whileHover={{ opacity: 0.2, borderRadius: "50%" }}
            transition={{
              duration: 0.3,
            }}
            className="box w-[150px] h-[150px] bg-white rounded-[20px] flex justify-center items-center font-bold"
          >
            Make it Round !!
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{
              duration: 0.3,
            }}
            className="box w-[150px] h-[150px] bg-white rounded-[20px] flex flex-col justify-center items-center font-bold"
          >
            <p>Rotate Me !!</p>
            <p className="ulta">Can you see me?</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.3,
            }}
            className="box w-[150px] h-[150px] bg-white rounded-[20px] flex justify-center items-center font-bold"
          >
            Scale Me Up !!
          </motion.div>
        </div>

        <div className="w-[30%] h-screen bg-[pink] flex justify-center items-center">
          <motion.div
            className="box w-[150px] h-[150px] bg-white rounded-[20px] flex justify-center items-center font-bold"
            onClick={() => setSpin(!spin)}
            animate={{ rotate: spin ? 240 : 20 }}
            whileTap={{ cursor: "pointer" }}
          >
            Click Me
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Basics;
