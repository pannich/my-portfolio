import React, { useState } from 'react';
import { Send } from 'lucide-react'; // Adjust imports based on your icon library

interface ContactProps {
  id: string; // Define the id prop
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <section id={id} className="flex items-center justify-center h-screen bg-[#E5DDC5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Send className="text-[#4A5D63]" size={28} />
          <h2 className="text-3xl font-bold text-[#2C3B40]">Get In Touch</h2>
        </div>
        <p className="text-[#4A5D63] text-lg mb-8">
          Contact for work and collaborations. I'm excited to hear from you!
        </p>

        <div className="mt-8 text-xl">🪴</div>
        <div className="mt-8 text-2xl">🪴</div>
        <div className="mt-8 text-3xl">🪴</div>

        <a
          href="mailto:pan.nichada@gmail.com"
          className="mt-8 inline-flex items-center px-8 py-4 border-2 border-[#F1EEDC] text-[#4A5D63] hover:text-[#2C3B40] font-semibold text-3xl rounded-lg transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
        >
          {isHovered ? '😉' : 'Say Hello'} {/* Conditional rendering based on hover state */}
        </a>
      </div>
    </section>
  );
};

export default Contact;
