"use client"

import { useState } from "react"
import { AnimatedTitle } from "./animated-title"
import { ArrowUpRight, Code, Palette, Zap, Users, Folder, FileText, ChevronDown, Globe, Bot, ExternalLink, User, Tag, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "tennismenace",
    description: "Data-driven tennis betting app with custom ELO, momentum indicators, and styled frontend.",
    link: "https://tmtennis.blog",
    category: "Full-Stack App",
    year: "2024",
    status: "Live",
    tech: ["Next.js", "Python", "Analytics"],
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30"
  },
  {
    title: "l&p.wrld",
    description: "Custom digital platform for high-end creative professionals with advanced portfolio management.",
    link: "#",
    category: "Creative Platform",
    year: "2024",
    status: "Development",
    tech: ["React", "CMS", "Animation"],
    gradient: "from-purple-500/20 via-pink-500/20 to-orange-500/20",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Automation & AI Integration",
    description: "Building tailored automations that streamline operations and slash overhead, turning manual workflows into effortless, cost-efficient systems.",
    link: "#",
    category: "Automation",
    year: "2024",
    status: "Active",
    tech: ["Zapier", "OpenAI Assistants", "N8N"],
    gradient: "from-indigo-500/20 via-violet-500/20 to-purple-500/20",
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/30"
  },
]

const services = [
  {
    icon: Star,
    title: "Priority Services",
    filename: "priority_services",
    description: "Quick quotes and fixed-rate services for immediate project needs.",
    features: [
      "Website Development",
      "Landing Page Development", 
      "Automation & AI Integration",
      "Website Maintenance"
    ],
    color: "text-purple-400",
    isPriority: true
  },
  {
    icon: Folder,
    title: "Additional Services",
    filename: "additional_services",
    description: "Extended service offerings for comprehensive project support.",
    features: [],
    color: "text-green-400",
    isAdditional: true,
    subServices: [
      {
        icon: Code,
        title: "Full-Stack Development",
        filename: "fullstack_dev",
        description: "End-to-end web applications with modern frameworks and scalable architecture.",
        features: ["React/Next.js", "Python/Firebase", "API Integration"],
        color: "text-blue-400"
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        filename: "design_systems",
        description: "User-centered design systems that balance aesthetics with functionality.",
        features: ["Design Systems", "Prototyping", "User Research"],
        color: "text-purple-400"
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        filename: "optimization",
        description: "Speed and efficiency improvements for existing applications and workflows.",
        features: ["Code Optimization", "Database Tuning", "UX Enhancement"],
        color: "text-yellow-400"
      },
      {
        icon: Users,
        title: "Product Strategy",
        filename: "strategy",
        description: "Strategic planning and technical guidance for digital product development.",
        features: ["Technical Planning", "Brand Positioning", "Team Collaboration"],
        color: "text-green-400"
      },
      {
        icon: Globe,
        title: "Website Management",
        filename: "web_management",
        description: "Comprehensive digital presence orchestration with performance monitoring, content optimization, and seamless maintenance protocols.",
        features: ["Content Management", "Performance Monitoring", "Security Updates", "SEO Optimization"],
        color: "text-cyan-400"
      },
      {
        icon: Bot,
        title: "Automation + AI Integration",
        filename: "ai_automation",
        description: "Intelligent workflow automation and cutting-edge AI integration to streamline operations and enhance user experiences.",
        features: ["Process Automation", "AI Model Integration", "Workflow Optimization", "Intelligent Analytics"],
        color: "text-orange-400"
      }
    ]
  }
]

export function WorkSection({ onlyServices = false }) {
  const [openFolder, setOpenFolder] = useState<string | null>(null)
  const [openSubFolder, setOpenSubFolder] = useState<string | null>(null)

  const toggleFolder = (title: string) => {
    setOpenFolder(openFolder === title ? null : title)
    if (openFolder !== title) {
      setOpenSubFolder(null) // Close sub-folders when switching main folders
    }
  }

  const toggleSubFolder = (title: string) => {
    setOpenSubFolder(openSubFolder === title ? null : title)
  }

  if (onlyServices) {
    return (
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tighter mb-8 text-left">
          Services
        </h2>
        <div className="space-y-4 text-left">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group transition-all duration-200 bg-none border-none shadow-none rounded-none p-0 m-0"
              style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}
            >
              <div
                onClick={() => toggleFolder(service.title)}
                className="flex items-center gap-2 p-1.5 cursor-pointer transition-all duration-200 group/item bg-none border-none shadow-none rounded-none"
                style={{ background: "none", border: "none", boxShadow: "none", borderRadius: 0 }}
              >
                <div className="relative">
                  <Folder className={`w-5 h-5 ${service.color} group-hover/item:scale-110 transition-transform duration-200`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs text-foreground group-hover/item:${service.color} transition-colors duration-200 truncate">
                      {service.filename}
                    </span>
                    <ChevronDown className={`w-3 h-3 text-muted-foreground group-hover/item:${service.color} transition-all duration-200 ${openFolder === service.title ? 'rotate-180' : ''}`} />
                  </div>
                  <p className="text-xs text-muted-foreground/70 font-mono group-hover/item:text-muted-foreground transition-colors duration-200">
                    {service.title}
                  </p>
                </div>
                <div className={`w-2 h-2 rounded-full ${service.color} opacity-0 group-hover/item:opacity-100 transition-opacity duration-200`} />
              </div>
              {/* Expanded Content */}
              {openFolder === service.title && (
                <div className={`ml-6 p-2 border-l-4 border-current space-y-1 bg-none border-none shadow-none rounded-none`}
                  style={{ background: "none", border: "none", boxShadow: "none", borderRadius: 0, borderLeftColor: service.color.replace('text-', '') }}>
                  <div className="flex items-start gap-2">
                    <FileText className={`w-3 h-3 ${service.color} mt-0.5 flex-shrink-0`} />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground leading-relaxed mb-1">
                        {service.description}
                      </p>
                      {service.features.length > 0 && (
                        <div className="space-y-1 mt-2">
                          {service.features.map((feature, i) => (
                            <div key={feature} className="flex items-center gap-1 text-xs">
                              <span className="text-muted-foreground/50 font-mono">
                                {String(i + 1).padStart(2, '0')}.
                              </span>
                              <span className="font-mono text-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 text-left">
          <p className="text-xs text-muted-foreground/70 font-mono">
            Click folders to expand • All services available for custom projects
          </p>
          <a 
            href="mailto:vituslrclausen@gmail.com?subject=Project Inquiry&body=Hi Vitus,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0ABest regards,"
            className="inline-block text-xs font-mono text-primary underline underline-offset-2"
          >
            vituslrclausen@gmail.com
          </a>
        </div>
      </div>
    )
  }

  return (
    <section id="work" className="pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-32 lg:pb-16 relative overflow-hidden scroll-mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Featured Work Column */}
          <div>
            <AnimatedTitle className="text-xl md:text-2xl lg:text-3xl font-bold font-display tracking-tighter mb-8 md:mb-10 text-muted-foreground mt-4">
              Featured Work
            </AnimatedTitle>

            <div className="relative z-10">
              {/* 2-column grid for rectangular cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative"
                    style={{ aspectRatio: '1.6/1' }} // More rectangular, less height
                  >
                    {/* Frosted Glass Card */}
                    <motion.div
                      className={`
                        relative overflow-hidden rounded-2xl border backdrop-blur-md h-full
                        bg-gradient-to-br ${project.gradient}
                        ${project.borderColor} border-opacity-30
                      `}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      
                      {/* Content */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-between h-full p-2 md:p-3 relative z-10"
                      >
                        {/* Header with metadata */}
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex items-center gap-1">
                            <div className={`px-1.5 py-0.5 rounded text-xs font-mono bg-background/30 ${project.accentColor}`}>
                              {project.category}
                            </div>
                          </div>
                          <div className={`px-1.5 py-0.5 rounded-full text-xs font-mono ${project.accentColor} bg-background/20`}>
                            {project.status}
                          </div>
                        </div>

                        {/* Middle Content */}
                        <div className="flex-1 flex flex-col justify-center">
                          {/* Title */}
                          <motion.h3 
                            className={`text-sm sm:text-base md:text-lg font-bold font-display tracking-tighter mb-1 ${project.accentColor}`}
                          >
                            {project.title}
                          </motion.h3>

                          {/* Description */}
                          <p className="text-muted-foreground text-xs leading-tight mb-1">
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-1">
                          {/* Tech stack pills */}
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <motion.span
                                key={tech}
                                className="px-1 py-0.5 text-xs font-mono bg-background/20 rounded text-muted-foreground border border-border/20"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {/* Enhanced CTA */}
                          {project.title !== "Automation & AI Integration" && (
                            <div className="flex items-center justify-between">
                              <motion.div 
                                className="flex items-center gap-1 text-xs font-mono"
                              >
                                <ExternalLink className="w-2.5 h-2.5" />
                                <span>View Project</span>
                              </motion.div>
                              
                              <motion.div>
                                <ArrowUpRight className={`w-3 h-3 ${project.accentColor}`} />
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Column - Enhanced File Cabinet */}
          <div>
            <AnimatedTitle className="text-xl md:text-2xl lg:text-3xl font-bold font-display tracking-tighter mb-8 md:mb-10 text-muted-foreground mt-4">
              Services
            </AnimatedTitle>

            {/* Enhanced File Cabinet Container */}
            <motion.div 
              className="relative bg-background/20 backdrop-blur-sm border border-border/30 rounded-xl p-3 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Cabinet Header with enhanced styling */}
              <motion.div 
                className="flex items-center gap-2 mb-3 pb-2 border-b border-border/20 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div 
                  className="w-6 h-6 bg-secondary/30 rounded-md flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Folder className="w-4 h-4 text-muted-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground">~/services</h3>
                  <p className="text-xs text-muted-foreground/70">2 folders</p>
                </div>
                <motion.div
                  className="ml-auto w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* File/Folder List */}
              <div className="space-y-1">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    {/* Main Folder Item */}
                    <div
                      onClick={() => toggleFolder(service.title)}
                      className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-secondary/10 hover:border-l-2 hover:border-purple-500/50 group/item ${
                        service.isPriority ? 'bg-purple-500/5 border border-purple-500/20' : 
                        service.isAdditional ? 'bg-green-500/5 border border-green-500/20' : ''
                      }`}
                    >
                      {/* Folder Icon */}
                      <div className="relative">
                        {openFolder === service.title ? (
                          <Folder className={`w-5 h-5 ${service.isPriority ? 'text-purple-500' : service.isAdditional ? 'text-green-500' : 'text-primary'}`} />
                        ) : (
                          <Folder className={`w-5 h-5 ${service.isPriority ? 'text-purple-400' : service.isAdditional ? 'text-green-400' : 'text-muted-foreground'} group-hover/item:text-purple-500 transition-colors duration-200`} />
                        )}
                        <service.icon className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 ${service.color} bg-background rounded-full p-0.5 group-hover/item:scale-110 transition-transform duration-200`} />
                      </div>

                      {/* Folder Name */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-xs text-foreground group-hover/item:text-purple-500 transition-colors duration-200 truncate">
                            {service.filename}
                          </span>
                          <ChevronDown className={`w-3 h-3 text-muted-foreground group-hover/item:text-purple-500 transition-all duration-200 ${
                            openFolder === service.title ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-muted-foreground/70 font-mono group-hover/item:text-muted-foreground transition-colors duration-200">
                          {service.title}
                        </p>
                      </div>

                      {/* Folder Count */}
                      <div className="text-xs text-muted-foreground/50 font-mono group-hover/item:text-muted-foreground/80 transition-colors duration-200">
                        {service.isAdditional ? service.subServices?.length || 0 : service.features.length}
                      </div>

                      {/* Hover indicator */}
                      <div className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {openFolder === service.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          {service.isAdditional ? (
                            // Render sub-services for Additional Services
                            <div className="ml-6 space-y-1">
                              {service.subServices?.map((subService, subIndex) => (
                                <motion.div
                                  key={subService.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                                >
                                  {/* Sub-service folder */}
                                  <div
                                    onClick={() => toggleSubFolder(subService.title)}
                                    className="flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-secondary/10 hover:border-l-2 hover:border-green-500/50 group/subitem"
                                  >
                                    <div className="relative">
                                      {openSubFolder === subService.title ? (
                                        <Folder className="w-4 h-4 text-green-500" />
                                      ) : (
                                        <Folder className="w-4 h-4 text-muted-foreground group-hover/subitem:text-green-500 transition-colors duration-200" />
                                      )}
                                      <subService.icon className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 ${subService.color} bg-background rounded-full p-0.5 group-hover/subitem:scale-110 transition-transform duration-200`} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-1">
                                        <span className="font-mono text-xs text-foreground group-hover/subitem:text-green-500 transition-colors duration-200 truncate">
                                          {subService.filename}
                                        </span>
                                        <ChevronDown className={`w-2.5 h-2.5 text-muted-foreground group-hover/subitem:text-green-500 transition-all duration-200 ${
                                          openSubFolder === subService.title ? 'rotate-180' : ''
                                        }`} />
                                      </div>
                                      <p className="text-xs text-muted-foreground/70 font-mono group-hover/subitem:text-muted-foreground transition-colors duration-200">
                                        {subService.title}
                                      </p>
                                    </div>

                                    <div className="text-xs text-muted-foreground/50 font-mono group-hover/subitem:text-muted-foreground/80 transition-colors duration-200">
                                      {subService.features.length}
                                    </div>
                                  </div>

                                  {/* Sub-service expanded content */}
                                  <AnimatePresence>
                                    {openSubFolder === subService.title && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                      >
                                        <div className="ml-6 p-2 bg-secondary/5 rounded-lg border-l-2 border-green-500/30 space-y-1">
                                          <div className="flex items-start gap-2">
                                            <FileText className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1">
                                              <p className="text-xs text-muted-foreground leading-relaxed mb-1">
                                                {subService.description}
                                              </p>
                                              
                                              <div className="space-y-1">
                                                <div className="text-xs font-mono text-muted-foreground/70">
                                                  // Available modules:
                                                </div>
                                                {subService.features.map((feature, i) => (
                                                  <div key={feature} className="flex items-center gap-1 text-xs">
                                                    <span className="text-muted-foreground/50 font-mono">
                                                      {String(i + 1).padStart(2, '0')}.
                                                    </span>
                                                    <span className="font-mono text-foreground">
                                                      {feature}
                                                    </span>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            // Render regular content for Priority Services
                            <div className="ml-6 p-2 bg-secondary/5 rounded-lg border-l-2 border-primary/30 space-y-1">
                              <div className="flex items-start gap-2">
                                <FileText className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <p className="text-xs text-muted-foreground leading-relaxed mb-1">
                                    {service.description}
                                  </p>
                                  
                                  <div className="space-y-1">
                                    {service.isPriority ? (
                                      <>
                                        <div className="text-xs font-mono text-muted-foreground/70">
                                          // Get a Quote:
                                        </div>
                                        {service.features.slice(0, 3).map((feature, i) => (
                                          <div key={feature} className="flex items-center gap-1 text-xs">
                                            <span className="text-muted-foreground/50 font-mono">
                                              {String(i + 1).padStart(2, '0')}.
                                            </span>
                                            <span className="font-mono text-foreground">
                                              {feature}
                                            </span>
                                          </div>
                                        ))}
                                        <div className="text-xs font-mono text-muted-foreground/70 mt-1">
                                          // Fixed Rate:
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                          <span className="text-muted-foreground/50 font-mono">
                                            04.
                                          </span>
                                          <span className="font-mono text-foreground">
                                            {service.features[3]}
                                          </span>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="text-xs font-mono text-muted-foreground/70">
                                          // Available modules:
                                        </div>
                                        {service.features.map((feature, i) => (
                                          <div key={feature} className="flex items-center gap-1 text-xs">
                                            <span className="text-muted-foreground/50 font-mono">
                                              {String(i + 1).padStart(2, '0')}.
                                            </span>
                                            <span className="font-mono text-foreground">
                                              {feature}
                                            </span>
                                          </div>
                                        ))}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Cabinet Footer */}
              <div className="mt-3 pt-2 border-t border-border/20 text-center space-y-1">
                <p className="text-xs text-muted-foreground/70 font-mono">
                  Click folders to expand • All services available for custom projects
                </p>
                <a 
                  href="mailto:vituslrclausen@gmail.com?subject=Project Inquiry&body=Hi Vitus,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0ABest regards,"
                  className="inline-block text-xs font-mono text-primary underline underline-offset-2"
                >
                  vituslrclausen@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
