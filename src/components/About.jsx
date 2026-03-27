import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-pink-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl md:text-5xl font-extrabold mb-12 uppercase tracking-tighter"
          >
            About <span className="text-fuchsia-500">Me</span>
          </motion.h2>

          <motion.div variants={textVariants} className="prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300 font-light leading-relaxed space-y-8">
            <p>
              I'm Nandakishore KS, a passionate B.Tech Student, AI/ML Engineer, and Full Stack Developer. 
              My journey is driven by a profound curiosity for how intelligent systems can seamlessly integrate into beautiful, dynamic user interfaces.
            </p>
            <p>
              Whether I'm architecting sophisticated machine learning models, developing high-performance web applications, or experimenting with game development, I thrive on solving complex problems. I believe in writing clean, scalable code and delivering experiences that truly <span className="text-white font-medium">WOW</span> the user.
            </p>
            <p className="pb-8">
              When I'm not coding, I'm exploring the latest advancements in AI tech and continually refining my craft. Let's build something remarkable together.
            </p>
          </motion.div>

          {/* Floating Emoji Decorations inside the container */}
          <div className="flex justify-around items-center mt-12 pt-12 border-t border-white/10">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="text-4xl"
            >
              🧠
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-4xl"
            >
              🚀
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="text-4xl"
            >
              🎮
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
