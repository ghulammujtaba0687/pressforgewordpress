import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'React + Headless WP',
    imageUrl: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    id: 2,
    title: 'Luxe Fashion House',
    category: 'WooCommerce Custom',
    imageUrl: 'https://picsum.photos/seed/fashion/800/600',
  },
  {
    id: 3,
    title: 'Global News Portal',
    category: 'High Traffic Migration',
    imageUrl: 'https://picsum.photos/seed/news/800/600',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Selected Work</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Featured Projects</h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-slate-300 hover:text-white transition-colors mt-4 md:mt-0">
            View all projects <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-400 text-sm font-medium mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
             <a href="#" className="inline-flex items-center text-slate-300 hover:text-white transition-colors">
            View all projects <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;