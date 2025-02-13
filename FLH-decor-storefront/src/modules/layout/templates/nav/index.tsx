'use client'
import { Menu, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/layout/components/ui/sheet'
import MobileNav from './mobile-nav'
import NavItems from './nav-items'

export function MainNav() {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Desktop Logo */}
          <div className="hidden lg:flex">
            <span className="font-space text-2xl font-bold text-secondary">FURNIXAR</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <NavItems />
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-secondary" />
              </SheetTrigger>
              <SheetContent side="left">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>

          {/* Cart */}
          <button className="p-2 text-secondary hover:text-primary transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}