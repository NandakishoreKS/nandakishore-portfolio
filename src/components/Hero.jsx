import { motion } from 'framer-motion';

export default function Hero() {
  const name = "HI, I'M NANDAKISHORE";
  const letters = name.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black flex flex-col justify-center px-6 md:px-16 lg:px-24">
      
      <div className="max-w-7xl mx-auto w-full pt-32">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-12 lg:gap-0 lg:mb-[-4rem]">
          
          {/* Left Cell: Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-0 lg:mt-16 order-2 lg:order-1">
            <p className="text-sm font-light tracking-wide text-white/70 max-w-[200px] leading-relaxed">
              AN AI/ML ENGINEER PASSIONATE ABOUT BUILDING INTELLIGENT SYSTEMS 🤖 💻 ⚡
            </p>
          </div>

          {/* Center Cell: Avatar */}
          <div className="flex justify-center relative z-20 order-1 lg:order-2">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white tracking-tighter">NK</span>
            </div>
          </div>

          {/* Right Cell: CTA Button */}
          <div className="flex justify-center lg:justify-end items-start mt-0 lg:mt-16 order-3">
            <a 
              href="#contact" 
              className="px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              CONTACT ME →
            </a>
          </div>

        </div>

        {/* BOTTOM ROW: Giant Name */}
        <div className="w-full text-center relative z-10 mt-12 lg:mt-0 overflow-hidden">
          <motion.h1 
            className="font-extrabold uppercase leading-none tracking-tighter text-white"
            style={{ 
              fontSize: 'clamp(3.5rem, 9vw, 9rem)', 
              letterSpacing: '-0.03em' 
            }}
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
