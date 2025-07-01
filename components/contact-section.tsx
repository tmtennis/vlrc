"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { AnimatedTitle } from "./animated-title"
import { MagneticButton } from "./magnetic-button"

const contactLinks = [
  {
    name: "Email",
    href: "mailto:vituslrclausen@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vitus-clausen-b4951124a",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/tmtennis",
    icon: Github,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 text-center">
      <div className="space-y-12">
        <AnimatedTitle className="text-5xl md:text-7xl font-bold font-display tracking-tighter">
          Let's Build
        </AnimatedTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
          className="flex justify-center items-center flex-wrap gap-4"
        >
          {contactLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <MagneticButton>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <link.icon className="w-5 h-5 mr-2" />
                  <span>{link.name}</span>
                </a>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
