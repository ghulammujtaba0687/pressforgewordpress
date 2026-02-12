import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            Press<span className="text-brand-500">Forge</span>
          </span>
          <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} PressForge Agency. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;