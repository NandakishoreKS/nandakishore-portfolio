import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full py-40 px-6 bg-black flex items-center justify-center overflow-hidden">
      
      {/* Decorative Emojis */}
      <motion.div 
        className="absolute left-[5%] md:left-[15%] top-[10%] text-5xl md:text-6xl opacity-80 select-none"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>
      <motion.div 
        className="absolute right-[5%] md:right-[15%] bottom-[10%] text-5xl md:text-6xl opacity-80 select-none"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        🚀
      </motion.div>

      <motion.div 
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-pink-400 mb-8">About Me</h2>
        
        <p className="text-xl md:text-4xl text-white/90 leading-relaxed font-light">
          I'm a B.Tech student with a profound passion for building intelligent systems and beautiful interfaces. 
          My expertise spans across artificial intelligence, machine learning, and full-stack web development. 
          I believe in combining robust logic with stunning aesthetics to create unforgettable digital experiences.
        </p>
      </motion.div>

    </section>
  );
}
