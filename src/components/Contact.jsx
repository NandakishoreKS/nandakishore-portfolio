import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Request received. We will be in touch.');
  };

  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid var(--ash)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="section-label reveal" style={{ marginBottom: '1.25rem' }}>
            // Admission Request
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              fontWeight: 700,
              color: 'var(--white)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: '800px',
            }}
          >
            Submit Your<br />
            <em style={{ color: 'var(--stone)', fontStyle: 'italic' }}>Enquiry.</em>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 8vw, 8rem)',
          alignItems: 'start',
        }}>

          {/* Left: info */}
          <div className="reveal reveal--left reveal-delay-2">
            <p style={{
              fontFamily: 'var(--sans)', fontSize: '0.95rem',
              color: 'var(--silver)', lineHeight: 1.85, fontWeight: 300,
              marginBottom: '2.5rem', maxWidth: '44ch',
            }}>
              Open to discussing AI/ML projects, product design work, collaboration,
              or any opportunity that pushes the boundaries of what's possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.2rem' }}>
                Direct Line
              </div>
              <a
                href="mailto:nandakishoreks21@gmail.com"
                style={{
                  fontFamily: 'var(--sans)', fontSize: '1rem',
                  color: 'var(--bone)', textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--bone)'}
              >
                nandakishoreks21@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/NandakishoreKS' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--mono)', fontSize: '0.65rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--stone)', textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bone)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--stone)'}
                >
                  <span style={{ opacity: 0.4 }}>↗</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            className="reveal reveal-delay-3"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
          >
            {[
              { id: 'contact-name',    label: 'Full Name',     type: 'text',  placeholder: 'Your name' },
              { id: 'contact-email',   label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { id: 'contact-subject', label: 'Subject',       type: 'text',  placeholder: 'Project / Collaboration / Other' },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--mono)', fontSize: '0.55rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--stone)', marginBottom: '0.6rem',
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="obsidian-input"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontFamily: 'var(--mono)', fontSize: '0.55rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--stone)', marginBottom: '0.6rem',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Describe your enquiry..."
                className="obsidian-input"
                style={{ resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              id="contact-submit"
              style={{
                width: '100%',
                background: 'var(--white)',
                color: 'var(--obsidian)',
                border: 'none',
                padding: '1.1rem 2rem',
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                transition: 'background 0.3s ease, color 0.3s ease',
                borderRadius: '2px',
                marginTop: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--obsidian)';
                e.currentTarget.style.color = 'var(--white)';
                e.currentTarget.style.outline = '1px solid var(--ash)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--white)';
                e.currentTarget.style.color = 'var(--obsidian)';
                e.currentTarget.style.outline = 'none';
              }}
            >
              Transmit Request
            </button>

            {status && (
              <p style={{
                fontFamily: 'var(--mono)', fontSize: '0.6rem',
                letterSpacing: '0.15em', color: 'var(--stone)',
                textTransform: 'uppercase', textAlign: 'center',
                marginTop: '-1rem',
              }}>
                ✓ {status}
              </p>
            )}
          </form>

        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--ash)',
        padding: '2rem clamp(1.5rem, 6vw, 5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        maxWidth: '100%',
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)' }}>
          NKS © MMXXVI — All Works Reserved
        </span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ash)' }}>
          Obsidian Assembly
        </span>
      </footer>
    </section>
  );
}
