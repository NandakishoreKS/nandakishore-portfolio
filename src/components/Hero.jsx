import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-32">
      
      {/* Radial Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600/20 blur-3xl rounded-full w-96 h-96 pointer-events-none"></div>

      {/* Floating Emojis */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[15%] text-5xl md:text-6xl opacity-80 z-0">
        🤖
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[25%] right-[20%] text-5xl md:text-6xl opacity-80 z-0 hidden md:block">
        💻
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[25%] left-[25%] text-5xl md:text-6xl opacity-80 z-0 hidden md:block">
        ⚡
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[30%] right-[15%] text-5xl md:text-6xl opacity-80 z-0">
        🧠
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center flex flex-col items-center">
          
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-6 leading-none">
            HI, I'M <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              NANDAKISHORE
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-2xl mb-12 max-w-3xl font-light tracking-wide">
            AI/ML Engineer & Full Stack Developer | Building intelligent systems & beautiful interfaces
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a href="#contact" className="inline-block bg-gradient-to-r from-violet-600 to-pink-500 rounded-full px-8 py-4 font-semibold text-white tracking-widest uppercase transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              Contact Me
            </a>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
