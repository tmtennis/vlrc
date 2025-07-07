"use client"

import { useRef, useState } from "react"
import { AnimatedTitle } from "./animated-title"
import { ArrowUpRight, Code, Palette, Zap, Users, Folder, FileText, ChevronDown, Globe, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "tennismenace",
    description: "Data-driven tennis betting app with custom ELO, momentum indicators, and styled frontend.",
    link: "https://tmtennis.blog",
  },
  {
    title: "l&p.wrld",
    description: "Custom digital platform for high-end creative professionals with advanced portfolio management.",
    link: "#",
  },
  {
    title: "Framer Templates",
    description: "High-impact UI components I sell and remix for clients.",
    link: "#",
  },
]

const services = [
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

export function WorkSection() {
  const [openFolder, setOpenFolder] = useState<string | null>(null)

  const toggleFolder = (title: string) => {
    setOpenFolder(openFolder === title ? null : title)
  }
  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Featured Work Column */}
          <div>
            <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tighter mb-8 md:mb-12 text-muted-foreground">
              Featured Work
            </AnimatedTitle>

            <div className="relative z-10 border-t border-foreground/10">
              {projects.map((project) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.title}
                  className="group block relative hover:bg-secondary/5 transition-colors duration-200"
                >
                  <div className="py-6 md:py-8 flex flex-col justify-between items-start gap-3 md:gap-4">
                    <div className="w-full">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display tracking-tighter group-hover:text-purple-500 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide mb-2">
                        {project.title === "tennismenace"
                          ? "Project 1"
                          : project.title === "l&p.wrld"
                          ? "Project 2"
                          : project.title === "Framer Templates"
                          ? "Project 3"
                          : ""}
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm md:text-base group-hover:text-foreground transition-colors duration-200">{project.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground transition-all duration-300 group-hover:text-purple-500 group-hover:rotate-45 group-hover:scale-110 self-end" />
                  </div>
                  <div className="absolute left-0 bottom-0 h-[1px] bg-foreground/10 w-full" />
                  <div className="absolute left-0 bottom-0 h-[1px] bg-purple-500 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column - File Cabinet */}
          <div>
            <AnimatedTitle className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tighter mb-8 md:mb-12 text-muted-foreground">
              Services
            </AnimatedTitle>

            {/* File Cabinet Container */}
            <div className="relative bg-background/20 backdrop-blur-sm border border-border/30 rounded-xl p-6">
              {/* Cabinet Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/20">
                <div className="w-8 h-8 bg-secondary/30 rounded-md flex items-center justify-center">
                  <Folder className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-mono text-sm text-muted-foreground">~/services</h3>
                  <p className="text-xs text-muted-foreground/70">6 items</p>
                </div>
              </div>

              {/* File/Folder List */}
              <div className="space-y-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    {/* Folder/File Item */}
                    <div
                      onClick={() => toggleFolder(service.title)}
                      className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-secondary/10 hover:border-l-2 hover:border-purple-500/50 group/item"
                    >
                      {/* File Icon */}
                      <div className="relative">
                        {openFolder === service.title ? (
                          <Folder className="w-6 h-6 text-primary" />
                        ) : (
                          <Folder className="w-6 h-6 text-muted-foreground group-hover/item:text-purple-500 transition-colors duration-200" />
                        )}
                        <service.icon className={`absolute -bottom-1 -right-1 w-3 h-3 ${service.color} bg-background rounded-full p-0.5 group-hover/item:scale-110 transition-transform duration-200`} />
                      </div>

                      {/* File Name */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-foreground group-hover/item:text-purple-500 transition-colors duration-200 truncate">
                            {service.filename}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground group-hover/item:text-purple-500 transition-all duration-200 ${
                            openFolder === service.title ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-muted-foreground/70 font-mono group-hover/item:text-muted-foreground transition-colors duration-200">
                          {service.title}
                        </p>
                      </div>

                      {/* File Size/Type */}
                      <div className="text-xs text-muted-foreground/50 font-mono group-hover/item:text-muted-foreground/80 transition-colors duration-200">
                        {service.features.length} modules
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
                          <div className="ml-9 p-4 bg-secondary/5 rounded-lg border-l-2 border-primary/30 space-y-3">
                            {/* File Content Preview */}
                            <div className="flex items-start gap-3">
                              <FileText className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                  {service.description}
                                </p>
                                
                                {/* Code-like Features Display */}
                                <div className="space-y-2">
                                  <div className="text-xs font-mono text-muted-foreground/70">
                                    // Available modules:
                                  </div>
                                  {service.features.map((feature, i) => (
                                    <div key={feature} className="flex items-center gap-2 text-sm">
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

              {/* Cabinet Footer */}
              <div className="mt-6 pt-4 border-t border-border/20 text-center space-y-2">
                <p className="text-xs text-muted-foreground/70 font-mono">
                  Click folders to expand • All services available for custom projects
                </p>
                <p className="text-xs text-muted-foreground/60 font-mono">
                  Get in touch for a quote or to learn more today
                </p>
                <a 
                  href="mailto:vituslrclausen@gmail.com?subject=Project Inquiry&body=Hi Vitus,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0ABest regards,"
                  className="inline-block text-xs font-mono text-primary underline underline-offset-2"
                >
                  vituslrclausen@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
