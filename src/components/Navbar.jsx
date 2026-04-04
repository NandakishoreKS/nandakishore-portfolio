import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-md border-b border-white/[0.08]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter" onClick={(e) => handleNavClick(e, 'hero')}>
          N<span className="text-[#c8f04a]">.</span>KS
        </a>
        
        <div className="hidden md:flex gap-8">
          {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-sm font-medium tracking-widest relative group overflow-hidden py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c8f04a] translate-y-[2px] transition-transform duration-300 group-hover:translate-y-0 text-outline"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
