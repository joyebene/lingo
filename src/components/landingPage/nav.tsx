"use client";

import React, {useState} from 'react';
import Link from 'next/link';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 return(
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl">
              L
            </div>
            <span className="text-2xl font-bold text-white">Lingo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#community" className="text-gray-300 hover:text-blue-400 transition-colors">Community</a>
            <a href="#roadmap" className="text-gray-300 hover:text-blue-400 transition-colors">Roadmap</a>
            <Link href="/signup" type='button' className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button type='button'
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-blue-400 transition-colors">Features</a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#community" className="block text-gray-300 hover:text-blue-400 transition-colors">Community</a>
            <a href="#roadmap" className="block text-gray-300 hover:text-blue-400 transition-colors">Roadmap</a>
            <button type='button' className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )};