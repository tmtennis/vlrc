"use client"

import { motion } from 'framer-motion';
import SpaceCadetStudiosIcon from './weather/SpaceCadetStudiosIcon';

interface HeaderProps {
  color?: string;
}

export default function Header({ color = '#ffccd5' }: HeaderProps) {
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
          color: color,
          letterSpacing: '2px',
          fontFamily: 'inherit',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // center the header content
          width: '100%',
          gap: 0,
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.045
            }
          },
          hidden: {}
        }}
      >
        <motion.span
          style={{ display: 'inline-block', marginRight: '0.7em' }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1, y: 0, transition: { type: 'spring', stiffness: 700, damping: 22 }
            },
            hidden: { opacity: 0, y: 30 }
          }}
        >
          VLRC
        </motion.span>
        <motion.span
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1, y: 0, transition: { type: 'spring', stiffness: 700, damping: 22 }
            },
            hidden: { opacity: 0, y: 30 }
          }}
        >
          COMMODITIES
        </motion.span>
        <SpaceCadetStudiosIcon style={{ color: color, width: 56, height: 56, marginLeft: '0.25em' }} />
      </motion.div>
    </header>
  )
}
