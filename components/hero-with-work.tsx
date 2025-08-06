"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Code, Clock, Zap, Terminal, ArrowLeft, ArrowRight, Sparkles } from "lucide-react"

const rotatingPhrases = [
  "Building scalable digital products",
  "Designing systems that grow with you", 
  "Turning ideas into reality",
  "Creating meaningful user experiences"
]

const techStack = [
  { src: "/techstack/figma.webp", alt: "Figma" },
  { src: "/techstack/firebase.webp", alt: "Firebase" },
  { src: "/techstack/framer.webp", alt: "Framer" },
  { src: "/techstack/github.webp", alt: "GitHub" },
  { src: "/techstack/python.webp", alt: "Python" },
  { src: "/techstack/tailwind.webp", alt: "Tailwind CSS" },
  { src: "/techstack/vercel.webp", alt: "Vercel" },
  { src: "/techstack/javascript.webp", alt: "JavaScript" },
  { src: "/techstack/typescript.webp", alt: "TypeScript" },
  { src: "/techstack/vscode.webp", alt: "VS Code" },
  { src: "/techstack/webflow.webp", alt: "Webflow" },
  { src: "/techstack/shopify.webp", alt: "Shopify" },
  { src: "/techstack/salesforce.webp", alt: "Salesforce" },
  { src: "/techstack/slack.webp", alt: "Slack" },
  { src: "/techstack/notion.webp", alt: "Notion" },
  { src: "/techstack/aws.webp", alt: "AWS" },
  { src: "/techstack/adobe.webp", alt: "Adobe Creative Suite" },
  { src: "/techstack/airtable.webp", alt: "Airtable" },
  { src: "/techstack/chatgpt.webp", alt: "ChatGPT" },
  { src: "/techstack/davinci.webp", alt: "DaVinci Resolve" },
  { src: "/techstack/drive.webp", alt: "Google Drive" },
  { src: "/techstack/dropbox.webp", alt: "Dropbox" },
  { src: "/techstack/runway.webp", alt: "Runway ML" },
  { src: "/techstack/veo3.webp", alt: "Veo 3" }
]

const StaticTechStack = () => {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 p-4 max-w-4xl mx-auto">
      {techStack.map((tech, index) => (
        <div
          key={tech.alt}
          className="relative group"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-300/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-8 h-8 object-contain transition-all duration-300 relative z-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Simplified work data
const workData = [
  {
    name: "tennismenace",
    description: "A data-driven tennis intelligence platform featuring interactive visualizations, player metrics, and betting insights powered by Three.js and Firebase.",
    stack: ["next.js", "three.js", "firebase", "python", "openai"]
  },
  {
    name: "L&PWRLD",
    description: "A creative ecosystem combining immersive 3D experiences, AI tools, and social integration to explore next-gen digital storytelling.",
    stack: ["next.js", "three.js", "firebase", "python", "openai", "Zapier"]
  },
  {
    name: "AI Workflows",
    description: "Custom no-code and low-code automation workflows built using n8n and OpenAI, designed to streamline operations and scale productivity.",
    stack: ["N8N", "Zapier", "OpenAI"]
  },
  {
    name: "Design & Video",
    description: "End-to-end creative production for digital platforms, including brand design, motion graphics, YouTube content, and social assets using Adobe and Procreate tools.",
    stack: ["Photoshop", "PremierePro", "Youtube", "Procreate", "Capcut", "Veo3"]
  },
  {
    name: "vryslimey clothing co.",
    description: "A local NYC-based streetwear label with a bold, meme-centric identity, blending digital culture and irreverent slang into apparel drops.",
    stack: ["Shopify", "Salesforce", "Slack", "Fillout", "Zapier"]
  },
  {
    name: "CRM Assistance",
    description: "Ongoing support and optimization across a multi-tool CRM stack focused on lead management, campaign execution, and customer lifecycle strategy.",
    stack: ["Salesforce", "shopify", "simpletexting", "Zapier", "Notion", "Slack", "Google Workspace", "Airtable", "Mailchimp"]
  },
  {
    name: "Code Maintenance",
    description: "Routine auditing, debugging, and optimization of codebases across multiple stacks to ensure stability, scalability, and efficient performance.",
    stack: ["Firebase", "TailwindCSS", "JavaScript", "threejs", "nextjs", "React Native"]
  }
]

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
    // Don't change viewState, keep it as 'projects'
  }

  const handleBack = () => {
    if (selectedProject !== null) {
      setSelectedProject(null)
    } else {
      setViewState('hero')
    }
  }

  return (
    <section className="min-h-[90vh] flex items-start justify-center relative px-4 py-16">
      <div className={`w-full max-w-7xl mx-auto grid grid-cols-1 ${viewState === 'projects' ? '' : 'lg:grid-cols-2'} gap-8 lg:gap-16 ${viewState === 'projects' ? 'items-start justify-start' : 'items-start'} pt-12`}>
        {/* Left side - dynamic content */}
        <div className={`space-y-6 lg:space-y-8 ${viewState === 'projects' ? 'w-full' : ''}`}>
          {/* Show the name only when not in projects view */}
          {viewState !== 'projects' && (
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-pink-300 via-pink-300 to-pink-300 bg-clip-text text-transparent" style={{ color: '#ffcad4' }}>
                  Vitus
                </span>
                <span className="text-foreground"> Clausen</span>
              </h1>
            </div>
          )}

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
                        className="text-base sm:text-lg font-medium"
                        style={{ color: '#ffcad4' }}
                      >
                        {rotatingPhrases[index]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    onClick={handleViewWork}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="group relative px-10 py-5 text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden border border-pink-300/20"
                    style={{ 
                      background: 'linear-gradient(to right, #ffcad4, #ffcad4, #ffcad4)'
                    }}
                  >
                    {/* Animated background layers */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to right, #ffcad4, #e8a2b8, #ffcad4)' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                      <div className="absolute top-4 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-3 left-8 w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    
                    <span className="relative flex items-center justify-center gap-3 z-10">
                      <Sparkles className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <span className="tracking-wide">Explore My Projects</span>
                      <motion.div
                        className="flex items-center"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </span>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: '#ffcad4' }} />
                  </motion.button>
                  
                  <motion.a
                    href="mailto:vituslrclausen@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-4 border rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-pink-50"
                    style={{ 
                      borderColor: '#ffcad4'
                    }}
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
                className="space-y-4"
              >
                <div className="space-y-4">
                  {workData.map((project, index) => (
                    <motion.button
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => handleProjectClick(index)}
                      className="block w-full text-left group transform transition-transform duration-300 ease-out hover:scale-110 active:scale-98"
                    >
                      <h3 
                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-transparent group-hover:text-transparent transition-all duration-300 whitespace-nowrap"
                        style={{
                          WebkitTextStroke: '2px',
                          WebkitTextStrokeColor: '#ffcad4',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.webkitTextStroke = '0px'
                          e.currentTarget.style.color = '#ffcad4'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.webkitTextStroke = '2px'
                          e.currentTarget.style.webkitTextStrokeColor = '#ffcad4'
                          e.currentTarget.style.color = 'transparent'
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
                  className="flex items-center gap-2 text-muted-foreground hover:text-pink-300 transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {selectedProject !== null ? 'Deselect project' : 'Back to intro'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right sidebar - only show when not in projects view */}
        {viewState !== 'projects' && (
          <div className="space-y-6">
          <AnimatePresence mode="wait">
            {selectedProject === null ? (
              <motion.div
                key="status-boxes"
                initial={{ opacity: 1 }}
                exit={{ 
                  opacity: 0,
                  x: 50,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
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
                    <div className="p-3 bg-pink-300/10 rounded-xl">
                      <Code className="w-6 h-6 text-pink-300" />
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
                      <StaticTechStack />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Available for new projects
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="project-details"
                initial={{ 
                  opacity: 0, 
                  x: 50,
                  filter: "blur(8px)"
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  x: 50,
                  filter: "blur(8px)"
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 
                    className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent"
                  >
                    {workData[selectedProject].name}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">About this project</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {workData[selectedProject].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {workData[selectedProject].stack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        className="px-3 py-1.5 bg-pink-300/20 text-pink-300 rounded-lg text-sm font-medium border border-pink-300/30 hover:bg-pink-300/30 transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        )}
      </div>
    </section>
  )
}
