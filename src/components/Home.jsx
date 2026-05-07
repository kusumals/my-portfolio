import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-secondary/20">
      <div className="text-center px-4">
        {/* Profile Photo - Circular */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/kusuma.jpg"
            alt="Kusuma L S"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">
          Hi, I'm <span className="text-primary">Kusuma L S</span>
        </h1>
        <p className="text-xl md:text-2xl text-dark/70 mb-6">
          1st Year CSE Student at RVITM | Building 30 AI SaaS Products by 2026
        </p>
        <p className="text-lg text-dark/60 max-w-2xl mx-auto mb-8">
          Passionate full-stack developer shipping projects in public. Currently exploring React, Firebase, and AI integrations.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-primary hover:bg-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;