"use client"

import { motion } from "framer-motion"
import { User, Code2, Target, MapPin, Sparkles, Brain, Zap } from "lucide-react"

export function AboutSectionFixed() {
  const aboutItems = [
    {
      icon: Brain,
      label: "Foundation",
      title: "Strategic thinking meets creative execution",
      description: "Economics student at The New School with a passion for building at the intersection of finance, technology, and culture. Based in NYC, I blend academic rigor with hands-on experimentation to create tools, stories, and products that reflect urban energy and modern systems thinking."
    },
    {
      icon: Zap, 
      label: "Methodology",
      title: "Lean, iterative, and market-driven",
      description: "I build sharp, efficient digital products guided by design clarity and market intuition. From React dashboards to Shopify funnels, from AI automation to creative drops—my approach is always lean, always iterative, always focused on solutions that are as strategic as they are fast-moving."
    },
    {
      icon: Sparkles,
      label: "Current Focus", 
      title: "Tennis analytics, AI tooling, economic modeling",
      description: "Currently prototyping player prediction engines, CRM automations, and visual branding systems. My projects sharpen performance and make data-driven ideas feel alive. Always experimenting with new technologies and creative approaches to complex problems."
    }
  ]

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Ultra Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tighter text-center">
            About
          </h2>
        </motion.div>

        {/* Ultra Compact Three-Column Layout */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {aboutItems.map((item, index) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                {/* Ultra Compact Card */}
                <div className="relative overflow-hidden h-full">
                  {/* Subtle gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-4 border border-border/20 rounded-lg bg-background/50 backdrop-blur-sm hover:border-border/40 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/5 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        {/* Subtle glow */}
                        <div className="absolute inset-0 rounded-md bg-primary/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      </motion.div>
                      
                      <span className="text-xs font-medium text-primary/80 tracking-wider uppercase font-mono">
                        {item.label}
                      </span>
                    </div>

                    {/* Title */}
                    <motion.h3 
                      className="text-base font-semibold text-foreground mb-2 leading-tight group-hover:text-primary/90 transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-muted-foreground leading-relaxed text-xs flex-1"
                    >
                      {item.description}
                    </motion.p>

                    {/* Accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-3"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Compact Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-border/20"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border/30 bg-background/50 backdrop-blur-sm">
            <MapPin className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-foreground">New York City</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
