import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: '01',
    object: 'Object 01',
    name: 'Driver Drowsiness Detection System',
    cover: '/cover-drowsiness.png',
    context: 'An AI-powered real-time safety system built with computer vision and deep learning. Designed to integrate with hardware setups and detect driver fatigue states before critical incident points.',
    result: 'A robust detection pipeline achieving high-accuracy alerting using CNN-based eye-state classification. Deployed with a hardware integration layer for real-world applicability in road safety scenarios.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Hardware', 'OpenCV'],
    link: '#',
  },
  {
    id: '02',
    object: 'Object 02',
    name: 'PostPulse',
    cover: '/cover-postpulse.png',
    context: 'An AI-powered Instagram Reel analyzer — a full-stack web application giving content creators actionable intelligence derived from their short-form video performance.',
    result: 'Deployed across Vercel and Railway with a React frontend and Node.js backend, feeding creator insights through a clean analytical interface. Reduces guesswork in content strategy.',
    tags: ['React', 'Node.js', 'AI / ML', 'Vercel', 'Railway', 'REST API'],
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <article
      ref={ref}
      style={{
        borderTop: '1px solid var(--ash)',
        paddingTop: 'clamp(3rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3rem, 7vw, 6rem)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateY(48px)',
        transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
    >
      {/* Overline */}
      <div className="section-label" style={{ marginBottom: '1.5rem' }}>
        {project.object}
      </div>

      {/* Cover image */}
      <div
        className="project-cover"
        style={{
          width: '100%',
          aspectRatio: '16 / 7',
          borderRadius: '3px',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          background: 'var(--graphite)',
        }}
      >
        <img
          src={project.cover}
          alt={`${project.name} cover`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div className="project-cover-overlay">
          <span style={{
            fontFamily: 'var(--serif)', fontSize: '1.2rem',
            color: 'var(--white)', fontStyle: 'italic',
          }}>
            View project →
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
        fontWeight: 700,
        color: 'var(--white)',
        letterSpacing: '-0.015em',
        lineHeight: 1.1,
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        maxWidth: '800px',
      }}>
        {project.name}
      </h3>

      {/* Context / Result columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(2rem, 5vw, 5rem)',
        marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}>
        <div>
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            // Context
          </div>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '0.95rem',
            color: 'var(--silver)', lineHeight: 1.85, fontWeight: 300,
          }}>
            {project.context}
          </p>
        </div>
        <div>
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            // Result
          </div>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: '0.95rem',
            color: 'var(--silver)', lineHeight: 1.85, fontWeight: 300,
          }}>
            {project.result}
          </p>
        </div>
      </div>

      {/* Tags + CTA */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flex: 1 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--mono)', fontSize: '0.55rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--stone)', border: '1px solid var(--ash)',
                padding: '0.3rem 0.75rem', borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          style={{
            fontFamily: 'var(--mono)', fontSize: '0.65rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--bone)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            borderBottom: '1px solid var(--ash)',
            paddingBottom: '2px',
            transition: 'color 0.3s ease, border-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--white)';
            e.currentTarget.style.borderColor = 'var(--silver)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--bone)';
            e.currentTarget.style.borderColor = 'var(--ash)';
          }}
        >
          View Case Study&nbsp;→
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        borderTop: '1px solid var(--ash)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label reveal" style={{ marginBottom: '1.25rem' }}>
              // Origin Objects
            </div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 700,
                color: 'var(--white)',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}
            >
              Selected Works
            </h2>
          </div>
          <div
            className="reveal reveal-delay-2"
            style={{
              fontFamily: 'var(--mono)', fontSize: '0.6rem',
              letterSpacing: '0.15em', color: 'var(--stone)',
              textTransform: 'uppercase',
            }}
          >
            {projects.length}&nbsp;Case Studies
          </div>
        </div>

        {/* Project cards */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
