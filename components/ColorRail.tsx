"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ColorRail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Test colors to ensure visibility
  const testColors = [
    '#590d22', // chocolateCosmos
    '#800f2f', // claret
    '#a4133c', // amaranthPurple
    '#c9184a', // roseRed
    '#ff4d6d', // brightPinkCrayola
    '#ff758f', // brightPinkCrayola2
    '#ff8fa3', // salmonPink
    '#ffb3c1', // cherryBlossomPink
    '#ffccd5', // pink
    '#fff0f3', // lavenderBlush
  ];

  // Text colors in reverse order (darkest block gets lightest text)
  const textColors = [
    '#fff0f3', // lightest text for darkest block
    '#ffccd5',
    '#ffb3c1',
    '#ff8fa3',
    '#ff758f',
    '#ff4d6d',
    '#c9184a',
    '#a4133c',
    '#800f2f',
    '#590d22', // darkest text for lightest block
  ];

  const handleClick = async (colorCode: string, index: number) => {
    try {
      await navigator.clipboard.writeText(colorCode);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, width: 0, skewX: -15 }}
      animate={{ opacity: 1, width: '150px', skewX: 0 }}
      transition={{ 
        duration: 0.9,
        delay: 1.5, // Start after stroke animation (0.3 + 1.2 = 1.5)
        ease: [0.68, -0.55, 0.265, 1.55], // Elastic ease
      }}
      style={{
        position: 'fixed',
        top: '122px', // Start right under the stroke line (120px + 2px stroke height)
        right: '0px', // Flush to right edge
        width: '150px', // Made wider as requested
        height: 'calc(100vh - 122px)', // Adjust height to account for new top position
        display: 'grid',
        gridTemplateRows: 'repeat(10, 1fr)',
        gap: '0px', // No gap - blocks touching
        zIndex: 20
      }}
    >
      {testColors.map((color, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, height: 0, rotateZ: 180, scale: 0 }}
          animate={{ opacity: 1, height: '100%', rotateZ: 0, scale: 1 }}
          whileHover={{ 
            x: -25,
            rotateZ: 0, // Remove any rotation/skew when hovering
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }}
          transition={{ 
            duration: 0.7,
            delay: 1.8 + (9 - index) * 0.06, // Animate from bottom to top (reverse order)
            ease: [0.175, 0.885, 0.32, 1.275], // Bounce-out easing
            // Faster return transition when not hovering
            x: { duration: 0.15 },
            rotateZ: { duration: 0.15 }
          }}
          style={{ 
            backgroundColor: color,
            width: '200px', // Much wider than the 150px container - extends beyond viewport
            height: '100%',
            borderLeft: '2px solid #ffccd5',
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '20px',
            transformOrigin: 'center bottom', // Change origin for the spin effect
            overflow: 'hidden' // Hide content during height animation
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleClick(color, index)}
        >
          {/* Color code text - only visible when pulled out */}
          <div
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              color: textColors[index],
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.5px',
              pointerEvents: hoveredIndex === index ? 'auto' : 'none'
            }}
          >
            {color}
          </div>
          
          {/* Copied tooltip */}
          {copiedIndex === index && (
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                color: textColors[index],
                fontSize: '12px',
                fontWeight: '600',
                zIndex: 1000,
                animation: 'fadeInOut 1.5s ease-in-out',
                textShadow: '0 0 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              Copied!
            </div>
          )}
        </motion.div>
      ))}
      
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
}
