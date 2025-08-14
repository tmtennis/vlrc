"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [clickedAccordion, setClickedAccordion] = useState<number | null>(9) // Auto-open Full Tech Stack (index 9)
  const [hoveredAccordion, setHoveredAccordion] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#590d22',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    }}>
      {/* SERVICES title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '-30px',
          left: '30px',
          fontSize: '150px',
          color: '#ffccd5',
          fontWeight: 'normal',
          letterSpacing: '2px'
        }}
      >
        SERVICES
      </motion.div>

      {/* First stroked line */}
      <motion.div 
        initial={{ 
          scaleX: 0,
          transformOrigin: 'left center'
        }}
        animate={{ 
          scaleX: isLoaded ? 1 : 0
        }}
        transition={{ 
          duration: 1.8, 
          delay: 0.5,
          ease: [0.87, 0, 0.13, 1]
        }}
        style={{
          position: 'absolute',
          top: '120px',
          left: '0',
          width: '100%',
          height: '2px',
          backgroundColor: '#ffccd5',
          transformOrigin: 'left center'
        }} 
      />

      {/* Paper lines with services - true accordion functionality */}
      {Array.from({ length: 18 }, (_, index) => {
        const lineNumber = index + 1;
        const services = [
          {
            name: "Automation & Workflow Design",
            details: "End-to-end automation setups between apps, with smart triggers and logic for seamless business processes",
            stack: ["zapier", "n8n", "chatgpt", "slack", "GoogleWorkspace"]
          },
          {
            name: "Web Development",
            details: "Custom, high-performance websites with animations, interactive UI, and mobile optimization",
            stack: ["react", "nextjs", "framer", "tailwind"]
          },
          {
            name: "Mobile App Development",
            details: "Cross-platform apps with user auth, subscriptions, and backend integration",
            stack: ["react", "firebase", "stripe"]
          },
          {
            name: "E-Commerce Solutions",
            details: "Custom E-Commerce stores, headless setups, and automated product listing creation",
            stack: ["shopify", "webflow", "stripe"]
          },
          {
            name: "Data Visualization & Reporting",
            details: "Interactive dashboards, heat maps, and PDF data reports",
            stack: ["lucidchart", "react"]
          },
          {
            name: "Creative & Design Services",
            details: "Brand identity, logos, motion graphics, and interactive 3D visuals",
            stack: ["figma", "adobe", "blender", "javascript"]
          },
          {
            name: "AI / LLM Integrations",
            details: "AI-driven chatbots, predictive analytics, and sports performance models",
            stack: ["chatgpt", "python", "firebase"]
          },
          {
            name: "Consulting & Technical Support",
            details: "Tech stack planning, troubleshooting, and training for in-house teams",
            stack: ["notion", "GoogleSheets", "vercel", "zapier", "salesforce", "slack"]
          },
          null, // Empty line
          {
            name: "Full Tech Stack",
            details: "",
            stack: "all",
            isFullStack: true
          }
        ];
        const service = services[index];
        const isExpanded = clickedAccordion === index || hoveredAccordion === index;
        
        // Full tech stack array
        const fullTechStack = [
          "GoogleAnalytics4", "GoogleBigQuery", "GoogleDrive", "GoogleSearchConsole", "GoogleSheets", "GoogleWorkspace",
          "adobe", "airtable", "aws", "blender", "chatgpt", "davinci", "discord", "dropbox",
          "figma", "firebase", "framer", "github", "javascript", "lucidchart", "n8n",
          "nextjs", "notion", "python", "react", "runway", "salesforce", "semrush",
          "shopify", "slack", "stripe", "tailwind", "typescript", "veo3", "vercel",
          "vscode", "webflow", "zapier"
        ];
        
        // Calculate offset for lines below expanded accordion
        let offsetFromExpansions = 0;
        for (let i = 0; i < index; i++) {
          const isEarlierExpanded = clickedAccordion === i || hoveredAccordion === i;
          if (services[i] && isEarlierExpanded) {
            // Full tech stack needs more space
            const isFullStack = services[i]?.isFullStack;
            offsetFromExpansions += isFullStack ? 300 : 120;
          }
        }
        
        // Calculate offset for this specific line when its service is expanded
        const thisLineOffset = service && isExpanded ? (service.isFullStack ? 300 : 120) : 0;
        
        return (
          <div key={lineNumber}>
            {/* Service accordion - only for lines that have services */}
            {service && (
              <motion.div
                initial={{ 
                  opacity: 0,
                  x: -20
                }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0,
                  x: isLoaded ? 0 : -20,
                  y: offsetFromExpansions
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 2.3 + (lineNumber * 0.08) + 0.5 },
                  x: { duration: 0.8, delay: 2.3 + (lineNumber * 0.08) + 0.5 },
                  y: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                onMouseEnter={() => !service.isFullStack && setHoveredAccordion(index)}
                onMouseLeave={() => !service.isFullStack && setHoveredAccordion(null)}
                onClick={() => setClickedAccordion(clickedAccordion === index ? null : index)}
                style={{
                  position: 'absolute',
                  top: `${120 + (lineNumber * 45) - 35}px`,
                  left: '30px',
                  right: '30px',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                {/* Service title */}
                <motion.div
                  animate={{
                    color: isExpanded ? '#c9184a' : '#ffccd5'
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: '26px',
                    fontWeight: 'normal',
                    marginBottom: isExpanded ? '12px' : '0px'
                  }}
                >
                  {service.name}
                </motion.div>
                
                {/* Expanded content container */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isExpanded ? (service.isFullStack ? 300 : 120) : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  {service.isFullStack ? (
                    // Full tech stack display
                    <div
                      style={{
                        paddingTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {/* First row - first 19 icons */}
                      <div style={{
                        display: 'flex',
                        gap: '32px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        {fullTechStack.slice(0, 19).map((tech, techIndex) => (
                          <motion.img
                            key={techIndex}
                            src={`/techstack/${tech}.png`}
                            alt={tech}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </div>
                      {/* Second row - remaining 19 icons */}
                      <div style={{
                        display: 'flex',
                        gap: '32px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        {fullTechStack.slice(19).map((tech, techIndex) => (
                          <motion.img
                            key={techIndex + 19}
                            src={`/techstack/${tech}.png`}
                            alt={tech}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain',
                              cursor: 'pointer'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Regular service display
                    <div
                      style={{
                        fontSize: '16px',
                        color: '#ffccd5',
                        opacity: 0.8,
                        lineHeight: '1.4',
                        paddingTop: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px'
                      }}
                    >
                      <div style={{ 
                        flex: 1, 
                        maxWidth: '60%',
                        lineHeight: '1.6'
                      }}>
                        {service.details}
                      </div>
                      <div style={{ 
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        minWidth: 'fit-content'
                      }}>
                        {service.stack.map((tech, techIndex) => (
                          <img
                            key={techIndex}
                            src={`/techstack/${tech}.png`}
                            alt={tech}
                            style={{
                              width: '48px',
                              height: '48px',
                              objectFit: 'contain'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
            
            {/* Paper line - moves down when its associated service expands AND when accordions above expand */}
            <motion.div 
              initial={{ 
                scaleX: 0,
                transformOrigin: 'left center'
              }}
              animate={{ 
                scaleX: isLoaded ? 1 : 0,
                y: offsetFromExpansions + thisLineOffset
              }}
              transition={{ 
                scaleX: { duration: 1.2, delay: 2.3 + (lineNumber * 0.08), ease: [0.87, 0, 0.13, 1] },
                y: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              style={{
                position: 'absolute',
                top: `${120 + (lineNumber * 45)}px`,
                left: '0',
                width: '100%',
                height: '1px',
                backgroundColor: '#ffccd5',
                opacity: 0.7,
                transformOrigin: 'left center'
              }} 
            />
          </div>
        );
      })}

      {/* BACK button - top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onClick={() => router.back()}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: '1px solid #ffccd5',
          color: '#ffccd5',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
          zIndex: 100,
          borderRadius: '4px',
          transition: 'all 0.1s ease'
        }}
        whileHover={{
          backgroundColor: '#ffccd5',
          color: '#590d22',
          transition: { duration: 0.05 }
        }}
      >
        BACK
      </motion.button>
    </div>
  )
}
