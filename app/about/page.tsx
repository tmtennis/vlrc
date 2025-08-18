"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  
  // Your exact color palette
  const colors = [
    '#800f2f', // claret
    '#a4133c', // amaranthPurple
    '#c9184a', // roseRed
    '#ff4d6d', // brightPinkCrayola
    '#ff758f', // brightPinkCrayola2
    '#ff8fa3', // salmonPink
    '#ffb3c1', // cherryBlossomPink
    '#ffccd5', // pink
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length)
    }, 800) // RAPIDO! Changes every 0.8 seconds

    return () => clearInterval(interval)
  }, [colors.length])

  return (
    <div 
      style={{ 
        width: '100vw',
        height: '100vh',
        background: '#590d22',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}
    >

      {/* Vertical Stroke Line - Left side of SVG, full height */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
        style={{
          position: 'fixed',
          left: 'calc(100vw - 530px)',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#ffccd5',
          transformOrigin: 'top',
          zIndex: 4
        }}
      />

      {/* Horizontal Stroke Line - Below SVG, from left to vertical line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 'calc(100vh - 160px - 50px)',
          left: 0,
          width: 'calc(100vw - 530px)',
          height: '2px',
          backgroundColor: '#ffccd5',
          transformOrigin: 'right',
          zIndex: 4
        }}
      />

      {/* Statue of Liberty SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 2.0,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="statue-liberty"
        style={{
          position: 'fixed',
          bottom: '-160px', // Move down more so body is cut off by screen bottom
          right: '30px', // Move further right
          width: '500px',
          height: 'auto',
          zIndex: 5,
          transformOrigin: 'center bottom'
        }}
      >
        <div
          style={{
            width: '100%',
            height: 'auto',
            backgroundColor: colors[currentColorIndex],
            mask: 'url(/statue_of_liberty_PNG32.svg) no-repeat center',
            maskSize: 'contain',
            WebkitMask: 'url(/statue_of_liberty_PNG32.svg) no-repeat center',
            WebkitMaskSize: 'contain',
            aspectRatio: '1 / 2', // Adjust based on your SVG's actual ratio
            transition: 'background-color 0.6s ease-in-out'
          }}
        />
      </motion.div>

      {/* This is a blank about page */}
    </div>
  )
}
