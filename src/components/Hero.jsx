import { motion } from 'framer-motion';

export default function Hero() {
  const name = "HI, I'M NANDAKISHORE";
  
  // Split the word including spaces
  const letters = name.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 1 } },
    hidden: { opacity: 0, y: "100%" },
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center pt-32 px-6">
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center flex-grow justify-center gap-16 md:gap-24 mb-16">
        
        {/* Top 3 Columns */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 gap-12 md:gap-0">
          
          {/* LEFT: Tagline */}
          <div className="md:w-1/3 text-center md:text-left">
            <p className="text-white text-xs md:text-sm uppercase font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              AN AI/ML ENGINEER PASSIONATE ABOUT BUILDING INTELLIGENT SYSTEMS AND BEAUTIFUL INTERFACES 🤖
            </p>
          </div>

          {/* CENTER: Avatar Placeholder */}
          <div className="md:w-1/3 flex justify-center z-20">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-2xl relative translate-y-8 md:translate-y-16">
              <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">NK</span>
            </div>
          </div>

          {/* RIGHT: CTA Button */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold uppercase text-sm tracking-wide hover:scale-105 transition-transform duration-300">
              CONTACT ME →
            </a>
          </div>

        </div>

        {/* Giant Centered Name */}
        <div className="w-full text-center overflow-hidden z-10 -mt-12 md:-mt-24">
          <motion.h1 
            className="font-extrabold uppercase leading-none overflow-hidden"
            style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, i) => (
              <motion.span 
                key={i} 
                className="inline-block"
                variants={child}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

      </div>

    </section>
  );
}
