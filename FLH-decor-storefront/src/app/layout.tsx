import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Critical fix
  adjustFontFallback: false,
})

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap', // Critical fix
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-background antialiased">
        {children}
      </body>
    </html>
  )
}