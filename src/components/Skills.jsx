import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  { id: '01', name: 'REACT & REACT NATIVE', desc: 'Building scalable, interactive UIs & cross-platform apps.' },
  { id: '02', name: 'NODE.JS & EXPRESS', desc: 'Connecting robust backends and RESTful API ecosystems.' },
  { id: '03', name: 'PYTHON & AI/ML', desc: 'Computer Vision, Deep Learning, and intelligent automations.' },
  { id: '04', name: 'GAME DEVELOPMENT', desc: 'Crafting immersive interactive experiences and logic.' },
  { id: '05', name: 'GSAP & INTERSECTION OBSERVER', desc: 'Cinematic web animations and sophisticated micro-interactions.' },
  { id: '06', name: 'TAILWIND CSS & DESIGN', desc: 'Rapid, heavily-customizable modern styling systems.' }
];

function SkillRow({ skill, index }) {
  const ref = useScrollReveal();
  
  return (
    <div ref={ref} className="reveal-target group flex flex-col cursor-crosshair">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between py-8 relative">
        <div className="flex items-center gap-8 md:gap-12">
          {/* Big dim number with accent hover */}
          <span className="text-8xl md:text-9xl font-bold text-[rgba(255,255,255,0.07)] transition-colors duration-500 group-hover:text-[#c8f04a] leading-none">
            {skill.id}
          </span>
          <h3 className="text-xl md:text-3xl font-bold tracking-wider uppercase text-white/90 transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center gap-6">
          <p className="text-white/50 text-sm md:text-base transition-colors duration-300 max-w-sm text-left md:text-right">
            {skill.desc}
          </p>
          
          {/* Animated Arrow */}
          <div className="hidden md:flex text-2xl font-bold text-[#c8f04a] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
            →
          </div>
        </div>
      </div>
      
      {/* Expanding line via internal CSS mapped to .revealed parent */}
      <div className="h-[1px] bg-white/10 w-full relative">
         <div className="absolute top-0 left-0 h-full bg-white/30 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] skill-divider" style={{ width: '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();

  return (
    <section id="skills" className="relative w-full py-32 bg-transparent border-t border-white/10 overflow-hidden">
      
      <style>{`
        .revealed .skill-divider { width: 100% !important; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col">
        
        {/* Header Block */}
        <div ref={headerRef} className="reveal-target flex flex-col items-start mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded border border-[#c8f04a]/40 mb-6">
            <span className="text-xs font-semibold tracking-widest text-[#c8f04a]">WHAT I DO</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            MY SKILLS
          </h2>
        </div>

        <div className="flex flex-col">
          {skills.map((skill, index) => (
            <SkillRow key={skill.id} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
