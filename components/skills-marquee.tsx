"use client"

import { motion } from "framer-motion"

const skills = ["Framer", "React Native", "Firebase", "Python", "HTML/CSS", "Design Systems", "Product Thinking"]
const marqueeText = skills.join(" • ") + " • "

export function SkillsMarquee() {
  return (
    <div className="relative w-full py-8 overflow-hidden bg-secondary text-secondary-foreground cursor-grab active:cursor-grabbing">
      <motion.div
        className="flex whitespace-nowrap"
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }} // Adjust as needed
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase px-4">
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
