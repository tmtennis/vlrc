import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"

export default function PortfolioPage() {
  return (
    <SmoothScroll>
      <PageTransition>
        <div className="bg-background text-foreground font-sans">
          <Header />
          <main className="container mx-auto px-4 md:px-8">
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
          </main>
        </div>
      </PageTransition>
    </SmoothScroll>
  )
}
