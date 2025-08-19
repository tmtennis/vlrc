"use client"

import { motion } from 'framer-motion'

interface HeaderProps {
  onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {
  return (
    <header 
      style={{ 
        position: 'fixed',
        top: '0px',
        left: '0px', 
        right: '0px',
        width: '100%',
        height: '120px', // Exact height to match the space above the horizontal line
        backgroundColor: '#590d22', // Same as page background
        zIndex: 1000
      }}
    >
      {/* VLRC COMMODITIES text */}
      <div 
        className="display-text" 
        style={{ 
          position: 'absolute',
          top: '0px', 
          left: '30px',
          color: '#ffccd5', // Same color as menu items
          fontSize: 'inherit', // Same font size as menu items
          fontWeight: 'inherit' // Same font weight as menu items
        }}
      >
        VLRC COMMODITIES
      </div>
    </header>
  )
}
