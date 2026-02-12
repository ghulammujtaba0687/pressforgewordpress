import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Let's build something extraordinary.</h3>
            <p className="text-slate-400 text-lg mb-10">
              Ready to upgrade your digital presence? Schedule a consultation or drop us a message. Our team of architects is ready.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Us</h4>
                  <p className="text-slate-400">hello@pressforge.agency</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Call Us</h4>
                  <p className="text-slate-400">+1 (888) 999-0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/5 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Headquarters</h4>
                  <p className="text-slate-400">123 Innovation Dr, Tech City, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                <select id="type" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors">
                  <option>Headless WordPress Development</option>
                  <option>Custom WooCommerce Build</option>
                  <option>Plugin Development</option>
                  <option>Site Migration / Performance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-brand-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;