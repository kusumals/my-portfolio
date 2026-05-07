import React from 'react';

const skills = {
  Languages: ['JavaScript', 'Python', 'HTML5', 'CSS3'],
  Frontend: ['React.js', 'Tailwind CSS', 'Vite'],
  'Backend & Database': ['Firebase Firestore', 'Supabase'],
  'Tools & Deployment': ['Git', 'GitHub', 'Vercel', 'npm'],
  Learning: ['Next.js', 'Node.js', 'TypeScript', 'Gemini AI'],
};

const Skills = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">My Skills</h2>
        
        {/* Grid layout - 5 items will arrange automatically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category} 
              className="bg-light/40 rounded-2xl shadow-md p-5 border border-secondary/30 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-primary mb-3 border-b border-primary/30 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-white text-dark px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;