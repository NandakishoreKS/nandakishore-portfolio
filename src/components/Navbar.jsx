import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center gap-12">
        {['ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
