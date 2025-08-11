"use client"

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
    </header>
  )
}
