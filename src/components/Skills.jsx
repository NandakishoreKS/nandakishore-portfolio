const disciplinesList = [
  {
    id: '01',
    name: 'React & React Native',
    desc: 'Dynamic, responsive user interfaces for web and mobile — built to feel immediate and alive.',
    tag: 'Frontend',
  },
  {
    id: '02',
    name: 'Node.js & Express',
    desc: 'Robust, scalable backend services and RESTful APIs with a focus on performance.',
    tag: 'Backend',
  },
  {
    id: '03',
    name: 'Python & AI / ML',
    desc: 'Intelligent systems, computer vision pipelines, and data-driven solutions.',
    tag: 'Intelligence',
  },
  {
    id: '04',
    name: 'Game Development',
    desc: 'Interactive experiences built from the ground up — mechanics, systems, and craft.',
    tag: 'Interactive',
  },
  {
    id: '05',
    name: 'Full Stack Architecture',
    desc: 'End-to-end application design from database schema to cloud deployment.',
    tag: 'Systems',
  },
  {
    id: '06',
    name: 'Mobile Development',
    desc: 'Native and cross-platform applications that feel deliberate on every device.',
    tag: 'Mobile',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        borderTop: '1px solid var(--ash)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-label reveal" style={{ marginBottom: '1.25rem' }}>
              // Disciplines
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
              What I Build
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
            {disciplinesList.length}&nbsp;Disciplines
          </div>
        </div>

        {/* Skills list */}
        <div style={{ borderTop: '1px solid var(--ash)' }}>
          {disciplinesList.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill-row reveal reveal-delay-${Math.min(index + 1, 5)}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '3.5rem 1fr auto',
                alignItems: 'center',
                padding: 'clamp(1.25rem, 3vw, 2rem) 0',
                gap: 'clamp(1rem, 3vw, 2.5rem)',
              }}
            >
              {/* Number */}
              <span className="skill-num" style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--ash)' }}>
                {skill.id}
              </span>

              {/* Name + desc */}
              <div>
                <div className="skill-name" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--stone)', fontWeight: 500, marginBottom: '0.35rem' }}>
                  {skill.name}
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--stone)', fontWeight: 300, opacity: 0.8, maxWidth: '55ch' }}>
                  {skill.desc}
                </div>
              </div>

              {/* Tag */}
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.55rem',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--ash)', border: '1px solid var(--ash)',
                padding: '0.3rem 0.7rem', borderRadius: '2px',
                whiteSpace: 'nowrap',
              }}>
                {skill.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
