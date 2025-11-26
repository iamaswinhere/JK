import React from 'react';
import { Layout, Video, Ruler, PenTool } from 'lucide-react';

const services = [
  {
    title: "Full-Service Design",
    description: "From concept to completion, we handle every detail of your renovation or new build. Includes procurement, installation, and styling.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Virtual Consultation",
    description: "Perfect for DIYers who need professional guidance. We provide a digital mood board, floor plan, and shopping list.",
    icon: <Video className="w-8 h-8" />
  },
  {
    title: "Space Planning",
    description: "Optimize your layout for flow and function. We analyze your architectural constraints to create the perfect arrangement.",
    icon: <Ruler className="w-8 h-8" />
  },
  {
    title: "Curated Styling",
    description: "The finishing touches that make a house a home. We select art, accessories, and textiles to elevate your existing furniture.",
    icon: <PenTool className="w-8 h-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-stone-500 uppercase tracking-widest text-sm font-bold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl text-stone-900 mt-4 mb-6">Tailored Design Services</h2>
          <div className="w-24 h-1 bg-stone-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-stone-400 group-hover:text-stone-800 transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};