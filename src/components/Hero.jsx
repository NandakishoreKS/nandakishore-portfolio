import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 bg-black">
      
      {/* Floating Emojis */}
      <motion.div 
        className="absolute top-[20%] left-[10%] md:left-[20%] text-5xl md:text-7xl select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🤖
      </motion.div>
      <motion.div 
        className="absolute top-[30%] right-[10%] md:right-[20%] text-5xl md:text-7xl select-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        💻
      </motion.div>
      <motion.div 
        className="absolute bottom-[20%] left-[15%] md:left-[25%] text-4xl md:text-6xl select-none"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        ⚡
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center relative z-10 w-full max-w-5xl">
        <motion.h1 
          className="font-extrabold uppercase leading-none tracking-tighter"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          HI, I'M NANDAKISHORE
        </motion.h1>

        <motion.p 
          className="text-lg md:text-3xl text-white/60 font-light mt-6 md:mt-10 tracking-widest uppercase max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Building intelligent systems & beautiful interfaces
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 md:mt-16"
        >
          <a href="#contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
            Contact Me →
          </a>
        </motion.div>
      </div>

    </section>
  );
}
