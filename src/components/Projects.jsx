import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "DRIVER DROWSINESS DETECTION",
    desc: "AI-powered real-time drowsiness detector utilizing computer vision and deep learning models. Complete with custom hardware setup for immediate driver alerting.",
    tags: ["PYTHON", "OPENCV", "DEEP LEARNING", "hardware"]
  },
  {
    id: "02",
    title: "POSTPULSE",
    desc: "AI Instagram Reel Analyzer deployed globally. Analyzes engagement metrics, retention graphs, and recommends content restructuring for optimal virality.",
    tags: ["REACT", "NEXT.JS", "AI MODELS", "VERCEL/RAILWAY"]
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const titleTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Pin the section title while cards scroll
      ScrollTrigger.create({
        trigger: titleContainerRef.current,
        start: 'top 20%',
        endTrigger: containerRef.current,
        end: 'bottom 80%',
        pin: titleTextRef.current,
        pinSpacing: false,
      });

      // Animate project cards in
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });

      // Parallax for ghost number
      gsap.to('.projects-ghost', {
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
    <section id="projects" ref={containerRef} className="relative w-full min-h-[150vh] py-32 bg-black border-t border-white/10 overflow-hidden">
      
      {/* Ghost Background Number */}
      <div className="absolute left-[-2%] top-[10%] select-none pointer-events-none projects-ghost">
        <h2 className="text-[30vw] font-bold text-white/[0.03] uppercase leading-none">
          03
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Pinned Title Area */}
        <div ref={titleContainerRef} className="lg:w-1/3 min-h-screen relative hidden lg:block">
          <div ref={titleTextRef} className="pt-12">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
              Selected <br/>
              <span className="text-white/40">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mt-8" />
          </div>
        </div>

        {/* Mobile Title (not pinned) */}
        <div className="lg:hidden mb-16">
          <h2 className="text-5xl font-bold tracking-tighter uppercase">
            Selected <span className="text-white/40">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-pink-600 mt-6" />
        </div>

        {/* Project Cards */}
        <div className="lg:w-2/3 flex flex-col gap-24 pt-12 pb-32">
          {projects.map((p) => (
            <div 
              key={p.id} 
              className="project-card flex flex-col p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:border-violet-500/50"
              style={{ boxShadow: '0 0 0 rgba(124,58,237,0)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(124,58,237,0)';
              }}
            >
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl font-bold text-white/20">{p.id}</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">{p.title}</h3>
              </div>
              
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {p.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-widest text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div>
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
                  VIEW PROJECT <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
