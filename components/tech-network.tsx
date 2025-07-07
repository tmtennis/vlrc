"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const techStack = [
  { src: "/techstack/figma.png", alt: "Figma", url: "https://www.figma.com/", description: "Design & Prototyping" },
  { src: "/techstack/framer.png", alt: "Framer", url: "https://www.framer.com/", description: "Interactive Design" },
  { src: "/techstack/tailwind.png", alt: "Tailwind CSS", url: "https://tailwindcss.com/", description: "Utility-First CSS" },
  { src: "/techstack/firebase.png", alt: "Firebase", url: "https://firebase.google.com/", description: "Backend Services" },
  { src: "/techstack/python.png", alt: "Python", url: "https://www.python.org/", description: "Programming Language" },
  { src: "/techstack/github.png", alt: "GitHub", url: "https://github.com/", description: "Version Control" },
  { src: "/techstack/vercel.png", alt: "Vercel", url: "https://vercel.com/", description: "Deployment Platform" },
  { src: "/techstack/openai.png", alt: "OpenAI", url: "https://openai.com/", description: "AI Integration" },
]

export function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % techStack.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % techStack.length
      } else {
        return prev === 0 ? techStack.length - 1 : prev - 1
      }
    })
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div 
      className="relative w-full h-80 bg-gradient-to-br from-secondary/5 via-background to-secondary/10 rounded-xl overflow-hidden border border-border/50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      {/* Main carousel container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {/* Main tech card */}
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 100
              }}
              transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
            >
              {/* Card glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main card */}
              <motion.a
                href={techStack[currentIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-2xl group-hover:border-primary/30 transition-all duration-300"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                {/* Tech icon */}
                <div className="w-24 h-24 mx-auto mb-6 p-4 bg-secondary/20 rounded-full border border-border/30 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src={techStack[currentIndex].src}
                    alt={techStack[currentIndex].alt}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                {/* Tech info */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {techStack[currentIndex].alt}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {techStack[currentIndex].description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-lg group"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 shadow-lg group"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      {/* Elegant dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {techStack.map((_, index) => (
          <button
            key={index}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125 shadow-lg shadow-primary/30'
                : 'bg-border hover:bg-primary/50 hover:scale-110'
            }`}
            onClick={() => goToSlide(index)}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-border/20">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/50 to-primary"
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 4, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      {/* Tech counter */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium text-muted-foreground">
        {String(currentIndex + 1).padStart(2, '0')} / {String(techStack.length).padStart(2, '0')}
      </div>
    </div>
  )
}
