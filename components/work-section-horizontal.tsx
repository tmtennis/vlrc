"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "tennismenace",
    description: "Data-driven tennis betting app with custom ELO, momentum indicators, and styled frontend.",
    longDescription: "A comprehensive tennis analytics platform that combines advanced data science with intuitive design. Features custom ELO rating systems, momentum indicators, and predictive modeling for tennis match outcomes.",
    link: "https://tmtennis.blog",
    category: "Full-Stack App",
    year: "2024",
    status: "Live",
    tech: ["Next.js", "Python", "Analytics", "Vercel"],
    image: "/placeholder-project-1.jpg",
    gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    id: 2,
    title: "l&p.wrld",
    description: "Custom digital platform for high-end creative professionals with advanced portfolio management.",
    longDescription: "A luxury digital platform designed for creative professionals, featuring advanced portfolio management, client collaboration tools, and seamless content delivery systems.",
    link: "#",
    category: "Creative Platform",
    year: "2024",
    status: "Development",
    tech: ["React", "CMS", "Animation", "Framer"],
    image: "/placeholder-project-2.jpg", 
    gradient: "from-purple-500/10 via-pink-500/10 to-orange-500/10",
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/20"
  },
  {
    id: 3,
    title: "AI Automation Suite",
    description: "Building tailored automations that streamline operations and slash overhead costs.",
    longDescription: "Enterprise-grade automation solutions that transform manual workflows into efficient, cost-effective systems using cutting-edge AI and integration platforms.",
    link: "#",
    category: "Automation",
    year: "2024", 
    status: "Active",
    tech: ["Zapier", "OpenAI", "N8N", "Python"],
    image: "/placeholder-project-3.jpg",
    gradient: "from-indigo-500/10 via-violet-500/10 to-purple-500/10",
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/20"
  },
  {
    id: 4,
    title: "Portfolio & Brand Studio",
    description: "End-to-end digital presence solutions for modern businesses and creatives.",
    longDescription: "Comprehensive digital studio services including brand strategy, web development, and portfolio creation for businesses and creative professionals.",
    link: "#",
    category: "Digital Studio",
    year: "2024",
    status: "Active", 
    tech: ["Next.js", "Figma", "Framer", "Webflow"],
    image: "/placeholder-project-4.jpg",
    gradient: "from-green-500/10 via-teal-500/10 to-cyan-500/10",
    accentColor: "text-green-400",
    borderColor: "border-green-500/20"
  }
]

export function WorkSectionHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef
  })

  const x = useTransform(scrollXProgress, [0, 1], [0, -100])

  return (
    <section id="work" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tighter">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of recent projects showcasing full-stack development, AI automation, and digital experiences.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Indicator */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <p className="text-sm text-muted-foreground">
              Scroll horizontally to explore projects
            </p>
            <div className="flex items-center gap-2">
              <ArrowRight size={16} className="text-muted-foreground" />
              <div className="w-20 h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollXProgress }}
                  className="w-full h-full bg-primary origin-left"
                />
              </div>
            </div>
          </div>

          {/* Projects Container */}
          <div
            ref={containerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="flex-shrink-0 snap-start"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-80 md:w-96 h-[480px] md:h-[520px] rounded-2xl overflow-hidden"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
      
      {/* Border */}
      <div className={`absolute inset-0 border ${project.borderColor} rounded-2xl`} />
      
      {/* Content Container */}
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between bg-card/40 backdrop-blur-sm">
        {/* Top Section */}
        <div className="space-y-4">
          {/* Status & Category */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.borderColor} ${project.accentColor} bg-background/40 backdrop-blur-sm`}>
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400' : project.status === 'Development' ? 'bg-yellow-400' : 'bg-blue-400'}`} />
              <span className="text-xs text-muted-foreground">{project.status}</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-background/60 backdrop-blur-sm border border-border/40 rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          {/* Year */}
          <div className="text-xs text-muted-foreground font-mono">
            {project.year}
          </div>

          {/* CTA Button */}
          <motion.a
            href={project.link}
            target={project.link.startsWith('#') ? '_self' : '_blank'}
            rel={project.link.startsWith('#') ? '' : 'noopener noreferrer'}
            className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {project.link.startsWith('#') ? 'View Details' : 'Visit Site'}
            <ExternalLink 
              size={14} 
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" 
            />
          </motion.a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}
