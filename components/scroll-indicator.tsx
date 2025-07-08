"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if at bottom - hide only when can't scroll anymore
      const bottomThreshold = documentHeight - windowHeight - 50
      setIsAtBottom(scrollTop >= bottomThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    const currentPosition = window.scrollY
    const windowHeight = window.innerHeight
    const nextPosition = currentPosition + windowHeight
    
    window.scrollTo({
      top: nextPosition,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {!isAtBottom && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.button
            onClick={scrollToNext}
            className="group relative p-3 bg-background/80 backdrop-blur-md border border-border/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Animated chevron */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-200" />
            </motion.div>
            
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
