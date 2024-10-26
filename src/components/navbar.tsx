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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
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