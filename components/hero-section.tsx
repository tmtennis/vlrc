"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion"

const rotatingPhrases = ["React Native apps.", "Firebase dashboards.", "Framer templates.", "Design systems."]

const title = "Vitus Clausen"

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  const maskX = useTransform(mouseX, (v) => `${v}px`)
  const maskY = useTransform(mouseY, (v) => `${v}px`)

  useEffect(() => {
    let hasMoved = false
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!hasMoved) {
        hasMoved = true
        setTimeout(() => setIsRevealed(true), 750) // Reveal after a short delay
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center overflow-hidden">
      {/* The main masked content, revealed by the spotlight */}
      <motion.div
        className="w-full h-full flex flex-col justify-center items-center absolute inset-0"
        style={{
          "--mask-x": maskX,
          "--mask-y": maskY,
          maskImage: "radial-gradient(circle 200px at var(--mask-x) var(--mask-y), black 100%, transparent)",
          WebkitMaskImage: "radial-gradient(circle 200px at var(--mask-x) var(--mask-y), black 100%, transparent)",
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-none text-foreground">
          {title}
        </h1>
      </motion.div>

      {/* The background, ghosted text */}
      <div className="w-full h-full flex flex-col justify-center items-center pointer-events-none">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-none text-transparent"
          style={{ WebkitTextStroke: "1px hsla(var(--foreground)/0.2)" }}
        >
          {title}
        </h1>
      </div>

      {/* The subline that fades in after interaction */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-[20vh] left-0 right-0 text-center pointer-events-none"
          >
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-muted-foreground px-4">
              Creative developer building tools that think, move, and convert.
            </p>
            <div className="h-10 text-lg md:text-xl text-accent overflow-hidden relative mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rotatingPhrases[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {rotatingPhrases[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
