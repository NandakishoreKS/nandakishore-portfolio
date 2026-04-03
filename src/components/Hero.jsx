import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function FloatingEmoji({ emoji, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(157,78,221,0.5)] z-10"
      style={style}
    >
      {emoji}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Floating Emojis */}
      <FloatingEmoji emoji="🤖" style={{ top: '20%', left: '15%' }} delay={0} />
      <FloatingEmoji emoji="💻" style={{ top: '55%', right: '15%' }} delay={1} />
      <FloatingEmoji emoji="⚡" style={{ bottom: '15%', left: '20%' }} delay={2} />
      <FloatingEmoji emoji="🧠" style={{ top: '15%', right: '25%' }} delay={3} />

      <motion.div
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase text-white mb-4 leading-none">
          HI, I'M <br/> NANDAKISHORE
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 font-medium mb-10 max-w-2xl mx-auto">
          AI/ML Engineer & Full Stack Developer | B.Tech Student <br/>
          Building intelligent systems & beautiful interfaces
        </p>

        <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-pink-500 rounded-full px-8 py-4 text-white font-semibold hover:scale-105 transition-transform duration-300">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
