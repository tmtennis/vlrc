"use client"

import { useState } from "react"
import { HeroWorkShowcase } from "@/components/hero-with-work"
import { ParticleBackground } from "@/components/particle-background"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"
import { Menu, Magnet, Zap, Sparkles, Globe, Waves } from "lucide-react"

export function PortfolioContent() {
  const [cursorEffect, setCursorEffect] = useState<'attraction' | 'repulsion' | 'trail' | 'orbit' | 'wave'>('attraction')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const cursorEffects = [
    { value: 'attraction', icon: Magnet, title: 'Attraction' },
    { value: 'repulsion', icon: Zap, title: 'Repulsion' },
    { value: 'trail', icon: Sparkles, title: 'Trail' },
    { value: 'orbit', icon: Globe, title: 'Orbit' },
    { value: 'wave', icon: Waves, title: 'Wave' }
  ] as const

  return (
    <SmoothScroll>
      <PageTransition>
        <div className="bg-background text-foreground font-sans relative min-h-screen">
          <main className="relative min-h-screen">
            {/* Hero section with particle background - Full screen */}
            <div className="relative min-h-screen">
              <div className="absolute inset-0 z-0">
                <ParticleBackground 
                  particleCount={250}
                  particleColor={[
                    "#FFB6C1", // Light pink
                    "#DDA0DD", // Plum
                    "#B19CD9", // Light purple
                    "#87CEEB", // Sky blue
                    "#98FB98", // Pale green
                    "#F0E68C", // Khaki
                    "#FFA07A", // Light salmon
                    "#E6E6FA", // Lavender
                    "#F5DEB3", // Wheat
                    "#AFEEEE", // Pale turquoise
                    "#FFE4E1", // Misty rose
                    "#F0F8FF"  // Alice blue
                  ]}
                  particleSize={2.5}
                  animationSpeed={0.3}
                  cursorEffect={cursorEffect}
                />
              </div>
              <div className="relative z-10">
                <HeroWorkShowcase />
              </div>
              
              {/* Cursor Effect Hamburger Menu - Bottom Left */}
              <div className="fixed bottom-4 left-4 z-50">
                <div className="relative">
                  {/* Hamburger Button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-300 hover:scale-110
                      ${isMenuOpen 
                        ? 'bg-purple-500/50 text-white ring-2 ring-purple-400/50 rotate-90' 
                        : 'bg-black/20 backdrop-blur-md text-white/80 hover:bg-black/30'
                      }
                      border border-white/10
                    `}
                    title="Cursor Effects"
                  >
                    <Menu size={20} />
                  </button>

                  {/* Menu Items */}
                  {isMenuOpen && (
                    <div className="absolute bottom-16 left-0 mb-2">
                      <div className="bg-black/20 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="text-xs text-white/70 mb-3 px-1 font-medium">Cursor Effect</div>
                        <div className="flex flex-col gap-2">
                          {cursorEffects.map((effect) => {
                            const IconComponent = effect.icon
                            return (
                              <button
                                key={effect.value}
                                onClick={() => {
                                  setCursorEffect(effect.value)
                                  setIsMenuOpen(false)
                                }}
                                className={`
                                  w-10 h-10 rounded-lg flex items-center justify-center
                                  transition-all duration-200 hover:scale-105
                                  ${cursorEffect === effect.value 
                                    ? 'bg-purple-500/50 text-white ring-2 ring-purple-400/50' 
                                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                                  }
                                  group relative
                                `}
                                title={effect.title}
                              >
                                <IconComponent size={16} strokeWidth={1.5} />
                                
                                {/* Tooltip */}
                                <div className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                  {effect.title}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </PageTransition>
    </SmoothScroll>
  )
}
