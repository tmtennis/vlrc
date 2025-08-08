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
    <div style={{
      maxWidth: '500px',
      width: '100%',
      position: 'absolute',
      top: '80px',
      left: '50px'
    }}>
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
    setActiveSection(activeSection === section ? null : section)
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
        .display-text.home-hoverable:hover {
          color: #ff4d6d !important;
          transform: scale(1.03) translateX(80px) !important;
        }

        /* Responsive positioning for navigation items */
        @media (max-width: 768px) {
          .home-navigation .display-text:nth-child(1) { top: 90px !important; left: 20px !important; }
          .home-navigation .display-text:nth-child(2) { top: 170px !important; left: 20px !important; }
          .home-navigation .display-text:nth-child(3) { top: 250px !important; left: 20px !important; }
          .home-navigation .display-text:nth-child(4) { top: 330px !important; left: 20px !important; }
          .home-navigation .display-text:nth-child(5) { top: 410px !important; left: 20px !important; }
          header {
            left: 20px !important;
            top: 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          .home-navigation .display-text:nth-child(1) { top: 70px !important; left: 15px !important; }
          .home-navigation .display-text:nth-child(2) { top: 130px !important; left: 15px !important; }
          .home-navigation .display-text:nth-child(3) { top: 190px !important; left: 15px !important; }
          .home-navigation .display-text:nth-child(4) { top: 250px !important; left: 15px !important; }
          .home-navigation .display-text:nth-child(5) { top: 310px !important; left: 15px !important; }
          header {
            left: 15px !important;
            top: 10px !important;
          }
          .header-vlrc {
            left: 15px !important;
            top: 60px !important;
          }
        }
        .back-button {
          font-size: 2rem !important;
          color: #ffccd5 !important;
          font-family: Arial, sans-serif !important;
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
        
      `}</style>
      
      {/* Fixed VLRC Title */}
      <Header onClick={() => setActiveSection(null)} />
      
      {/* Header bottom line */}
      <div style={{
        position: 'fixed',
        top: '120px',
        left: '0',
        right: '0',
        width: '100%',
        height: '2px',
        backgroundColor: '#ffccd5',
        zIndex: 999
      }} />
      
      {/* Color Cards Rail */}
      <ColorRail />
      
      {activeSection === null && (
        <div className="home-navigation">
          <div 
            className="display-text home-hoverable" 
            style={{ top: '120px', left: '30px', cursor: 'pointer' }}
            onClick={() => router.push('/featured')}
          >
            FEATURED
          </div>
          
          <div 
            className="display-text home-hoverable" 
            style={{ top: '240px', left: '30px', cursor: 'pointer' }}
            onClick={() => handleSectionClick('AUTOMATION')}
          >
            SERVICES
          </div>
          
          <div 
            className="display-text home-hoverable" 
            style={{ top: '360px', left: '30px', cursor: 'pointer' }}
            onClick={() => handleSectionClick('SERVICES')}
          >
            AUTOMATION
          </div>
          
          <div 
            className="display-text home-hoverable" 
            style={{ top: '480px', left: '30px', cursor: 'pointer' }}
            onClick={() => handleSectionClick('ABOUT')}
          >
            ABOUT
          </div>
          
          <div 
            className="display-text home-hoverable" 
            style={{ top: '600px', left: '30px', cursor: 'pointer' }}
            onClick={() => handleSectionClick('CONTACT')}
          >
            CONTACT
          </div>
        </div>
      )}

      {/* Clock - always visible on home page */}
      {activeSection === null && (
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '30px',
          fontSize: '1rem',
          color: '#ffccd5',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: '400',
          zIndex: 1000,
          letterSpacing: '1px',
          textAlign: 'right',
          lineHeight: '1.4'
        }}>
          <div>New York City</div>
          <div>{currentTime.date}</div>
          <div>{currentTime.time}</div>
        </div>
      )}
        
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
        
        {activeSection === 'SERVICES' && (
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

            {/* Services content aligned like projects page */}
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
    </div>
  )
}
