"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"

const rotatingPhrases = [
  "Turning Your Ideas into High-Impact Products",
  "Building Scalable Solutions That Grow With You", 
  "Designing Systems That Support Your Long-Term Vision",
  "Guiding You Through Meaningful Digital Change"
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center px-4 py-16">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Sleek name with typing reveal hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tighter leading-tight relative overflow-hidden">
            {/* Smooth reveal mask */}
            <motion.div
              className="absolute inset-0 bg-background z-10"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                ease: [0.76, 0, 0.24, 1]
              }}
            />
            
            {/* Main text */}
            <motion.span
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent relative block"
              style={{
                backgroundSize: "200% 100%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                backgroundPosition: { duration: 6, ease: "easeInOut", repeat: Infinity }
              }}
            >
              Vitus Clausen
            </motion.span>

            {/* Hover effect: Re-typing overlay - only on desktop */}
            <motion.div
              className="absolute inset-0 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent block"
                style={{
                  backgroundSize: "300% 100%"
                }}
                animate={isHovered ? {
                  backgroundPosition: ["0% 50%", "100% 50%"]
                } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                {"Vitus Clausen".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.05,
                      delay: isHovered ? i * 0.08 : 0,
                      ease: "easeOut"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
              
              {/* Typing cursor effect */}
              <motion.div
                className="absolute top-0 w-0.5 h-full bg-purple-400"
                animate={isHovered ? {
                  left: ["0%", "100%"]
                } : {
                  left: "100%"
                }}
                transition={{
                  duration: isHovered ? 1 : 0.3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                ease: [0.76, 0, 0.24, 1]
              }}
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-3 md:space-y-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Senior Developer & Designer building high-impact digital solutions
          </p>
          
          {/* Rotating specialties */}
          <div className="h-6 sm:h-7 md:h-8 text-base sm:text-lg md:text-xl text-purple-500 font-medium relative overflow-hidden">
            <motion.div
              key={rotatingPhrases[index]}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center"
            >
              {rotatingPhrases[index]}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4"
        >
          <button
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              })
            }}
            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-colors duration-200 text-sm sm:text-base"
          >
            View My Work
          </button>
          
          <a
            href="mailto:vituslrclausen@gmail.com?subject=Project Inquiry&body=Hi Vitus,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards,"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border/50 rounded-xl font-medium text-foreground transition-colors duration-200 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
