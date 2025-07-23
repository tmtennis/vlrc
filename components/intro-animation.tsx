"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [animationPhase, setAnimationPhase] = useState<'typing' | 'searching' | 'hovering' | 'clicking' | 'complete'>('typing')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const targetText = "https://vitusclausen.com"
  const typingSpeed = 70 // milliseconds per character

  useEffect(() => {
    // Check if animation has been played before
    const introPlayed = localStorage.getItem("introPlayed")
    // Temporarily disable the localStorage check to always show the animation
    // if (introPlayed === "true") {
    //   setIsVisible(false)
    //   onComplete()
    //   return
    // }

    // Start typing animation after initial delay
    const startDelay = setTimeout(() => {
      let currentIndex = 0
      
      const typeInterval = setInterval(() => {
        if (currentIndex < targetText.length) {
          setTypedText(targetText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setShowCursor(false)
          
          // Brief pause then start cursor movement to search button
          setTimeout(() => {
            setAnimationPhase('searching')
            animateCursorToButton()
          }, 600)
        }
      }, typingSpeed)
    }, 1200)

    // Cursor blinking during typing
    const cursorInterval = setInterval(() => {
      if (animationPhase === 'typing') {
        setShowCursor(prev => !prev)
      }
    }, 500)

    return () => {
      clearTimeout(startDelay)
      clearInterval(cursorInterval)
    }
  }, [animationPhase, onComplete])

  const animateCursorToButton = () => {
    if (!searchButtonRef.current) return

    const buttonRect = searchButtonRef.current.getBoundingClientRect()
    const buttonCenter = {
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2
    }

    setCursorPosition(buttonCenter)
    
    // First phase: cursor moves to button and immediately switches to hand
    setTimeout(() => {
      setAnimationPhase('hovering')
    }, 600) // Cursor reaches button faster
    
    // Second phase: cursor changes to hand and clicks quickly
    setTimeout(() => {
      setAnimationPhase('clicking')
    }, 800) // Switch to clicking almost immediately
    
    // Final phase: complete animation quickly
    setTimeout(() => {
      setAnimationPhase('complete')
      
      // Mark as played and start smooth exit
      localStorage.setItem("introPlayed", "true")
      
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 400) // Faster exit
    }, 1000) // Much faster completion
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          scale: 1.05,
          filter: "blur(8px)"
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="fixed inset-0 z-50 bg-white flex flex-col font-roboto"
        style={{ fontFamily: 'var(--font-roboto)' }}
      >
        {/* Top navigation bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full flex justify-between items-center px-6 py-4 text-sm"
        >
          <div className="flex gap-6 text-gray-700">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Store</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 hover:underline cursor-pointer">Gmail</span>
            <span className="text-gray-700 hover:underline cursor-pointer">Images</span>
            <div className="w-6 h-6 p-1 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-center">
              <div className="w-4 h-4 grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-600 rounded-sm" />
                ))}
              </div>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium cursor-pointer hover:shadow-md transition-shadow">
              V
            </div>
          </div>
        </motion.div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Google logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-8"
          >
            <div className="text-7xl md:text-9xl font-normal leading-none tracking-tight">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </div>
          </motion.div>

          {/* Search container */}
          <div className="w-full max-w-xl">
            {/* Search bar - static like real Google */}
            <div
              className="relative bg-white rounded-full border border-gray-200 hover:shadow-lg transition-shadow duration-200 mb-8"
              style={{ 
                boxShadow: "0 2px 5px 1px rgba(64,60,67,.16)",
                height: "48px"
              }}
            >
              <div className="flex items-center h-full px-5">
                {/* Search icon */}
                <svg 
                  className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>

                {/* Typed text */}
                <div className="flex-1 text-lg text-gray-900 font-normal">
                  <span>{typedText}</span>
                  {showCursor && animationPhase === 'typing' && (
                    <motion.span 
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      className="text-gray-900 ml-0.5"
                    >
                      |
                    </motion.span>
                  )}
                </div>

                {/* Right side icons */}
                <div className="flex items-center gap-4 ml-4">
                  <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                  <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center gap-4"
            >
              <motion.button 
                ref={searchButtonRef}
                animate={{ 
                  backgroundColor: animationPhase === 'hovering' || animationPhase === 'clicking' ? "#f1f3f4" : "#f8f9fa"
                }}
                transition={{ duration: 0.2 }}
                className="px-5 py-3 text-sm text-[#3c4043] bg-[#f8f9fa] rounded hover:bg-gray-200 hover:shadow-sm transition-all duration-150 border border-[#f8f9fa] font-medium"
              >
                Google Search
              </motion.button>
              <button className="px-5 py-3 text-sm text-[#3c4043] bg-[#f8f9fa] rounded hover:bg-gray-200 hover:shadow-sm transition-all duration-150 border border-[#f8f9fa] font-medium">
                I'm Feeling Lucky
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full bg-[#f2f2f2] border-t border-gray-200"
        >
          <div className="px-6 py-3 text-sm text-[#70757a] flex justify-between items-center">
            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer">Advertising</span>
              <span className="hover:underline cursor-pointer">Business</span>
              <span className="hover:underline cursor-pointer">How Search works</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-xs">
                <span className="w-3 h-3 rounded-full bg-green-600 flex items-center justify-center">
                  <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                  </svg>
                </span>
                Carbon neutral since 2007
              </span>
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">Terms</span>
              <span className="hover:underline cursor-pointer">Settings</span>
            </div>
          </div>
        </motion.div>

        {/* Animated cursor for button interaction */}
        <AnimatePresence>
          {(animationPhase === 'searching' || animationPhase === 'hovering' || animationPhase === 'clicking') && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="fixed pointer-events-none z-50 w-6 h-8"
              style={{
                left: cursorPosition.x - 12, // Center the cursor
                top: cursorPosition.y - 4
              }}
            >
              {/* Cursor image - changes based on animation phase */}
              <motion.img
                key={animationPhase === 'hovering' || animationPhase === 'clicking' ? 'hand' : 'normal'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={animationPhase === 'hovering' || animationPhase === 'clicking' ? "/click.png" : "/cursor.png"}
                alt="Cursor"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationPhase === 'complete' ? 1 : 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Subtle overlay for smooth transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationPhase === 'complete' ? 0.1 : 0 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800 pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  )
}
