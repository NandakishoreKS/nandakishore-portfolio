import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 px-6 md:px-16 lg:px-24">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <motion.div 
          className="flex flex-col text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="flex flex-col font-extrabold uppercase leading-none text-white text-left"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            <span>LET'S</span>
            <span>GET IN</span>
            <span>TOUCH</span>
          </div>

          <a 
            href="mailto:nandakishoreks21@gmail.com" 
            className="mt-6 text-base text-white/60 hover:text-white hover:underline transition-colors"
          >
            nandakishoreks21@gmail.com
          </a>

          <div className="text-4xl mt-4">
            🤙
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.form 
          className="flex flex-col w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={e => e.preventDefault()}
        >
          
          <div className="grid grid-cols-2 gap-6 mb-8 mt-2">
            <input 
              type="text" 
              placeholder="Name" 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 pb-4 pt-2 text-white text-base placeholder:text-white/30 focus:border-white focus:outline-none focus:ring-0 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 pb-4 pt-2 text-white text-base placeholder:text-white/30 focus:border-white focus:outline-none focus:ring-0 transition-colors"
            />
          </div>

          <div className="mb-4">
            <textarea 
              placeholder="Message" 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 pb-4 pt-2 text-white text-base placeholder:text-white/30 focus:border-white focus:outline-none focus:ring-0 min-h-[80px] resize-y transition-colors"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-bold uppercase tracking-widest rounded-full py-4 mt-4 hover:opacity-90 hover:scale-[1.01] transition-all"
          >
            SEND MESSAGE
          </button>

        </motion.form>

      </div>

    </section>
  );
}
