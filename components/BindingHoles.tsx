"use client"

import React from 'react'

export default function BindingHoles() {
  // Create an array of holes - flexbox will handle the spacing dynamically
  const holes = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div 
      style={{
        position: 'absolute',
        left: '2px', // Moved even more left from 6px to 2px
        top: '130px',
        height: 'calc(100vh - 130px)',
        width: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '15px', // Increased padding for more spacing
        paddingBottom: '15px',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {holes.map((_, index) => (
        <div
          key={index}
          style={{
            width: '22px', // Slightly larger
            height: '22px',
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: `
              inset 2px 2px 4px rgba(0,0,0,0.25),
              inset -1px -1px 2px rgba(255,255,255,0.8),
              0 1px 3px rgba(0,0,0,0.15)
            `,
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        />
      ))}
    </div>
  )
}
