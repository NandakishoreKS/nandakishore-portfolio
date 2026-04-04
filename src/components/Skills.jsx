import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { id: '01', name: 'REACT & REACT NATIVE', desc: 'Building scalable, interactive UIs & cross-platform apps.' },
  { id: '02', name: 'NODE.JS & EXPRESS', desc: 'Connecting robust backends and RESTful API ecosystems.' },
  { id: '03', name: 'PYTHON & AI/ML', desc: 'Computer Vision, Deep Learning, and intelligent automations.' },
  { id: '04', name: 'GAME DEVELOPMENT', desc: 'Crafting immersive interactive experiences and logic.' },
  { id: '05', name: 'GSAP & FRAMER MOTION', desc: 'Cinematic web animations and sophisticated micro-interactions.' },
  { id: '06', name: 'TAILWIND CSS', desc: 'Rapid, heavily-customizable modern styling systems.' }
];

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray('.skill-row');
      const lines = gsap.utils.toArray('.skill-line');

      rows.forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });

        gsap.from(lines[i], {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
          width: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.2
        });
      });
      
      // Simple parallax for section number
      gsap.to('.skills-ghost', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: 100
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="relative w-full py-32 bg-black border-t border-white/10 overflow-hidden">
      
      {/* Ghost Background Number */}
      <div className="absolute right-[-5%] top-1/4 select-none pointer-events-none skills-ghost">
        <h2 className="text-[30vw] font-bold text-white/[0.03] uppercase leading-none">
          02
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8">
          {skills.map((skill, index) => (
            <div key={skill.id} className="skill-row group flex flex-col cursor-crosshair">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8">
                <div className="flex items-center gap-8 md:gap-16">
                  {/* The large dim number transitions to gradient on hover via CSS group-hover */}
                  <span className="text-4xl md:text-6xl font-bold text-white/10 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-pink-500">
                    {skill.id}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <div className="mt-4 md:mt-0 md:w-1/3 text-right">
                  <p className="text-white/50 text-lg group-hover:text-white/80 transition-colors duration-300">
                    {skill.desc}
                  </p>
                </div>
              </div>
              
              {/* Divider line */}
              <div className="skill-line h-[1px] bg-white/10 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
