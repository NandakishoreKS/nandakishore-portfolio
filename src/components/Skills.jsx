import { Reveal } from './Reveal';

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
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)] border-t border-ash bg-obsidian"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-4 mb-16">
          <div>
            <div className="mb-5">
              <Reveal>
                <div className="section-label">// Disciplines</div>
              </Reveal>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold text-white tracking-[-0.01em] leading-[1.1]">
              <Reveal delay={0.1}>What I Build</Reveal>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-stone-500 uppercase">
              {disciplinesList.length}&nbsp;Disciplines
            </div>
          </Reveal>
        </div>

        {/* Skills list */}
        <div className="border-t border-ash flex flex-col">
          {disciplinesList.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-row grid grid-cols-[3.5rem_1fr_auto] items-center py-[clamp(1.25rem,3vw,2rem)] gap-[clamp(1rem,3vw,2.5rem)]"
            >
              {/* Number */}
              <Reveal delay={0.1}>
                <span className="skill-num block">
                  {skill.id}
                </span>
              </Reveal>

              {/* Name + desc */}
              <div className="flex flex-col gap-1">
                <Reveal delay={0.15}>
                  <div className="skill-name block">
                    {skill.name}
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="font-sans text-[0.85rem] text-stone-400 font-light max-w-[55ch]">
                    {skill.desc}
                  </div>
                </Reveal>
              </div>

              {/* Tag */}
              <Reveal delay={0.25}>
                <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-ash border border-ash px-3 py-1 rounded-sm whitespace-nowrap block">
                  {skill.tag}
                </span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
