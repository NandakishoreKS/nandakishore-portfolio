import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

const projectsList = [
  {
    id: '01',
    name: 'Driver Drowsiness Detection System',
    desc: 'AI-powered real-time drowsiness detector with a hardware setup utilizing computer vision and deep learning to enhance road safety.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Hardware Integration'],
    link: '#'
  },
  {
    id: '02',
    name: 'PostPulse',
    desc: 'AI Instagram Reel Analyzer, a web app deployed on Vercel and Railway that analyzes Instagram reels using AI to provide actionable insights for creators.',
    tags: ['React', 'Node.js', 'AI/ML', 'Vercel', 'Railway'],
    link: '#'
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(projectsList[0].id);

  return (
    <section id="projects" className="py-32 bg-transparent min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 uppercase tracking-tighter"
        >
          Selected <span className="text-violet-500">Projects</span>
        </motion.h2>

        <div className="space-y-8">
          {projectsList.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-violet-500/50 group ${isExpanded ? 'bg-white/[0.03]' : 'bg-transparent hover:bg-white/[0.02]'}`}
              >
                {/* Gradient left border accent on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-8 pl-4">
                    <span className="text-2xl font-bold text-white/20 tracking-wider font-mono">{project.id}</span>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">{project.name}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400 group-hover:text-white transition-colors" size={32} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 md:px-10 pb-10 pt-2 pl-4 md:pl-24">
                        <p className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl">
                          {project.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-12">
                          {project.tags.map(tag => (
                            <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-gray-300 uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a 
                          href={project.link} 
                          className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
                        >
                          View Project
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
