"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section-new"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ParticleBackground } from "@/components/particle-background"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"

export function PortfolioContent() {
  return (
    <SmoothScroll>
      <PageTransition>
        <div className="bg-background text-foreground font-sans relative">
          <Header />
          <main className="relative">
            {/* Hero section with particle background */}
            <div className="relative">
              <div className="absolute inset-0 z-0">
                <ParticleBackground />
              </div>
              <div className="relative z-10">
                <HeroSection />
              </div>
            </div>
            
            {/* Other sections without particle background */}
            <AboutSection />
            <ContactSection />
          </main>
        </div>
      </PageTransition>
    </SmoothScroll>
  )
}
