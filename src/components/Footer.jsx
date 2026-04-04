export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-6 md:px-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        <div className="text-sm font-bold tracking-widest text-white uppercase text-center md:text-left">
          NANDAKISHORE KS
        </div>
        
        <div className="text-xs text-white/30 uppercase text-center">
          © 2026
        </div>
        
        <div className="flex gap-6 text-xs tracking-widest text-white/40 justify-center md:justify-end">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>

      </div>
    </footer>
  );
}
