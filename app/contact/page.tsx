"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format time as HH:MM:SS EST
      const easternTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      // Format date as Month Day, Year
      const easternDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      }).format(now);
      setCurrentTime(easternTime + ' EST');
      setCurrentDate(easternDate);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{width: '100vw', height: '100vh', background: '#590d22', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0, margin: 0, padding: 0}}>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.35 }}
        onClick={() => router.back()}
        style={{ position: 'fixed', top: '20px', right: '20px', background: 'transparent', border: '1px solid #ffccd5', color: '#ffccd5', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', zIndex: 100, borderRadius: '4px', transition: 'all 0.08s ease' }}
        whileHover={{ backgroundColor: '#ffccd5', color: '#590d22', transition: { duration: 0.03 } }}
      >
        BACK
      </motion.button>

      <h1 style={{color: '#ff4d6d', fontSize: '4rem', fontWeight: 'bold'}}>CONTACT</h1>

      {/* Stroked square on right side */}
      <div style={{
        position: 'absolute',
        right: '20px',
        top: '70px',
        width: '420px',
        height: '420px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'flex-start', // align content to top
        justifyContent: 'center'
      }}>
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: '#ffccd5', borderRadius: '2px', transformOrigin: 'left center' }}
        />
        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.87, 0, 0.13, 1] }}
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: '#ffccd5', borderRadius: '2px', transformOrigin: 'left center' }}
        />
        {/* Left line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
          style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '100%', background: '#ffccd5', borderRadius: '2px', transformOrigin: 'top center' }}
        />
        {/* Right line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.87, 0, 0.13, 1] }}
          style={{ position: 'absolute', top: 0, right: 0, width: '3px', height: '100%', background: '#ffccd5', borderRadius: '2px', transformOrigin: 'top center' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // start from top
          zIndex: 20,
          padding: '40px 32px 32px 32px',
          gap: '28px',
          color: '#ffccd5',
          fontWeight: 700,
          fontSize: '1.5rem',
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 900, textAlign: 'center' }}>New York City</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 500, opacity: 0.8, textAlign: 'center' }}>United States</div>
          <div style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '2px', textAlign: 'center' }}>{currentTime}</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 500, opacity: 0.9, textAlign: 'center' }}>{currentDate}</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', opacity: 0.95 }}>
            74° Sunny
          </div>
        </div>
      </div>
    </div>
  );
}
