import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  
  const name = "NANDAKISHORE KS";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name staggering animation
      gsap.from('.hero-letter', {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });

      // Role fade in
      gsap.from(roleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />

      {/* Top Tag */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-12">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
        <span className="text-xs font-medium tracking-widest text-white/80">AVAILABLE FOR WORK</span>
      </div>

      {/* Main Name */}
      <h1 ref={nameRef} className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tighter flex overflow-hidden">
        {name.split('').map((letter, i) => (
          <span key={i} className="hero-letter inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>

      {/* Role */}
      <p ref={roleRef} className="text-xl md:text-2xl text-white/60 mt-6 tracking-wide text-center px-4">
        AI/ML Engineer & Full Stack Developer
      </p>

      {/* Action Button */}
      <a 
        href="#contact"
        className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
      >
        Get In Touch
      </a>

      {/* Floating Emojis */}
      <div className="absolute bottom-20 left-10 md:left-32 flex gap-4 text-3xl">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🤖</motion.div>
        <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>💻</motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}>⚡</motion.div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/10 bg-black py-4">
        <div className="whitespace-nowrap flex overflow-hidden">
          <motion.div 
            className="flex gap-8 text-sm font-medium tracking-widest text-white/40"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {/* Duplicated for smooth scrolling */}
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
            <span>REACT • NODE.JS • PYTHON • AI/ML • GAME DEV •</span>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
