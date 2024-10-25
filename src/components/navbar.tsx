'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/brand_logo_bgremove.png"
            alt="Brand Logo"
            width={100}
            height={100}
            className="w-auto h-20"
          />
        </Link>

        
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/certificates" className="hover:text-gray-300">Certificates</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/blogs" className="hover:text-gray-300">Blogs</Link>
        </nav>
        
        <button className="md:hidden ml-4" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    
    {isMenuOpen && (
      <div className="md:hidden">
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-700">Home</Link>
          <Link href="/certificates" className="block px-3 py-2 rounded-md hover:bg-gray-700">Certificates</Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md hover:bg-gray-700">Projects</Link>
          <Link href="/blogs" className="block px-3 py-2 rounded-md hover:bg-gray-700">Blogs</Link>
        </nav>
      </div>
    )}
  </header>
)
}