"use client"

import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-title"

const techStack = [
  { src: "/techstack/figma.png", alt: "Figma", url: "https://www.figma.com/" },
  { src: "/techstack/firebase.png", alt: "Firebase", url: "https://firebase.google.com/" },
  { src: "/techstack/framer.png", alt: "Framer", url: "https://www.framer.com/" },
  { src: "/techstack/github.png", alt: "GitHub", url: "https://github.com/" },
  { src: "/techstack/openai.png", alt: "OpenAI", url: "https://openai.com/" },
  { src: "/techstack/python.png", alt: "Python", url: "https://www.python.org/" },
  { src: "/techstack/tailwind.png", alt: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { src: "/techstack/vercel.png", alt: "Vercel", url: "https://vercel.com/" }
]
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
          <div className="relative overflow-hidden w-full mt-2 group">
            {/* Left fading edge */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />

            {/* Right fading edge */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

            <div className="flex gap-10 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              {[...techStack, ...techStack].map(({ src, alt, url }, i) => (
                <a
                  key={alt + i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110 flex-shrink-0"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-14 h-14 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
