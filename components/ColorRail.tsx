"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ColorRail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallMobile(window.innerWidth <= 480);
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Dynamic dimensions based on screen size
  const railWidth = isSmallMobile ? '25px' : isMobile ? '35px' : '150px';
  const blockWidth = isSmallMobile ? '40px' : isMobile ? '50px' : '200px';
  const blockPadding = isSmallMobile ? '3px' : isMobile ? '5px' : '20px';
  const hoverDistance = isSmallMobile ? -3 : isMobile ? -5 : -25;

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
    // Try to copy to clipboard with fallback for mobile browsers
    try {
      if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext) {
        await navigator.clipboard.writeText(colorCode);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      } else {
        // Fallback for browsers that don't support clipboard API
        fallbackCopyTextToClipboard(colorCode, index);
      }
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      // Try fallback method
      fallbackCopyTextToClipboard(colorCode, index);
    }
  };

  const fallbackCopyTextToClipboard = (text: string, index: number) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      textArea.style.opacity = "0";
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      
      // For mobile devices
      if (navigator.userAgent.match(/ipad|android|iphone/i)) {
        textArea.contentEditable = 'true';
        textArea.readOnly = false;
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.select();
      }
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
      } else {
        console.warn('Copy to clipboard not supported in this browser');
      }
    } catch (err) {
      console.warn('Copy to clipboard not supported in this browser');
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
      
      <motion.div 
        initial={{ opacity: 0, width: 0, skewX: -15 }}
        animate={{ opacity: 1, width: railWidth, skewX: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.75,
          ease: [0.68, -0.55, 0.265, 1.55],
        }}
        style={{
          position: 'fixed',
          top: '102px',
          right: '0px',
          width: railWidth,
          height: 'calc(100vh - 102px)',
          display: 'grid',
          gridTemplateRows: 'repeat(10, 1fr)',
          gap: '0px',
          zIndex: 20,
          maxWidth: '100vw',
          boxSizing: 'border-box'
        }}
      >
        {testColors.map((color, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, height: 0, rotateZ: 180, scale: 0 }}
            animate={{ opacity: 1, height: '100%', rotateZ: 0, scale: 1 }}
            whileHover={{ 
              x: hoverDistance,
              rotateZ: 0,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.5,
              delay: 0.9 + (9 - index) * 0.03,
              ease: [0.175, 0.885, 0.32, 1.275],
              x: { duration: 0.15 },
              rotateZ: { duration: 0.15 }
            }}
            style={{ 
              backgroundColor: color,
              width: blockWidth,
              height: '100%',
              borderLeft: '2px solid #ffccd5',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: blockPadding,
              transformOrigin: 'center bottom',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(color, index)}
          >
            {/* Color code text - hide on mobile */}
            {!isMobile && (
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
                {copiedIndex === index ? 'Copied!' : color}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
