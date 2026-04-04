import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 flex flex-col overflow-hidden">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        
        <div className="font-bold text-2xl tracking-tighter">
          NANDAKISHORE KS
        </div>
        
        <div className="text-white/40 text-sm font-semibold tracking-widest">
          © 2026
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>
        
      </div>

      {/* Auto-scrolling geometric shapes decorative art */}
      <div className="w-full h-16 bg-white/[0.02] border-t border-white/5 flex items-center overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 items-center px-6"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {/* Duplicate block twice for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-purple-500" />
              <div className="w-8 h-8 rounded bg-green-500 rotate-12" />
              <div className="w-10 h-10 rounded-full bg-orange-500" />
              <div className="w-6 h-6 rounded-md bg-pink-500 rotate-45" />
              <div className="w-12 h-12 rounded-full border-4 border-white opacity-20" />
              <div className="w-8 h-8 rounded-full bg-purple-400" />
              <div className="w-10 h-6 bg-cyan-400 rounded-full" />
              <div className="w-8 h-8 rounded-[4px] border-2 border-green-400 rotate-12 opacity-50" />
              <div className="w-8 h-8 rounded-full bg-orange-400" />
              <div className="w-6 h-6 rounded-sm bg-pink-400 rotate-45" />
              <div className="w-12 h-12 rounded-full border border-dashed border-white opacity-30" />
              <div className="w-8 h-8 rounded bg-white" />
            </div>
          ))}
        </motion.div>
      </div>

    </footer>
  );
}
