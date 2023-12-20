import React from 'react'
import { motion } from 'framer-motion'
import './Advantages.css'
import AdvantagesLeft from './AdvantagesLeft/AdvantagesLeft'
import AdvantagesRight from './AdvantagesRight/AdvantagesRight'


const contaainerAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  })
}

const Advantages = React.forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className='Advantages'>
        <motion.h2
          custom={1}
          variants={contaainerAnimation}
          className='AdvantagesTitle'>Մեր առավելություները</motion.h2>
        <motion.div
          custom={3}
          variants={contaainerAnimation}
          className='AdvantagesBlocks'>
          <AdvantagesLeft />
          <AdvantagesRight />
        </motion.div>
      </motion.div>
    </div>
  )
})

export default Advantages