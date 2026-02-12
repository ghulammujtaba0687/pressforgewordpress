import React from 'react';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-brand-200">Accepting New Projects For Q4</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-8">
          We Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Digital Empires</span> <br className="hidden md:block" />
          with WordPress.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The enterprise WordPress agency for ambitious brands. We specialize in high-performance headless architectures, complex WooCommerce builds, and custom plugin ecosystems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-brand-900 transition-all duration-200 bg-white rounded-full hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-brand-900"
          >
            Start Your Build
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="text-base font-semibold text-slate-300 hover:text-white transition-colors"
          >
            View Case Studies
          </a>
        </div>

        {/* Floating Tech Stack Icons */}
        <div className="mt-20 flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Mock Logos */}
           <div className="flex items-center gap-2 text-slate-400">
             <Globe className="h-6 w-6" /> <span className="font-bold">Next.js</span>
           </div>
           <div className="flex items-center gap-2 text-slate-400">
             <Database className="h-6 w-6" /> <span className="font-bold">WP GraphQL</span>
           </div>
           <div className="flex items-center gap-2 text-slate-400">
             <Code className="h-6 w-6" /> <span className="font-bold">React</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;