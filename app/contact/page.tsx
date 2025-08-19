"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#590d22',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>

      {/* BACK button - top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onClick={() => router.back()}
        style={{
          position: 'fixed',
          top: '10px',
          right: '20px',
          background: 'transparent',
          border: '1px solid #ffccd5',
          color: '#ffccd5',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          zIndex: 100,
          borderRadius: '4px',
          transition: 'all 0.1s ease'
        }}
        whileHover={{
          backgroundColor: '#ffccd5',
          color: '#590d22',
          transition: { duration: 0.05 }
        }}
      >
        BACK
      </motion.button>
    </div>
  )
}
