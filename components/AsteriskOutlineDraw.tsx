"use client"

import React from 'react';

interface AsteriskOutlineDrawProps {
  className?: string;
  strokeWidth?: number;
  durationMs?: number;
  delayMs?: number;
  color?: string;
  size?: string;
}

export default function AsteriskOutlineDraw({
  className = '',
  strokeWidth = 6,
  durationMs = 1400,
  delayMs = 0,
  color = '#ff4d6d',
  size = '200px'
}: AsteriskOutlineDrawProps) {
  const uniqueId = React.useId();
  
  return (
    <>
      <style jsx>{`
        .asterisk-${uniqueId} {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${size};
          height: ${size};
          z-index: 9999;
        }

        .asterisk-${uniqueId} path {
          fill: none;
          stroke: ${color};
          stroke-width: ${strokeWidth};
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: asterisk-draw-${uniqueId} ${durationMs}ms ease forwards ${delayMs}ms;
        }

        @keyframes asterisk-draw-${uniqueId} {
          to { 
            stroke-dashoffset: 0; 
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .asterisk-${uniqueId} path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      
      <svg 
        className={`asterisk-${uniqueId} ${className}`} 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10 L50 90" pathLength="1000" />
        <path d="M10 50 L90 50" pathLength="1000" />
        <path d="M21.72 21.72 L78.28 78.28" pathLength="1000" />
        <path d="M78.28 21.72 L21.72 78.28" pathLength="1000" />
        <path d="M30 20 L70 80" pathLength="1000" />
        <path d="M70 20 L30 80" pathLength="1000" />
      </svg>
    </>
  );
}
