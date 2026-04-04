import { motion } from 'framer-motion';

const projects = [
  {
    id: "01",
    name: "DRIVER DROWSINESS DETECTION",
    desc: "Real-time AI drowsiness detection system with custom hardware setup. Uses computer vision and deep learning to alert drivers instantly.",
    tags: ["PYTHON", "OPENCV", "DEEP LEARNING", "HARDWARE"],
    images: [
      "from-violet-700 to-blue-500",
      "from-blue-500 to-cyan-400"
    ]
  },
  {
    id: "02",
    name: "POSTPULSE",
    desc: "AI-powered Instagram Reel Analyzer. Analyzes engagement, retention graphs, and recommends content restructuring for maximum virality. Live on Vercel + Railway.",
    tags: ["REACT", "NODE.JS", "AI/ML", "VERCEL", "RAILWAY"],
    images: [
      "from-pink-600 to-orange-400",
      "from-purple-600 to-pink-500"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 px-6 md:px-16 lg:px-24">
      
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 
            className="font-extrabold uppercase text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            SELECTED PROJECTS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-pink-500" />
        </motion.div>

        <div className="flex flex-col w-full border-b border-white/10">
          
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="w-full flex flex-col py-10 border-t border-white/[0.12]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              
              {/* Row 1: Header + Button */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
                <div className="flex flex-col">
                  <span className="text-sm text-white/40 mb-1 font-bold">{project.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>
                
                <a href="#" className="px-6 py-2 rounded-full border border-white/30 text-sm font-semibold tracking-wide text-white/80 hover:bg-white hover:text-black transition-all shrink-0">
                  VIEW PROJECT →
                </a>
              </div>

              {/* Row 2: Content (Description/Tags + Images) */}
              <div className="mt-6 flex flex-col lg:flex-row gap-10 items-start">
                
                {/* Left: Description & Tags */}
                <div className="flex-1 flex flex-col">
                  <p className="text-base text-white/50 font-light leading-relaxed max-w-lg">
                    {project.desc}
                  </p>
                  <div className="mt-6 flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-white/15 text-xs tracking-widest text-white/50 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Preview Images */}
                <div className="flex gap-4 shrink-0">
                  {project.images.map((gradientClass, i) => (
                    <div 
                      key={i} 
                      className={`w-32 h-24 md:w-48 md:h-32 rounded-xl bg-gradient-to-br ${gradientClass} opacity-90 hover:opacity-100 transition-opacity`}
                    />
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
