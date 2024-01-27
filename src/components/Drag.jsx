import React from 'react'
import {motion} from 'framer-motion'
const Drag = () => {

  return (
    <>
      <div className='h-screen w-full'>
        <motion.div
          className="box flex justify-center items-center text-2xl font-bold rounded-[50px] m-4 w-[200px] h-[200px] bg-[salmon]"
          drag
          dragConstraints={{
            left: 0,
            right: window.innerWidth - 250,
            top: 0,
            bottom: window.innerHeight - 250,
          }}
        >
            DRAG ME
        </motion.div>
      </div>
    </>
  );
}

export default Drag