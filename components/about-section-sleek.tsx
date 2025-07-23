"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { User, Code, Zap, MapPin } from "lucide-react"

function FloatingShapes() {
  return (
    <>
      <mesh position={[-2, 1, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[2, -1, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, 2, -1]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.4, 8]} />
        <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
      </mesh>
    </>
  )
}

export function AboutSectionSleek() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-16 bg-background overflow-hidden">
      {/* Compact Three.js Background */}
      <div className="absolute inset-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={0.6} />
          <FloatingShapes />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About
          </h2>
        </motion.div>

        {/* Sleek Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            style={{ y, opacity }}
            className="group p-5 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors"
              >
                <User className="w-4 h-4 text-primary" />
              </motion.div>
              <h3 className="font-medium text-sm">Background</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Economics student at The New School, building at the intersection of finance, 
              technology, and culture. Based in NYC.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="group p-5 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-md bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"
              >
                <Code className="w-4 h-4 text-purple-500" />
              </motion.div>
              <h3 className="font-medium text-sm">Approach</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Sharp, efficient digital products backed by market psychology understanding. 
              Full-stack development with AI automation focus.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="group p-5 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-green-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-md bg-green-500/10 group-hover:bg-green-500/20 transition-colors"
              >
                <Zap className="w-4 h-4 text-green-500" />
              </motion.div>
              <h3 className="font-medium text-sm">Focus</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Tennis analytics, economic modeling, automation tools that unlock creative potential.
            </p>
            
            {/* Minimal Skills */}
            <div className="flex flex-wrap gap-1">
              {['React', 'Python', 'AI'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-2 py-0.5 bg-foreground/5 text-foreground/70 rounded text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subtle Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground"
        >
          <MapPin className="w-3 h-3" />
          <span>New York City</span>
        </motion.div>
      </div>
    </section>
  )
}
