import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    name: "DRIVER DROWSINESS DETECTION",
    desc: "Real-time AI drowsiness detection system with custom hardware setup. Uses computer vision and deep learning to alert drivers instantly.",
    tags: ["PYTHON", "OPENCV", "DEEP LEARNING", "HARDWARE"],
    gradients: [
      "from-blue-600 to-cyan-400",
      "from-violet-600 to-blue-400"
    ]
  },
  {
    id: "02",
    name: "POSTPULSE",
    desc: "AI-powered Instagram Reel Analyzer. Analyzes engagement, retention graphs, and recommends content restructuring for maximum virality. Live on Vercel + Railway.",
    tags: ["REACT", "NODE.JS", "AI/ML", "VERCEL", "RAILWAY"],
    gradients: [
      "from-pink-500 to-orange-400",
      "from-purple-500 to-pink-400"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-32 px-6">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Sticky Left Heading */}
        <div className="lg:w-1/3 relative">
          <div className="lg:sticky lg:top-32">
            <h2 
              className="font-extrabold uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              PROJECTS
            </h2>
            <div className="h-2 w-24 bg-gradient-to-r from-violet-600 to-pink-500 mt-6 md:mt-10 rounded-full" />
          </div>
        </div>

        {/* Right Project Cards */}
        <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="w-full flex flex-col rounded-2xl p-6 md:p-10 border border-white/15 bg-white/[0.03] transition-all duration-400 ease-in-out hover:border-[rgba(124,58,237,0.6)] hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              
              {/* Card Header (Number + Title & Button) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold text-white/30 leading-none">{project.id}</span>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight max-w-sm leading-none">
                    {project.name}
                  </h3>
                </div>

                <a href="#" className="inline-block px-5 py-2.5 rounded-full border border-white text-white font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors hover:bg-white hover:text-black mt-4 md:mt-0 text-center">
                  LIVE PROJECT →
                </a>

              </div>

              {/* Description */}
              <p className="text-white/60 font-light text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-white/20 text-xs tracking-widest uppercase text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Preview Images Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gradients.map((grad, i) => (
                  <div key={i} className={`w-full h-40 md:h-56 rounded-xl bg-gradient-to-br ${grad} opacity-80 transition-opacity hover:opacity-100`} />
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
