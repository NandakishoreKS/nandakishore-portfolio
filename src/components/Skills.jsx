import { motion } from 'framer-motion';

const skills = [
  { id: '01', name: 'REACT & REACT NATIVE', desc: 'Building dynamic web and mobile UIs' },
  { id: '02', name: 'NODE.JS & EXPRESS', desc: 'Scalable backend APIs and services' },
  { id: '03', name: 'PYTHON & AI/ML', desc: 'Computer vision, deep learning models' },
  { id: '04', name: 'GAME DEVELOPMENT', desc: 'Interactive experiences and mechanics' },
  { id: '05', name: 'FULL STACK DEV', desc: 'End-to-end product development' },
  { id: '06', name: 'APP DEVELOPMENT', desc: 'Native and cross-platform mobile apps' }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#f5f5f5] pt-32 pb-48 px-6 text-gray-900 overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Ghost Heading */}
        <h2 
          className="font-extrabold uppercase text-transparent leading-none mb-16"
          style={{ 
            fontSize: 'clamp(4rem, 12vw, 10rem)', 
            WebkitTextStroke: '2px rgba(0,0,0,0.12)' 
          }}
        >
          SKILLS
        </h2>

        {/* Vertical List */}
        <div className="flex flex-col w-full border-t border-gray-200">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-gray-200 gap-6 md:gap-16"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Number */}
              <div className="text-7xl font-black text-gray-200 flex-shrink-0">
                {skill.id}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
                  {skill.name}
                </h3>
                <p className="text-base text-gray-500 font-light">
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
