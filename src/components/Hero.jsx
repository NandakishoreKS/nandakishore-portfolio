import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const name = "NANDAKISHORE KS";

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-between overflow-hidden pt-32 pb-12 px-6 lg:px-12">
      
      {/* Top Name Area */}
      <div className="relative z-10 pt-10">
        
        {/* Ghost Text Behind Name */}
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full text-center">
          <h1 
            className="font-bold text-outline uppercase leading-none opacity-[0.06]"
            style={{ fontSize: 'clamp(5rem, 15vw, 18rem)' }}
          >
            PORTFOLIO
          </h1>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-[#c8f04a]/[0.08] backdrop-blur-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-[#c8f04a] animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-[#c8f04a]/90 uppercase">Available For Work</span>
        </div>

        {/* Main Name */}
        <h1 className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tighter flex overflow-hidden relative z-10">
          {name.split('').map((letter, i) => (
            <span key={i} className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-white/60 mt-6 tracking-wide relative z-10 font-light">
          AI/ML Engineer & Full Stack Developer
        </p>

      </div>

      {/* Separator block (fills space) */}
      <div className="flex-grow flex items-end w-full max-w-7xl mx-auto pb-8">
        <div className="w-full h-[1px] bg-white/[0.1] relative">
           {/* Line */}
        </div>
      </div>

      {/* Bottom Area */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between pt-2">
        
        {/* Emojis Bottom Left */}
        <div className="flex gap-3 text-2xl mb-8 md:mb-0">
          <motion.div className="flex items-center justify-center bg-white/5 backdrop-blur rounded-full px-3 py-2 border border-white/10" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🤖</motion.div>
          <motion.div className="flex items-center justify-center bg-white/5 backdrop-blur rounded-full px-3 py-2 border border-white/10" animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>💻</motion.div>
          <motion.div className="flex items-center justify-center bg-white/5 backdrop-blur rounded-full px-3 py-2 border border-white/10" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>⚡</motion.div>
        </div>

        {/* Action Button */}
        <a 
          href="#contact"
          className="px-8 py-3 rounded-full border border-white text-white font-medium tracking-wide transition-all duration-300 hover:bg-[#c8f04a] hover:border-[#c8f04a] hover:text-black uppercase text-sm"
        >
          Get In Touch
        </a>

      </div>
      
    </section>
  );
}
