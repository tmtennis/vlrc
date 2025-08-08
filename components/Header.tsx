"use client"

interface HeaderProps {
  onClick: () => void;
}

export default function Header({ onClick }: HeaderProps) {
  return (
    <header 
      className="display-text" 
      onClick={onClick}
      style={{ 
        top: '10px', 
        left: '30px', 
        zIndex: 1000,
        whiteSpace: 'nowrap',
        width: 'auto',
        maxWidth: 'none',
        cursor: 'pointer'
      }}
    >
      VLRC
    </header>
  )
}
