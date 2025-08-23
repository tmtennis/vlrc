"use client"

import { motion } from 'framer-motion';

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
        height: '120px',
        backgroundColor: '#590d22',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        style={{
          fontWeight: 900,
          fontSize: '4rem',
          color: '#ffccd5',
          letterSpacing: '2px',
          fontFamily: 'inherit',
          textAlign: 'center',
          display: 'flex',
          gap: '0.05em'
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.045 // faster wave
            }
          },
          hidden: {}
        }}
      >
        {"VLRC COMMODITIES".split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 700, damping: 22 } }
            }}
            style={{ display: 'inline-block', marginRight: char === ' ' ? '0.5em' : '0' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </header>
  )
}
