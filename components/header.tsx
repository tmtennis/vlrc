"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

export function Header() {
  const scrollDirection = useScrollDirection()

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={scrollDirection === "down" ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="font-display text-2xl font-bold tracking-tighter">
          <a href="#" data-cursor-hover>
            VC
          </a>
        </div>
        <ThemeToggle />
      </div>
    </motion.header>
  )
}
