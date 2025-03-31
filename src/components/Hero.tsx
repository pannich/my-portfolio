import React from 'react';
import { Github, Linkedin, Briefcase, Mail } from 'lucide-react'; // Adjust imports based on your icon library

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-[#F1EEDC]">Nichada W.</h1>
          <p className="max-w-xl text-[#9c7245] text-lg">
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/pannich" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/pan-nichada" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:nichada@uchicago.edu" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors"><Briefcase size={20} /></a>
            <a href="mailto:pan.nichada@gmail.com" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
