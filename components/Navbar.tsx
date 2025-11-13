"use client";

import { useState } from "react";
import Link from "next/link";
import {AiOutlineHeart} from "react-icons/ai";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="w-full bg-white  shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
      
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>

          <Link href="/" className="text-xl font-semibold text-blue ">
            PawsRescue
          </Link>
        </div>

        <ul className="hidden lg:flex items-center space-x-6 text-sm ">
          <li><Link href="/" className="cursor-pointer hover:text-teal-600 transition-colors">Home</Link></li>
          <li className="relative group">
            <button className="flex items-center gap-1 focus:outline-none">
              Parent
              <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          
            <ul className="absolute hidden group-hover:block bg-white rounded-md shadow-md mt-2 p-2 w-40">
              <li><Link href="#" className="block px-3 py-1 hover:bg-gray-100 rounded">Submenu 1</Link></li>
              <li><Link href="#" className="block px-3 py-1 hover:bg-gray-100 rounded">Submenu 2</Link></li>
            </ul>
          </li>
          <li><Link href="#impact" className="cursor-pointer hover:text-teal-600 transition-colors">Impact</Link></li>
      <li><Link href="/about" className="cursor-pointer hover:text-teal-600 transition-colors">About</Link></li>
        </ul>

        {/* Right: Button */}
        <div>
          <button className="px-4 py-2 flex items-center gap-2 text-sm bg-blue text-white rounded-full">
        <AiOutlineHeart className="font-bold text-lg"/>    Donate
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100 text-sm">
          <ul className="flex flex-col space-y-1 p-3 text-gray-700">
            <li><Link href="#" className="block px-2 py-2 hover:bg-gray-100 rounded">Home</Link></li>
            <li>
              <details className="group">
                <summary className="cursor-pointer px-2 py-2 hover:bg-gray-100 rounded">Parent</summary>
                <ul className="pl-4 space-y-1">
                  <li><Link href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Submenu 1</Link></li>
                  <li><Link href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Submenu 2</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="#impact" className="block px-2 py-2 hover:bg-gray-100 rounded">Impact</Link></li>
             <li><Link href="/about" className="block px-2 py-2 hover:bg-gray-100 rounded">About</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
