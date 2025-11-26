import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const initialProjects = [
  {
    id: 1,
    title: "The Hudson Loft",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Serene Minimalist",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Modern Farmhouse",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Urban Sanctuary",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1600&auto=format&fit=crop"
  }
];

const allProjects = [
  ...initialProjects,
  {
    id: 5,
    title: "Coastal Retreat",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Mid-Century Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Bohemian Lounge",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Industrial Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909212-324f02f20ec7?q=80&w=1600&auto=format&fit=crop"
  }
];

export const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-sm font-bold">Selected Works</span>
            <h2 className="text-4xl md:text-5xl text-stone-900 mt-4">Our Portfolio</h2>
          </div>
          {/* Desktop link removed in favor of the button below */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <span className="text-stone-300 uppercase tracking-widest text-xs mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-3xl text-white font-serif italic translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-stone-900 text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-stone-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-stone-50 overflow-y-auto animate-fade-in">
          <div className="min-h-screen">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-stone-50/95 backdrop-blur-sm z-10 px-6 py-6 border-b border-stone-200">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-serif text-stone-900">All Projects</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-stone-200 rounded-full transition-colors group"
                  aria-label="Close gallery"
                >
                  <X size={32} className="text-stone-500 group-hover:text-stone-900 transition-colors" />
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project) => (
                  <div key={project.id} className="group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-600 transition-colors">{project.title}</h3>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">{project.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center border-t border-stone-200 pt-12">
                <p className="text-stone-500 mb-6">Interested in working with us on your next project?</p>
                <a 
                  href="#contact" 
                  onClick={() => setIsModalOpen(false)}
                  className="inline-block border-b border-stone-900 text-stone-900 uppercase tracking-widest text-sm font-bold pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
