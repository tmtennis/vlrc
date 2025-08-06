"use client"

import React from "react"
import { motion } from "framer-motion"

const titleVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
}

export function AnimatedTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariants}
        className={className}
      >
        {children}
      </motion.h2>
    </div>
  )
}
