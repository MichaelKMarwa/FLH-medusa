import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'  // Fixed import path

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const space = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Furnixar Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}