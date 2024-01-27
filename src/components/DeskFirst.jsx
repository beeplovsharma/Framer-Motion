import React, { useEffect, useState } from "react";
import { animate, motion ,stagger} from "framer-motion";
const DeskFirst = () => {
    const [hover, setHover] = useState(false)
    let lines = [1,2,3,4,5,6,7,1,1,1,1,1,1,1,1,1,8,9,10,11,12,13,14,15,16,17,18,19,20];
    
  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col gap-4 justify-center items-center">
        {lines.map((x, i) => (
          <motion.span
            className="h-[1px] w-full block bg-[salmon]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 2,
              ease: [0.87, 0, 0.13, 1],
              repeat:Infinity,
              repeatType:"reverse"
            }}
          ></motion.span>
        ))}
      </div>

      {/* <div className="w-full min-h-screen flex justify-center items-center bg-zinc-800 gap-[100px] lg:flex-col">
        <div className="relative ">
          <motion.img
            src="https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-[300px] rounded-[50px]"
            whileHover={{
              scale: 1.02,
              rotate: -5,
            }}
          />
        </div>

        <div className="">
          <h1 className="text-4xl font-bold text-[salmon] lg:text-center">
            MODEL HARLEY !
          </h1>
          <h3 className="w-[450px] text-white lg:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est culpa
            adipisci dolores earum. Laboriosam eos laudantium nisi natus quam
            commodi, id odio officia asperiores pariatur reiciendis voluptates
            dolores recusandae atque!
          </h3>
        </div>
      </div>

      <div className="absolute w-full h-screen flex justify-center items-center bg-zinc-800">
        <img
          src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-[500px] rounded-3xl"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        {hover && (
          <motion.div
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
            className="flex justify-center items-center w-[250px] h-[150px] absolute top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-600"
          >
            <h1 className="text-[white] text-4xl text-center">
              Our Indian Culture
            </h1>
          </motion.div>
        )}
      </div> */}
    </>
  );
};

export default DeskFirst;
