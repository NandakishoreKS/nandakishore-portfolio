import { useState } from 'react';
import { Reveal } from './Reveal';
import { Send, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      
      {/* Ghost text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-full text-center">
        <h2 className="ghost-title text-[clamp(6rem,15vw,20rem)] font-black leading-none opacity-20">
          CONTACT
        </h2>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white">GET IN TOUCH</h2>
            <p className="text-gray-400 font-medium">nandakishoreks21@gmail.com</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message..."
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 focus:border-violet-500 rounded-xl px-5 py-4 text-white outline-none transition-all placeholder:text-gray-500 resize-none"
              />
            </div>
            
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full px-8 py-4 text-white font-semibold hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all self-center mt-4">
              Send Message <Send size={18} />
            </button>
            {status && <p className="text-pink-400 text-center text-sm mt-2 font-medium">✓ {status}</p>}
          </form>
        </Reveal>
      </div>

      <footer className="relative z-10 mt-32 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm font-medium">
          © 2026 Nandakishore KS. Built with React & Vite.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <GithubIcon />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <LinkedinIcon />
          </a>
          <a href="mailto:nandakishoreks21@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </section>
  );
}
