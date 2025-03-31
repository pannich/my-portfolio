import React from "react";

interface ProjectCardProps {
  name: string;
  url: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  url,
  image,
  description,
}) => {
  return (
    <div className="min-w-[80%] md:min-w-[45%] lg:min-w-[30%] h-80 snap-center group relative">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <a href={url} className="text-white hover:underline">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
