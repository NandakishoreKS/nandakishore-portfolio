import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-16 lg:px-24 py-5 bg-black/60 backdrop-blur-md border-b border-white/10 transition-all">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-white text-lg md:text-xl font-bold tracking-tight uppercase"
      >
        NKS<span className="text-gradient">.</span>
      </button>

      <nav className="flex items-center gap-4 md:gap-10">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="relative text-gray-300 font-medium hover:text-white transition-colors group py-1 text-sm md:text-base"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </nav>
    </header>
  );
}
