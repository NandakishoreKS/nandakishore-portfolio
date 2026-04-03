import { Reveal } from './Reveal';

const skills = [
  { name: 'React & React Native', desc: 'Building dynamic, responsive user interfaces and cross-platform mobile apps.' },
  { name: 'Node.js & Express', desc: 'Developing robust, scalable backend services and RESTful APIs.' },
  { name: 'Python & AI/ML', desc: 'Training intelligent models, computer vision pipelines, and deep learning systems.' },
  { name: 'Game Development', desc: 'Crafting interactive experiences and complex game logic.' },
  { name: 'Full Stack Development', desc: 'End-to-end architecture from secure databases to polished frontends.' }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <h2 className="ghost-title text-5xl md:text-7xl font-bold mb-20 text-center tracking-tight">
            CORE SKILLS
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.1}>
              <div className="group flex items-center gap-6 md:gap-12 py-8 border-b border-white/10 transition-colors">
                
                <div className="text-8xl md:text-9xl font-black text-white/10 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 select-none">
                  0{i + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold uppercase text-white mb-2 tracking-wide group-hover:text-gray-200 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 font-medium max-w-2xl leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
