"use client"

import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-title"

const skills = ["Framer", "React Native", "Firebase", "Python", "HTML/CSS", "Tailwind CSS"]
const bioText =
  "Senior at The New School studying Economics. I build expressive, high-performance digital tools — blending frontend and backend logic with a focus on design systems, clever engineering, and clean product thinking.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 md:py-32 bg-background text-foreground dark:bg-background dark:text-foreground"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide mb-2">About Me</h2>
        <div className="space-y-4">
          <AnimatedTitle className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter">
            About Me
          </AnimatedTitle>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg text-foreground leading-relaxed"
          >
            {bioText.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-[0.5em]">
                <motion.span variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.p>
        </div>
        <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide mb-2">Tech Stack</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          <AnimatedTitle className="text-2xl font-bold text-foreground tracking-tighter">Tech Stack</AnimatedTitle>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#a855f7] text-[#a855f7] backdrop-blur-md bg-[#a855f7]/5 hover:bg-[#a855f7]/10 transition-all duration-300"
                data-cursor-hover
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
