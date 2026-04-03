import { Reveal } from './Reveal';

const projects = [
  {
    id: '01',
    title: 'Driver Drowsiness Detection System',
    desc: 'AI-powered real-time drowsiness detector with a hardware setup. Captures facial landmarks using computer vision and calculates eye closure rate via deep learning to alert the driver.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Hardware'],
    link: '#'
  },
  {
    id: '02',
    title: 'PostPulse',
    desc: 'AI Instagram Reel Analyzer. A web application deployed on Vercel and Railway that analyzes short-form video content to provide content creators with actionable intelligence.',
    tags: ['React', 'Node.js', 'AI/ML', 'Vercel', 'Railway'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="ghost-title text-5xl md:text-7xl font-bold mb-20 text-center tracking-tight">
            PROJECTS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <div className="group relative border border-white/10 bg-white/5 rounded-2xl p-8 md:p-12 transition-all hover:border-violet-500/50 overflow-hidden">
                {/* Left gradient accent that appears on hover */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  
                  <div className="flex-1">
                    <span className="text-sm font-bold text-violet-500 mb-2 block">PROJECT {project.id}</span>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300 font-medium tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:ml-auto">
                    <a href={project.link} className="inline-flex items-center justify-center border border-white/30 rounded-full px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                      View Project ↗
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
