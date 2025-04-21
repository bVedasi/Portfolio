import { ArrowDown } from 'lucide-react';
import bgImage from '/abstract-bg.png';
import BlurReveal from './BlurReveal';
import React from 'react';
const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 md:px-12 overflow-hidden" style={{
      backgroundImage: `url(${bgImage})`,
    }}>
      {/* Background wave effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[500px] w-[800px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[800px] w-[1200px] bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl transform translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Wrap Hero Section content inside BlurReveal */}
          <BlurReveal>
            <h1 style={{ fontFamily: "'DM Serif Text', serif" }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Hi! I'm <span className="text-primary">Vedasi Balla</span>
            </h1>
            <p style={{ fontFamily: "'DM Serif Text', serif" }} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Designing experiences that captivate and inspire.
            </p>
          </BlurReveal>

          <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center space-x-2 text-white/60">
            <span>Scroll down</span>
            <div className="h-px w-[100px] bg-white/20"></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowDown size={16} />
            </div>
            <div className="h-px w-[100px] bg-white/20"></div>
            <span>to see projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
