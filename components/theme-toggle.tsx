"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent text-foreground transition-colors focus:outline-none"
      aria-label="Toggle theme"
      data-cursor-hover
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
