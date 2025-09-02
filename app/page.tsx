"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
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
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    // Check if font is loaded
    const checkFont = async () => {
      try {
        await document.fonts.load('900 italic 1em CercoDEMO')
        setFontLoaded(true)
      } catch (_) {
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
    <div style={{ width: '100vw', height: '100vh', background: '#590d22', position: 'fixed', top: 0, left: 0, margin: 0, padding: 0, overflow: 'hidden' }} className="overflow-x-hidden">
      <style jsx>{`
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
          
          .mobile-menu-text {
            font-size: 2.5rem !important;
            line-height: 1 !important;
            white-space: nowrap !important;
          }
        }
        
        @media (max-width: 480px) {
          .display-text.home-hoverable:hover {
            color: #ff4d6d !important;
            transform: scale(1.01) translateX(10px) !important;
          }
          
          .mobile-menu-text {
            font-size: 2rem !important;
          }
        }

        /* Responsive positioning - handled in global styles */
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
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
          width: auto !important;
          max-width: calc(100vw - 270px) !important;
          margin-left: 120px !important;
        }
        
        .home-navigation .display-text svg {
          flex-shrink: 0 !important;
          width: 64px !important;
          height: 64px !important;
        }
        
        .menu-icon {
          flex-shrink: 0 !important;
          display: block !important;
        }
        
        .home-navigation .display-text span {
          white-space: nowrap !important;
          flex: 1 !important;
          min-width: 0 !important;
        }
        
        .mobile-menu-text {
          font-size: 4rem !important;
          font-weight: bold !important;
          color: inherit !important;
          line-height: 1 !important;
          display: block !important;
        }
        
        @media (max-width: 768px) {
          .home-navigation .display-text {
            gap: 10px !important;
            margin-left: 60px !important;
            max-width: calc(100vw - 135px) !important;
          }
          
          .home-navigation .display-text svg {
            width: 48px !important;
            height: 48px !important;
          }
          
          .menu-icon {
            width: 48px !important;
            height: 48px !important;
          }
        }
        
        @media (max-width: 480px) {
          .home-navigation .display-text {
            gap: 8px !important;
            margin-left: 40px !important;
            max-width: calc(100vw - 85px) !important;
          }
          
          .home-navigation .display-text svg {
            width: 40px !important;
            height: 40px !important;
          }
          
          .menu-icon {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 320px) {
          .home-navigation .display-text {
            gap: 6px !important;
            margin-left: 30px !important;
            max-width: calc(100vw - 75px) !important;
          }
          
          .home-navigation .display-text svg, .menu-icon {
            width: 32px !important;
            height: 32px !important;
          }
          
          .mobile-menu-text {
            font-size: 1.6rem !important;
          }
          
          .mobile-header,
          div.mobile-header {
            font-size: 0.6rem !important;
            max-width: none !important;
            top: 50px !important;
            transform: translateX(-50%) translateY(-50%) !important;
            letter-spacing: 0.5px !important;
          }
        }
        
        .home-navigation .display-text:nth-child(1) { 
          top: calc(100px + (100vh - 100px) * 0.05) !important; 
        }
        .home-navigation .display-text:nth-child(2) { 
          top: calc(100px + (100vh - 100px) * 0.22) !important; 
        }
        .home-navigation .display-text:nth-child(3) { 
          top: calc(100px + (100vh - 100px) * 0.39) !important; 
        }
        .home-navigation .display-text:nth-child(4) { 
          top: calc(100px + (100vh - 100px) * 0.56) !important; 
        }
        .home-navigation .display-text:nth-child(5) { 
          top: calc(100px + (100vh - 100px) * 0.73) !important; 
        }
        
        @media (max-width: 768px) {
          .home-navigation .display-text:nth-child(1) { 
            top: calc(100px + (100vh - 100px) * 0.08) !important; 
          }
          .home-navigation .display-text:nth-child(2) { 
            top: calc(100px + (100vh - 100px) * 0.24) !important; 
          }
          .home-navigation .display-text:nth-child(3) { 
            top: calc(100px + (100vh - 100px) * 0.40) !important; 
          }
          .home-navigation .display-text:nth-child(4) { 
            top: calc(100px + (100vh - 100px) * 0.56) !important; 
          }
          .home-navigation .display-text:nth-child(5) { 
            top: calc(100px + (100vh - 100px) * 0.72) !important; 
          }
        }
        
        @media (max-width: 480px) {
          .home-navigation .display-text:nth-child(1) { 
            top: calc(90px + (100vh - 90px) * 0.08) !important; 
          }
          .home-navigation .display-text:nth-child(2) { 
            top: calc(90px + (100vh - 90px) * 0.24) !important; 
          }
          .home-navigation .display-text:nth-child(3) { 
            top: calc(90px + (100vh - 90px) * 0.40) !important; 
          }
          .home-navigation .display-text:nth-child(4) { 
            top: calc(90px + (100vh - 90px) * 0.56) !important; 
          }
          .home-navigation .display-text:nth-child(5) { 
            top: calc(90px + (100vh - 90px) * 0.72) !important; 
          }
        }
      `}</style>
      
      {/* Fixed VLRC Title - with responsive positioning */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.8,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="mobile-header"        style={{
          position: 'fixed', 
          top: '50px', 
          left: '50%', 
          transform: 'translateX(-50%) translateY(-50%)', 
          fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)', 
          fontWeight: 'bold', 
          fontStyle: 'italic', 
          color: '#ffccd5', 
          letterSpacing: 'clamp(0.5px, 1.2vw, 2px)', 
          textAlign: 'center', 
          width: 'auto', 
          zIndex: 10,
          whiteSpace: 'nowrap',
          padding: '0 10px'
        }}
      >
        VLRC COMMODITIES
      </motion.div>
      
      {/* Header bottom line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.8,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          position: 'fixed',
          top: '100px',
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
        <div className="home-navigation" style={{position: 'relative', width: '100vw', maxWidth: '100vw'}}>
          {/* FEATURED */}
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ color: '#ff4d6d', scale: 1.03, x: 80, skewX: 2, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.68, -0.55, 0.265, 1.55], color: { duration: 0.15 }, scale: { duration: 0.15 }, x: { duration: 0.15 }, skewX: { duration: 0.15 } }}
            className="display-text home-hoverable"
            style={{ cursor: 'pointer', transformOrigin: 'left center', left: '30px', color: '#ffccd5' }}
            onClick={() => router.push('/featured')}
          >
            {/* Inline SVG for Featured */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
              <path d="M5.36655 10.2421C4.28985 8.4221 3.75151 7.51211 4.11106 6.78804C4.4706 6.06397 5.48992 6.00535 7.52857 5.88812L8.05599 5.85779C8.63531 5.82448 8.92497 5.80782 9.17756 5.67305C9.43014 5.53828 9.61705 5.30066 9.99088 4.82542L10.3312 4.39274C11.6467 2.72034 12.3045 1.88413 13.0606 2.01293C13.8167 2.14173 14.1705 3.15023 14.8779 5.16723M5.80455 13.5087C5.25206 15.5982 4.97582 16.6429 5.50972 17.2192C6.04363 17.7955 7.0341 17.5217 9.01504 16.9741L9.99088 16.5M17.048 7.50967C18.9378 8.29605 19.8826 8.68925 19.9904 9.49292C20.0823 10.1786 19.513 10.7756 18.3493 11.7831" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16.2387 19.57C17.7244 19.9565 18.4673 20.1498 18.8677 19.743C19.2681 19.3362 19.061 18.5987 18.6466 17.1238L18.5394 16.7422C18.4216 16.3231 18.3628 16.1135 18.3924 15.9057C18.422 15.6979 18.5367 15.5154 18.7662 15.1503L18.9751 14.818C19.7826 13.5332 20.1864 12.8909 19.9167 12.3798C19.647 11.8687 18.8826 11.8273 17.3536 11.7446L16.958 11.7231C16.5235 11.6996 16.3063 11.6879 16.1168 11.5927C15.9274 11.4976 15.7872 11.3299 15.5068 10.9944L15.2516 10.689C14.265 9.50847 13.7716 8.91821 13.2045 9.00913C12.6375 9.10004 12.3722 9.81193 11.8416 11.2357L11.7043 11.604C11.5535 12.0086 11.4781 12.2109 11.3314 12.3599C11.1848 12.509 10.9834 12.5878 10.5806 12.7456L10.214 12.8892C8.79667 13.4443 8.08803 13.7218 8.00721 14.2891C7.92639 14.8564 8.52692 15.3378 9.72797 16.3004L10.0387 16.5495C10.38 16.8231 10.5507 16.9599 10.6494 17.1471C10.7482 17.3343 10.7639 17.5508 10.7954 17.9837L10.824 18.3779C10.9347 19.9015 10.9901 20.6633 11.5072 20.923C12.0244 21.1827 12.6608 20.7683 13.9337 19.9395" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div style={{minWidth: 0, position: 'relative', flex: 1}}>
              <span className="mobile-menu-text" style={{fontSize: '4rem', fontWeight: 'bold', color: 'inherit', lineHeight: 1, display: 'block', whiteSpace: 'nowrap'}}>FEATURED</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '2px',
                  background: '#ffccd5',
                  borderRadius: '1px',
                  transformOrigin: 'left center',
                  zIndex: 1
                }}
              />
            </div>
          </motion.div>
          {/* SERVICES */}
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ color: '#ff4d6d', scale: 1.03, x: 80, skewX: 2, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.68, -0.55, 0.265, 1.55], color: { duration: 0.15 }, scale: { duration: 0.15 }, x: { duration: 0.15 }, skewX: { duration: 0.15 } }}
            className="display-text home-hoverable"
            style={{ cursor: 'pointer', transformOrigin: 'left center', left: '30px', color: '#ffccd5' }}
            onClick={() => handleSectionClick('SERVICES')}
          >
            {/* Inline SVG for Services */}
            <svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
              <path d="M13.91,8.18V1.5H8.18v8.59l-6.29,9a2.25,2.25,0,0,0-.39,1.25h0A2.17,2.17,0,0,0,3.68,22.5H18.41" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
              <line x1="6.27" y1="1.5" x2="15.82" y2="1.5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
              <circle cx="15.82" cy="13.91" r="3.82" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
              <line x1="18.2" y1="16.3" x2="22.5" y2="20.59" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
            </svg>
            <div style={{minWidth: 0, position: 'relative', flex: 1}}>
              <span className="mobile-menu-text">SERVICES</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '2px',
                  background: '#ffccd5',
                  borderRadius: '1px',
                  transformOrigin: 'left center',
                  zIndex: 1
                }}
              />
            </div>
          </motion.div>
          {/* WORK */}
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ color: '#ff4d6d', scale: 1.03, x: 80, skewX: 2, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.68, -0.55, 0.265, 1.55], color: { duration: 0.15 }, scale: { duration: 0.15 }, x: { duration: 0.15 }, skewX: { duration: 0.15 } }}
            className="display-text home-hoverable"
            style={{ cursor: 'pointer', transformOrigin: 'left center', left: '30px', color: '#ffccd5' }}
            onClick={() => router.push('/work')}
          >
            {/* Inline SVG for Work */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="currentColor"/>
            </svg>
            <div style={{minWidth: 0, position: 'relative', flex: 1}}>
              <span className="mobile-menu-text">WORK</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.68, -0.55, 0.265, 1.55] }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '2px',
                  background: '#ffccd5',
                  borderRadius: '1px',
                  transformOrigin: 'left center',
                  zIndex: 1
                }}
              />
            </div>
          </motion.div>
          {/* CONTACT */}
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ color: '#ff4d6d', scale: 1.03, x: 80, skewX: 2, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, delay: 1.5, ease: [0.68, -0.55, 0.265, 1.55], color: { duration: 0.15 }, scale: { duration: 0.15 }, x: { duration: 0.15 }, skewX: { duration: 0.15 } }}
            className="display-text home-hoverable"
            style={{ cursor: 'pointer', transformOrigin: 'left center', left: '30px', color: '#ffccd5' }}
            onClick={() => router.push('/contact')}
          >
            {/* Inline SVG for Contact */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
              <path d="M8 10.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 14H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div style={{minWidth: 0, position: 'relative', flex: 1}}>
              <span className="mobile-menu-text">CONTACT</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '2px',
                  background: '#ffccd5',
                  borderRadius: '1px',
                  transformOrigin: 'left center',
                  zIndex: 1
                }}
              />
            </div>
          </motion.div>
          {/* SHOP */}
          <motion.div 
            initial={{ opacity: 0, width: 0, skewX: -15, scale: 0.8 }}
            animate={{ opacity: 1, width: 'auto', skewX: 0, scale: 1 }}
            whileHover={{ color: '#ff4d6d', scale: 1.03, x: 80, skewX: 2, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, delay: 1.6, ease: [0.68, -0.55, 0.265, 1.55], color: { duration: 0.15 }, scale: { duration: 0.15 }, x: { duration: 0.15 }, skewX: { duration: 0.15 } }}
            className="display-text home-hoverable"
            style={{ cursor: 'pointer', transformOrigin: 'left center', left: '30px', color: '#ffccd5' }}
            onClick={() => window.open('https://frank-sigma.vercel.app/', '_blank')}
          >
            {/* Inline SVG for Shop */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
              <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 22H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M19 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M5 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M11.9999 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div style={{minWidth: 0, position: 'relative', flex: 1}}>
              <span className="mobile-menu-text">SHOP</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: '-10px',
                  width: '100%',
                  height: '2px',
                  background: '#ffccd5',
                  borderRadius: '1px',
                  transformOrigin: 'left center',
                  zIndex: 1
                }}
              />
            </div>
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
