import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a style={{ fontFamily: "'DM Serif Text', serif" }} href="#" className="text-white text-xl font-semibold flex items-center gap-2">
              <div className="h-6 w-6 bg-white/50 backdrop-blur-sm rounded-sm grid grid-cols-2">
                <div className="bg-white/80"></div>
              </div>
              Portfolio
            </a>
          </div>
          
          <div style={{ fontFamily: "'DM Serif Text', serif" }} className="flex space-x-8 mb-4 md:mb-0">
            <a href="bvedasichowdary@gmail.com" className="text-white/60 hover:text-white transition-colors">Email</a>
            <a href="https://github.com/bVedasi" className="text-white/60 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/vedasi-balla-454337283/" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
          </div>
          
          <div style={{ fontFamily: "'DM Serif Text', serif" }} className="text-white/40 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
