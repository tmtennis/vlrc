'use client';

import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeStyles } from "@/hooks/useThemeStyles";
import { themes } from "@/styles/colors";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";

// Optimized Image component for SVGs to prevent flashing
const OptimizedSVG = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  svgFilter, 
  priority = false 
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  svgFilter: string;
  priority?: boolean;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={src.endsWith('.svg')} // Better SVG handling
      style={{
        filter: svgFilter,
        transition: 'filter 0.3s ease', // Reduced transition time
        willChange: 'filter', // Optimize for frequent filter changes
      }}
    />
  );
});

OptimizedSVG.displayName = 'OptimizedSVG';

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

// Release interface
interface Release {
  DATE: string;
  RELEASES: string;
  INDUSTRY: string;
  DESCRIPTION: string;
  URL?: string;
  SOCIALS?: string;
  SVG: string;
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

// Releases data from CSV
const releasesData: Release[] = [
  {
    DATE: "2025",
    RELEASES: "All The Best",
    INDUSTRY: "E-COMMERCE, ART & DESIGN",
    DESCRIPTION: "Online store offering customized postcards and curated modern art.",
    URL: "",
    SOCIALS: "",
    SVG: "all-the-best.svg"
  },
  {
    DATE: "2025",
    RELEASES: "The Collection",
    INDUSTRY: "WEB DESIGN",
    DESCRIPTION: "AI-driven company that converts affluent individuals into members of an exclusive private club.",
    URL: "",
    SOCIALS: "",
    SVG: "the-collection.svg"
  },
  {
    DATE: "2025",
    RELEASES: "LNPWRLD",
    INDUSTRY: "WEB DESIGN & DEVELOPMENT",
    DESCRIPTION: "High-end graphic design portfolio and digital archive.",
    URL: "",
    SOCIALS: "",
    SVG: "lnpwrld.svg"
  },
  {
    DATE: "2025",
    RELEASES: "AM / SIZED",
    INDUSTRY: "WEB DESIGN & DEVELOPMENT",
    DESCRIPTION: "Interior design and spatial curation portfolio, showcasing modern projects and installations.",
    URL: "",
    SOCIALS: "",
    SVG: "am-sized.svg"
  },
  {
    DATE: "2025",
    RELEASES: "i'm lazy",
    INDUSTRY: "WEB DEVELOPMENT, HOBBY PROJECT",
    DESCRIPTION: "Randomizer tool that generates unique font and color palette pairings.",
    URL: "https://im-lazy.vercel.app/",
    SOCIALS: "",
    SVG: "im-lazy.svg"
  },
  {
    DATE: "2025",
    RELEASES: "HEATMAP",
    INDUSTRY: "WEB DEVELOPMENT, HOBBY PROJECT",
    DESCRIPTION: "Downloadable, interactive heatmap tool attracting hundreds of monthly users.",
    URL: "https://v0-us-state-heatmap.vercel.app/",
    SOCIALS: "",
    SVG: "heatmap.svg"
  },
  {
    DATE: "2023",
    RELEASES: "tennismenace.",
    INDUSTRY: "SPORTS, DATA, EDITORIAL, SOCIAL MEDIA, WEB DESIGN",
    DESCRIPTION: "Multi-platform tennis analysis and betting insight hub with an active community and over 20M impressions in 2025.",
    URL: "https://tmtennis.co/",
    SOCIALS: "https://x.com/tmtennisx",
    SVG: "tennismenace.svg"
  },
  {
    DATE: "2022",
    RELEASES: "Frank",
    INDUSTRY: "E-COMMERCE, WEB DESIGN & DEVELOPMENT",
    DESCRIPTION: "NYC-based apparel brand blending humor and modern culture.",
    URL: "https://frank-sigma.vercel.app/",
    SOCIALS: "",
    SVG: "frank.svg"
  }
];

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
    sectionId: string | null;
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
  
  // Check if this is a theme/palette item by checking if the label exists in themes
  const isThemeItem = Object.values(themes).some(theme => theme.name === item.label);
  const description = isThemeItem ? 'Click me!' : (descriptions[item.label] || null);
  
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
      initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={initialAnimationComplete ? { duration: 0 } : { 
        duration: 1.2, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        opacity: isHovered ? 0.9 : 1,
        transition: 'opacity 0.3s ease'
      }}
    >
      <div className="flex items-center space-x-3 lg:space-x-4">
        <motion.div
          initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0.4, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={initialAnimationComplete ? { duration: 0 } : { 
            duration: 1, 
            delay: index * 0.15 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <OptimizedSVG
            src={item.icon}
            alt={item.label}
            width={120}
            height={120}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
            svgFilter={svgFilter}
            priority={true}
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
            initial={initialAnimationComplete ? { opacity: 1 } : { opacity: 0.4, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={initialAnimationComplete ? { duration: 0 } : { 
              duration: 1, 
              delay: index * 0.15 + 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
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
      initial={{ opacity: 0.5, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
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
                <OptimizedSVG 
                  src={`/svg_icons/services/${service['svg-icon']}`}
                  alt={service.Service}
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  svgFilter={svgFilter}
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

// Animated ReleaseItem component (memoized for performance)
const ReleaseItem = memo(({ 
  release, 
  index, 
  styles, 
  svgFilter,
  isDoubleHeight = false,
  isDoubleWidth = false
}: { 
  release: Release; 
  index: number; 
  styles: {
    background: string;
    text: string;
    accent: string;
  }; 
  svgFilter: string;
  isDoubleHeight?: boolean;
  isDoubleWidth?: boolean;
}) => {
  const handleClick = (url?: string) => {
    if (url && url.trim()) {
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 150);
    }
  };

  const hasValidUrl = release.URL && release.URL.trim() && release.URL !== '';
  const hasValidSocials = release.SOCIALS && release.SOCIALS.trim() && release.SOCIALS !== '';

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-20%" }}
      className={`${
        isDoubleHeight ? 'py-8 sm:py-10 lg:py-12' : 'py-4 sm:py-5 lg:py-6'
      } px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
        isDoubleHeight ? 'flex items-center justify-center h-full' : ''
      } cursor-pointer group`}
      style={{ 
        borderColor: styles.text + '80',
        backgroundColor: 'transparent'
      }}
    >
      <motion.div 
        className="h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Release Content - New Layout */}
        <div className="flex items-center justify-between h-full">
          {/* Left side - Text content */}
          <div className="flex-1 text-left pr-4">
            {/* Title - Large font */}
            <h3 
              className={`${inter.className} ${
                isDoubleHeight || isDoubleWidth
                  ? 'text-xl sm:text-2xl lg:text-3xl mb-2' 
                  : 'text-lg sm:text-xl lg:text-2xl mb-1'
              } font-bold tracking-wide transition-all duration-300`}
              style={{ 
                color: styles.text,
                transition: 'color 0.3s ease'
              }}
            >
              {release.RELEASES}
            </h3>

            {/* Description - Medium font */}
            <p 
              className={`${
                isDoubleHeight || isDoubleWidth
                  ? 'text-base sm:text-lg leading-relaxed mb-2' 
                  : 'text-sm sm:text-base leading-snug mb-2'
              } transition-all duration-300`}
              style={{ 
                color: styles.text,
                opacity: 0.7,
                transition: 'opacity 0.3s ease'
              }}
            >
              {release.DESCRIPTION}
            </p>

            {/* Industry - Small font */}
            <div 
              className={`${
                isDoubleHeight || isDoubleWidth
                  ? 'text-sm sm:text-base mb-1' 
                  : 'text-xs sm:text-sm mb-1'
              } font-medium transition-all duration-300`}
              style={{ 
                color: styles.accent,
                opacity: 0.6,
                transition: 'color 0.3s ease, opacity 0.3s ease'
              }}
            >
              {release.INDUSTRY}
            </div>

            {/* Year - Medium font */}
            <div 
              className={`${
                isDoubleHeight || isDoubleWidth
                  ? 'text-base sm:text-lg mb-3' 
                  : 'text-sm sm:text-base mb-3'
              } font-semibold transition-all duration-300`}
              style={{ 
                color: styles.text,
                opacity: 0.8,
                transition: 'color 0.3s ease, opacity 0.3s ease'
              }}
            >
              {release.DATE}
            </div>

            {/* Action links */}
            <div className="flex flex-wrap gap-4">
              {hasValidUrl && (
                <motion.button
                  onClick={() => handleClick(release.URL)}
                  className="text-sm font-bold transition-all duration-300 relative group flex items-center gap-2"
                  style={{ 
                    color: styles.accent,
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    color: styles.text,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <OptimizedSVG
                    src="/svg_icons/releases/link.svg"
                    alt="Link"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    svgFilter={svgFilter}
                  />
                  <span className="relative">
                    Visit Project
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: styles.text }}
                    ></span>
                  </span>
                </motion.button>
              )}

              {hasValidSocials && (
                <motion.button
                  onClick={() => handleClick(release.SOCIALS)}
                  className="text-sm font-bold transition-all duration-300 relative group flex items-center gap-2"
                  style={{ 
                    color: styles.accent,
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    color: styles.text,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <OptimizedSVG
                    src="/svg_icons/releases/link.svg"
                    alt="Link"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    svgFilter={svgFilter}
                  />
                  <span className="relative">
                    View Social
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: styles.text }}
                    ></span>
                  </span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Right side - Large Icon */}
          <div 
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
          >
            <OptimizedSVG
              src={`/svg_icons/releases/${release.SVG}`}
              alt={release.RELEASES}
              width={isDoubleHeight || isDoubleWidth ? 120 : 100}
              height={isDoubleWidth || isDoubleWidth ? 120 : 100}
              className={`transition-all duration-300 ${
                isDoubleHeight || isDoubleWidth
                  ? "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32" 
                  : "w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
              }`}
              svgFilter={svgFilter}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ReleaseItem.displayName = 'ReleaseItem';

// Featured items configuration
const featuredItems = [
  { 
    src: "/svg_icons/tmtennis.svg", 
    alt: "TM Tennis", 
    link: "https://tmtennis.co/", 
    key: "tmtennis" 
  },
  { 
    src: "/svg_icons/lnpwrld.svg", 
    alt: "LNP World", 
    link: null, 
    key: "lnpwrld" 
  },
  { 
    src: "/svg_icons/am-studios.svg", 
    alt: "AM Studios", 
    link: "https://alexandermay.ltd", 
    key: "am-studios" 
  }
];

export default function Home() {
  const { toggleTheme, currentTheme, isAutoSwitching, toggleAutoSwitch } = useTheme();
  const { svgFilter, styles } = useThemeStyles();
  
  // Track screen size to prevent mobile scroll effects
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // State for background GIF hover effect
  const [activeGif, setActiveGif] = useState<string | null>(null);
  
  // Ref for featured section magnetic scroll
  const featuredSectionRef = useRef<HTMLDivElement>(null);
  
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
  const paletteLabel = currentThemeName;

  // Scroll effects (only for desktop to avoid mobile glitching)
  const { scrollYProgress } = useScroll();
  const sidebarY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sidebarOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay to ensure the page is ready
      setTimeout(() => {
        // Get the element's position relative to the document
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 20; // Small offset from top
        
        // Use both methods for maximum compatibility
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Fallback method
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
  };

  // Handle palette click - toggle auto-switching or manual theme switching
  const handlePaletteClick = () => {
    if (isAutoSwitching) {
      toggleAutoSwitch(); // Turn off auto-switching
    } else {
      toggleTheme(); // Manual theme switch
    }
  };

  const menuItems = [
    { icon: "/svg_icons/featured.svg", label: "Featured", onClick: () => scrollToSection('featured'), sectionId: 'featured' },
    { icon: "/svg_icons/services.svg", label: "Services", onClick: () => scrollToSection('services'), sectionId: 'services' },
    { icon: "/svg_icons/releases.svg", label: "Releases", onClick: () => scrollToSection('releases'), sectionId: 'releases' },
    { icon: "/svg_icons/contact.svg", label: "Contact", onClick: () => scrollToSection('contact'), sectionId: 'contact' },
    { icon: "/svg_icons/market.svg", label: "Market", onClick: () => window.open('https://frank-sigma.vercel.app/', '_blank', 'noopener,noreferrer'), sectionId: null },
    { icon: "/svg_icons/palettes.svg", label: paletteLabel, onClick: handlePaletteClick, sectionId: null },
  ];

  return (
    <div 
      className="scroll-smooth"
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
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          {/* Empty content area */}
        </div>
      </div>

      {/* Featured section - appears when scrolling down */}
      <motion.div 
        ref={featuredSectionRef}
        id="featured" 
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Background GIF Layer */}
        <div className="absolute inset-0 w-full h-full">
          {featuredItems.map((item) => (
            <motion.div
              key={item.key}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeGif === item.key ? 0.5 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={`/featured-gifs/${item.key}.gif`}
                alt={`${item.alt} background`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-center"
                unoptimized
                loading="lazy"
                style={{ minHeight: '100vh' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured SVG Icons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-16 lg:gap-32 relative z-10"
          initial={{ opacity: 0.4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {featuredItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0.4, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3 + 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: 1,
                  opacity: activeGif && activeGif !== item.key ? 0.3 : 1,
                }}
                transition={{
                  y: {
                    duration: 4,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: { 
                    type: "spring", 
                    stiffness: 600, 
                    damping: 35,
                    duration: 0.1
                  },
                  opacity: {
                    duration: 0.4,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.3,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25,
                    duration: 0.3
                  }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { type: "spring", stiffness: 600, damping: 30, duration: 0.15 }
                }}
                className={`cursor-pointer ${item.link ? '' : 'cursor-default'}`}
                onMouseEnter={() => {
                  setActiveGif(item.key);
                  // Smoothly scroll to perfect viewport when hovering
                  if (featuredSectionRef.current) {
                    featuredSectionRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                      inline: 'nearest'
                    });
                  }
                }}
                onMouseLeave={() => setActiveGif(null)}
                onClick={(e) => {
                  // Handle mobile touch devices
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    if (activeGif === item.key) {
                      setActiveGif(null);
                      if (item.link) {
                        window.open(item.link, '_blank', 'noopener,noreferrer');
                      }
                    } else {
                      setActiveGif(item.key);
                    }
                  } else if (item.link) {
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
            initial={{ opacity: 0.4, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
      <div id="releases" className="min-h-screen flex flex-col justify-center py-8">
        <div className="w-full px-4 mb-8">
          <motion.h1 
            className={`${inter.className} text-4xl sm:text-6xl lg:text-9xl font-bold tracking-wide text-center`}
            style={{ 
              color: styles.text,
              transition: 'color 0.3s ease'
            }}
            initial={{ opacity: 0.4, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-10%" }}
          >
            Releases
          </motion.h1>
        </div>
        
        <div className="w-full">
          {/* Custom layout with All The Best spanning full width and AM/SIZED double height */}
          
          {/* Row 1: All The Best (full width) */}
          <motion.div
            key="row-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="border-t"
            style={{ 
              borderColor: styles.text + '33'
            }}
          >
            <ReleaseItem 
              key={releasesData[0].RELEASES}
              release={releasesData[0]}
              index={0}
              styles={styles}
              svgFilter={svgFilter}
              isDoubleWidth={true}
            />
          </motion.div>

          {/* Row 2: LNPWRLD | AM/SIZED (double height) */}
          <motion.div
            key="row-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="border-t grid grid-cols-1 lg:grid-cols-2"
            style={{ 
              borderColor: styles.text + '80'
            }}
          >
            {/* Left side with LNPWRLD and The Collection stacked */}
            <div className="grid grid-rows-2">
              <div className="border-b lg:border-b" style={{ borderColor: styles.text + '80' }}>
                <ReleaseItem 
                  key={releasesData[2].RELEASES}
                  release={releasesData[2]}
                  index={2}
                  styles={styles}
                  svgFilter={svgFilter}
                />
              </div>
              <div>
                <ReleaseItem 
                  key={releasesData[1].RELEASES}
                  release={releasesData[1]}
                  index={1}
                  styles={styles}
                  svgFilter={svgFilter}
                />
              </div>
            </div>
            
            {/* Right side with AM/SIZED taking full height */}
            <div className="border-l" style={{ borderColor: styles.text + '80' }}>
              <ReleaseItem 
                key={releasesData[3].RELEASES}
                release={releasesData[3]}
                index={3}
                styles={styles}
                svgFilter={svgFilter}
                isDoubleHeight={true}
              />
            </div>
          </motion.div>

          {/* Row 3: tennismenace (full width) */}
          <motion.div
            key="row-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="border-t"
            style={{ 
              borderColor: styles.text + '80'
            }}
          >
            <ReleaseItem 
              key={releasesData[6].RELEASES}
              release={releasesData[6]}
              index={6}
              styles={styles}
              svgFilter={svgFilter}
              isDoubleWidth={true}
            />
          </motion.div>

          {/* Row 4: Frank (double height) | i'm lazy + HEATMAP (stacked) */}
          <motion.div
            key="row-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-20%" }}
            className="border-t grid grid-cols-1 lg:grid-cols-2"
            style={{ 
              borderColor: styles.text + '80'
            }}
          >
            {/* Left side with Frank taking full height */}
            <div>
              <ReleaseItem 
                key={releasesData[7].RELEASES}
                release={releasesData[7]}
                index={7}
                styles={styles}
                svgFilter={svgFilter}
                isDoubleHeight={true}
              />
            </div>
            
            {/* Right side with i'm lazy and HEATMAP stacked */}
            <div className="border-l grid grid-rows-2" style={{ borderColor: styles.text + '80' }}>
              <div className="border-b lg:border-b" style={{ borderColor: styles.text + '80' }}>
                <ReleaseItem 
                  key={releasesData[4].RELEASES}
                  release={releasesData[4]}
                  index={4}
                  styles={styles}
                  svgFilter={svgFilter}
                />
              </div>
              <div>
                <ReleaseItem 
                  key={releasesData[5].RELEASES}
                  release={releasesData[5]}
                  index={5}
                  styles={styles}
                  svgFilter={svgFilter}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Bottom border to close off the grid */}
          <div 
            className="w-full h-px border-b"
            style={{ 
              borderColor: styles.text + '80',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Contact section */}
      <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 space-y-16">
        <motion.h1 
          className={`${inter.className} text-4xl sm:text-6xl lg:text-9xl font-bold tracking-wide text-center`}
          style={{ 
            color: styles.text,
            transition: 'color 0.3s ease'
          }}
          initial={{ opacity: 0.4, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          Contact
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          className="flex items-center space-x-6 cursor-pointer group"
          initial={{ opacity: 0.4, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-10%" }}
          onClick={() => window.location.href = 'mailto:info@poweredbystardust.com'}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotate: 2
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="transform-gpu"
          >
            <OptimizedSVG
              src="/svg_icons/info.svg"
              alt="Contact Info"
              width={200}
              height={200}
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex-shrink-0 transition-all duration-300 group-hover:brightness-110"
              svgFilter={svgFilter}
              priority={true}
            />
          </motion.div>
          <motion.div
            className="flex flex-col"
            whileHover={{ 
              x: 3,
              scale: 1.02
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <span 
              className={`${inter.className} text-2xl sm:text-4xl lg:text-6xl tracking-wide whitespace-nowrap transition-all duration-300 group-hover:tracking-wider font-normal`}
              style={{ 
                color: styles.text,
                transition: 'color 0.3s ease, letter-spacing 0.3s ease',
                textDecoration: 'none !important',
                borderBottom: 'none !important',
                border: 'none !important',
                outline: 'none !important',
                textUnderlineOffset: 'none',
                textDecorationLine: 'none'
              }}
            >
              info@poweredbystardust.com
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed Stardust Solutions text - bottom right */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 pointer-events-none select-none"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 
          className={`${inter.className} text-2xl sm:text-3xl lg:text-4xl font-black tracking-wide`}
          style={{ 
            color: styles.text,
            transition: 'color 1s ease',
          }}
        >
          Stardust Solutions
        </h2>
      </motion.div>
    </div>
  );
}
