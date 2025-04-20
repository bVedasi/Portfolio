import { useState } from 'react';
import { Button } from "../components/ui/button";
import React from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-white text-xl font-semibold flex items-center gap-2">
            <div className="h-6 w-6 bg-white/50 backdrop-blur-sm rounded-sm grid grid-cols-2">
              <div className="bg-white/80"></div>
            </div>
            Portfolio
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about-me" className="text-white/80 text-xl hover:text-white transition-colors">Introduction</a> {/* Updated link */}
          <a href="#projects" className="text-white/80 text-xl hover:text-white transition-colors">Projects</a>
          <a href="#education" className="text-white/80 text-xl hover:text-white transition-colors">Education</a> {/* Updated link */}
          <a href="#contact" className="text-white/80 text-xl hover:text-white transition-colors">Contact</a>
        </div>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 mt-4 p-4 bg-black/90 backdrop-blur-md border border-white/10 rounded-md">
          <div className="flex flex-col space-y-4">
            <a href="#about-me" className="text-white/80 hover:text-white transition-colors">Introduction</a> {/* Updated link */}
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-white/80 hover:text-white transition-colors">Education</a> {/* Updated link */}
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
