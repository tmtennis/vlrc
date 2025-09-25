import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stardust Solutions - Web Development & Automation Services",
  description: "Transform your business with custom web development, automation workflows, CRM optimization, and e-commerce solutions. Expert technical consulting and creative design services.",
  keywords: "web development, automation, CRM, e-commerce, technical consulting, workflow design, data integration, creative design, Next.js, React, Shopify",
  authors: [{ name: "Stardust Solutions" }],
  creator: "Stardust Solutions",
  publisher: "Stardust Solutions",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stardustsolutions.com",
    title: "Stardust Solutions - Web Development & Automation Services",
    description: "Transform your business with custom web development, automation workflows, CRM optimization, and e-commerce solutions.",
    siteName: "Stardust Solutions",
    images: [
      {
        url: "/star-favicon-1.svg",
        width: 32,
        height: 32,
        alt: "Stardust Solutions Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stardust Solutions - Web Development & Automation Services",
    description: "Transform your business with custom web development, automation workflows, CRM optimization, and e-commerce solutions.",
    images: ["/star-favicon-1.svg"]
  },
  alternates: {
    canonical: "https://stardustsolutions.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
