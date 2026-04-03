import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WORDS = ['Intelligent', 'Systems.'];
const WORDS2 = ['Engineering', 'Elegant', 'Interfaces.'];

function SplitWord({ word, delay = 0 }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const lineRef = useRef(null);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 6rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Status line — top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'absolute', top: '2rem', left: 'clamp(1.5rem, 6vw, 5rem)',
          fontFamily: 'var(--mono)', fontSize: '0.6rem',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: '1rem',
        }}
      >
        <span style={{
          display: 'inline-block', width: '6px', height: '6px',
          borderRadius: '50%', background: 'var(--stone)',
          animation: 'pulse-dot 2s ease-in-out infinite',
        }} />
        Nandakishore&nbsp;KS&nbsp;—&nbsp;Systems&nbsp;Online
      </motion.div>

      {/* Main heading */}
      <div style={{ maxWidth: '1100px' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <div
            className="section-label reveal"
            style={{ marginBottom: '2.5rem' }}
          >
            AI/ML Engineer &amp; Full Stack Developer
          </div>
        </div>

        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(3rem, 7.5vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginBottom: '0',
          }}
        >
          <div>
            Architecting
            <br />
            <SplitWord word="Intelligent" delay={0.3} />
            <SplitWord word="Systems." delay={0.45} />
          </div>
          <div style={{ color: 'var(--stone)' }}>
            <SplitWord word="Engineering" delay={0.6} />
            <SplitWord word="Elegant" delay={0.75} />
            <SplitWord word="Interfaces." delay={0.9} />
          </div>
        </h1>
      </div>

      {/* Metadata strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          marginTop: 'clamp(3rem, 6vw, 5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0',
          maxWidth: '720px',
          borderTop: '1px solid var(--ash)',
        }}
      >
        {[
          { label: 'Location',    value: 'Kerala, IN' },
          { label: 'Discipline',  value: 'AI / Full Stack' },
          { label: 'Status',      value: 'Available' },
          { label: 'Year',        value: '2026' },
        ].map((item, i) => (
          <div
            key={item.label}
            style={{
              padding: '1.25rem 1.5rem 1.25rem 0',
              borderRight: i < 3 ? '1px solid var(--ash)' : 'none',
            }}
          >
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '0.55rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--stone)', marginBottom: '0.4rem',
            }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontSize: '0.85rem',
              color: 'var(--bone)', fontWeight: 400,
            }}>
              {item.value}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          position: 'absolute', bottom: '2.5rem', right: 'clamp(1.5rem, 6vw, 5rem)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
        }}
      >
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '0.5rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--stone)', writingMode: 'vertical-rl',
        }}>
          Scroll
        </div>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(to bottom, var(--ash), transparent)',
        }}/>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
