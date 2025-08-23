"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import ColorRail from '../components/ColorRail'

const AutomationList = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const automationServices = [
    {
      id: 'apps',
      title: 'APPS',
      subtitle: 'Apps → Unified Workflows',
      description: 'Connect your favorite tools into seamless automated systems.',
      features: ['API connections across platforms', 'Logic-based workflows', 'Trigger/Action automation', 'Error handling & monitoring']
    },
    {
      id: 'custom',
      title: 'CUSTOM AUTOMATIONS',
      subtitle: 'Manual Tasks → One-Click Flows',
      description: 'Build bespoke automations to streamline repetitive internal tasks.',
      features: ['Conditional logic support', 'Multi-step workflows', 'Approval-based triggers', 'One-click execution tools']
    },
    {
      id: 'leads',
      title: 'LEAD MANAGEMENT',
      subtitle: 'Inbound → CRM',
      description: 'Capture, enrich, and route new leads instantly.',
      features: ['Form integrations', 'Lead scoring', 'Auto-assignment rules', 'CRM tagging and segmentation']
    },
    {
      id: 'support',
      title: 'SUPPORT AUTOMATION',
      subtitle: 'Tickets → Resolutions',
      description: 'Reduce resolution time with automations across support platforms.',
      features: ['Auto-response sequences', 'Ticket categorization', 'Priority routing', 'SLA tracking workflows']
    },
    {
      id: 'onboarding',
      title: 'ONBOARDING FLOWS',
      subtitle: 'New Users → Fully Set Up',
      description: 'Automate user/customer onboarding across systems and touchpoints.',
      features: ['Welcome emails & walkthroughs', 'CRM creation & tagging', 'Auto-provision tools/accounts', 'Time-delayed engagement sequences']
    },
    {
      id: 'billing',
      title: 'BILLING AUTOMATION',
      subtitle: 'Invoices → Reconciliation',
      description: 'Streamline financial tasks from invoice creation to payment tracking.',
      features: ['Auto-generate invoices', 'Payment reminders & receipts', 'Subscription sync (Stripe, Shopify, etc.)', 'Revenue reporting integrations']
    }
  ]

  return (
    <>
      <style jsx>{`
        .automation-container {
          max-width: 500px;
          width: 100%;
          position: absolute;
          top: 80px;
          left: 50px;
        }
        
        @media (max-width: 768px) {
          .automation-container {
            max-width: calc(100vw - 45px);
            left: 20px;
            top: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .automation-container {
            max-width: calc(100vw - 35px);
            left: 15px;
            top: 40px;
          }
        }
      `}</style>
      
      <div className="automation-container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {automationServices.map((service) => (
          <div key={service.id}>
            <div 
              style={{
                padding: '12px 16px',
                background: 'rgba(255, 240, 243, 0.08)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgba(255, 204, 213, 0.2)',
                cursor: 'pointer',
                ...(expandedItem === service.id && {
                  background: 'rgba(255, 240, 243, 0.12)',
                  borderColor: 'rgba(255, 204, 213, 0.4)'
                })
              }}
              onClick={() => setExpandedItem(expandedItem === service.id ? null : service.id)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#fff0f3',
                    fontWeight: '900',
                    marginBottom: '2px'
                  }}>
                    {service.title}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 240, 243, 0.7)',
                    fontWeight: '400',
                    fontStyle: 'normal',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}>
                    {service.subtitle}
                  </div>
                </div>
                <div style={{
                  color: '#ff4d6d',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>

            {expandedItem === service.id && (
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: '16px 20px 16px',
                  background: 'rgba(255, 240, 243, 0.05)',
                  borderLeft: '3px solid #ff4d6d',
                  marginLeft: '0px',
                  marginRight: '0px',
                  marginTop: '-1px'
                }}>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 240, 243, 0.8)',
                      lineHeight: '1.5',
                      marginBottom: '12px',
                      fontWeight: '400',
                      fontStyle: 'normal',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                      {service.description}
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '6px'
                    }}>
                      {service.features.map((feature, index) => (
                        <div key={index} style={{
                          fontSize: '0.75rem',
                          color: 'rgba(255, 240, 243, 0.6)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: '400',
                          fontStyle: 'normal',
                          fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                          <div style={{
                            width: '3px',
                            height: '3px',
                            borderRadius: '50%',
                            background: '#ff4d6d'
                          }}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default function HomePage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [fontLoaded, setFontLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState<{date: string, time: string}>({date: '', time: ''})

  useEffect(() => {
    // Check if font is loaded
    const checkFont = async () => {
      try {
        await document.fonts.load('900 italic 1em CercoDEMO')
        setFontLoaded(true)
      } catch (error) {
        // Fallback after timeout
        setTimeout(() => setFontLoaded(true), 500)
      }
    }
    
    if (document.fonts.check('900 italic 1em CercoDEMO')) {
      setFontLoaded(true)
    } else {
      checkFont()
    }

  }, [])

  // Clock useEffect
  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      
      // Format date as MM/DD/YY
      const easternDate = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
      }).format(now)
      
      // Format time as HH:MM:SS
      const easternTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now)
      
      setCurrentTime({ date: easternDate, time: easternTime })
    }

    // Update immediately
    updateClock()
    
    // Update every second
    const interval = setInterval(updateClock, 1000)
    
    // Cleanup
    return () => clearInterval(interval)
  }, [])

  const handleSectionClick = (section: string) => {
    if (section === 'SERVICES') {
      router.push('/services')
    } else {
      setActiveSection(activeSection === section ? null : section)
    }
  }

  // Don't render content until font is loaded
  if (!fontLoaded) {
    return (
      <div 
        style={{ 
          width: '100vw',
          height: '100vh',
          background: '#590d22',
          margin: 0,
          padding: 0,
          position: 'fixed',
          top: 0,
          left: 0
        }}
      />
    )
  }

  return (
    <div 
      style={{ 
        width: '100vw',
        height: '100vh',
        background: '#590d22',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}
    >      <style jsx>{`
        /* Home navigation hover effects */
        .display-text.home-hoverable {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
          transform-origin: left center !important;
        }
        
        /* Desktop hover effects */
        @media (min-width: 769px) {
          .display-text.home-hoverable:hover {
            color: #ff4d6d !important;
            transform: scale(1.03) translateX(80px) !important;
          }
        }
        
        /* Mobile/tablet hover effects - reduced movement */
        @media (max-width: 768px) {
          .display-text.home-hoverable:hover {
            color: #ff4d6d !important;
            transform: scale(1.02) translateX(20px) !important;
          }
        }
        
        @media (max-width: 480px) {
          .display-text.home-hoverable:hover {
            color: #ff4d6d !important;
            transform: scale(1.01) translateX(10px) !important;
          }
        }

        /* Responsive positioning for navigation items */
        @media (max-width: 768px) {
          .home-navigation .display-text:nth-child(1) { 
            top: calc(120px + (100vh - 120px) * 0.08) !important; 
            left: 20px !important; 
          }
          .home-navigation .display-text:nth-child(2) { 
            top: calc(120px + (100vh - 120px) * 0.26) !important; 
            left: 20px !important; 
          }
          .home-navigation .display-text:nth-child(3) { 
            top: calc(120px + (100vh - 120px) * 0.44) !important; 
            left: 20px !important; 
          }
          .home-navigation .display-text:nth-child(4) { 
            top: calc(120px + (100vh - 120px) * 0.62) !important; 
            left: 20px !important; 
          }
          .home-navigation .display-text:nth-child(5) { 
            top: calc(120px + (100vh - 120px) * 0.80) !important; 
            left: 20px !important; 
          }
        }
        
        @media (max-width: 480px) {
          .home-navigation .display-text:nth-child(1) { 
            top: calc(120px + (100vh - 120px) * 0.05) !important; 
            left: 15px !important; 
          }
          .home-navigation .display-text:nth-child(2) { 
            top: calc(120px + (100vh - 120px) * 0.23) !important; 
            left: 15px !important; 
          }
          .home-navigation .display-text:nth-child(3) { 
            top: calc(120px + (100vh - 120px) * 0.41) !important; 
            left: 15px !important; 
          }
          .home-navigation .display-text:nth-child(4) { 
            top: calc(120px + (100vh - 120px) * 0.59) !important; 
            left: 15px !important; 
          }
          .home-navigation .display-text:nth-child(5) { 
            top: calc(120px + (100vh - 120px) * 0.77) !important; 
            left: 15px !important; 
          }
          .header-vlrc {
            left: 15px !important;
            top: 60px !important;
          }
        }
        
        /* Make sure navigation items don't overlap with color rail on mobile */
        @media (max-width: 768px) {
          .home-navigation .display-text {
            max-width: calc(100vw - 45px) !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        }
        
        @media (max-width: 480px) {
          .home-navigation .display-text {
            max-width: calc(100vw - 35px) !important;
          }
        }
        .back-button {
          font-size: 2rem !important;
          color: #ffccd5 !important;
          font-family: 'CercoDEMO-BlackItalic', Arial, sans-serif !important;
          font-weight: bold !important;
          font-style: italic !important;
          background: none !important;
          border: none !important;
          cursor: pointer !important;
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-origin: left center !important;
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
        }
        .back-button:hover {
          transform: scale(1.05) !important;
        }
        .back-button svg {
          width: 24px !important;
          height: 24px !important;
          color: #ffccd5 !important;
        }
        
        /* Mobile responsive back button */
        @media (max-width: 768px) {
          .back-button {
            bottom: 20px !important;
            right: 20px !important;
            width: 35px !important;
            height: 35px !important;
            font-size: 1.5rem !important;
          }
          .back-button svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .back-button {
            bottom: 15px !important;
            right: 15px !important;
            width: 30px !important;
            height: 30px !important;
            font-size: 1.2rem !important;
          }
          .back-button svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        
      `}</style>
      
      {/* Override navigation positioning */}
      <style jsx global>{`
        .home-navigation .display-text {
          position: absolute !important;
        }
        .home-navigation .display-text:nth-child(1) { 
          top: calc(120px + (100vh - 120px) * 0.05) !important; 
        }
        .home-navigation .display-text:nth-child(2) { 
          top: calc(120px + (100vh - 120px) * 0.2375) !important; 
        }
        .home-navigation .display-text:nth-child(3) { 
          top: calc(120px + (100vh - 120px) * 0.425) !important; 
        }
        .home-navigation .display-text:nth-child(4) { 
          top: calc(120px + (100vh - 120px) * 0.6125) !important; 
        }
        .home-navigation .display-text:nth-child(5) { 
          top: calc(120px + (100vh - 120px) * 0.80) !important; 
        }
      `}</style>
      
      {/* Fixed VLRC Title - with red color to show location */}
      <Header onClick={() => setActiveSection(null)} />
      
      {/* Header bottom line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.15,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          position: 'fixed',
          top: '120px',
          left: '0',
          right: '0',
          width: '100%',
          height: '2px',
          backgroundColor: '#ffccd5',
          zIndex: 999,
          transformOrigin: 'left center'
        }} 
      />
      
      {/* Color Cards Rail */}
      <ColorRail />
      
      {activeSection === null && (
        <div className="home-navigation">
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ 
              color: '#ff4d6d',
              scale: 1.03,
              x: 80,
              skewX: 2, // Slight skew on hover for dynamic feel
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.6,
              delay: 1.2, // Start after color rail completes
              ease: [0.68, -0.55, 0.265, 1.55], // Same elastic ease as color rail
              // Faster return transition when not hovering
              color: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0.15 },
              skewX: { duration: 0.15 }
            }}
            className="display-text home-hoverable" 
            style={{ 
              top: 'calc(120px + (100vh - 120px) * 0.05)', // 5% down from stroke line
              left: '30px', 
              cursor: 'pointer',
              transformOrigin: 'left center'
            }}
            onClick={() => router.push('/featured')}
          >
            FEATURED
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ 
              color: '#ff4d6d',
              scale: 1.03,
              x: 80,
              skewX: 2,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.6,
              delay: 1.3, // 0.1s after previous
              ease: [0.68, -0.55, 0.265, 1.55], // Same elastic ease as color rail
              // Faster return transition when not hovering
              color: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0.15 },
              skewX: { duration: 0.15 }
            }}
            className="display-text home-hoverable" 
            style={{ 
              top: 'calc(120px + (100vh - 120px) * 0.20)', // 20% down from stroke line
              left: '30px', 
              cursor: 'pointer',
              transformOrigin: 'left center'
            }}
            onClick={() => handleSectionClick('SERVICES')}
          >
            SERVICES
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ 
              color: '#ff4d6d',
              scale: 1.03,
              x: 80,
              skewX: 2,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.6,
              delay: 1.4, // 0.1s after previous
              ease: [0.68, -0.55, 0.265, 1.55], // Same elastic ease as color rail
              // Faster return transition when not hovering
              color: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0.15 },
              skewX: { duration: 0.15 }
            }}
            className="display-text home-hoverable" 
            style={{ 
              top: 'calc(120px + (100vh - 120px) * 0.35)', // 35% down from stroke line
              left: '30px', 
              cursor: 'pointer',
              transformOrigin: 'left center'
            }}
            onClick={() => router.push('/work')}
          >
            WORK
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ 
              color: '#ff4d6d',
              scale: 1.03,
              x: 80,
              skewX: 2,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.6,
              delay: 1.5, // 0.1s after previous
              ease: [0.68, -0.55, 0.265, 1.55], // Same elastic ease as color rail
              // Faster return transition when not hovering
              color: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0.15 },
              skewX: { duration: 0.15 }
            }}
            className="display-text home-hoverable" 
            style={{ 
              top: 'calc(120px + (100vh - 120px) * 4 / 6)', // 4/6 down from stroke line
              left: '30px', 
              cursor: 'pointer',
              transformOrigin: 'left center'
            }}
            onClick={() => router.push('/contact')}
          >
            CONTACT
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ 
              color: '#ff4d6d',
              scale: 1.03,
              x: 80,
              skewX: 2,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ 
              duration: 0.6,
              delay: 1.6, // 0.1s after previous
              ease: [0.68, -0.55, 0.265, 1.55], // Same elastic ease as color rail
              // Faster return transition when not hovering
              color: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { duration: 0.15 },
              skewX: { duration: 0.15 }
            }}
            className="display-text home-hoverable" 
            style={{ 
              top: 'calc(120px + (100vh - 120px) * 5 / 6)', // 5/6 down from stroke line
              left: '30px', 
              cursor: 'pointer',
              transformOrigin: 'left center'
            }}
            onClick={() => window.open('https://frank-sigma.vercel.app/', '_blank')}
          >
            SHOP
          </motion.div>
        </div>
      )}

      {/* Clock - always visible on home page */}
      {/* Removed clock component */}
        
        {activeSection === 'AUTOMATION' && (
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#590d22',
              overflow: 'auto'
            }}
          >
            {/* Back button - moved to bottom right */}
            <button
              onClick={() => setActiveSection(null)}
              className="back-button"
              style={{ 
                bottom: '30px', 
                right: '30px', 
                position: 'fixed',
                zIndex: 100
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Automation Content */}
            <div style={{ 
              padding: '30px', 
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              
              {/* Compact Collapsible Automation List */}
              <AutomationList />
            </div>
          </div>
        )}
        
        {activeSection === 'ABOUT' && (
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#590d22',
              overflow: 'auto'
            }}
          >
            {/* Back button - moved to bottom right */}
            <button
              onClick={() => setActiveSection(null)}
              className="back-button"
              style={{ 
                bottom: '30px', 
                right: '30px', 
                position: 'fixed',
                zIndex: 100
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* About content aligned like projects page */}
            <div 
              className="text-element" 
              style={{ 
                top: '0px', 
                left: '30px' 
              }}
            >
              COMING SOON
            </div>
          </div>
        )}
        
        {activeSection === 'CONTACT' && (
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#590d22',
              overflow: 'auto'
            }}
          >
            {/* Back button - moved to bottom right */}
            <button
              onClick={() => setActiveSection(null)}
              className="back-button"
              style={{ 
                bottom: '30px', 
                right: '30px', 
                position: 'fixed',
                zIndex: 100
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Contact content aligned like projects page */}
            <div 
              className="text-element" 
              style={{ 
                top: '0px', 
                left: '30px' 
              }}
            >
              COMING SOON
            </div>
          </div>
        )}
        
        {activeSection === 'SHOP' && (
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: 0,
              right: 0,
              bottom: 0,
              background: '#590d22',
              overflow: 'auto'
            }}
          >
            {/* Back button - moved to bottom right */}
            <button
              onClick={() => setActiveSection(null)}
              className="back-button"
              style={{ 
                bottom: '30px', 
                right: '30px', 
                position: 'fixed',
                zIndex: 100
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Shop content aligned like projects page */}
            <div 
              className="text-element" 
              style={{ 
                top: '0px', 
                left: '30px' 
              }}
            >
              COMING SOON
            </div>
          </div>
        )}
    </div>
  )
}
