import React, { useState } from 'react'
import '../App.css'
import {motion} from 'framer-motion';

function ExpandCard() {
    const [expand, setExpand] = useState(false)
  return (
    <>
        <div id='page-1' className='w-full h-screen bg-gradient-to-r from-[#2c5364] to-[#203a43]'>
            <motion.div layout id='p1-box' className='bg-white px-6 py-4' 
            style={{  borderRadius: "15px",
            }}
            transition={{layout:{duration:1,type:"spring"}}} onClick={()=>setExpand(!expand)}>
                
                <motion.h1 className='font-bold'
                layout="position">Framer Motion 🚀</motion.h1>

                {expand && <motion.div className='text-sm w-[350px]'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}>
                    <p>A cool animating expandable card created using framer-motion.</p>
                    <p className='italic'>Designed by Beeplov.</p>
                </motion.div>}
                
            </motion.div>
        </div>
    </>
  )
}

export default ExpandCard