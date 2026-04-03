import { Reveal } from './Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,12vw,10rem)] min-h-[80vh] flex items-center border-t border-ash bg-obsidian"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <Reveal>
            <div className="section-label">// Origin</div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[clamp(80px,15vw,180px)_1fr] gap-[clamp(2rem,6vw,6rem)] items-start">
          {/* Large number */}
          <div>
            <Reveal delay={0.1}>
              <span className="font-serif text-[clamp(5rem,16vw,14rem)] font-black leading-[0.85] text-graphite select-none block">
                01
              </span>
            </Reveal>
          </div>

          {/* Text block */}
          <div>
            <Reveal delay={0.2}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-[1.15] mb-8 tracking-[-0.01em]">
                Nandakishore KS
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6 max-w-[680px]">
              <Reveal delay={0.3}>
                <p className="text-silver text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.85] font-light">
                  A B.Tech student with a deep, systematic curiosity for intelligent systems —
                  how they are built, how they behave, and how they can be made to disappear
                  seamlessly into beautiful user experiences.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-silver text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.85] font-light">
                  I architect machine learning models, engineer high-performance web applications,
                  and experiment at the boundary of game development and AI. My drive is simple:
                  write code that is clean, scalable, and built to last — and deliver interfaces
                  that feel <em className="font-serif text-bone italic">inevitable</em>.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p className="text-silver text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.85] font-light">
                  When not in the build phase, I'm tracking what's next in AI — and refining my craft.
                </p>
              </Reveal>
            </div>

            {/* Attribute pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {['AI / ML Engineering', 'Full Stack Dev', 'Computer Vision', 'Mobile Apps', 'Game Development'].map((tag, i) => (
                <Reveal key={tag} delay={0.6 + (i * 0.05)}>
                  <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-stone-500 border border-ash px-4 py-2 rounded-sm bg-obsidian">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
