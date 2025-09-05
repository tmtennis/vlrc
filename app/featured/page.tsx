"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FeaturedPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
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
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      touchAction: 'manipulation'
    }}>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-featured-text {
            font-size: clamp(2.5rem, 10vw, 4rem) !important;
            left: 15px !important;
          }
          
          .mobile-back-button {
            padding: 6px 12px !important;
            font-size: 12px !important;
            top: 15px !important;
            right: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-featured-text {
            font-size: clamp(2rem, 8vw, 3rem) !important;
            left: 10px !important;
          }
        }
        
        /* Prevent text selection on mobile */
        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      {/* "tm" text above first line */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40, rotateX: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        className={isMobile ? 'mobile-featured-text' : ''}
        style={{
          position: 'absolute',
          top: isMobile ? 'calc(25vh - 40px)' : 'calc(25vh - 150px)',
          left: isMobile ? '15px' : '60px',
          fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : '12rem',
          color: '#ffccd5',
          fontWeight: 'normal',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          cursor: 'pointer',
          touchAction: 'manipulation'
        }}
        onClick={() => window.open('https://tmtennis.co/', '_blank')}
      >
        tm
      </motion.div>

      {/* "am" text above second line */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.7, filter: isLoaded ? "blur(0px)" : "blur(8px)" }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        className={isMobile ? 'mobile-featured-text' : ''}
        style={{
          position: 'absolute',
          top: isMobile ? 'calc(50vh - 40px)' : 'calc(50vh - 150px)',
          left: isMobile ? '15px' : '60px',
          fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : '12rem',
          color: '#ffccd5',
          fontWeight: 'normal',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          cursor: 'pointer',
          touchAction: 'manipulation'
        }}
      >
        am
      </motion.div>

      {/* "lnp" text above third line */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotateY: -15 }}
        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -60, rotateY: isLoaded ? 0 : -15 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ color: '#c9184a', transition: { duration: 0.03 } }}
        className={isMobile ? 'mobile-featured-text' : ''}
        style={{
          position: 'absolute',
          top: isMobile ? 'calc(75vh - 40px)' : 'calc(75vh - 150px)',
          left: isMobile ? '15px' : '60px',
          fontSize: isMobile ? 'clamp(2.5rem, 10vw, 4rem)' : '12rem',
          color: '#ffccd5',
          fontWeight: 'normal',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          cursor: 'pointer',
          touchAction: 'manipulation'
        }}
        onClick={() => window.open('https://frank-1axapcqye-tmtmtmtmtm.vercel.app/', '_blank')}
      >
        lnp
      </motion.div>

      {/* BACK button - top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.25, delay: 0.35 }}
        onClick={() => router.back()}
        className={isMobile ? 'mobile-back-button' : ''}
        style={{ 
          position: 'fixed', 
          top: isMobile ? '15px' : '20px', 
          right: isMobile ? '15px' : '20px', 
          background: 'transparent', 
          border: '1px solid #ffccd5', 
          color: '#ffccd5', 
          padding: isMobile ? '6px 12px' : '8px 16px', 
          fontSize: isMobile ? '12px' : '14px', 
          cursor: 'pointer', 
          zIndex: 100, 
          transition: 'all 0.1s ease',
          touchAction: 'manipulation',
          minHeight: isMobile ? '36px' : 'auto',
          minWidth: isMobile ? '60px' : 'auto'
        }}
        whileHover={{ backgroundColor: '#ffccd5', color: '#590d22', transition: { duration: 0.05 } }}
        whileTap={{ scale: 0.95 }}
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
