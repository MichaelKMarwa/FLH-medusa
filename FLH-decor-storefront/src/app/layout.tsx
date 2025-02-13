import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const space = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  weight: ['400', '700']
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
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} bg-background`}>
        {children}
      </body>
    </html>
  )
}