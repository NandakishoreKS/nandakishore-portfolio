import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black pt-32 pb-16 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      
      {/* Absolute Decorative Floating Emojis Locked within the component */}
      <motion.div 
        className="absolute left-4 top-[50%] text-5xl select-none hidden md:block z-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ❤️
      </motion.div>

      <motion.div 
        className="absolute right-4 top-[33%] text-5xl select-none hidden md:block z-0"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🌸
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Animated Infinite Image Strip */}
        <div className="w-full overflow-hidden flex py-4">
          <motion.div 
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-4">
                <div className="w-44 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 shrink-0" />
                <div className="w-44 h-32 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shrink-0" />
                <div className="w-44 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shrink-0" />
                <div className="w-44 h-32 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Central Content */}
        <motion.div 
          className="w-full flex justify-center mt-8 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-extrabold text-white text-center"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            ABOUT ME
          </h2>
        </motion.div>

        <motion.p 
          className="max-w-2xl mx-auto text-center text-lg font-light text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm a B.Tech student with a profound passion for building intelligent systems and beautiful interfaces. 
          My expertise spans AI/ML, computer vision, and full-stack web development. 
          I believe in combining robust logic with stunning aesthetics.
        </motion.p>

        <motion.a 
          href="#contact"
          className="mt-8 mx-auto block w-fit px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          CONTACT ME →
        </motion.a>

        {/* White Ghost Transition Banner */}
        <div className="w-full mt-24 md:mt-32">
          <div className="w-full bg-[rgba(255,255,255,0.95)] rounded-2xl py-8 flex justify-center items-center overflow-hidden">
            <h2 
              className="font-extrabold uppercase text-transparent leading-none"
              style={{ 
                WebkitTextStroke: '2px rgba(0,0,0,0.15)',
                fontSize: 'clamp(3rem, 10vw, 8rem)'
              }}
            >
              SKILLS
            </h2>
          </div>
        </div>

      </div>

    </section>
  );
}
