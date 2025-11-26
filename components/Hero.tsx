import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (imgRef.current) {
        // Direct DOM update avoids React Re-renders on every frame = 60fps smooth
        const scrollY = window.scrollY;
        // Only transform if the hero is roughly in view to save resources
        if (scrollY < window.innerHeight) {
          imgRef.current.style.transform = `translateY(${scrollY * 0.5}px) scale(${isLoaded ? 1 : 1.1})`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Optimized Image: Fetch Priority High + Eager Loading */}
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop"
          alt="Luxury Interior Living Room"
          // @ts-ignore - React warning fix: use lowercase attribute for DOM
          fetchpriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-[120%] object-cover object-center transition-transform duration-[2000ms] ease-out will-change-transform"
          // The scale part is now managed by React's style prop for the initial transition
          // The translateY part will be updated directly via imgRef in useEffect
          style={{
            transform: `scale(${isLoaded ? 1 : 1.1})` // Combine parallax with scale
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <p
          className={`text-stone-200 text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-semibold shadow-sm transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '300ms' }}
        >
          Elevated Living Spaces
        </p>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight font-serif drop-shadow-lg transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '500ms' }}
        >
          Designing with <br /> Light & Soul
        </h1>

        <p
          className={`text-stone-100 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto drop-shadow-md transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '700ms' }}
        >
          We curate residential and commercial interiors that breathe elegance, warmth, and timeless sophistication.
        </p>

        <div
          className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="#portfolio"
            className="inline-block bg-white text-stone-900 px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-stone-200 transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </a>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white transition-opacity duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <ArrowDown size={32} className="animate-bounce" />
      </div>
    </section>
  );
};