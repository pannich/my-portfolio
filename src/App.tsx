import React from 'react';
import { Code, Briefcase, User2, Send, ExternalLink, Github, Linkedin, Mail, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#F1EEDC] text-[#4A5D63]">
      {/* Navigation */}
      <nav className="fixed w-full top-4 bg-[#d9d9d9]/80 backdrop-blur-sm z-50 border border-[#d9d9d9] mx-auto rounded-full">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
            {/* Add padding using 'py-4' for vertical padding */}
            <div className="flex items-center justify-between h-16">
            <Terminal className="text-[#4A5D63]" size={28} />

            <div className="flex space-x-8">
              <a href="#about" className="text-[#4A5D63] hover:text-[#2C3B40] transition-colors">About</a>
              <a href="#work" className="text-[#4A5D63] hover:text-[#2C3B40] transition-colors">Work</a>
              <a href="#contact" className="text-[#4A5D63] hover:text-[#2C3B40] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(190,215,220,0.3),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            <h2 className="text-[#4A5D63] font-mono">Hi, my name is</h2>
            <h1 className="text-5xl sm:text-7xl font-bold text-[#2C3B40]">
              Nichada
            </h1>
            <h1 className="text-5xl sm:text-7xl font-bold text-[#4A5D63]">
              I build things for the web.
            </h1>
            <p className="max-w-xl text-[#4A5D63] text-lg">
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your@email.com" className="p-2 text-[#4A5D63] hover:text-[#2C3B40] transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#E5DDC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12">
            <User2 className="text-[#4A5D63]" size={28} />
            <h2 className="text-3xl font-bold text-[#2C3B40]">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#4A5D63]">
                Hello! I'm a passionate developer who loves creating things that live on the internet.
                My interest in web development started back in 2012 when I decided to try editing custom
                Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="text-[#4A5D63]">
                Fast-forward to today, and I've had the privilege of working at various companies,
                from startups to large corporations. My main focus these days is building accessible,
                inclusive products and digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((tech) => (
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
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-[#BED7DC] rounded-lg transform translate-x-3 translate-y-3 -z-10
                            group-hover:translate-x-5 group-hover:translate-y-5 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-[#F1EEDC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12">
            <Briefcase className="text-[#4A5D63]" size={28} />
            <h2 className="text-3xl font-bold text-[#2C3B40]">Featured Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="group relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                    alt={`Project ${project}`}
                    className="w-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#BED7DC]/90 opacity-0 group-hover:opacity-100 transition-opacity
                                flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold mb-2 text-[#2C3B40]">Project {project}</h3>
                      <p className="text-[#4A5D63] mb-4">A brief description of the project and its impact.</p>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-[#4A5D63] hover:text-[#2C3B40] inline-flex items-center">
                          <Github size={20} className="mr-1" /> Code
                        </a>
                        <a href="#" className="text-[#4A5D63] hover:text-[#2C3B40] inline-flex items-center">
                          <ExternalLink size={20} className="mr-1" /> Live
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#E5DDC5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Send className="text-[#4A5D63]" size={28} />
            <h2 className="text-3xl font-bold text-[#2C3B40]">Get In Touch</h2>
          </div>
          <p className="text-[#4A5D63] text-lg mb-8">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center px-8 py-4 border-2 border-[#B3C8CF] text-[#4A5D63]
                     hover:bg-[#BED7DC] hover:border-[#BED7DC] hover:text-[#2C3B40] rounded-lg transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#B3C8CF] bg-[#F1EEDC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#4A5D63]">
          <p>Designed & Built by Your Name</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
