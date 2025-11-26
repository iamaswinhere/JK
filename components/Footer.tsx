import React, { useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter text-white mb-6">
              JK.
            </div>
            <p className="text-sm leading-relaxed">
              Elevating interiors through light, texture, and thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>JK Interiors</li>
              <li>Athipotta, Tarur, Palakkad, Kerala, India</li>
              <li>hello@jkinteriors.com</li>
              <li>+91 9847389972</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} JK Interiors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};