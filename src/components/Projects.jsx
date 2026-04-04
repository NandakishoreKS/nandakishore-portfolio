import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: 'DRIVER DROWSINESS DETECTION',
    desc: 'AI-powered real-time drowsiness detector with a hardware setup using computer vision and deep learning.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'Hardware'],
    link: '#'
  },
  {
    id: '02',
    name: 'POSTPULSE',
    desc: 'AI Instagram Reel Analyzer, a web app deployed on Vercel and Railway that analyzes Instagram reels using AI.',
    tags: ['React', 'Node.js', 'AI/ML', 'Vercel', 'Railway'],
    link: '#'
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="relative w-full py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">Projects</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full mt-6 mx-auto md:mx-0" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div 
                key={project.id}
                className="flex flex-col border border-white/20 rounded-2xl bg-white/[0.02] overflow-hidden transition-colors hover:border-white/40"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Accordion Head */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-10 cursor-pointer text-left"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-3xl md:text-5xl font-extrabold text-[#c8f04a] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">{project.id}</span>
                    <h3 className="text-xl md:text-4xl font-bold uppercase tracking-tight">{project.name}</h3>
                  </div>
                  <div className="text-white/50 bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors shrink-0 ml-4">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-10 pt-0 md:pt-0 max-w-3xl ml-0 md:ml-[5.5rem]">
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
                          {project.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mb-10">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full border border-white/20 text-xs font-semibold tracking-widest uppercase text-white/80 bg-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a 
                          href={project.link} 
                          className="inline-block px-8 py-3 rounded-full border border-white/30 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                        >
                          View Project →
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
