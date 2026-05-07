import React from 'react';

const About = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-dark mb-8 text-center">About Me</h2>
        <div className="space-y-4 text-dark/80 text-lg leading-relaxed">
          <p>
            Hi, I'm <strong className="text-primary">Kusuma L S</strong> – a first-year Computer Science student at 
            <strong className="text-dark"> RV Institute of Technology and Management (RVITM)</strong>, Bangalore.
          </p>
          <p>
            I'm on a mission to build <strong className="text-primary">30 AI SaaS products by 2026</strong>. I believe in 
            shipping fast, learning in public, and building tools that actually help people.
          </p>
          <p>
            So far, I've built <strong>blossomsportrait</strong> (a digital memory book maker), <strong>FixMyCity</strong> 
            (a civic issue reporting platform for Bangalore), and participated in the GDG workshop at RVITM 
            building a real-time notice board.
          </p>
          <p>
            I work with <strong>React, Tailwind CSS, Firebase, Supabase, and Vercel</strong>. I'm always excited to 
            learn new technologies and collaborate on meaningful projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;