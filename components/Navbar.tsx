"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

       
        <div className="flex items-center gap-3">
 
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          <Link href="/" className="text-xl font-semibold text-blue">
            PawsRescue
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 focus:outline-none">
              Parent
              <ChevronDown className="w-4 h-4 mt-1" />
            </button>

            <ul className="absolute hidden group-hover:block bg-white rounded-md shadow-md mt-2 p-2 w-40">
              <li><Link href="#" className="block px-3 py-1 hover:bg-gray-100 rounded">Submenu 1</Link></li>
              <li><Link href="#" className="block px-3 py-1 hover:bg-gray-100 rounded">Submenu 2</Link></li>
            </ul>
          </li>

          <li><Link href="#impact" className="hover:text-teal-600 transition-colors">Impact</Link></li>
          <li><Link href="/about" className="hover:text-teal-600 transition-colors">About</Link></li>
        </ul>

        {/* Donate */}
        <button className="px-4 py-2 flex items-center gap-2 text-sm bg-blue text-white rounded-full">
          <Heart size={18} /> Donate
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"} lg:hidden bg-white shadow-md border-t border-gray-100 text-sm`}
      >
        <ul className="flex flex-col space-y-1 p-3 text-gray-700">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-2 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
          </li>

          <li>
            <details className="group">
              <summary className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">
                Parent
              </summary>
              <ul className="pl-4 space-y-1">
                <li><Link href="#" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-100 rounded">Submenu 1</Link></li>
                <li><Link href="#" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-100 rounded">Submenu 2</Link></li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="#impact" onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-gray-100 rounded">
              Impact
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block px-2 py-2 hover:bg-gray-100 rounded">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
