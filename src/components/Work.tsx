import React from "react";
import Carousel, { scrollCarousel } from "./Carousel"; // Ensure you have this component
import { Briefcase } from "lucide-react"; // Adjust imports based on your icon library

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
          <Briefcase className="text-[#000000]" size={28} />
          <h2 className="text-3xl font-bold text-[#000000]">Featured Work</h2>
        </div>
        <div className="relative">
          <Carousel />
          {/* Carousel Navigation */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
            onClick={() => scrollCarousel(-1)}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
            onClick={() => scrollCarousel(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
