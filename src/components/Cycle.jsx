import React, { useState } from "react";
import {motion, useCycle} from 'framer-motion';

const Cycle = () => {
    // const [animate,cycle] = useCycle(
    //     {x:0},
    //     {x:105}
    // )

    const [plug, setPlug] = useState(false)

  return (
    <>
      <motion.div
        className="h-screen w-full flex justify-center items-center flex-col gap-8 text-4xl font-bold"
        animate={{
          backgroundColor: plug ? "white" : "black",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.h1
          animate={{
            color: plug ? "black" : "white",
          }}
        >
          TURN {plug ? "OFF" : "ON"} THE LIGHT !!!
        </motion.h1>
        <div>
          <div
            className="button w-[180px] h-[80px] bg-red-400 rounded-[100px] flex items-center relative"
            onClick={() => setPlug(!plug)}
          >
            <motion.div
              className="circle w-[60px] h-[60px] bg-white absolute left-2 rounded-[100px]"
              // animate={animate}
              // onTap={cycle}
              animate={{ x: plug ? 100 : 0 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Cycle;
