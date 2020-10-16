import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode,
  transition?: any,
  shouldAnimate?: boolean
}

const FadeInUp = ({ children, transition, shouldAnimate=true }: Props) => {

  const variants = {
    out: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 }
  };

  return (
    <motion.span
      variants={variants}
      initial="out"
      animate={shouldAnimate ? "in" : "out"}
      transition={transition}
    >
      { children }
    </motion.span>
  )
}

export default FadeInUp
