import React from 'react'

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-stone-50 flex flex-col items-center justify-center transition-opacity duration-700">
            <div className="relative">
                {/* JK Logo with Pulse Animation */}
                <h1 className="text-8xl md:text-9xl font-serif text-stone-900 tracking-tighter animate-pulse select-none">
                    JK
                </h1>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
                <span className="text-stone-400 text-xs uppercase tracking-[0.3em] font-light animate-pulse">
                    Interiors
                </span>
                {/* Subtle loading bar */}
                <div className="w-16 h-0.5 bg-stone-200 mt-2 overflow-hidden rounded-full">
                    <div className="w-full h-full bg-stone-800 origin-left animate-[progress_1.5s_ease-in-out_infinite]"></div>
                </div>
            </div>

            {/* Custom keyframe for the progress bar */}
            <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};