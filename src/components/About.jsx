export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid var(--ash)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div className="section-label reveal" style={{ marginBottom: '4rem' }}>
          // Origin
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(80px, 15vw, 180px) 1fr',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Large number */}
          <div className="reveal reveal--left reveal-delay-1">
            <span style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(5rem, 16vw, 14rem)',
              fontWeight: 900,
              lineHeight: 0.85,
              color: 'var(--graphite)',
              userSelect: 'none',
              display: 'block',
            }}>
              01
            </span>
          </div>

          {/* Text block */}
          <div className="reveal reveal-delay-2">
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--white)',
              lineHeight: 1.15,
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}>
              Nandakishore KS
            </h2>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
              maxWidth: '680px',
            }}>
              <p style={{ color: 'var(--silver)', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.85, fontWeight: 300 }}>
                A B.Tech student with a deep, systematic curiosity for intelligent systems —
                how they are built, how they behave, and how they can be made to disappear
                seamlessly into beautiful user experiences.
              </p>
              <p style={{ color: 'var(--silver)', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.85, fontWeight: 300 }}>
                I architect machine learning models, engineer high-performance web applications,
                and experiment at the boundary of game development and AI. My drive is simple:
                write code that is clean, scalable, and built to last — and deliver interfaces
                that feel <em style={{ fontFamily: 'var(--serif)', color: 'var(--bone)', fontStyle: 'italic' }}>inevitable</em>.
              </p>
              <p style={{ color: 'var(--silver)', fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.85, fontWeight: 300 }}>
                When not in the build phase, I'm tracking what's next in AI — and refining my craft.
              </p>
            </div>

            {/* Attribute pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.5rem' }}>
              {['AI / ML Engineering', 'Full Stack Dev', 'Computer Vision', 'Mobile Apps', 'Game Development'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: '0.6rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--stone)', border: '1px solid var(--ash)',
                    padding: '0.4rem 0.9rem', borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
