"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Code, Clock, Zap, Terminal, ArrowLeft } from "lucide-react"

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
  { src: "/techstack/vercel.png", alt: "Vercel" }
]

// Parse CSV data function
const parseCSVData = () => {
  const csvData = `Project,Description,Stack
tennismenace,"A data-driven tennis intelligence platform featuring interactive visualizations, player metrics, and betting insights powered by Three.js and Firebase.",next.js three.js firebase python openai
L&PWRLD,"A creative ecosystem combining immersive 3D experiences, AI tools, and social integration to explore next-gen digital storytelling.",next.js three.js firebase python openai Zapier 
Automation & AI Integration,"Custom no-code and low-code automation workflows built using n8n and OpenAI, designed to streamline operations and scale productivity.",N8N Zapier OpenAI 
Design & Video,"End-to-end creative production for digital platforms, including brand design, motion graphics, YouTube content, and social assets using Adobe and Procreate tools.",Photoshop PremierePro Youtube Procreate Capcut Veo3
vryslimey clothing co.,"A local NYC-based streetwear label with a bold, meme-centric identity, blending digital culture and irreverent slang into apparel drops.",Shopify Salesforce Slack Fillout Zapier 
CRM Assistance,"Ongoing support and optimization across a multi-tool CRM stack (Salesforce, Notion, Zapier, Airtable, etc.) focused on lead management, campaign execution, and customer lifecycle strategy.",Salesforce shopify simpletexting Zapier Notion Slack Google Workspace Airtable Mailchimp
Code Maintenance ,"Routine auditing, debugging, and optimization of codebases across multiple stacks to ensure stability, scalability, and efficient performance. Responsibilities include version control management, refactoring legacy components, and integrating updates across frontend and backend systems.",Firebase TailwindCSS JavaScript threejs nextjs React Native`

  const lines = csvData.trim().split('\n')
  const headers = lines[0].split(',')
  
  return lines.slice(1).map(line => {
    const values = []
    let currentValue = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim())
        currentValue = ''
      } else {
        currentValue += char
      }
    }
    values.push(currentValue.trim())
    
    const stack = values[2] ? values[2].split(' ').filter(Boolean) : []
    
    return {
      name: values[0] || '',
      description: values[1] || '',
      stack: stack
    }
  }).filter(project => project.name)
}

const workData = parseCSVData()

export function HeroWorkShowcase() {
  const [index, setIndex] = useState(0)
  const [viewState, setViewState] = useState<'hero' | 'projects' | 'details'>('hero')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleViewWork = () => {
    setViewState('projects')
  }

  const handleProjectClick = (projectIndex: number) => {
    setSelectedProject(projectIndex)
    setViewState('details')
  }

  const handleBack = () => {
    if (viewState === 'details') {
      setViewState('projects')
      setSelectedProject(null)
    } else {
      setViewState('hero')
    }
  }

  return (
    <section className="min-h-[90vh] flex items-center relative px-4 py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - dynamic content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Always show the name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                Vitus
              </span>
              <span className="text-foreground"> Clausen</span>
            </h1>
          </div>

          {/* Content below the name changes based on viewState */}
          <AnimatePresence mode="wait">
            {viewState === 'hero' && (
              <motion.div
                key="hero-content"
                initial={{ opacity: 1 }}
                exit={{ 
                  opacity: 0,
                  y: -30,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    Developer & designer building fast, expressive web products.
                  </p>
                  
                  <div className="h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={index}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-base sm:text-lg text-purple-400 font-medium"
                      >
                        {rotatingPhrases[index]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    onClick={handleViewWork}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      View My Work
                    </span>
                  </motion.button>
                  
                  <motion.a
                    href="mailto:vituslrclausen@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border border-border/60 hover:border-purple-500/50 text-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-500/5"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Get In Touch
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )}

            {viewState === 'projects' && (
              <motion.div
                key="projects-content"
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  filter: "blur(8px)"
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  y: -30,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                    Select a project to explore
                  </h2>
                </div>

                <div className="space-y-6">
                  {workData.map((project, index) => (
                    <motion.button
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => handleProjectClick(index)}
                      whileHover={{ 
                        scale: 1.02,
                        textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-left group"
                    >
                      <h3 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-transparent"
                        style={{
                          WebkitTextStroke: '2px',
                          WebkitTextStrokeColor: 'rgb(139, 92, 246)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {project.name}
                      </h3>
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={handleBack}
                  className="flex items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to intro
                </motion.button>
              </motion.div>
            )}

            {viewState === 'details' && selectedProject !== null && (
              <motion.div
                key="details-content"
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  filter: "blur(8px)"
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  y: -30,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent"
                  >
                    {workData[selectedProject].name}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl">
                    <h3 className="text-lg font-semibold text-foreground mb-3">About this project</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {workData[selectedProject].description}
                    </p>
                  </div>

                  <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {workData[selectedProject].stack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + techIndex * 0.05 }}
                          className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to projects
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right sidebar - always visible */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Clock className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Now</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Senior at The New School studying Economics, building digital products that convert.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Code className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Building</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tennis analytics platform, AI automation tools, and custom web solutions for clients.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">New York City, NY</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">Stack</h3>
                <div className="grid grid-cols-4 gap-2">
                  {techStack.slice(0, 4).map((tech, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-8 h-8 bg-background/60 rounded-lg p-1.5 hover:bg-purple-500/10 transition-all duration-200 cursor-pointer"
                    >
                      <img src={tech.src} alt={tech.alt} className="w-full h-full object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border/30">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
