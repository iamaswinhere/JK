import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a small delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href="https://wa.me/919847389972"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed left-6 bottom-6 z-50 flex items-center gap-3 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            aria-label="Chat on WhatsApp"
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 fill-current"
                    >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </div>

                {/* Tooltip / Grabber */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-stone-900 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="font-bold text-sm">Chat with us</span>
                    {/* Arrow */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-white"></div>
                </div>
            </div>
        </a>
    );
};
