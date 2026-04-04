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
    <section id="skills" className="relative w-full bg-[#f5f5f5] py-24 px-6 md:px-16 lg:px-24">
      
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Ghost Heading */}
        <h2 
          className="font-extrabold uppercase text-transparent text-left mb-16"
          style={{ 
            fontSize: 'clamp(4rem, 12vw, 10rem)', 
            WebkitTextStroke: '2px rgba(0,0,0,0.1)' 
          }}
        >
          SKILLS
        </h2>

        <div className="flex flex-col w-full border-t border-black/10">
          
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="group flex flex-col md:flex-row items-start md:items-center py-8 border-b border-black/10 gap-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              
              <div className="flex items-center gap-8 w-full md:w-auto flex-1">
                <span className="text-7xl font-black text-gray-200 w-24 md:w-32 shrink-0 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#EC4899]">
                  {skill.id}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-wide text-gray-900 flex-1">
                  {skill.name}
                </h3>
              </div>

              <div className="hidden md:block max-w-xs text-right">
                <p className="text-base text-gray-400 font-light">
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
