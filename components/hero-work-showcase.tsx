"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Code, Clock, Zap, Terminal, Folder, FileText, X, ExternalLink } from "lucide-react"

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

const workData = [
  {
    name: "tennismenace",
    description: "A data-driven tennis intelligence platform featuring interactive visualizations, player metrics, and betting insights powered by Three.js and Firebase.",
    stack: ["next.js", "three.js", "firebase", "python", "openai"],
    category: "Full-Stack App",
    status: "Live"
  },
  {
    name: "L&PWRLD", 
    description: "A creative ecosystem combining immersive 3D experiences, AI tools, and social integration to explore next-gen digital storytelling.",
    stack: ["next.js", "three.js", "firebase", "python", "openai", "Zapier"],
    category: "Creative Platform",
    status: "In Development"
  },
  {
    name: "Automation & AI Integration",
    description: "Custom no-code and low-code automation workflows built using n8n and OpenAI, designed to streamline operations and scale productivity.",
    stack: ["N8N", "Zapier", "OpenAI"],
    category: "Automation",
    status: "Consulting"
  },
  {
    name: "Design & Video",
    description: "End-to-end creative production for digital platforms, including brand design, motion graphics, YouTube content, and social assets using Adobe and Procreate tools.",
    stack: ["Photoshop", "PremierePro", "Youtube", "Procreate", "Capcut", "Veo3"],
    category: "Creative Services",
    status: "Ongoing"
  },
  {
    name: "vryslimey clothing co.",
    description: "A local NYC-based streetwear label with a bold, meme-centric identity, blending digital culture and irreverent slang into apparel drops.",
    stack: ["Shopify", "Salesforce", "Slack", "Fillout", "Zapier"],
    category: "E-commerce",
    status: "Live"
  },
  {
    name: "CRM Assistance",
    description: "Ongoing support and optimization across a multi-tool CRM stack focused on lead management, campaign execution, and customer lifecycle strategy.",
    stack: ["Salesforce", "shopify", "simpletexting", "Zapier", "Notion", "Slack", "Google Workspace", "Airtable", "Mailchimp"],
    category: "CRM Systems",
    status: "Consulting"
  },
  {
    name: "Code Maintenance",
    description: "Routine auditing, debugging, and optimization of codebases across multiple stacks to ensure stability, scalability, and efficient performance.",
    stack: ["Firebase", "TailwindCSS", "JavaScript", "threejs", "nextjs", "React Native"],
    category: "Development",
    status: "Ongoing"
  }
]

export function HeroWorkShowcase() {
  const [index, setIndex] = useState(0)
  const [showWork, setShowWork] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Terminal typing effect
  useEffect(() => {
    if (showWork && terminalText.length === 0) {
      const fullText = "Initializing project directory..."
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTerminalText(fullText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setTypingIndex(1), 500)
        }
      }, 50)
      return () => clearInterval(typeInterval)
    }
  }, [showWork, terminalText])

  // Project appearance animation
  useEffect(() => {
    if (showWork && typingIndex > 0 && typingIndex <= workData.length) {
      const timer = setTimeout(() => {
        setTypingIndex(prev => prev + 1)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [showWork, typingIndex])

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleViewWork = () => {
    setShowWork(true)
    setTerminalText("")
    setTypingIndex(0)
  }

  const handleClose = () => {
    setShowWork(false)
    setTerminalText("")
    setTypingIndex(0)
    setSelectedProject(null)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-green-400 border-green-400/30 bg-green-400/10"
      case "In Development": return "text-yellow-400 border-yellow-400/30 bg-yellow-400/10"
      case "Consulting": return "text-blue-400 border-blue-400/30 bg-blue-400/10"
      case "Ongoing": return "text-purple-400 border-purple-400/30 bg-purple-400/10"
      default: return "text-gray-400 border-gray-400/30 bg-gray-400/10"
    }
  }

  return (
    <section className="min-h-[90vh] flex items-center relative px-4 py-16">
      <AnimatePresence mode="wait">
        {!showWork ? (
          // Original Hero Content
          <motion.div
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.9,
              rotateY: -15,
              filter: "blur(8px)"
            }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Left Side - Main Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
                    Vitus
                  </span>
                  <span className="text-foreground"> Clausen</span>
                </h1>
              </div>

              {/* Main Description */}
              <div className="space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Developer & designer building fast, expressive web products.
                </p>
                
                {/* Rotating Phrases */}
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

              {/* Action Buttons */}
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
            </div>

            {/* Right Side - Info Cards */}
            <div className="space-y-6">
              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:border-border/60 transition-colors duration-300"
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

              {/* Building Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:border-border/60 transition-colors duration-300"
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

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:border-border/60 transition-colors duration-300"
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

              {/* Tech Stack Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl hover:border-border/60 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <Zap className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Stack</h3>
                    <div className="grid grid-cols-6 gap-2">
                      {techStack.slice(0, 6).map((tech, i) => (
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
              </div>
            </div>
          </motion.div>
        ) : (
          // Work Showcase Interface
          <motion.div
            key="work"
            initial={{ 
              opacity: 0, 
              scale: 1.1,
              rotateY: 15,
              filter: "blur(8px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateY: 0,
              filter: "blur(0px)"
            }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-6xl mx-auto"
          >
            {/* Terminal Window */}
            <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/90 backdrop-blur-md border-b border-gray-700/50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                    </div>
                    <span className="text-sm font-mono text-gray-300">vitus@portfolio:~/projects</span>
                  </div>
                  <motion.button
                    onClick={handleClose}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg transition-all duration-200 text-gray-400 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Terminal Content */}
              <div className="p-6 min-h-[70vh] bg-gray-950/50">
                {/* Terminal Output */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 text-green-400 font-mono text-sm mb-4">
                    <span className="text-purple-400">➜</span>
                    <span className="text-blue-400">projects</span>
                    <span className="text-gray-400">git:(main)</span>
                    <span className="text-green-400">✗</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      ls -la --show-details
                    </motion.span>
                  </div>

                  {/* Terminal init text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-gray-400 font-mono text-sm mb-4"
                  >
                    {terminalText}
                    {showCursor && terminalText.length > 0 && (
                      <span className="bg-green-400 text-gray-900 ml-1">▋</span>
                    )}
                  </motion.div>

                  {typingIndex > 0 && (
                    <div className="text-xs text-gray-500 font-mono mb-4">
                      total {workData.length} projects • {workData.filter(p => p.status === 'Live').length} live • {workData.filter(p => p.status === 'In Development').length} in development
                    </div>
                  )}
                </motion.div>

                {/* Project List */}
                <div className="space-y-2">
                  {workData.slice(0, typingIndex - 1).map((project, i) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 1, duration: 0.4 }}
                      onClick={() => setSelectedProject(selectedProject === i ? null : i)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/40 transition-all duration-300 border border-transparent hover:border-purple-500/30">
                        <div className="flex items-center gap-3 flex-1">
                          <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Folder className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="font-mono text-sm text-green-400 group-hover:text-green-300 transition-colors">
                                {project.name}
                              </span>
                              <span className={`px-2 py-0.5 rounded text-xs font-mono border ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 font-mono">
                              {project.category} • {project.stack.slice(0, 3).join(", ")}
                              {project.stack.length > 3 && ` +${project.stack.length - 3}`}
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: selectedProject === i ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FileText className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                        </motion.div>
                      </div>

                      {/* Expanded Project Details */}
                      <AnimatePresence>
                        {selectedProject === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-9 mt-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                              <p className="text-sm text-gray-300 mb-4 leading-relaxed font-mono">
                                {project.description}
                              </p>
                              <div className="space-y-2">
                                <div className="text-xs text-gray-500 font-mono">Tech Stack:</div>
                                <div className="flex flex-wrap gap-2">
                                  {project.stack.map((tech, techIndex) => (
                                    <motion.span
                                      key={tech}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: techIndex * 0.05 }}
                                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-mono border border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default"
                                    >
                                      {tech}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Loading indicator */}
                {typingIndex > 0 && typingIndex <= workData.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 mt-6 text-gray-500"
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 1, 0.3] 
                          }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-mono">Scanning project directories...</span>
                  </motion.div>
                )}

                {/* Terminal prompt when done */}
                {typingIndex > workData.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 text-green-400 font-mono text-sm mt-6"
                  >
                    <span className="text-purple-400">➜</span>
                    <span className="text-blue-400">projects</span>
                    <span className="text-gray-400">git:(main)</span>
                    <span className="text-green-400">✗</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-4 bg-green-400 inline-block ml-1"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
}
