import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 shadow-lg shadow-black mt-2">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600 mb-4">
              © 2024 Modern Book Search. Tous droits réservés.
            </div>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <Link href="/politique-de-confidentialite" className="hover:text-blue-400 transition duration-150 ease-in-out">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-utilisation" className="hover:text-blue-400 transition duration-150 ease-in-out">
                Conditions d&apos;utilisation
              </Link>
            </div>
            <div className="social flex justify-center gap-6 mt-2 text-center">
              <a href="https://www.linkedin.com/in/steeven-loukanou" target="_blank" rel="noopener noreferrer">
                <Linkedin size={30} className='text-blue-500'/>
              </a>
              <a href="https://github.com/steeven-louk/modern-book-search" target="_blank" rel="noopener noreferrer" >
                <Github size={30} className='text-black'/>
              </a>
            </div>
          </div>
        </footer>
  )
}