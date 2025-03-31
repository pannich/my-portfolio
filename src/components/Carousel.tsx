import React from 'react';
import ProjectCard from './ProjectCard';

export const projects = [
  { name: 'Belay', url: 'https://github.com/pannich/Belay', image: '/belay.png', description: 'Full-stack Web Application' },
  { name: 'FaaS', url: 'https://github.com/pannich/FaaS', image: '/faas.png', description: 'Distributed System Design' },
  { name: 'Parallel Image Processing', url: 'https://github.com/pannich/proj3-parallel-img-steal/tree/main', image: '/parallel_img.png', description: 'Parallel Computing' },
  { name: 'Genomic Annotation Service (GAS)', url: 'https://github.com/pannich/MPCS51083_Cloud/tree/main/final-project-pannich', image: '/cloud.png', description: 'Cloud Computing' },
  { name: 'MoodyPy', url: 'https://github.com/pannich/MoodyPyapp', image: 'moodypy_demo.png', description: 'Deep Learning Facial Recognition model VGG16' },
  { name: 'Trading Engine', url: 'https://github.com/pannich/proj_TradingEngine', image: 'trading_engine_activemq.png', description: 'Object Oriented Architecture/ Design patterns in Java' },
  { name: 'Unix shell', url: 'https://github.com/pannich/unix-like-shell', image: 'unix_shell.png', description: 'System Programming' },
];

const Carousel: React.FC = () => {
  return (
    <div className="relative">
      {/* Carousel Items */}
      <div className="flex space-x-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ scrollSnapType: 'smooth' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export function scrollCarousel(direction: number) {
  const carousel = document.querySelector(".overflow-x-auto");
  const card = document.querySelector(".min-w-\\[80\\%\\]");

  if (!carousel || !card) return;

  const cardWidth = card.getBoundingClientRect().width + 16; // Card width + gap
  carousel.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

export default Carousel;
