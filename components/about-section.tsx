"use client"

import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-title"

const techStack = [
  { src: "/techstack/figma.png", alt: "Figma", url: "https://www.figma.com/" },
  { src: "/techstack/firebase.png", alt: "Firebase", url: "https://firebase.google.com/" },
  { src: "/techstack/framer.png", alt: "Framer", url: "https://www.framer.com/" },
  { src: "/techstack/github.png", alt: "GitHub", url: "https://github.com/" },
  { src: "/techstack/openai.png", alt: "OpenAI", url: "https://openai.com/" },
  { src: "/techstack/python.png", alt: "Python", url: "https://www.python.org/" },
  { src: "/techstack/tailwind.png", alt: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { src: "/techstack/vercel.png", alt: "Vercel", url: "https://vercel.com/" }
]
const bioText =
  "Senior at The New School studying Economics. I build expressive, high-performance digital tools — blending frontend and backend logic with a focus on design systems, clever engineering, and clean product thinking.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground dark:bg-background dark:text-foreground px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide mb-2">About Me</h2>
          <div className="space-y-4">
            <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tighter">
              About Me
            </AnimatedTitle>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-base md:text-lg text-foreground leading-relaxed"
            >
              {bioText.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.5em]">
                  <motion.span variants={wordVariants} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          </div>
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide mb-2">Tech Stack</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4"
          >
            <AnimatedTitle className="text-xl md:text-2xl font-bold text-foreground tracking-tighter">Tech Stack</AnimatedTitle>
            <div className="relative w-full h-16 md:h-20 lg:h-24 overflow-hidden rounded-xl bg-gradient-to-r from-secondary/5 via-background to-secondary/5">
            {/* Elegant gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Modern grid background */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
            </div>

            {/* Fixed infinite marquee animation */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-marquee-smooth whitespace-nowrap">
                {/* Duplicate the tech stack - fewer on mobile for performance */}
                {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center gap-4 md:gap-6 lg:gap-8 px-2 md:px-3 lg:px-4 flex-shrink-0">
                    {techStack.map((tech, i) => (
                      <motion.a
                        key={`${setIndex}-${tech.alt}-${i}`}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex-shrink-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (i) * 0.02,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {/* Tech icon container */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2 md:p-3 bg-background/40 backdrop-blur-sm border border-border/20 rounded-xl shadow-sm transition-all duration-200">
                          <img
                            src={tech.src}
                            alt={tech.alt}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                          
                          {/* Reflection effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-xl" />
                        </div>

                        {/* Tooltip - only show on hover but much more subtle - hidden on mobile */}
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 hidden md:block">
                          <div className="bg-popover/90 backdrop-blur-sm text-popover-foreground px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap border border-border/30 shadow-sm">
                            {tech.alt}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-shine pointer-events-none" />
          </div>
        </motion.div>
      </div>
      </div>
    </motion.section>
  )
}
