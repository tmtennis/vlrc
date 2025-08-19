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

      {/* SVG Filter Definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="pixelate" x="0" y="0" width="100%" height="100%">
            {/* Scale down to create large pixels */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="sharp" />
            <feComponentTransfer in="sharp" result="pixelated">
              <feFuncA type="discrete" tableValues="0 .2 .4 .6 .8 1" />
            </feComponentTransfer>
            
            {/* Create the mosaic effect by scaling and tiling */}
            <feImage width="16" height="16" xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" result="pixelGrid" />
            <feTile in="pixelGrid" result="tiled" />
            
            {/* Quantize colors to limited palette */}
            <feComponentTransfer in="SourceGraphic" result="quantized">
              <feFuncR type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
              <feFuncG type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
              <feFuncB type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1" />
            </feComponentTransfer>
            
            {/* Create pixelated blocks */}
            <feMorphology in="quantized" operator="dilate" radius="4" result="chunky" />
            <feGaussianBlur in="chunky" stdDeviation="0" result="sharp2" />
            
            {/* Apply to original shape */}
            <feComposite in="sharp2" in2="SourceGraphic" operator="in" result="masked" />
            
            {/* Color the pixels */}
            <feFlood floodColor="#ffccd5" result="color" />
            <feComposite in="color" in2="masked" operator="in" />
          </filter>
        </defs>
      </svg>

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

      {/* Statue of Liberty SVG - bottom right */}
      <img
        src="/statue_of_liberty_PNG32.svg"
        alt="Statue of Liberty"
        style={{
          position: 'fixed',
          bottom: '0px',
          right: '20px',
          width: '550px',
          height: 'auto',
          zIndex: 10,
          opacity: 0.8,
          filter: 'url(#pixelate)'
        }}
      />
    </div>
  )
}
