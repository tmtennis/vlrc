"use client"

import { HeroWorkShowcase } from "@/components/hero-with-work"
import { ParticleBackground } from "@/components/particle-background"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"

export function PortfolioContent() {
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
                    "#ffcad4", // Light pink
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
                />
              </div>
              <div className="relative z-10">
                <HeroWorkShowcase />
              </div>
            </div>
          </main>
        </div>
      </PageTransition>
    </SmoothScroll>
  )
}
