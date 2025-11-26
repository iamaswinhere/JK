import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus('SENDING');

    // NOTE: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
    // with your actual credentials from https://dashboard.emailjs.com/
    emailjs
      .sendForm(
        'service_v9qf84f', 
        'template_je76v2e', 
        form.current, 
        {
          publicKey: 'YKL6q15I_ye09BF-c',
        }
      )
      .then(
        () => {
          setStatus('SUCCESS');
          if (form.current) form.current.reset();
          // Reset status after 5 seconds
          setTimeout(() => setStatus('IDLE'), 5000);
        },
        (error) => {
          console.error('EmailJS Failed:', error.text);
          setStatus('ERROR');
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-stone-500 uppercase tracking-widest text-sm font-bold">Inquiries</span>
        <h2 className="text-4xl md:text-5xl text-stone-900 mt-4 mb-8 font-serif">Start Your Project</h2>
        <p className="text-stone-600 mb-12 max-w-lg mx-auto">
          Ready to transform your space? Contact us for a consultation or to learn more about our process.
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="user_name" className="block text-xs uppercase text-stone-500 mb-1">Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name" 
                required
                className="w-full bg-white border border-stone-300 p-3 focus:border-stone-900 focus:outline-none transition-colors" 
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-xs uppercase text-stone-500 mb-1">Email</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email" 
                required
                className="w-full bg-white border border-stone-300 p-3 focus:border-stone-900 focus:outline-none transition-colors" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase text-stone-500 mb-1">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              required
              className="w-full bg-white border border-stone-300 p-3 focus:border-stone-900 focus:outline-none transition-colors"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'SENDING' || status === 'SUCCESS'}
            className={`w-full py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-2
              ${status === 'SUCCESS' ? 'bg-green-700 text-white hover:bg-green-800' : 
                status === 'ERROR' ? 'bg-red-700 text-white hover:bg-red-800' :
                'bg-stone-900 text-white hover:bg-stone-700'
              }
              ${status === 'SENDING' ? 'opacity-75 cursor-wait' : ''}
            `}
          >
            {status === 'SENDING' && (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                <span>Sending...</span>
              </>
            )}
            
            {status === 'SUCCESS' && (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Message Sent</span>
              </>
            )}

            {status === 'ERROR' && (
              <>
                <AlertCircle className="w-4 h-4" />
                <span>Error - Try Again</span>
              </>
            )}

            {status === 'IDLE' && <span>Send Message</span>}
          </button>
          
          {status === 'ERROR' && (
            <p className="text-red-600 text-xs text-center mt-2">
              Something went wrong. Please check your connection or email us directly at hello@jkinteriors.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
};