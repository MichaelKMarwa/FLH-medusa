// src/app/[countryCode]/(main)/layout.tsx
'use client'; // Mark as a client component since it uses Navbar
import Navbar from '@/modules/layout/templates/nav/index';
import {Footer} from '@/modules/layout/templates/footer/index'; // Assuming you have a footer component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans antialiased">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}