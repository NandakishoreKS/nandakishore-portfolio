import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toUTCString().toUpperCase());
    };
    update();
    const int = setInterval(update, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center"
      style={{ padding: '0 clamp(1.5rem, 6vw, 5rem)' }}
    >
      {/* Brutalist Top-Edge Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 left-0 w-full flex justify-between tracking-[0.2em] uppercase font-mono text-[0.6rem] text-stone-500"
        style={{ padding: '0 clamp(1.5rem, 6vw, 5rem)' }}
      >
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-stone-500 animate-pulse" />
          SYSTEM_ONLINE
        </div>
        <div>NANDAKISHORE.KS.OBSIDIAN</div>
      </motion.div>

      {/* Asymmetrical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-20">
        <div className="md:col-span-8">
          <div className="mb-4">
            <Reveal>
              <div className="section-label">AI/ML Engineer &amp; Full Stack Developer</div>
            </Reveal>
          </div>

          <h1 className="font-serif leading-[1.05] tracking-tight text-[clamp(3.5rem,8vw,8rem)] font-black text-white m-0 uppercase">
            <Reveal delay={0.1}>Architecting</Reveal>
            <Reveal delay={0.2}>Intelligent</Reveal>
            <div className="text-stone-500 flex gap-4 items-end flex-wrap">
              <Reveal delay={0.3}><span>Systems.</span></Reveal>
              <Reveal delay={0.4}>
                <span className="font-mono text-[clamp(1rem,2vw,1.5rem)] tracking-widest font-light align-text-bottom pb-4">V_0.1</span>
              </Reveal>
            </div>
          </h1>
        </div>

        <div className="md:col-span-4 flex flex-col gap-12 mt-8 md:mt-0 text-right md:text-left">
          <Reveal delay={0.5}>
            <p className="font-sans font-light text-bone text-base md:text-lg leading-relaxed max-w-sm">
              Engineering elegant logic and high-performance interfaces. Bridging the gap between raw data computation and sophisticated user experiences.
            </p>
          </Reveal>
          
          <Reveal delay={0.6}>
            <div className="flex flex-col gap-6 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-stone-400">
              <div className="border-t border-stone-800 pt-4">
                <span className="block mb-1 text-stone-600">Discipline</span>
                <span className="text-white">AI / Full Stack</span>
              </div>
              <div className="border-t border-stone-800 pt-4">
                <span className="block mb-1 text-stone-600">Location</span>
                <span className="text-white">Kerala, IN</span>
              </div>
              <div className="border-t border-stone-800 pt-4">
                <span className="block mb-1 text-stone-600">Status</span>
                <span className="text-white">Available</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Brutalist Infinite Ticker Tape / Coordinate System */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-stone-800 bg-[#0A0A0A] py-3 text-stone-500 font-mono text-[0.6rem] tracking-[0.2em] whitespace-nowrap">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="inline-block"
        >
          {Array(4).fill(0).map((_, i) => (
            <span key={i} className="pr-12">
              SESSION.LAT: [ 9.9312 ] LON: [ 76.2673 ] ++ VECTOR.X(24) ++ 
              {' '} {time} {' '} 
              ++ INIT.CORE.SYS ++ NO_FAULT
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
