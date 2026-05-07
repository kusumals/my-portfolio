import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-light/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-dark mb-8">Get in Touch</h2>
        <p className="text-dark/70 text-lg mb-10">
          Feel free to reach out to me through any of the following platforms.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="mailto:kusumals2006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
          >
            📧 Email Me
          </a>
          <a
            href="https://github.com/kusumals"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
          >
            💻 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-ls/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 inline-block"
          >
            🔗 LinkedIn
          </a>
        </div>

        <div className="text-dark/60 text-sm">
          <p>📍 Bangalore, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;