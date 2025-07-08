"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedTitle } from "./animated-title"

const techStack = [
  { src: "/techstack/figma.png", alt: "Figma", url: "https://www.figma.com/" },
  { src: "/techstack/firebase.png", alt: "Firebase", url: "https://firebase.google.com/" },
  { src: "/techstack/framer.png", alt: "Framer", url: "https://www.framer.com/" },
  { src: "/techstack/github.png", alt: "GitHub", url: "https://github.com/" },
  { src: "/techstack/openai.png", alt: "OpenAI", url: "https://platform.openai.com/" },
  { src: "/techstack/python.png", alt: "Python", url: "https://www.python.org/" },
  { src: "/techstack/tailwind.png", alt: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { src: "/techstack/vercel.png", alt: "Vercel", url: "https://vercel.com/" },
  { src: "/techstack2/adobe.png", alt: "Adobe Creative Suite", url: "https://www.adobe.com/" },
  { src: "/techstack2/airtable.png", alt: "Airtable", url: "https://www.airtable.com/" },
  { src: "/techstack2/aws.png", alt: "AWS", url: "https://aws.amazon.com/" },
  { src: "/techstack2/davinci.png", alt: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
  { src: "/techstack2/drive.png", alt: "Google Drive", url: "https://workspace.google.com/" },
  { src: "/techstack2/dropbox.png", alt: "Dropbox", url: "https://www.dropbox.com/" },
  { src: "/techstack2/notion.png", alt: "Notion", url: "https://www.notion.com/product" },
  { src: "/techstack2/runway.png", alt: "Runway", url: "https://runwayml.com/" },
  { src: "/techstack2/salesforce.png", alt: "Salesforce", url: "https://www.salesforce.com/" },
  { src: "/techstack2/shopify.png", alt: "Shopify", url: "https://accounts.shopify.com/" },
  { src: "/techstack2/slack.png", alt: "Slack", url: "https://slack.com/features" },
  { src: "/techstack2/veo3.png", alt: "Veo", url: "https://gemini.google/overview/video-generation/" },
  { src: "/techstack2/vscode.png", alt: "VS Code", url: "https://code.visualstudio.com/" },
  { src: "/techstack2/webflow.png", alt: "Webflow", url: "https://webflow.com/" }
]

const bioText =
  "Senior at The New School studying Economics. I build sharp, efficient digital products backed by a clear understanding of the internet, culture, and hype that sells.";

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
  const [activeTab, setActiveTab] = useState<"about" | "tech">("about")

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 md:py-16 lg:py-20 bg-background text-foreground dark:bg-background dark:text-foreground px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative bg-secondary/10 backdrop-blur-sm border border-border/20 rounded-xl p-1">
            <motion.div
              className="absolute inset-y-1 bg-background/80 rounded-lg shadow-sm border border-border/30"
              initial={false}
              animate={{
                x: activeTab === "about" ? 0 : "100%",
                width: "50%"
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <div className="relative flex">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg relative z-10 ${
                  activeTab === "about" 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg relative z-10 ${
                  activeTab === "tech" 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Tech Stack
              </button>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4"
              >
                <AnimatedTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tighter">
                  About Me
                </AnimatedTitle>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto"
                >
                  {bioText.split(" ").map((word, i) => (
                    <span key={i} className="inline-block mr-[0.5em]">
                      <motion.span variants={wordVariants} className="inline-block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.p>
              </motion.div>
            )}

            {activeTab === "tech" && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4"
              >
                <AnimatedTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tighter">
                  Tech Stack
                </AnimatedTitle>
                <div className="relative w-full h-14 md:h-16 lg:h-18 overflow-hidden rounded-xl bg-gradient-to-r from-secondary/5 via-background to-secondary/5">
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
                              animate={{ opacity: 1, y: 0 }}
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
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
