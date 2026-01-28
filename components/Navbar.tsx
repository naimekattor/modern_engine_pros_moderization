"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500`}>
      {/* Background Layer - Separated to prevent 'backdrop-filter' from trapping the fixed mobile menu */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'glass border-b border-[#4A5568]/10 shadow-sm' 
            : 'bg-white/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none border-b lg:border-none border-[#4A5568]/5'
        }`}
      ></div>

      {/* Main Content */}
      <div className={`relative z-10 container mx-auto px-4 md:px-8 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-3' : 'py-3 lg:py-5'}`}>
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative flex items-center justify-center">
             <img src="/images/logo1.png" alt="Modern Engine Pros Logo" className='w-[80px] h-auto object-contain' />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? 'text-[#003366]' : 'text-[#003366]'}`}>
              MODERN ENGINE PROS
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 text-[#D32F2F]`}>
              SINCE 1979
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium tracking-wide transition-all text-[#003366] hover:text-[#003366] hover:font-semibold`}
            >
              {link.name}
            </a>
          ))}
          <div className={`h-6 w-px bg-[#4A5568]/20`}></div>
          <div className="flex items-center space-x-4">
             <a
               href="https://CylinderHeadStore.com"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-opacity hover:opacity-80"
               aria-label="Cylinder Head Store"
             >
               <img 
                 src="/images/cylinderLogo.webp" 
                 alt="Cylinder Head Store" 
                 className="h-8 w-auto object-contain"
               />
             </a>
             <div className="h-6 w-px bg-[#4A5568]/20"></div>
             <a
               href="https://meparts.com"
               target="_blank"
               rel="noopener noreferrer"
               className="transition-opacity hover:opacity-80"
               aria-label="MEParts"
             >
               <img 
                 src="/images/ME_Logo.png" 
                 alt="MEParts" 
                 className="h-8 w-auto object-contain"
               />
             </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-[#003366]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
             <span className={`h-[2px] w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
             <span className={`h-[2px] w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
             <span className={`h-[2px] w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[101] bg-[#F7FAFC] transition-transform duration-500 flex flex-col px-6 pt-24 space-y-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4">
           <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-3xl font-bold text-[#003366] tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <hr className="border-[#4A5568]/10" />
        <div className="grid grid-cols-1 gap-4">
          <a href="https://CylinderHeadStore.com" className="bg-[#003366] text-white py-4 rounded font-bold text-center shadow-md">Cylinder Head Store</a>
          <a href="https://MEParts.com" className="bg-white text-[#003366] border border-[#003366] py-4 rounded font-bold text-center shadow-sm">MEParts.com</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
