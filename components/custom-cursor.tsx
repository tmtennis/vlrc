"use client"

import { useState, useEffect } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)

  const springConfig = { stiffness: 400, damping: 30 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest("[data-cursor-hover]")) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest("[data-cursor-hover]")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <motion.div
        animate={{
          scale: isHovering ? 2.5 : 1,
          width: isHovering ? "40px" : "12px",
          height: isHovering ? "40px" : "12px",
        }}
        transition={{ ...springConfig, duration: 0.3 }}
        className="rounded-full bg-white"
        style={{ mixBlendMode: "difference" }}
      />
    </motion.div>
  )
}
