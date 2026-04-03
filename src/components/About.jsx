import { Reveal } from './Reveal';
import { FloatingEmoji } from './Hero';

export default function About() {
  return (
    <section id="about" className="dark-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hairline" style={{ position: 'absolute', top: 0, left: 0 }} />

      <FloatingEmoji emoji="💡" style={{ top: '20%', left: '10%' }} delay={0.5} />
      <FloatingEmoji emoji="🧠" style={{ bottom: '30%', right: '12%' }} delay={2} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <Reveal>
          <h2 className="display-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2.5rem' }}>
            ABOUT <span className="text-gradient">ME</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#bbb', lineHeight: 1.8, marginBottom: '2rem' }}>
            I am a B.Tech student specializing in Artificial Intelligence. I have a deep passion for building full-stack products and integrating AI/ML to solve hard problems. My current focus is completely on architecting scalable, elegant systems from the database layer all the way up to the user interface.
          </p>
        </Reveal>
        
        <Reveal delay={0.4}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#bbb', lineHeight: 1.8 }}>
            Whether it is training custom neural networks or shipping performant React applications, I believe in tools and spaces that are <strong style={{ color: '#fff' }}>fast, beautiful, and intelligent.</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
