import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Origin',      href: '#about'    },
  { name: 'Disciplines', href: '#skills'   },
  { name: 'Objects',     href: '#projects' },
  { name: 'Admission',   href: '#contact'  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  exit:   { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants = {
  hidden:  { y: 60,  opacity: 0 },
  visible: { y: 0,   opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit:    { y: -30, opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <>
      {/* Fixed top bar */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.75rem 3rem',
          mixBlendMode: 'normal',
        }}
      >
        {/* Coordinates / Status */}
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--stone)', textTransform: 'uppercase' }}>
          NKS&nbsp;/&nbsp;Portfolio&nbsp;/&nbsp;2026
        </div>

        {/* Menu trigger */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          style={{
            background: 'none', border: 'none', padding: '0.5rem 0',
            fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.25em',
            color: 'var(--silver)', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '0.6rem',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--silver)'}
        >
          <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} aria-hidden>
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'currentColor', transition: 'width 0.3s ease' }} />
            <span style={{ display: 'block', width: '14px', height: '1px', background: 'currentColor', transition: 'width 0.3s ease' }} />
          </span>
          Menu
        </button>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed', inset: 0, zIndex: 250,
              background: 'var(--charcoal)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', padding: 'clamp(2rem, 8vw, 8rem)',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: '1.75rem', right: '3rem',
                background: 'none', border: 'none',
                fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.25em',
                color: 'var(--stone)', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: '0.6rem',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--stone)'}
            >
              <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>✕</span>
              Close
            </button>

            {/* Index label */}
            <div className="section-label" style={{ marginBottom: '3rem' }}>
              Navigation Index
            </div>

            {/* Links */}
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="menu-nav-link"
                    style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}
                  >
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--ash)', letterSpacing: '0.15em', minWidth: '2rem' }}>
                      0{i + 1}
                    </span>
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom social row */}
            <div style={{
              position: 'absolute', bottom: '2.5rem', left: 'clamp(2rem, 8vw, 8rem)',
              display: 'flex', gap: '2.5rem',
            }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/NandakishoreKS' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Email',    href: 'mailto:nandakishoreks21@gmail.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--mono)', fontSize: '0.65rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--stone)', textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bone)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--stone)'}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
