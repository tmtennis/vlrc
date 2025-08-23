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
    <div style={{width: '100vw', height: '100vh', background: '#590d22', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

      <h1 style={{color: '#ff4d6d', fontSize: '2rem', fontWeight: 'bold'}}>CONTACT</h1>
    </div>
  );
}
