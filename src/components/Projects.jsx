import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const projects = [
  {
    id: '01',
    object: 'Object 01',
    name: 'Driver Drowsiness Detection System',
    cover: '/cover-drowsiness.png',
    context: 'An AI-powered real-time safety system built with computer vision and deep learning. Designed to integrate with hardware setups and detect driver fatigue states before critical incident points.',
    result: 'A robust detection pipeline achieving high-accuracy alerting using CNN-based eye-state classification. Deployed with a hardware integration layer for real-world applicability in road safety scenarios.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Hardware', 'OpenCV'],
    link: '#',
  },
  {
    id: '02',
    object: 'Object 02',
    name: 'PostPulse',
    cover: '/cover-postpulse.png',
    context: 'An AI-powered Instagram Reel analyzer — a full-stack web application giving content creators actionable intelligence derived from their short-form video performance.',
    result: 'Deployed across Vercel and Railway with a React frontend and Node.js backend, feeding creator insights through a clean analytical interface. Reduces guesswork in content strategy.',
    tags: ['React', 'Node.js', 'AI / ML', 'Vercel', 'Railway', 'REST API'],
    link: '#',
  },
];

function BrutalistProject({ project, index }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const isEven = index % 2 === 0;

  return (
    <article
      ref={containerRef}
      className="relative w-full border-t border-ash min-h-screen py-32"
    >
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${isEven ? '' : 'dir-rtl'}`}>
        
        {/* Main Cover Block */}
        <div className={`md:col-span-7 relative ${!isEven ? 'dir-ltr' : ''}`}>
          <Reveal>
            <div className="section-label mb-8">{project.object}</div>
          </Reveal>
          
          <div className="overflow-hidden project-cover aspect-[4/5] object-cover mb-8 md:mb-0 relative">
            <motion.img
              style={{ y, scale: 1.15 }}
              src={project.cover}
              alt={project.name}
              className="absolute w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </div>

        {/* Text Area overlaps on desktop */}
        <div className={`md:col-span-5 flex flex-col justify-center z-10 ${!isEven ? 'dir-ltr' : ''}`}>
          <Reveal delay={0.2}>
            <h3 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-black text-white leading-[0.95] tracking-tighter uppercase break-words mb-12 mix-blend-difference">
              {project.name}
            </h3>
          </Reveal>
          
          <div className="flex flex-col gap-12 bg-charcoal p-8 border border-ash brutalist-block">
            <div>
              <Reveal delay={0.3}>
                <div className="section-label mb-4">// Context</div>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="font-sans text-sm text-silver leading-relaxed font-light">
                  {project.context}
                </p>
              </Reveal>
            </div>
            
            <div>
              <Reveal delay={0.4}>
                <div className="section-label mb-4">// Result</div>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="font-sans text-sm text-silver leading-relaxed font-light">
                  {project.result}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-ash">
              <div className="flex flex-wrap gap-2 flex-1">
                {project.tags.map((tag, i) => (
                  <Reveal key={tag} delay={0.5 + (i * 0.05)}>
                    <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-stone-400 border border-ash px-3 py-1">
                      {tag}
                    </span>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.7}>
                <a
                  href={project.link}
                  className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-bone no-underline border-b border-ash pb-1 hover:text-white hover:border-silver transition-colors"
                >
                  View Study&nbsp;→
                </a>
              </Reveal>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-[clamp(1.5rem,6vw,5rem)] border-t border-ash py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-4 mb-32">
          <div>
            <Reveal>
              <div className="section-label mb-5">// Origin Objects</div>
            </Reveal>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-black text-white tracking-tight uppercase leading-[1.1]">
              <Reveal delay={0.1}>Selected</Reveal>
              <Reveal delay={0.2}>Works</Reveal>
            </h2>
          </div>
          <Reveal delay={0.3}>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-stone-500 uppercase pb-4">
              {projects.length}&nbsp;Case Studies
            </div>
          </Reveal>
        </div>

        {/* Project cards */}
        <div>
          {projects.map((project, i) => (
            <BrutalistProject key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
