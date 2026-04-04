import { motion } from 'framer-motion';

const skills = [
  { id: '01', name: 'REACT & REACT NATIVE', desc: 'Building dynamic web and mobile UIs' },
  { id: '02', name: 'NODE.JS & EXPRESS', desc: 'Scalable backend APIs and services' },
  { id: '03', name: 'PYTHON & AI/ML', desc: 'Computer vision, deep learning models' },
  { id: '04', name: 'GAME DEVELOPMENT', desc: 'Interactive experiences and mechanics' },
  { id: '05', name: 'FULL STACK DEV', desc: 'End-to-end product development' },
  { id: '06', name: 'APP DEVELOPMENT', desc: 'Native and cross-platform mobile apps' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter">My Skills</h2>
          <div className="w-24 h-2 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-white/10 gap-8 md:gap-16 transition-colors hover:bg-white/[0.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-7xl font-extrabold text-white/10 group-hover:text-pink-500 transition-colors duration-500 flex-shrink-0">
                {skill.id}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide group-hover:text-violet-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-lg md:text-xl text-white/50 font-light">
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
