'use client';

import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeStyles } from "@/hooks/useThemeStyles";
import { themes } from "@/styles/colors";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";

const inter = Inter({ 
  subsets: ["latin"],
  weight: "800"
});

// Service interface
interface Service {
  Service: string;
  Details: string;
  Stack: string;
  'svg-icon': string;
}

// Tech stack text-to-image mapping
const techStackImages: { [key: string]: string } = {
  // Exact matches first
  'Zapier': 'zapier.png',
  'n8n': 'n8n.png',
  'Open-Ai': 'chatgpt.png',
  'Slack': 'slack.png',
  'Google Workspace': 'GoogleWorkspace.png',
  'React': 'react.png',
  'Next.js': 'nextjs.png',
  'Framer': 'framer.png',
  'Tailwind CSS': 'tailwind.png',
  'Shopify': 'shopify.png',
  'Webflow': 'webflow.png',
  'Stripe': 'stripe.png',
  'Figma': 'figma.png',
  'Adobe Suite': 'adobe.png',
  'Blender': 'blender.png',
  'Three.js': 'javascript.png', // Using JS icon for Three.js
  'Notion': 'notion.png',
  'Google Sheets': 'GoogleSheets.png',
  'Vercel': 'vercel.png',
  'Salesforce': 'salesforce.png',
  'Airtable': 'airtable.png',
  'AWS': 'aws.png',
  'BigQuery': 'GoogleBigQuery.png',
  'Google Analytics': 'GoogleAnalytics4.png',
  'Firebase': 'firebase.png',
  'GitHub': 'github.png',
  'Discord': 'discord.png',
  'Dropbox': 'dropbox.png',
  'Python': 'python.png',
  'TypeScript': 'typescript.png',
  'JavaScript': 'javascript.png',
  'VS Code': 'vscode.png',
  'Lucidchart': 'lucidchart.png',
  'DaVinci': 'davinci.png',
  'Runway': 'runway.png',
  'Veo3': 'veo3.png',
  'SEMrush': 'semrush.png',
  'Google Drive': 'GoogleDrive.png',
  'Google Search Console': 'GoogleSearchConsole.png'
};

// Get all available tech stack images
const getAllTechStackImages = (): string[] => {
  return [
    'GoogleAnalytics4.png',
    'GoogleBigQuery.png', 
    'GoogleDrive.png',
    'GoogleSearchConsole.png',
    'GoogleSheets.png',
    'GoogleWorkspace.png',
    'adobe.png',
    'airtable.png',
    'aws.png',
    'blender.png',
    'chatgpt.png',
    'davinci.png',
    'discord.png',
    'dropbox.png',
    'figma.png',
    'firebase.png',
    'framer.png',
    'github.png',
    'javascript.png',
    'lucidchart.png',
    'n8n.png',
    'nextjs.png',
    'notion.png',
    'python.png',
    'react.png',
    'runway.png',
    'salesforce.png',
    'semrush.png',
    'shopify.png',
    'slack.png',
    'stripe.png',
    'tailwind.png',
    'typescript.png',
    'veo3.png',
    'vercel.png',
    'vscode.png',
    'webflow.png',
    'zapier.png'
  ];
};

// Service data (in a real app, this would be loaded from CSV)
const services: Service[] = [
  {
    Service: "Automation & Workflow Design",
    Details: "End-to-end automation setups between apps, with smart triggers and logic for seamless business processes",
    Stack: "Zapier, n8n, Open-Ai, Slack, Google Workspace",
    'svg-icon': "automation-and-workflow-design.svg"
  },
  {
    Service: "Web Development",
    Details: "Custom, high-performance websites with animations, interactive UI, and mobile optimization",
    Stack: "React, Next.js, Framer, Tailwind CSS",
    'svg-icon': "web-development.svg"
  },
  {
    Service: "E-Commerce Solutions",
    Details: "Custom E-Commerce stores, headless setups, and automated product listing creation",
    Stack: "Shopify, Webflow, Stripe",
    'svg-icon': "e-commerce-solutions.svg"
  },
  {
    Service: "Creative & Design Services",
    Details: "Brand identity, logos, motion graphics, and interactive 3D visuals",
    Stack: "Figma, Adobe Suite, Blender, Three.js",
    'svg-icon': "creative-and-design-services.svg"
  },
  {
    Service: "Consulting & Technical Support",
    Details: "Tech stack planning, troubleshooting, and training for in-house teams",
    Stack: "Notion, Google Sheets, Vercel, Zapier, Salesforce, Slack",
    'svg-icon': "consulting-and-technical-support.svg"
  },
  {
    Service: "CRM Assistance & Optimization",
    Details: "Setup, customization, and optimization of CRM platforms for lead tracking, pipeline management, and automation",
    Stack: "Salesforce, Zapier, Google Sheets",
    'svg-icon': "crm-assistance-and-optimization.svg"
  },
  {
    Service: "Data Integration",
    Details: "Secure migration of data between platforms with validation, cleanup, and integration into existing workflows",
    Stack: "Google Sheets, Airtable, Zapier, n8n, AWS, BigQuery",
    'svg-icon': "data-integration.svg"
  },
  {
    Service: "Full Tech Stack",
    Details: "Comprehensive overview of all technologies, tools, and platforms I work with across different projects and services",
    Stack: "all-tech-stack", // Special identifier for full tech stack
    'svg-icon': "techstack.svg"
  }
];

// Separate component for menu items to handle hooks properly
const MenuItem = memo(({ item, index, svgFilter, styles, isClient }: {
  item: {
    icon: string;
    label: string;
    onClick: () => void;
  };
  index: number;
  svgFilter: string;
  styles: {
    background: string;
    text: string;
    accent: string;
  };
  isClient: boolean;
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Menu descriptions based on CSV data
  const descriptions: { [key: string]: string } = {
    'Featured': 'Highlighted projects and recent work',
    'Services': 'Solutions tailored to client needs',
    'Releases': 'Additional projects and work',
    'Contact': 'Get in contact',
    'Market': 'Clothing & accessories'
  };
  
  const description = descriptions[item.label] || null;
  
  // Set initialAnimationComplete to true after initial animation
  useEffect(() => {
    if (!isClient) return;
    
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, (index * 0.08 + 0.6) * 1000 + 800); // After animation completes
    
    return () => clearTimeout(timer);
  }, [index, isClient]);
  
  return (
    <motion.div 
      className="flex flex-col cursor-pointer transition-opacity"
      onClick={item.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={initialAnimationComplete ? { duration: 0 } : { 
        duration: 0.8, 
        delay: index * 0.08,
        ease: "easeOut"
      }}
      style={{
        opacity: isHovered ? 0.9 : 1,
        transition: 'opacity 0.2s ease'
      }}
    >
      <div className="flex items-center space-x-3 lg:space-x-4">
        <motion.div
          initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={initialAnimationComplete ? { duration: 0 } : { 
            duration: 0.6, 
            delay: index * 0.08 + 0.2,
            ease: "easeOut"
          }}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={120}
            height={120}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
            style={{ 
              filter: svgFilter,
              transition: 'filter 0.6s ease'
            }}
          />
        </motion.div>
        <div className="flex flex-col">
          <motion.span 
            ref={textRef}
            className={`${inter.className} text-4xl sm:text-6xl lg:text-7xl tracking-wide whitespace-nowrap`}
            style={{ 
              color: styles.text,
              transition: 'color 0.3s ease'
            }}
            initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={initialAnimationComplete ? { duration: 0 } : { 
              duration: 0.6, 
              delay: index * 0.08 + 0.4,
              ease: "easeOut"
            }}
          >
            {item.label}
          </motion.span>
          
          {/* Description accordion - only show if description exists */}
          {description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="overflow-hidden"
            >
              <div 
                className={`${inter.className} pt-2 sm:pt-3 lg:pt-4 text-sm sm:text-base lg:text-lg font-extrabold`}
                style={{ 
                  color: styles.text,
                  opacity: 0.7,
                  transition: 'color 0.3s ease'
                }}
              >
                {description}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

MenuItem.displayName = 'MenuItem';

// ServiceItem component for accordion-style service display
const ServiceItem = memo(({ service, index, styles, svgFilter }: {
  service: Service;
  index: number;
  styles: {
    background: string;
    text: string;
    accent: string;
  };
  svgFilter: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const shouldShowContent = isMobile ? isExpanded : isHovered;

  const handleInteraction = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-10%" }}
      className="w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div 
          className="w-full py-8 cursor-pointer group"
          onClick={handleInteraction}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Image 
                  src={`/svg_icons/services/${service['svg-icon']}`}
                  alt={service.Service}
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  style={{ 
                    filter: svgFilter,
                    transition: 'filter 0.6s ease'
                  }}
                />
              </motion.div>
              <h3 
                className={`${inter.className} text-xl sm:text-2xl lg:text-4xl font-extrabold group-hover:opacity-80 transition-opacity duration-200`}
                style={{ 
                  color: styles.text,
                  transition: 'color 0.3s ease'
                }}
              >
                {service.Service}
              </h3>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {shouldShowContent && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut" 
              }}
              className="overflow-hidden"
            >
              <div className="pb-8 pl-14 sm:pl-16 lg:pl-20 space-y-6">
                <p 
                  className={`${inter.className} text-base sm:text-lg lg:text-xl font-medium leading-relaxed`}
                  style={{ 
                    color: styles.text,
                    opacity: 0.8,
                    transition: 'color 0.3s ease'
                  }}
                >
                  {service.Details}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.Stack === "all-tech-stack" ? (
                    // Special handling for Full Tech Stack - show all available images without containers
                    getAllTechStackImages().map((imageName, techIndex) => (
                      <motion.div
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <Image
                          src={`/techstack/${imageName}`}
                          alt={imageName.replace('.png', '')}
                          width={48}
                          height={48}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                        />
                      </motion.div>
                    ))
                  ) : (
                    // Regular services - show tech stack as images only, no containers or text
                    service.Stack.split(', ').map((tech, techIndex) => {
                      const imageName = techStackImages[tech];
                      
                      if (imageName) {
                        return (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            <Image
                              src={`/techstack/${imageName}`}
                              alt={tech}
                              width={32}
                              height={32}
                              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                            />
                          </motion.div>
                        );
                      } else {
                        // Fallback to text-only for items without images
                        return (
                          <span
                            key={techIndex}
                            className={`${inter.className} px-4 py-2 text-sm sm:text-base font-semibold rounded-full border border-opacity-30`}
                            style={{ 
                              color: styles.text,
                              borderColor: styles.text,
                              backgroundColor: 'transparent',
                              transition: 'color 0.3s ease, border-color 0.3s ease'
                            }}
                          >
                            {tech}
                          </span>
                        );
                      }
                    })
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Full-width border line */}
      <div 
        className="w-full h-px border-b border-opacity-20"
        style={{ 
          borderColor: styles.text,
          transition: 'border-color 0.3s ease'
        }}
      />
    </motion.div>
  );
});

ServiceItem.displayName = 'ServiceItem';

export default function Home() {
  const { toggleTheme, currentTheme } = useTheme();
  const { svgFilter, styles } = useThemeStyles();
  
  // Track screen size to prevent mobile scroll effects
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get current theme name
  const currentThemeName = themes[currentTheme].name;

  // Scroll effects (only for desktop to avoid mobile glitching)
  const { scrollYProgress } = useScroll();
  const sidebarY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sidebarOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuItems = [
    { icon: "/svg_icons/featured.svg", label: "Featured", onClick: () => scrollToSection('featured') },
    { icon: "/svg_icons/services.svg", label: "Services", onClick: () => scrollToSection('services') },
    { icon: "/svg_icons/releases.svg", label: "Releases", onClick: () => scrollToSection('releases') },
    { icon: "/svg_icons/contact.svg", label: "Contact", onClick: () => scrollToSection('contact') },
    { icon: "/svg_icons/market.svg", label: "Market", onClick: () => window.open('https://frank-sigma.vercel.app/', '_blank', 'noopener,noreferrer') },
    { icon: "/svg_icons/palettes.svg", label: currentThemeName, onClick: toggleTheme },
  ];

  return (
    <div 
      style={{ 
        backgroundColor: styles.background,
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* First section - Menu */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left sidebar with SVG icons */}
        <motion.div 
          className="w-full lg:w-auto lg:min-w-fit pt-4 px-4 lg:px-8 pb-8 flex flex-col space-y-2 lg:space-y-4"
          style={isClient && isDesktop ? { 
            y: sidebarY,
            opacity: sidebarOpacity
          } : {}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              index={index}
              svgFilter={svgFilter}
              styles={styles}
              isClient={isClient}
            />
          ))}
        </motion.div>
        
        {/* Main content area */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Your content goes here */}
        </div>
      </div>

      {/* Featured section - appears when scrolling down */}
      <motion.div 
        id="featured" 
        className="min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Featured SVG Icons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-16 lg:gap-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {[
            { src: "/svg_icons/tmtennis.svg", alt: "TM Tennis", link: "https://tmtennis.co/" },
            { src: "/svg_icons/lnpwrld.svg", alt: "LNP World", link: null },
            { src: "/svg_icons/am-studios.svg", alt: "AM Studios", link: null }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15 + 0.5,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25, duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { type: "spring", stiffness: 800, damping: 35, duration: 0.1 }
                }}
                animate={{
                  scale: 1,
                  transition: { type: "spring", stiffness: 500, damping: 30, duration: 0.2 }
                }}
                className="cursor-pointer"
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64"
                  style={{ 
                    filter: svgFilter,
                    transition: 'filter 0.6s ease'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Services section */}
      <div id="services" className="min-h-screen flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-4xl px-4 mb-16">
          <motion.h1 
            className={`${inter.className} text-4xl sm:text-6xl lg:text-9xl font-bold tracking-wide text-center`}
            style={{ 
              color: styles.text,
              transition: 'color 0.3s ease'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Services
          </motion.h1>
        </div>
        
        <div className="w-full space-y-0">
          {services.map((service, index) => (
            <ServiceItem 
              key={service.Service}
              service={service}
              index={index}
              styles={styles}
              svgFilter={svgFilter}
            />
          ))}
        </div>
      </div>

      {/* Releases section */}
      <div id="releases" className="min-h-screen flex items-center justify-center px-4">
        <h1 
          className={`${inter.className} text-4xl sm:text-6xl lg:text-9xl font-bold tracking-wide text-center`}
          style={{ 
            color: styles.text,
            transition: 'color 0.3s ease'
          }}
        >
          Releases
        </h1>
      </div>

      {/* Contact section */}
      <div id="contact" className="min-h-screen flex items-center justify-center px-4">
        <h1 
          className={`${inter.className} text-4xl sm:text-6xl lg:text-9xl font-bold tracking-wide text-center`}
          style={{ 
            color: styles.text,
            transition: 'color 0.3s ease'
          }}
        >
          Contact
        </h1>
      </div>
    </div>
  );
}
