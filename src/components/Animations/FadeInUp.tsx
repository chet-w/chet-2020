import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode,
  transition?: any
}

const FadeInUp = ({ children, transition }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      { children }
    </motion.span>
  )
}

export default FadeInUp
