"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const techStack = [
  { 
    src: "/techstack/figma.png", 
    alt: "Figma", 
    url: "https://www.figma.com/",
    category: "Design"
  },
  { 
    src: "/techstack/firebase.png", 
    alt: "Firebase", 
    url: "https://firebase.google.com/",
    category: "Backend"
  },
  { 
    src: "/techstack/framer.png", 
    alt: "Framer", 
    url: "https://www.framer.com/",
    category: "Animation"
  },
  { 
    src: "/techstack/github.png", 
    alt: "GitHub", 
    url: "https://github.com/",
    category: "Development"
  },
  { 
    src: "/techstack/openai.png", 
    alt: "OpenAI", 
    url: "https://platform.openai.com/",
    category: "AI"
  },
  { 
    src: "/techstack/python.png", 
    alt: "Python", 
    url: "https://www.python.org/",
    category: "Programming"
  },
  { 
    src: "/techstack/tailwind.png", 
    alt: "Tailwind CSS", 
    url: "https://tailwindcss.com/",
    category: "Styling"
  },
  { 
    src: "/techstack/vercel.png", 
    alt: "Vercel", 
    url: "https://vercel.com/",
    category: "Hosting"
  },
  { 
    src: "/techstack2/adobe.png", 
    alt: "Adobe Creative Suite", 
    url: "https://www.adobe.com/",
    category: "Design"
  },
  { 
    src: "/techstack2/airtable.png", 
    alt: "Airtable", 
    url: "https://www.airtable.com/",
    category: "Database"
  },
  { 
    src: "/techstack2/aws.png", 
    alt: "AWS", 
    url: "https://aws.amazon.com/",
    category: "Cloud"
  },
  { 
    src: "/techstack2/davinci.png", 
    alt: "DaVinci Resolve", 
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    category: "Video"
  }
]

export function TechStackSidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <>
      {/* Fixed Position Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
      >
        <motion.div
          animate={{ 
            width: isExpanded ? "280px" : "64px",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative bg-background/80 backdrop-blur-sm border border-border/40 rounded-2xl p-3 shadow-xl"
        >
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute -right-3 top-4 w-6 h-6 bg-background border border-border/40 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200 shadow-sm"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft size={12} />
            </motion.div>
          </button>

          {/* Header */}
          <div className="mb-4">
            <AnimatePresence>
              {isExpanded && (
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-sm font-semibold text-foreground mb-1"
                >
                  Tech Stack
                </motion.h3>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-xs text-muted-foreground"
                >
                  Tools & Technologies
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Tech Icons */}
          <div className="space-y-3 max-h-80 overflow-y-auto scrollbar-thin">
            {techStack.map((tech, index) => (
              <motion.a
                key={tech.alt}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.8 + (index * 0.05),
                  ease: "easeOut"
                }}
                className="group relative flex items-center w-full p-2 rounded-xl hover:bg-accent/50 transition-all duration-200"
                onMouseEnter={() => setHoveredTech(tech.alt)}
                onMouseLeave={() => setHoveredTech(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <div className="relative w-10 h-10 flex-shrink-0 p-2 bg-background/60 border border-border/30 rounded-lg shadow-sm group-hover:border-border/60 transition-all duration-200">
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-3 min-w-0 flex-1"
                    >
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {tech.alt}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {tech.category}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed Tooltip */}
                <AnimatePresence>
                  {!isExpanded && hoveredTech === tech.alt && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-full ml-3 px-3 py-2 bg-popover border border-border/40 rounded-lg shadow-xl z-50 pointer-events-none"
                    >
                      <div className="text-sm font-medium text-foreground whitespace-nowrap">
                        {tech.alt}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {tech.category}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 pt-3 border-t border-border/30"
              >
                <div className="text-xs text-muted-foreground text-center">
                  {techStack.length} tools & counting
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Mobile Bottom Bar Alternative */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="flex items-center gap-2 px-4 py-3 bg-background/80 backdrop-blur-sm border border-border/40 rounded-full shadow-xl max-w-xs overflow-x-auto scrollbar-hide"
        >
          {techStack.slice(0, 8).map((tech, index) => (
            <motion.a
              key={tech.alt}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3,
                delay: 1.2 + (index * 0.1),
                ease: "backOut"
              }}
              className="group relative flex-shrink-0 w-8 h-8 p-1.5 bg-background/60 border border-border/30 rounded-lg hover:border-border/60 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  )
}
