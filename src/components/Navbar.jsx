import { useState } from 'react';
import { Button } from "../components/ui/button";
import React from 'react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


return (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <a style={{ fontFamily: "'DM Serif Text', serif" }} href="#" className="text-white text-xl font-semibold flex items-center gap-2">
          <div className="h-6 w-6 bg-white/50 backdrop-blur-sm rounded-sm grid grid-cols-2">
            <div className="bg-white/80"></div>
          </div>
          Portfolio
        </a>
      </div>
      
      <div
        style={{ fontFamily: "'DM Serif Text', serif" }}
        className="hidden md:flex items-center space-x-8"
      >
        <a href="#about-me" className="text-white/80 text-xl hover:text-white transition-colors">Introduction</a>
        <a href="#projects" className="text-white/80 text-xl hover:text-white transition-colors">Projects</a>
        <a href="#education" className="text-white/80 text-xl hover:text-white transition-colors">Education</a>
        <a href="#contact" className="text-white/80 text-xl hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);


};

export default Navbar;
