"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowDown, Mail, ArrowRight } from "lucide-react"
import { ParticleBackground } from "./particle-background"

const rotatingPhrases = [
  "Turning Your Ideas into High-Impact Products",
  "Building Scalable Solutions That Grow With You", 
  "Designing Systems That Support Your Long-Term Vision",
  "Guiding You Through Meaningful Digital Change"
]

const rotatingPhrasesMobile = [
  "Turning Ideas into High-Impact Products",
  "Building Scalable Solutions That Grow", 
  "Designing Systems for Your Vision",
  "Guiding Meaningful Digital Change"
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [buttonHover, setButtonHover] = useState({ work: false, contact: false })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const workButtonRef = useRef<HTMLButtonElement>(null)
  const contactButtonRef = useRef<HTMLAnchorElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const workButtonX = useSpring(mouseX, springConfig)
  const workButtonY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleWorkButtonMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (workButtonRef.current) {
      const rect = workButtonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      mouseX.set((event.clientX - centerX) * 0.1)
      mouseY.set((event.clientY - centerY) * 0.1)
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative text-center px-4 py-16 overflow-hidden">
      {/* Three.js Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground 
          particleCount={200}
          particleColor={[
            "#FFB6C1", // Light pink
            "#DDA0DD", // Plum
            "#B19CD9", // Light purple
            "#87CEEB", // Sky blue
            "#98FB98", // Pale green
            "#F0E68C", // Khaki
            "#FFA07A", // Light salmon
            "#E6E6FA", // Lavender
            "#F5DEB3", // Wheat
            "#20B2AA", // Light sea green
            "#F4A460", // Sandy brown
            "#DA70D6", // Orchid
            "#32CD32", // Lime green
            "#FF69B4", // Hot pink
            "#00CED1", // Dark turquoise
            "#FFD700", // Gold
            "#FF6347", // Tomato
            "#40E0D0", // Turquoise
            "#EE82EE", // Violet
            "#90EE90"  // Light green
          ]}
          particleSize={3}
          animationSpeed={0.3}
          cursorEffect="orbit"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative z-10">
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
            Developer & designer building fast, expressive web products.
          </p>
          
          {/* Rotating specialties */}
          <div className="h-12 sm:h-10 md:h-8 text-sm sm:text-base md:text-lg lg:text-xl text-purple-500 font-medium relative overflow-hidden">
            {/* Mobile version */}
            <motion.div
              key={`mobile-${rotatingPhrasesMobile[index]}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center px-2 text-center leading-tight md:hidden"
            >
              <span className="max-w-full break-words">
                {rotatingPhrasesMobile[index]}
              </span>
            </motion.div>
            
            {/* Desktop version */}
            <motion.div
              key={`desktop-${rotatingPhrases[index]}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center leading-tight hidden md:flex"
            >
              <span className="max-w-full break-words">
                {rotatingPhrases[index]}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4"
        >
          {/* "View My Work" - Magnetic + Shimmer + 3D Effect */}
          <motion.button
            ref={workButtonRef}
            onClick={() => {
              document.getElementById('work')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              })
            }}
            style={{ x: workButtonX, y: workButtonY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            onMouseMove={handleWorkButtonMouseMove}
            onMouseEnter={() => {
              setButtonHover(prev => ({ ...prev, work: true }))
            }}
            onMouseLeave={() => {
              setButtonHover(prev => ({ ...prev, work: false }))
              mouseX.set(0)
              mouseY.set(0)
            }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 text-sm sm:text-base overflow-hidden"
          >
            {/* Gradient shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={buttonHover.work ? {
                translateX: ["100%", "100%"]
              } : {}}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            />
            
            {/* 3D shadow effect */}
            <motion.div
              className="absolute inset-0 bg-primary/60 rounded-xl -z-10"
              animate={buttonHover.work ? {
                x: 4,
                y: 4,
                scale: 0.98
              } : {
                x: 0,
                y: 0,
                scale: 1
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Button content */}
            <div className="relative flex items-center gap-2 justify-center">
              <span>View My Work</span>
            </div>
            
            {/* Pulsing border */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-purple-400/0"
              animate={buttonHover.work ? {
                borderColor: ["rgba(168, 85, 247, 0)", "rgba(168, 85, 247, 0.5)", "rgba(168, 85, 247, 0)"]
              } : {}}
              transition={{
                duration: 1.5,
                repeat: buttonHover.work ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </motion.button>
          
          {/* "Get In Touch" - Icon Animation + Border Glow + Typing Dots */}
          <motion.a
            ref={contactButtonRef}
            href="mailto:vituslrclausen@gmail.com?subject=Project Inquiry&body=Hi Vitus,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards,"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onMouseEnter={() => setButtonHover(prev => ({ ...prev, contact: true }))}
            onMouseLeave={() => setButtonHover(prev => ({ ...prev, contact: false }))}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-border/50 rounded-xl font-medium text-foreground transition-all duration-300 text-sm sm:text-base overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent"
              animate={buttonHover.contact ? {
                borderColor: ["rgba(147, 51, 234, 0)", "rgba(147, 51, 234, 0.6)", "rgba(147, 51, 234, 0)"],
                boxShadow: [
                  "0 0 0 rgba(147, 51, 234, 0)",
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 0 rgba(147, 51, 234, 0)"
                ]
              } : {}}
              transition={{
                duration: 2,
                repeat: buttonHover.contact ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
            
            {/* Button content */}
            <div className="relative flex items-center justify-center gap-2">
              {/* Animated mail icon */}
              <motion.div
                animate={buttonHover.contact ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              
              <span>Get In Touch</span>
              
              {/* Typing dots indicator */}
              {buttonHover.contact && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex gap-1"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-purple-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Background Elements - Animated Spray Paint Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main Spray Paint Effect - Right Side */}
        <motion.div 
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] h-[90%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Primary spray gradient - Much more visible */}
          <motion.div
            className="absolute top-0 right-0 w-[80%] h-[70%] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.8) 0%, rgba(168, 85, 247, 0.6) 25%, rgba(236, 72, 153, 0.4) 50%, rgba(251, 113, 133, 0.2) 75%, transparent 100%)",
              filter: "blur(40px)",
            }}
            animate={{
              background: [
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.8) 0%, rgba(168, 85, 247, 0.6) 25%, rgba(236, 72, 153, 0.4) 50%, rgba(251, 113, 133, 0.2) 75%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.8) 0%, rgba(251, 113, 133, 0.6) 25%, rgba(249, 115, 22, 0.4) 50%, rgba(245, 158, 11, 0.2) 75%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.6) 25%, rgba(168, 85, 247, 0.4) 50%, rgba(236, 72, 153, 0.2) 75%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.8) 0%, rgba(168, 85, 247, 0.6) 25%, rgba(236, 72, 153, 0.4) 50%, rgba(251, 113, 133, 0.2) 75%, transparent 100%)"
              ],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 5, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary spray effect - More visible */}
          <motion.div
            className="absolute top-[30%] right-[15%] w-[60%] h-[50%] rounded-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.4) 30%, rgba(251, 113, 133, 0.2) 60%, transparent 100%)",
              filter: "blur(30px)",
            }}
            animate={{
              background: [
                "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.4) 30%, rgba(251, 113, 133, 0.2) 60%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(251, 113, 133, 0.6) 0%, rgba(249, 115, 22, 0.4) 30%, rgba(245, 158, 11, 0.2) 60%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.6) 0%, rgba(139, 92, 246, 0.4) 30%, rgba(168, 85, 247, 0.2) 60%, transparent 100%)",
                "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.4) 30%, rgba(251, 113, 133, 0.2) 60%, transparent 100%)"
              ],
              scale: [1, 0.8, 1.2, 1],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Tertiary accent spray - More prominent */}
          <motion.div
            className="absolute bottom-[20%] right-[40%] w-[40%] h-[40%] rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, rgba(251, 113, 133, 0.3) 40%, transparent 70%)",
              filter: "blur(25px)",
            }}
            animate={{
              background: [
                "radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, rgba(251, 113, 133, 0.3) 40%, transparent 70%)",
                "radial-gradient(circle at center, rgba(249, 115, 22, 0.5) 0%, rgba(245, 158, 11, 0.3) 40%, transparent 70%)",
                "radial-gradient(circle at center, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)",
                "radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, rgba(251, 113, 133, 0.3) 40%, transparent 70%)"
              ],
              scale: [1, 1.3, 0.7, 1],
              rotate: [0, 15, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Sharp accent streaks */}
          <motion.div
            className="absolute top-[10%] right-[5%] w-[30%] h-[20%]"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)",
              filter: "blur(15px)",
              borderRadius: "50%",
            }}
            animate={{
              background: [
                "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)",
                "linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(245, 158, 11, 0.2) 50%, transparent 100%)",
                "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)",
                "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)"
              ],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 10, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Left side subtle accent - More visible */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.5, 0.8, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}
