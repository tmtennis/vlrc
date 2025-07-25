"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Mail, ArrowRight, MapPin, Code, Clock, Zap } from "lucide-react"

const rotatingPhrases = [
  "Building scalable digital products",
  "Designing systems that grow with you", 
  "Turning ideas into reality",
  "Creating meaningful user experiences"
]

const techStack = [
  { src: "/techstack/figma.png", alt: "Figma" },
  { src: "/techstack/firebase.png", alt: "Firebase" },
  { src: "/techstack/framer.png", alt: "Framer" },
  { src: "/techstack/github.png", alt: "GitHub" },
  { src: "/techstack/openai.png", alt: "OpenAI" },
  { src: "/techstack/python.png", alt: "Python" },
  { src: "/techstack/tailwind.png", alt: "Tailwind CSS" },
  { src: "/techstack/vercel.png", alt: "Vercel" },
  { src: "/techstack2/adobe.png", alt: "Adobe Creative Suite" },
  { src: "/techstack2/aws.png", alt: "AWS" },
  { src: "/techstack2/notion.png", alt: "Notion" },
  { src: "/techstack2/vscode.png", alt: "VS Code" }
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-[90vh] flex items-center relative px-4 py-16">
      {/* Main Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side - Main Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                Vitus
              </span>{" "}
              <span className="text-foreground">
                Clausen
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-3">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Developer & designer building fast, expressive web products.
            </p>
            
            {/* Rotating phrase */}
            <div className="h-8 text-base sm:text-lg text-purple-500 font-medium overflow-hidden">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {rotatingPhrases[index]}
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button 
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                })
              }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:vituslrclausen@gmail.com"
              className="px-6 py-3 border border-border hover:bg-secondary text-foreground rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side - Context Box */}
        <div className="lg:justify-self-end">
          <div className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6 max-w-sm">
            
            {/* Now */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Clock className="w-4 h-4" />
                Now
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Senior at The New School studying Economics, building digital products that convert.
              </p>
            </div>

            {/* Building */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Code className="w-4 h-4" />
                Building
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Tennis analytics platform, AI automation tools, and custom web solutions for clients.
              </p>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                New York City, NY
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Zap className="w-4 h-4" />
                Stack
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 2 + (index * 0.05),
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="group relative w-8 h-8 p-1.5 bg-background/50 border border-border/30 rounded-lg hover:border-border/60 hover:bg-background/70 transition-all duration-200"
                    title={tech.alt}
                  >
                    <img
                      src={tech.src}
                      alt={tech.alt}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
