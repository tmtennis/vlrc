"use client"

import { motion } from "framer-motion"
import { NewSpeedModelViewer } from "./newspeed-model-viewer"
import { services } from "@/components/work-section"
import { Folder as LucideFolder, FileText as LucideFileText, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

// Softer color palette for folders
const aboutFolders = [
	{
		title: "Foundation",
		filename: "foundation",
		description:
			"Economics student at The New School with a passion for building at the intersection of finance, technology, and culture. Based in NYC, I blend academic rigor with hands-on experimentation to create tools, stories, and products that reflect urban energy and modern systems thinking.",
		color: "text-blue-300",
		border: "border-blue-200/50",
		glow: "hover:border-blue-200/50 bg-transparent border border-blue-200/20",
	},
	{
		title: "Methodology",
		filename: "methodology",
		description:
			"I build sharp, efficient digital products guided by design clarity and market intuition. From React dashboards to Shopify funnels, from AI automation to creative drops—my approach is always lean, always iterative, always focused on solutions that are as strategic as they are fast-moving.",
		color: "text-purple-300",
		border: "border-purple-200/50",
		glow: "hover:border-purple-200/50 bg-transparent border border-purple-200/20",
	},
	{
		title: "Current Focus",
		filename: "current focus",
		description:
			"Currently prototyping player prediction engines, CRM automations, and visual branding systems. My projects sharpen performance and make data-driven ideas feel alive. Always experimenting with new technologies and creative approaches to complex problems.",
		color: "text-pink-300",
		border: "border-pink-200/50",
		glow: "hover:border-pink-200/50 bg-transparent border border-pink-200/20",
	},
]

const servicesList = [
	{
		title: "web development",
		description: "I build clean, responsive websites that are fast, flexible, and easy to work with.",
	},
	{
		title: "web / code maintenance",
		description: "I help keep your codebase stable, organized, and ready for whatever’s next.",
	},
	{
		title: "consulting",
		description: "Whether you’re stuck or scaling, I offer honest, hands-on technical guidance that moves fast.",
	},
	{
		title: "crm assistance",
		description: "I set up and refine CRM systems so your outreach, leads, and follow-ups don’t get messy.",
	},
	{
		title: "automation & ai integration",
		description: "I connect tools and build automations that save time, cut noise, and actually work.",
	},
	{
		title: "shopify site setup & drops",
		description: "I help brands get online, run drops, and handle the gritty backend of Shopify — including forms and CRMs.",
	},
	{
		title: "launch support",
		description: "I help prep and push launches — from page builds to email flows to post-launch tracking.",
	},
]

const serviceColors = [
  "text-green-300 border-green-200/50",
  "text-blue-300 border-blue-200/50",
  "text-purple-300 border-purple-200/50",
  "text-pink-300 border-pink-200/50",
  "text-yellow-300 border-yellow-200/50",
  "text-orange-300 border-orange-200/50",
  "text-teal-300 border-teal-200/50",
];

const featuredWorks = [
  {
    title: "tennismenace",
    description: `A data-driven tennis intelligence platform featuring interactive visualizations, player metrics, and betting insights powered by Three.js and Firebase.`,
    tech: ["Next.js", "Three.js", "Firebase", "Python", "OpenAI"],
    color: "text-blue-300 border-blue-200/50"
  },
  {
    title: "L&PWRLD",
    description: `A creative ecosystem combining immersive 3D experiences, AI tools, and social integration to explore next-gen digital storytelling.`,
    tech: ["Next.js", "Three.js", "Firebase", "Python", "OpenAI", "Zapier"],
    color: "text-purple-300 border-purple-200/50"
  },
  {
    title: "Automation & AI Integration",
    description: `Custom no-code and low-code automation workflows built using n8n and OpenAI, designed to streamline operations and scale productivity.`,
    tech: ["n8n", "Zapier", "OpenAI"],
    color: "text-orange-300 border-orange-200/50"
  },
  {
    title: "Design & Video",
    description: `End-to-end creative production for digital platforms, including brand design, motion graphics, YouTube content, and social assets using Adobe and Procreate tools.`,
    tech: ["Photoshop", "Premiere Pro", "YouTube", "Procreate", "CapCut", "Veo3"],
    color: "text-pink-300 border-pink-200/50"
  },
  {
    title: "vryslimey clothing co.",
    description: `A local NYC-based streetwear label with a bold, meme-centric identity, blending digital culture and irreverent slang into apparel drops.`,
    tech: ["Shopify", "Salesforce", "Slack", "Fillout", "Zapier"],
    color: "text-green-300 border-green-200/50"
  },
  {
    title: "CRM Assistance",
    description: `Ongoing support and optimization across a multi-tool CRM stack (Salesforce, Notion, Zapier, Airtable, etc.) focused on lead management, campaign execution, and customer lifecycle strategy.`,
    tech: ["Salesforce", "Shopify", "SimpleTexting", "Zapier", "Notion", "Slack", "Google Workspace", "Airtable", "Mailchimp"],
    color: "text-teal-300 border-teal-200/50"
  },
  {
    title: "Code Maintenance",
    description: `Routine auditing, debugging, and optimization of codebases across multiple stacks to ensure stability, scalability, and efficient performance. Responsibilities include version control management, refactoring legacy components, and integrating updates across frontend and backend systems.`,
    tech: ["Firebase", "Tailwind CSS", "JavaScript", "Three.js", "Next.js", "React Native"],
    color: "text-yellow-300 border-yellow-200/50"
  },
];

// Use pastel hex colors for folder icons
const pastelColors = {
  blue: '#8ecae6',
  purple: '#bfa2db',
  pink: '#f7cad0',
  green: '#b7e4c7',
  teal: '#aee6e6',
  yellow: '#fff3b0',
  orange: '#ffd6a5',
};

export function AboutSection() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
  const [openFeatured, setOpenFeatured] = useState<string | null>(null);
  const folderRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Keyboard navigation for folders/services
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (focusedIdx === null) return;
      if (e.key === "ArrowDown") {
        setFocusedIdx((prev) => (prev === null ? 0 : Math.min(prev + 1, aboutFolders.length + servicesList.length - 1)));
      } else if (e.key === "ArrowUp") {
        setFocusedIdx((prev) => (prev === null ? 0 : Math.max(prev - 1, 0)));
      } else if (e.key === "Enter") {
        const item = focusedIdx < aboutFolders.length ? aboutFolders[focusedIdx] : servicesList[focusedIdx - aboutFolders.length];
        setOpenFolder(item.title);
      } else if (e.key === "Escape") {
        setOpenFolder(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIdx]);

  // Focus effect
  useEffect(() => {
    if (focusedIdx !== null && folderRefs.current[focusedIdx]) {
      folderRefs.current[focusedIdx]?.focus();
    }
  }, [focusedIdx]);

  return (
    <section id="about" className="py-6 px-2">
      <div className="max-w-6xl mx-auto flex flex-row items-start justify-start gap-12">
        {/* Left column: About & Services */}
        <div className="w-full max-w-xs flex flex-col items-start justify-start">
          <div className="w-full flex flex-col gap-3">
            <div className="mb-1">
              <div className="flex items-center gap-2 mb-0.5">
                <LucideFolder className="w-3 h-3 text-blue-300" />
                <span className="font-mono text-base text-muted-foreground tracking-tight">~/about</span>
              </div>
              <span className="text-xs text-muted-foreground/60 font-mono">3 folders</span>
            </div>
            <div className="space-y-0.5 mb-3">
              {/* Add subtle open/close animation for mini folders */}
              {aboutFolders.map((folder, idx) => (
                <div key={folder.title} className="border-b border-border/10">
                  <div
                    ref={el => { folderRefs.current[idx] = el; }}
                    tabIndex={0}
                    onClick={() => { setOpenFolder(openFolder === folder.title ? null : folder.title); setFocusedIdx(idx); }}
                    onFocus={() => setFocusedIdx(idx)}
                    className={`flex items-center gap-2 py-0.5 cursor-pointer transition-all duration-150 rounded-md ${focusedIdx === idx || openFolder === folder.title ? 'scale-105' : ''} hover:scale-105`}
                    style={{ transformOrigin: 'left center' }}
                  >
                    <LucideFolder className="w-3 h-3" strokeWidth={2} stroke={pastelColors.blue} fill="none" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-mono text-xs text-foreground truncate">{folder.filename}</span>
                        <ChevronDown className={`w-2 h-2 text-muted-foreground transition-transform ${openFolder === folder.title ? 'rotate-180' : ''}`} />
                      </div>
                      <p className="text-xs text-muted-foreground/60 font-mono">{folder.title}</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: openFolder === folder.title ? 200 : 0, opacity: openFolder === folder.title ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`ml-5 mt-0.5 pl-2 border-l-2 ${folder.border} text-xs py-1 bg-background/10 rounded-md overflow-hidden`}
                  >
                    {openFolder === folder.title && (
                      <div className="flex items-start gap-2">
                        <LucideFileText className="w-3 h-3" stroke={folder.color.replace('text-', '').replace('-300', '')} fill="none" />
                        <p className="text-muted-foreground leading-relaxed">{folder.description}</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="mb-1">
              <div className="flex items-center gap-2 mb-0.5">
                <LucideFolder className="w-3 h-3 text-green-300" />
                <span className="font-mono text-base text-muted-foreground tracking-tight">~/services</span>
              </div>
              <span className="text-xs text-muted-foreground/60 font-mono">{servicesList.length} services</span>
            </div>
            <div className="space-y-0.5">
              {servicesList.map((service, idx) => {
                const color = serviceColors[idx % serviceColors.length].split(' ')[0];
                const border = serviceColors[idx % serviceColors.length].split(' ')[1];
                const refIdx = aboutFolders.length + idx;
                return (
                  <div key={service.title} className="border-b border-border/10">
                    <div
                      ref={el => { folderRefs.current[refIdx] = el; }}
                      tabIndex={0}
                      onClick={() => { setOpenFolder(openFolder === service.title ? null : service.title); setFocusedIdx(refIdx); }}
                      onFocus={() => setFocusedIdx(refIdx)}
                      className={`flex items-center gap-2 py-0.5 cursor-pointer transition-all duration-150 rounded-md ${focusedIdx === refIdx || openFolder === service.title ? 'scale-105' : ''} hover:scale-105`}
                      style={{ transformOrigin: 'left center' }}
                    >
                      <LucideFolder className="w-3 h-3" strokeWidth={2} stroke={color.replace('text-', '').replace('-300', '')} fill="none" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-xs text-foreground truncate">{service.title}</span>
                          <ChevronDown className={`w-2 h-2 text-muted-foreground transition-transform ${openFolder === service.title ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ maxHeight: 0, opacity: 0 }}
                      animate={{ maxHeight: openFolder === service.title ? 200 : 0, opacity: openFolder === service.title ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`ml-5 mt-0.5 pl-2 border-l-2 ${border} text-xs py-1 bg-background/10 rounded-md overflow-hidden`}
                    >
                      {openFolder === service.title && (
                        <div className="flex items-start gap-2">
                          <LucideFileText className="w-3 h-3" stroke={color.replace('text-', '').replace('-300', '')} fill="none" />
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Right column: Featured Work - Folder Style */}
        <div className="w-full max-w-md flex flex-col items-start justify-start">
          <div className="mb-1">
            <div className="flex items-center gap-2 mb-0.5">
              <LucideFolder className="w-3 h-3 text-purple-300" />
              <span className="font-mono text-base text-muted-foreground tracking-tight">~/featured_work</span>
            </div>
            <span className="text-xs text-muted-foreground/60 font-mono">{featuredWorks.length} projects</span>
          </div>
          <div className="space-y-0.5">
            {featuredWorks.map((work, idx) => (
              <div key={work.title} className="border-b border-border/10">
                <div
                  tabIndex={0}
                  onClick={() => setOpenFeatured(openFeatured === work.title ? null : work.title)}
                  className={`flex items-center gap-2 py-0.5 cursor-pointer transition-all duration-150 rounded-md ${openFeatured === work.title ? 'scale-105' : ''} hover:scale-105`}
                  style={{ transformOrigin: 'left center' }}
                >
                  <LucideFolder className="w-3 h-3" strokeWidth={2} stroke={work.color.split(' ')[0].replace('text-', '').replace('-300', '')} fill="none" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-xs text-foreground truncate">{work.title}</span>
                      <ChevronDown className={`w-2 h-2 text-muted-foreground transition-transform ${openFeatured === work.title ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: openFeatured === work.title ? 200 : 0, opacity: openFeatured === work.title ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`ml-5 mt-0.5 pl-2 border-l-2 ${work.color.split(' ')[1]} text-xs py-1 bg-background/10 rounded-md overflow-hidden`}
                >
                  {openFeatured === work.title && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <LucideFileText className="w-3 h-3" stroke={work.color.split(' ')[0].replace('text-', '').replace('-300', '')} fill="none" />
                        <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {work.tech.map((tech, tIdx) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-secondary/30 text-xs font-mono text-foreground border border-border/30">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
