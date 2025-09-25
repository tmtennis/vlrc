export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stardust Solutions",
    "description": "Transform your business with custom web development, automation workflows, CRM optimization, and e-commerce solutions. Expert technical consulting and creative design services.",
    "url": "https://stardustsolutions.com",
    "logo": "https://stardustsolutions.com/star-favicon-1.svg",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom, high-performance websites with animations, interactive UI, and mobile optimization"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Automation & Workflow Design",
            "description": "End-to-end automation setups between apps, with smart triggers and logic for seamless business processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "E-Commerce Solutions",
            "description": "Custom E-Commerce stores, headless setups, and automated product listing creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM Assistance & Optimization", 
            "description": "Setup, customization, and optimization of CRM platforms for lead tracking, pipeline management, and automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative & Design Services",
            "description": "Brand identity, logos, motion graphics, and interactive 3D visuals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consulting & Technical Support",
            "description": "Tech stack planning, troubleshooting, and training for in-house teams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Integration",
            "description": "Secure migration of data between platforms with validation, cleanup, and integration into existing workflows"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
