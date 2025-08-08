"use client"

import { useState } from 'react';

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
    <div 
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
        <div 
          key={index}
          style={{ 
            backgroundColor: color,
            width: '200px', // Much wider than the 150px container - extends beyond viewport
            height: '100%',
            borderLeft: '2px solid #ffccd5',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '20px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateX(-25px)';
            setHoveredIndex(index);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateX(0)';
            setHoveredIndex(null);
          }}
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
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
