import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-stone-500 uppercase tracking-widest text-sm font-bold block mb-4">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl text-stone-900 mb-8 font-serif leading-tight">
              Designing for the Art of Living.
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
              <p>
                Founded in 2015, JK Interiors began with a simple yet profound belief: that your environment shapes your well-being. We move beyond trends to create spaces that feel timeless, grounded, and authentically yours.
              </p>
              <p>
                Our aesthetic is rooted in "Quiet Luxury"—a celebration of natural materials, artisanal craftsmanship, and the interplay of light and shadow. We don't just fill rooms; we curate experiences that unfold slowly, revealing beauty in every detail.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                alt="Signature" 
                className="h-12 opacity-40"
              />
            </div>
          </div>

      </div>
    </section>
  );
};