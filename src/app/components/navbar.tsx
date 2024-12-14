'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Book, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md shadow-gray-500 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-gray-900 font-poppins">BookSearch</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/search">Recherche</NavLink>
            <NavLink href="/favorites">Favoris</NavLink>
            <NavLink href="/about">À propos</NavLink>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/">Accueil</MobileNavLink>
            <MobileNavLink href="/search">Recherche</MobileNavLink>
            <MobileNavLink href="/favorites">Favoris</MobileNavLink>
            <MobileNavLink href="/about">À propos</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-400 font-inter font-semibold transition duration-150 ease-in-out">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-inter">
      {children}
    </Link>
  )
}

