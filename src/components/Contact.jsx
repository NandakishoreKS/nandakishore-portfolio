import { useState } from 'react';
import { Reveal } from './Reveal';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Request received. We will be in touch.');
  };

  return (
    <section
      id="contact"
      className="border-t border-ash min-h-screen flex flex-col justify-between pt-32"
    >
      <div className="w-full max-w-3xl mx-auto px-6 md:px-0 flex-1 flex flex-col justify-center">

        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-stone-500 uppercase mb-8 flex justify-center items-center gap-4">
              <span className="w-[30px] h-[1px] bg-stone-700 block" />
              Admission Request
              <span className="w-[30px] h-[1px] bg-stone-700 block" />
            </div>
          </Reveal>
          <h2 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white leading-tight tracking-tight uppercase">
            <Reveal delay={0.1}>Submit Your</Reveal>
            <Reveal delay={0.2}><span className="text-stone-500 italic block">Enquiry.</span></Reveal>
          </h2>
        </div>

        {/* Center Portal Form */}
        <div className="bg-charcoal border border-ash p-8 md:p-16 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[0.55rem] tracking-[0.2em] uppercase text-stone-500 mb-2">
                    01. Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="obsidian-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[0.55rem] tracking-[0.2em] uppercase text-stone-500 mb-2">
                    02. Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="obsidian-input"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div>
                <label htmlFor="contact-subject" className="block font-mono text-[0.55rem] tracking-[0.2em] uppercase text-stone-500 mb-2">
                  03. Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project / Collaboration / Other"
                  className="obsidian-input"
                />
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div>
                <label htmlFor="contact-message" className="block font-mono text-[0.55rem] tracking-[0.2em] uppercase text-stone-500 mb-2">
                  04. Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Describe your enquiry..."
                  className="obsidian-input resize-none"
                />
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <button
                type="submit"
                id="contact-submit"
                className="w-full bg-white text-obsidian border-none p-5 font-mono text-[0.65rem] tracking-[0.25em] uppercase hover:bg-obsidian hover:text-white hover:border hover:border-ash transition-all duration-300"
              >
                Transmit Request
              </button>
            </Reveal>

            {status && (
              <p className="font-mono text-[0.6rem] tracking-[0.15em] text-stone-500 uppercase text-center mt-2">
                ✓ {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 border-t border-ash py-8 px-[clamp(1.5rem,6vw,5rem)] flex justify-between items-center flex-wrap gap-4 w-full">
        <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-stone-500">
          NKS © MMXXVI — All Works Reserved
        </span>
        <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-ash">
          Obsidian Assembly
        </span>
      </footer>
    </section>
  );
}
