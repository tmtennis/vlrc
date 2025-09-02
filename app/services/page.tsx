"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [clickedAccordion, setClickedAccordion] = useState<number | null>(null) // Start with all accordions closed
  const [hoveredAccordion, setHoveredAccordion] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#590d22',
      position: 'relative',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      paddingBottom: '100px',
      willChange: 'transform',
      transform: 'translateZ(0)',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      {/* Mobile/Desktop responsive styles */}
      <style jsx>{`
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .services-title {
          font-size: clamp(3rem, 15vw, 150px);
          line-height: 1;
          color: #ffccd5;
          font-weight: normal;
          letter-spacing: 2px;
          will-change: transform;
          transform: translateZ(0);
        }
        
        .services-subtitle {
          font-size: clamp(1rem, 4vw, 24px);
          font-weight: normal;
          margin-bottom: 0px;
          letter-spacing: 1px;
        }
        
        .services-tagline {
          font-size: clamp(0.9rem, 3.5vw, 20px);
          font-weight: normal;
          letter-spacing: 0.5px;
        }
        
        .service-item-title {
          font-size: clamp(1.2rem, 4vw, 26px);
          font-weight: normal;
        }
        
        .service-item-details {
          font-size: clamp(0.8rem, 2.5vw, 16px);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .services-title {
            top: 10px !important;
            left: 20px !important;
            z-index: 1 !important;
            right: auto !important;
            width: calc(100vw - 40px) !important;
            text-align: left !important;
          }
          
          .services-subtitle-container {
            top: 80px !important;
            right: 20px !important;
            left: 20px !important;
            text-align: center !important;
          }
          
          .services-content {
            top: 160px !important;
            left: 15px !important;
            right: 15px !important;
            padding-top: 20px !important;
          }
          
          .back-button-mobile {
            top: 5px !important;
            right: 15px !important;
            padding: 6px 12px !important;
            font-size: 12px !important;
          }
          
          .service-accordion {
            left: 15px !important;
            right: 15px !important;
            padding: 0 !important;
          }
          
          .tech-stack-mobile {
            gap: 8px !important;
            flex-wrap: wrap !important;
          }
          
          .tech-icon-mobile {
            width: 32px !important;
            height: 32px !important;
          }
          
          .full-stack-mobile {
            gap: 16px !important;
          }
          
          .full-stack-row-mobile {
            gap: 12px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .services-title {
            top: 5px !important;
            left: 15px !important;
          }
          
          .services-subtitle-container {
            top: 60px !important;
            right: 15px !important;
            left: 15px !important;
          }
          
          .services-content {
            top: 130px !important;
            left: 10px !important;
            right: 10px !important;
          }
          
          .service-accordion {
            left: 10px !important;
            right: 10px !important;
          }
          
          .tech-icon-mobile {
            width: 24px !important;
            height: 24px !important;
          }
          
          .full-stack-row-mobile {
            gap: 8px !important;
          }
        }
      `}</style>

      {/* Tagline headline - top center, mobile responsive, word-by-word animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '50px',
          left: 0,
          right: 0,
          width: '100%',
          textAlign: 'center',
          zIndex: 10,
          padding: '0 10px'
        }}
      >
        <motion.div
          style={{
            display: 'inline-block',
            width: '100%',
            fontWeight: 900,
            color: '#ffccd5',
            letterSpacing: '2px',
            marginBottom: '0.2em',
            lineHeight: 1.1,
            fontSize: 'clamp(1.5rem, 6vw, 2.5rem)'
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            },
            hidden: {}
          }}
        >
          {"WE WEAR A LOT OF HATS".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{ 
                display: 'inline-block', 
                marginRight: '0.4em',
                willChange: 'transform, opacity'
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* SERVICES title */}
      <motion.div
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '90px',
          left: '30px',
          zIndex: 1
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
        className="services-content"
        style={{
          position: 'absolute',
          top: '120px',
          left: '0',
          width: '100%',
          height: '2px',
          backgroundColor: '#ffccd5',
          transformOrigin: 'left center',
          zIndex: 5
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
        const isExpanded = isMobile ? (service !== null) : (clickedAccordion === index || hoveredAccordion === index);
        
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
                onMouseEnter={() => !isMobile && setHoveredAccordion(index)}
                onMouseLeave={() => !isMobile && setHoveredAccordion(null)}
                onClick={() => !isMobile && setClickedAccordion(clickedAccordion === index ? null : index)}
                className="service-accordion"
                style={{
                  position: 'absolute',
                  top: `${120 + (lineNumber * 45) - 35}px`,
                  left: '30px',
                  right: '30px',
                  cursor: isMobile ? 'default' : 'pointer',
                  zIndex: 10
                }}
              >
                {/* Service title */}
                <motion.div
                  className="service-item-title"
                  animate={{
                    color: isExpanded ? '#c9184a' : '#ffccd5'
                  }}
                  transition={{ duration: 0.15 }}
                  style={{
                    marginBottom: isExpanded ? '12px' : '0px',
                    willChange: 'color'
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
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                  style={{
                    overflow: 'hidden',
                    willChange: 'height, opacity'
                  }}
                >
                  {service.isFullStack ? (
                    // Full tech stack display
                    <div
                      className="full-stack-mobile"
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
                      <div className="full-stack-row-mobile" style={{
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
                            className="tech-icon-mobile"
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
                      <div className="full-stack-row-mobile" style={{
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
                            className="tech-icon-mobile"
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
                      className="service-item-details"
                      style={{
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
                      <div className="tech-stack-mobile" style={{ 
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        minWidth: 'fit-content'
                      }}>
                        {Array.isArray(service.stack) && service.stack.map((tech, techIndex) => (
                          <img
                            key={techIndex}
                            src={`/techstack/${tech}.png`}
                            alt={tech}
                            className="tech-icon-mobile"
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
        className="back-button-mobile"
        style={{
          position: 'fixed',
          top: '10px',
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
