import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: "01",
    title: "DRIVER DROWSINESS",
    subtitle: "DETECTION SYSTEM",
    desc: "AI-powered real-time drowsiness detector utilizing computer vision and deep learning models. Complete with custom hardware setup for immediate driver alerting.",
    tags: ["PYTHON", "OPENCV", "DEEP LEARNING", "HARDWARE"]
  },
  {
    id: "02",
    title: "POSTPULSE",
    subtitle: "AI ANALYZER",
    desc: "AI Instagram Reel Analyzer deployed globally. Analyzes engagement metrics, retention graphs, and recommends content restructuring for optimal virality.",
    tags: ["REACT", "NEXT.JS", "AI MODELS", "VERCEL/RAILWAY"]
  }
];

function ProjectRow({ project }) {
  const ref = useScrollReveal();
  
  return (
    <div 
      ref={ref} 
      className="reveal-target group flex flex-col py-16 border-t border-white/20 transition-all duration-500 hover:border-[#c8f04a] relative"
    >
      {/* Subtle left glow on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#c8f04a]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10 w-full mb-8">
        
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 w-full">
          <span className="text-2xl font-bold text-[#c8f04a] leading-none shrink-0">{project.id}</span>
          
          <div className="flex flex-col items-start w-full gap-8 md:gap-0 md:flex-row md:justify-between border-b md:border-b-0 border-white/10 pb-8 md:pb-0">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] group-hover:text-[#c8f04a] transition-colors duration-500 max-w-lg">
              {project.title} <br />
              <span className="text-white/60 group-hover:text-[#c8f04a]/80 transition-colors duration-500">
                {project.subtitle}
              </span>
            </h3>
            
            {/* View Project Button right side */}
            <div className="mt-4 md:mt-2 shrink-0">
              <a href="#" className="inline-block px-8 py-3 rounded-full border border-white text-sm font-semibold tracking-wide uppercase transition-all duration-300 group-hover:bg-[#c8f04a] group-hover:border-[#c8f04a] group-hover:text-black">
                VIEW PROJECT →
              </a>
            </div>
          </div>
        </div>

      </div>
      
      <div className="flex flex-col md:flex-row gap-8 justify-between relative z-10 sm:pl-[4.5rem]">
        {/* Description */}
        <p className="font-light text-white/50 text-xl leading-relaxed max-w-2xl">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-end justify-start md:justify-end gap-3 max-w-md">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-5 py-2 rounded-full border border-white/15 text-xs font-semibold tracking-wider text-white bg-transparent">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className="relative w-full py-32 bg-transparent border-t border-white/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div ref={headerRef} className="reveal-target mb-20 flex flex-col items-start hidden sm:flex">
          <div className="inline-flex items-center px-4 py-2 rounded border border-[#c8f04a]/40 mb-6 font-semibold tracking-widest text-xs text-[#c8f04a]">
            SELECTED WORK
          </div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-0 w-full pt-8">
          {projects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
