"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FeaturedPage() {
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

      {/* "tm." text above first line */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40, rotateX: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        style={{ position: 'absolute', top: 'calc(25vh - 200px)', left: '60px', fontSize: '12rem', color: '#ffccd5', fontWeight: 'normal', zIndex: 10, display: 'flex', alignItems: 'center', gap: '40px', cursor: 'pointer' }}
        onClick={() => window.open('https://tmtennis.co/', '_blank')}
      >
        tm.
      </motion.div>

      {/* "LNPWRLD" text above second line */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.7, filter: isLoaded ? "blur(0px)" : "blur(8px)" }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        style={{ position: 'absolute', top: 'calc(50vh - 200px)', left: '60px', fontSize: '12rem', color: '#ffccd5', fontWeight: 'normal', zIndex: 10, display: 'flex', alignItems: 'center', gap: '40px' }}
      >
        lnpwrld.
      </motion.div>

      {/* "frank." text above third line */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotateY: -15 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -60, rotateY: isLoaded ? 0 : -15 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        style={{ position: 'absolute', top: 'calc(75vh - 200px)', left: '60px', fontSize: '12rem', color: '#ffccd5', fontWeight: 'normal', zIndex: 10, display: 'flex', alignItems: 'center', gap: '40px', cursor: 'pointer' }}
        onClick={() => window.open('https://frank-1axapcqye-tmtmtmtmtm.vercel.app/', '_blank')}
      >
        frank.
      </motion.div>

      {/* BACK button - top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.25, delay: 0.35 }}
        onClick={() => router.back()}
        style={{ position: 'fixed', top: '20px', right: '20px', background: 'transparent', border: '1px solid #ffccd5', color: '#ffccd5', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', zIndex: 100, borderRadius: '4px', transition: 'all 0.08s ease' }}
        whileHover={{ backgroundColor: '#ffccd5', color: '#590d22', transition: { duration: 0.03 } }}
      >
        BACK
      </motion.button>

      {/* Restore the stroked lines */}
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'stretch' }}>
        {[1, 2, 3].map((_, index) => (
          <motion.div key={index} style={{ position: 'relative', width: '100%', height: '2px' }}>
            {/* Stroke line */}
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: 'left center' }}
              animate={{ scaleX: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.4 + (index * 0.07), ease: [0.87, 0, 0.13, 1] }}
              style={{ width: '100%', height: '2px', backgroundColor: '#ffccd5', transformOrigin: 'left center' }} 
            />
            {/* Subtle pulse effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: isLoaded ? [0, 1, 0] : 0, opacity: isLoaded ? [0, 0.4, 0] : 0 }}
              transition={{ duration: 1.2, delay: 1.2 + (index * 0.07), ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
              style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', height: '4px', backgroundColor: '#ffccd5', transformOrigin: 'left center' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
