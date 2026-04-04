import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        
        <a href="#" className="font-extrabold text-xl tracking-tighter text-white">
          N<span className="text-[#EC4899]">.</span>KS
        </a>
        
        <div className="hidden md:flex gap-10">
          {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium tracking-widest text-white/70 relative group hover:text-white transition-colors py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#EC4899] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
