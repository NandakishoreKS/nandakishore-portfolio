import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black pt-32 flex flex-col">
      
      <div className="max-w-4xl mx-auto px-6 w-full flex-grow flex flex-col items-center justify-center mb-32">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4">Get In Touch</h2>
          <a href="mailto:nandakishoreks21@gmail.com" className="text-xl md:text-2xl text-white/60 hover:text-pink-400 transition-colors duration-300">
            nandakishoreks21@gmail.com
          </a>
        </motion.div>

        <motion.form 
          className="w-full flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={e => e.preventDefault()}
        >
          <div className="flex flex-col md:flex-row gap-10">
            <input 
              type="text" 
              placeholder="Name" 
              className="flex-1 bg-transparent border-b border-white/20 text-white text-lg pb-4 outline-none placeholder:text-white/30 focus:border-pink-500 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-transparent border-b border-white/20 text-white text-lg pb-4 outline-none placeholder:text-white/30 focus:border-pink-500 transition-colors"
            />
          </div>
          
          <textarea 
            placeholder="Message" 
            rows={5}
            className="w-full bg-transparent border-b border-white/20 text-white text-lg pb-4 outline-none placeholder:text-white/30 focus:border-pink-500 transition-colors resize-none"
          />

          <button 
            type="submit" 
            className="w-full py-5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-extrabold uppercase tracking-widest text-lg hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

      </div>

      {/* Integrated Footer */}
      <footer className="w-full border-t border-white/10 relative z-10 bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tighter text-white">
            NANDAKISHORE KS
          </div>
          
          <div className="text-xs font-semibold tracking-widest text-white/40 uppercase">
            © {new Date().getFullYear()}
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold tracking-[0.1em] text-white/60 hover:text-pink-400 transition-colors duration-300 uppercase">
              GitHub
            </a>
            <a href="#" className="text-xs font-bold tracking-[0.1em] text-white/60 hover:text-pink-400 transition-colors duration-300 uppercase">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
}
