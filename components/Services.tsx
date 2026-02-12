import React from 'react';
import { Layers, ShoppingBag, Zap, Shield, Search, Smartphone } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Headless WordPress',
    description: 'Decoupled architectures using Next.js or Gatsby for blazing fast performance and enterprise security.',
    icon: <Layers className="h-8 w-8 text-brand-400" />,
  },
  {
    id: 2,
    title: 'Custom WooCommerce',
    description: 'Tailored e-commerce experiences with custom checkout flows, subscription models, and ERP integrations.',
    icon: <ShoppingBag className="h-8 w-8 text-purple-400" />,
  },
  {
    id: 3,
    title: 'Plugin Development',
    description: 'Bespoke plugins engineered to solve specific business problems without the bloat of off-the-shelf solutions.',
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description: 'Hardened WP installs, regular audits, and maintenance plans for mission-critical applications.',
    icon: <Shield className="h-8 w-8 text-green-400" />,
  },
  {
    id: 5,
    title: 'Technical SEO',
    description: 'Code-level optimization to ensure your site ranks high. Core Web Vitals optimization included.',
    icon: <Search className="h-8 w-8 text-pink-400" />,
  },
  {
    id: 6,
    title: 'API Integrations',
    description: 'Seamlessly connect WordPress with your CRM, Marketing Automation, and internal tools.',
    icon: <Smartphone className="h-8 w-8 text-indigo-400" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Engineered for Growth</h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            We move beyond themes and page builders. We architect robust digital solutions tailored to your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 group"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;