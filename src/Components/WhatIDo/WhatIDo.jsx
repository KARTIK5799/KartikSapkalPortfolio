import './WhatIDo.scss'
import { motion,useScroll,useTransform } from 'framer-motion'
import { useRef} from 'react'

const WhatIDo = () => {
const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","50%"]);
    
  return (
    <div className='parallax' ref={ref}>
        <motion.h1 style={{y:yText}} className="parallaxText gradientText">Who I Am?</motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div style={{y:yBg}} className='planets'></motion.div>
      <motion.div style={{x:yBg}} className='stars'></motion.div>
    </div>
  )
}

export default WhatIDo
