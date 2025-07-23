"use client"

import { motion } from "framer-motion"

const techStack = [
  { 
    src: "/techstack/figma.png", 
    alt: "Figma", 
    url: "https://www.figma.com/",
    category: "Design"
  },
  { 
    src: "/techstack/firebase.png", 
    alt: "Firebase", 
    url: "https://firebase.google.com/",
    category: "Backend"
  },
  { 
    src: "/techstack/framer.png", 
    alt: "Framer", 
    url: "https://www.framer.com/",
    category: "Animation"
  },
  { 
    src: "/techstack/github.png", 
    alt: "GitHub", 
    url: "https://github.com/",
    category: "Development"
  },
  { 
    src: "/techstack/openai.png", 
    alt: "OpenAI", 
    url: "https://platform.openai.com/",
    category: "AI"
  },
  { 
    src: "/techstack/python.png", 
    alt: "Python", 
    url: "https://www.python.org/",
    category: "Programming"
  },
  { 
    src: "/techstack/tailwind.png", 
    alt: "Tailwind CSS", 
    url: "https://tailwindcss.com/",
    category: "Styling"
  },
  { 
    src: "/techstack/vercel.png", 
    alt: "Vercel", 
    url: "https://vercel.com/",
    category: "Hosting"
  },
  { 
    src: "/techstack2/adobe.png", 
    alt: "Adobe Creative Suite", 
    url: "https://www.adobe.com/",
    category: "Design"
  },
  { 
    src: "/techstack2/airtable.png", 
    alt: "Airtable", 
    url: "https://www.airtable.com/",
    category: "Database"
  },
  { 
    src: "/techstack2/aws.png", 
    alt: "AWS", 
    url: "https://aws.amazon.com/",
    category: "Cloud"
  },
  { 
    src: "/techstack2/davinci.png", 
    alt: "DaVinci Resolve", 
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    category: "Video"
  },
  { 
    src: "/techstack2/drive.png", 
    alt: "Google Drive", 
    url: "https://workspace.google.com/",
    category: "Productivity"
  },
  { 
    src: "/techstack2/dropbox.png", 
    alt: "Dropbox", 
    url: "https://www.dropbox.com/",
    category: "Storage"
  },
  { 
    src: "/techstack2/notion.png", 
    alt: "Notion", 
    url: "https://www.notion.com/product",
    category: "Productivity"
  },
  { 
    src: "/techstack2/runway.png", 
    alt: "Runway", 
    url: "https://runwayml.com/",
    category: "AI Video"
  },
  { 
    src: "/techstack2/salesforce.png", 
    alt: "Salesforce", 
    url: "https://www.salesforce.com/",
    category: "CRM"
  },
  { 
    src: "/techstack2/shopify.png", 
    alt: "Shopify", 
    url: "https://accounts.shopify.com/",
    category: "E-commerce"
  },
  { 
    src: "/techstack2/slack.png", 
    alt: "Slack", 
    url: "https://slack.com/features",
    category: "Communication"
  },
  { 
    src: "/techstack2/veo3.png", 
    alt: "Veo", 
    url: "https://gemini.google/overview/video-generation/",
    category: "AI Video"
  },
  { 
    src: "/techstack2/vscode.png", 
    alt: "VS Code", 
    url: "https://code.visualstudio.com/",
    category: "Development"
  },
  { 
    src: "/techstack2/webflow.png", 
    alt: "Webflow", 
    url: "https://webflow.com/",
    category: "No-code"
  }
]

export function TechStackSection() {
  return (
    <section className="py-8 border-t border-border/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Currently working with</span>
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {techStack.slice(0, 12).map((tech, index) => (
              <motion.a
                key={tech.alt}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ opacity: 0.7 }}
                className="flex-shrink-0 w-5 h-5 opacity-40 hover:opacity-100 transition-opacity duration-200"
                title={tech.alt}
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.a>
            ))}
            <span className="text-xs opacity-60 ml-2">+{techStack.length - 12} more</span>
          </div>
        </div>
      </div>
    </section>
  )
}
