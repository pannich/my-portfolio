import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[#B3C8CF] bg-[#F1EEDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#4A5D63]">
        <p>Designed & Built by Nichada Wongrassamee</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
