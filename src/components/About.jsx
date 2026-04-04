import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 overflow-hidden">
      
      {/* Infinite scrolling image strip */}
      <div className="w-full overflow-hidden mb-32 flex">
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-3"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {/* We duplicate the block to allow smooth looping */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              <div className="w-48 h-36 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 shrink-0" />
              <div className="w-48 h-36 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shrink-0" />
              <div className="w-48 h-36 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shrink-0" />
              <div className="w-48 h-36 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative flex flex-col items-center text-center">
        
        {/* Floating Emojis */}
        <motion.div 
          className="absolute left-[-5%] md:left-[-15%] top-[20%] text-6xl select-none hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          ❤️
        </motion.div>

        <motion.div 
          className="absolute right-[-5%] md:right-[-15%] top-[40%] text-6xl select-none hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          🌸
        </motion.div>

        <motion.div 
          className="absolute right-[10%] md:right-[-5%] top-[-10%] text-5xl select-none hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          🫧
        </motion.div>

        {/* Heading */}
        <h2 
          className="font-extrabold uppercase leading-none mb-12"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          ABOUT ME
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-[600px] mb-16">
          I'm a B.Tech student with a profound passion for building intelligent systems and beautiful interfaces. My expertise spans AI/ML, computer vision, and full-stack web development. I believe in combining robust logic with stunning aesthetics.
        </p>

        {/* CTA Button */}
        <a href="#contact" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold uppercase text-sm tracking-wide hover:scale-105 transition-transform duration-300">
          CONTACT ME →
        </a>

      </div>

      {/* Transition Banner to Skills */}
      <div className="w-full mt-32 px-4 md:px-12">
        <div className="w-full bg-[rgba(255,255,255,0.95)] rounded-2xl py-8 md:py-16 flex items-center justify-center overflow-hidden">
          <h2 
            className="font-extrabold uppercase text-transparent leading-none text-outline"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', 
              WebkitTextStroke: '2px rgba(0,0,0,0.15)' 
            }}
          >
            SKILLS
          </h2>
        </div>
      </div>
      
    </section>
  );
}
