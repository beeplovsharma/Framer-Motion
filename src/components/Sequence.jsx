import React, { useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
const Sequence = () => {
    const [spin, setSpin] = useState(false)
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
        <AnimatePresence>
          {spin && (
            <motion.div
              className="button text-center flex justify-center items-center w-[120px] h-[120px] bg-black rounded-2xl text-white"
              initial={{
                x: -250,
              }}
              animate={{
                x: 0,
                y: [0, -80, 0],
                rotate: [0, 120, 240, 360],
              }}
              exit={{
                x: 250,
                opacity:0
              }}
              transition={{
                duration: 1,
              }}
            >
              Initial <br /> Animate <br /> Exit
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setSpin(!spin)}
          layout
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: 10 }}
          className="bg-zinc-600 text-white px-4 py-2 rounded-3xl"
        >
          {spin ? "Stop" : "Spin"}
        </motion.button>
      </div>
    </>
  );
}

export default Sequence