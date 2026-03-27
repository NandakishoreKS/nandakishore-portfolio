import { motion } from 'framer-motion';

const skillsList = [
  { id: '01', name: 'React & React Native', desc: 'Building dynamic and responsive user interfaces for web and mobile platforms.' },
  { id: '02', name: 'Node.js & Express', desc: 'Developing robust and scalable backend services and RESTful APIs.' },
  { id: '03', name: 'Python & AI/ML', desc: 'Creating intelligent systems, computer vision models, and data-driven solutions.' },
  { id: '04', name: 'Game Development', desc: 'Crafting interactive experiences and engaging mechanics.' },
  { id: '05', name: 'Full Stack Development', desc: 'End-to-end application architecture from database to deployment.' },
  { id: '06', name: 'App Development', desc: 'Creating native and cross-platform mobile applications that users love.' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-transparent min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 uppercase tracking-tighter"
        >
          My <span 
               className="text-transparent" 
               style={{ WebkitTextStroke: '2px white' }}>
               Skills
             </span>
        </motion.h2>

        <div className="flex flex-col border-t border-white/10">
          {skillsList.map((skill, index) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-16 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-2xl relative overflow-hidden"
            >
              <div className="text-8xl md:text-9xl font-black text-white/10 transition-colors pointer-events-none group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-pink-500 duration-500">
                {skill.id}
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-2xl font-bold mb-4 uppercase text-white tracking-widest">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
