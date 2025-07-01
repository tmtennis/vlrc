"use client"

import type React from "react"

import "./liquid-button.css"

export function LiquidButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="liquid-button">
      <span className="liquid-button-text">{children}</span>
      <div className="liquid-button-liquid" />
    </a>
  )
}
