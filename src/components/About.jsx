import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const bioLines = [
    "I'm a B.Tech student with a profound",
    "passion for building intelligent systems",
    "and beautiful interfaces. My expertise",
    "spans across artificial intelligence,",
    "machine learning, and full-stack web.",
    "I believe in combining robust logic",
    "with stunning aesthetics to create",
    "unforgettable digital experiences."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bio-line', {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          ease: 'power3.out',
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
      });

      // Simple parallax for the background ABOUT text
      gsap.to('.about-ghost', {
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
    <section id="about" ref={containerRef} className="relative w-full min-h-screen flex items-center overflow-hidden py-32 bg-black border-t border-white/10">
      
      {/* Ghost Background Text */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none about-ghost">
        <h2 className="text-[25vw] font-bold text-outline opacity-10 uppercase leading-none">
          ABOUT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Section Indicator */}
        <div className="mb-12 md:mb-0 md:w-1/3">
          <span className="text-8xl font-bold text-white/10">01</span>
        </div>

        {/* Bio Content */}
        <div ref={textRef} className="md:w-2/3 flex flex-col items-start space-y-2">
          {bioLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <p className="bio-line text-2xl md:text-5xl font-medium tracking-tight text-white/90">
                {line}
              </p>
            </div>
          ))}
          <div className="pt-12 mt-8 overflow-hidden w-full">
             <div className="bio-line h-px w-full bg-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
}
