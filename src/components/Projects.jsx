import React from 'react';

const projects = [
  {
    name: 'blossomsportrait',
    description: 'Digital memory book maker where users design covers, add pages, stickers, fonts, and colors. Download as PNG or order printed copy (Bangalore only).',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Vercel'],
    link: 'https://blossomportrait.vercel.app',
    image: '/images/blossom.jpg',
  },
  {
    name: 'FixMyCity',
    description: 'Civic issue reporting platform for Bangalore. Report road damage, water leaks, garbage, streetlights. Upvote, authority dashboard, email alerts, photo uploads.',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Supabase', 'EmailJS'],
    link: 'https://fixmycity.vercel.app',
    image: '/images/fixmycity.jpg',
  },
  {
    name: 'Real-time Notice Board',
    description: 'Built during GDG workshop at RVITM. Real-time notice board with Firebase Firestore sync and authentication.',
    tech: ['React.js', 'Vite', 'Firebase Firestore', 'Firebase Auth'],
    link: 'https://connect-rvitm.vercel.app',
    image: '/images/connectRVITM.jpg',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="relative w-full h-96 rounded-2xl cursor-pointer group overflow-hidden shadow-md">
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
      </div>

      <div className="absolute inset-0 text-white p-6 flex flex-col justify-center items-center text-center transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{project.name}</h3>
        <p className="text-sm text-white/90 line-clamp-3 drop-shadow-md">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-light border-2 border-primary rounded-2xl p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-dark text-sm mb-4 leading-relaxed line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Live Demo →
        </a>
      </div>

      <div className="absolute top-0 right-0 w-12 h-12 bg-primary/20 rounded-bl-2xl rounded-tr-2xl group-hover:w-full group-hover:h-full group-hover:rounded-2xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/20 rounded-tr-2xl rounded-bl-2xl group-hover:w-full group-hover:h-full group-hover:rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">My Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;