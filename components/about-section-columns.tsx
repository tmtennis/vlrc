"use client"

import { motion } from "framer-motion"
import { User, GraduationCap, Briefcase, Heart, MapPin, Calendar, Coffee, Code, Zap } from "lucide-react"

const aboutColumns = [
  {
    icon: User,
    title: "Background",
    content: [
      "Senior at The New School studying Economics with a focus on digital innovation and market dynamics.",
      "Passionate about building products that merge technical excellence with cultural understanding.",
      "Based in New York City, constantly exploring the intersection of technology, finance, and creative industries."
    ],
    accent: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: Code,
    title: "Approach",
    content: [
      "I build sharp, efficient digital products backed by a clear understanding of internet culture and market psychology.",
      "Focus on full-stack development, AI automation, and data-driven solutions that solve real problems.",
      "Believe in clean code, thoughtful design, and products that users genuinely want to use."
    ],
    accent: "from-purple-500/20 to-pink-500/20", 
    iconColor: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Interests",
    content: [
      "Tennis analytics and sports betting systems (see tennismenace for proof of concept).",
      "Economic modeling and market analysis, particularly in digital and creative markets.",
      "Building automation tools that eliminate repetitive work and unlock creative potential."
    ],
    accent: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  }
]

const stats = [
  { label: "Projects Shipped", value: "15+", subtext: "Full-stack applications" },
  { label: "Years Coding", value: "4+", subtext: "Continuous learning" },
  { label: "Coffee Consumed", value: "∞", subtext: "Still counting" },
]

export function AboutSectionColumns() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
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
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Economics student, full-stack developer, and builder of digital products that make sense.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {aboutColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Background Card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-border/80 transition-all duration-300">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${column.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative space-y-4 md:space-y-6">
                  {/* Icon & Title */}
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl border border-border/40 bg-background/60 backdrop-blur-sm flex items-center justify-center group-hover:border-border/80 transition-all duration-300`}>
                      <column.icon size={20} className={`${column.iconColor}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {column.title}
                    </h3>
                  </div>

                  {/* Content Points */}
                  <div className="space-y-4">
                    {column.content.map((point, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ 
                          duration: 0.5,
                          delay: (index * 0.2) + (i * 0.1),
                          ease: "easeOut"
                        }}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed"
                      >
                        {point}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-background rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5,
                delay: 0.8 + (index * 0.1),
                ease: "easeOut"
              }}
              className="text-center space-y-2 p-4 rounded-xl border border-border/40 bg-card/20 backdrop-blur-sm hover:border-border/80 hover:bg-card/40 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
