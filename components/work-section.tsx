"use client"

import { useRef, useState } from "react"
import { AnimatedTitle } from "./animated-title"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "TennisMenace",
    description: "Data-driven tennis betting app with custom ELO, momentum indicators, and styled frontend.",
    link: "https://tmtennis.blog",
  },
  {
    title: "ATP Tour Scraper",
    description: "Web scraper + data structuring tool for daily tennis forecasts.",
    link: "https://github.com/tmtennis/wimbledon_scraper",
  },
  {
    title: "Framer Templates",
    description: "High-impact UI components I sell and remix for clients.",
    link: "#",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedTitle className="text-3xl md:text-6xl font-bold font-display tracking-tighter mb-12 text-muted-foreground">
          Featured Work
        </AnimatedTitle>

        <div className="relative z-10 border-t border-foreground/10">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="group block relative"
            >
              <div className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <ScrambleText
                    text={project.title}
                    className="text-3xl md:text-6xl font-bold font-display tracking-tighter"
                  />
                  <p className="text-muted-foreground text-sm uppercase tracking-wide mb-1">
                    {project.title === "TennisMenace"
                      ? "Project 1"
                      : project.title === "ATP Tour Scraper"
                      ? "Project 2"
                      : project.title === "Framer Templates"
                      ? "Project 3"
                      : ""}
                  </p>
                  <p className="text-muted-foreground mt-2 text-base md:text-lg">{project.description}</p>
                </div>
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:rotate-45" />
              </div>
              <div className="absolute left-0 bottom-0 h-[1px] bg-accent w-0 transition-all duration-500 group-hover:w-full" />
              <div className="absolute left-0 bottom-0 h-[1px] bg-foreground/10 w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const ScrambleText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  const scramble = () => {
    let counter = 0
    intervalRef.current = setInterval(() => {
      const newText = text
        .split("")
        .map((char, i) => {
          if (counter > i) {
            return char
          }
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")
      setDisplayText(newText)
      if (counter >= text.length) {
        unscramble()
      }
      counter += 1 / 3
    }, 30)
  }

  const unscramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setDisplayText(text)
  }

  return (
    <span onMouseEnter={scramble} onMouseLeave={unscramble} className={className}>
      {displayText}
    </span>
  )
}
