import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const stat1 = useScrollReveal({ threshold: 0.1 });
  const stat2 = useScrollReveal({ threshold: 0.1 });
  const stat3 = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center py-32 bg-transparent border-t border-white/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row relative">
        
        {/* Left Column */}
        <div className="md:w-1/3 relative flex items-start mb-20 md:mb-0">
          
          {/* Rotated text */}
          <div className="absolute left-0 top-12 md:-left-8 origin-top-left -rotate-90 text-[#c8f04a] text-xs font-bold tracking-[0.3em] uppercase">
            ABOUT ME
          </div>
          
          {/* Huge dimension 01 */}
          <div className="absolute top-0 left-8 md:top-[-2rem] md:left-12 pointer-events-none">
            <span 
              className="font-bold leading-none text-white/[0.08]"
              style={{ fontSize: 'clamp(6rem, 18vw, 20rem)' }}
            >
              01
            </span>
          </div>

        </div>

        {/* Right Column */}
        <div className="md:w-2/3 flex flex-col pt-12 md:pt-4 z-10 relative">
          
          <p 
            className="font-light text-white/90"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', lineHeight: '1.5' }}
          >
            I'm a B.Tech student with a profound passion for building intelligent systems and beautiful interfaces. My expertise spans across artificial intelligence, machine learning, and full-stack web. I believe in combining robust logic with stunning aesthetics to create unforgettable digital experiences.
          </p>

          {/* Stats Boxes */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div 
              ref={stat1} 
              className="reveal-target delay-100 group border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#c8f04a] hover:shadow-[0_0_20px_rgba(200,240,74,0.1)] relative overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <h4 className="text-4xl font-bold mb-2 group-hover:text-[#c8f04a] transition-colors">2+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">Projects</p>
            </div>

            <div 
              ref={stat2} 
              className="reveal-target delay-200 group border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#c8f04a] hover:shadow-[0_0_20px_rgba(200,240,74,0.1)] relative overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <h4 className="text-4xl font-bold mb-2 group-hover:text-[#c8f04a] transition-colors">3+</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">Skills</p>
            </div>

            <div 
              ref={stat3} 
              className="reveal-target delay-300 group border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:border-[#c8f04a] hover:shadow-[0_0_20px_rgba(200,240,74,0.1)] relative overflow-hidden bg-black/20 backdrop-blur-sm"
            >
              <h4 className="text-4xl font-bold mb-2 group-hover:text-[#c8f04a] transition-colors">-</h4>
              <p className="text-xs uppercase tracking-widest text-white/40">B.Tech Student</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
