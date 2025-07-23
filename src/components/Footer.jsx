import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
      {
        icon: Mail,
        label: 'Email',
        href: 'mailto:vedasi@example.com'
      },
      {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/bVedasi'
      },
      {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vedasi-balla-454337283/'
      }
    ];
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
            {/* <a href="bvedasichowdary@gmail.com" className="text-white/60 hover:text-white transition-colors">Email</a>
            <a href="https://github.com/bVedasi" className="text-white/60 hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/vedasi-balla-454337283/" className="text-white/60 hover:text-white transition-colors">LinkedIn</a> */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-nothing-surface-2 hover:bg-nothing-surface-3 hover:text-nothing-glow transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
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
