import { motion } from 'framer-motion';
import { Send, Code, Briefcase, Globe, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-transparent min-h-screen flex flex-col justify-between relative overflow-hidden">
      
      {/* Ghost Text Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h1 
          className="text-[12rem] md:text-[20rem] font-black text-transparent leading-none opacity-20 tracking-tighter"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
        >
          CONTACT
        </h1>
      </div>

      <div className="container mx-auto px-6 max-w-5xl flex-1 flex flex-col justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 mt-12"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 uppercase tracking-tighter">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-3xl font-light tracking-wide">
            nandakishoreks21@gmail.com
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">Let's build something great</h3>
            <p className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
              I'm always open to discussing product design work, exciting AI projects, or partnership opportunities. Feel free to reach out using the form or via email directly.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all text-white hover:-translate-y-1 shadow-lg hover:shadow-violet-500/20">
                <Code size={26} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all text-white hover:-translate-y-1 shadow-lg hover:shadow-violet-500/20">
                <Briefcase size={26} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all text-white hover:-translate-y-1 shadow-lg hover:shadow-violet-500/20">
                <Globe size={26} />
              </a>
              <a href="mailto:nandakishoreks21@gmail.com" className="p-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all text-white hover:-translate-y-1 shadow-lg hover:shadow-violet-500/20">
                <Mail size={26} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-widest pl-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-light tracking-wide placeholder-white/20"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-widest pl-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-light tracking-wide placeholder-white/20"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-widest pl-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none font-light tracking-wide placeholder-white/20"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 text-white font-bold py-5 rounded-full transition-all duration-300 uppercase tracking-widest hover:scale-[1.02] shadow-[0_10px_30px_rgba(139,92,246,0.3)] mt-4"
            >
              Send Message
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10 py-10 text-center bg-transparent relative z-10 w-full backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 text-sm uppercase tracking-widest font-light">
            © {new Date().getFullYear()} Nandakishore KS. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
