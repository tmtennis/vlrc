import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="preload" 
          href="/fonts/CercoDEMO-BlackItalic.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
