import React from "react";
import { User2, Code } from "lucide-react"; // Adjust imports based on your icon library

interface AboutProps {
  id: string; // Define the id prop
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-12">
          <User2 className="text-[#4A5D63]" size={28} />
          <h2 className="text-3xl font-bold text-[#2C3B40]">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[#4A5D63]">
              Hello! I'm a passionate developer who loves creating things that
              live on the internet. My interest in web development started back
              in 2024 when I decided to try editing my personal photography blog
              — turns out hacking together a custom reblog button taught me a
              lot about HTML & CSS!
            </p>
            <p className="text-[#4A5D63]">
              Fast-forward to today, and I've had the privilege of studying the
              CS degree at the University of Chicago working at various
              companies, from startups to large corporations. My main focus
              these days is building accessible products experiences and the
              application that is scalable with Cloud.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 items-center justify-center">
              {[
                "HTML/ CSS, JavaScript, React",
                "Docker/ AWS/ S3/ AutoScaling",
                "Python, Go, Java, R",
                "SQL, DynamoDB",
                "Git, CI/CD, Agile",
                "Distributed Systems, Microservices",
                "Product Management",
              ].map((tech) => (
                <div key={tech} className="flex items-center space-x-2">
                  <Code size={16} className="text-[#4A5D63]" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="relative z-10">
              <img
                src="/about_me.jpg"
                alt="Profile"
                className="max-w-[300px] max-h-[500px] rounded-lg transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-[#BED7DC] rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
