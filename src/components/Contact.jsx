import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const elements = gsap.utils.toArray('.contact-animate');
      
      gsap.from(elements, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Simple parallax for the background CONTACT text
      gsap.to('.contact-ghost', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: 150
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="relative w-full min-h-screen bg-black border-t border-white/10 flex flex-col justify-between overflow-hidden pt-32">
      
      {/* Ghost Background Text */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 select-none pointer-events-none contact-ghost whitespace-nowrap">
        <h2 className="text-[20vw] font-bold text-outline opacity-[0.08] uppercase leading-none">
          CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-grow flex flex-col items-center justify-center text-center">
        
        <h2 className="contact-animate text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
          GET IN TOUCH
        </h2>
        
        <a href="mailto:nandakishoreks21@gmail.com" className="contact-animate text-xl md:text-3xl font-medium tracking-wide text-white/80 hover:text-white transition-colors duration-300 relative group inline-block mb-24">
          nandakishoreks21@gmail.com
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-violet-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </a>

        {/* Contact Form */}
        <form className="contact-animate w-full max-w-2xl text-left flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 border-b border-white/20 pb-4 relative group">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-transparent outline-none text-white placeholder-white/40 tracking-widest text-sm"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-focus-within:w-full" />
            </div>
            
            <div className="flex-1 border-b border-white/20 pb-4 relative group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent outline-none text-white placeholder-white/40 tracking-widest text-sm"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-focus-within:w-full" />
            </div>
          </div>

          <div className="w-full border-b border-white/20 pb-4 relative group">
            <textarea 
              placeholder="YOUR MESSAGE" 
              rows={4}
              className="w-full bg-transparent outline-none text-white placeholder-white/40 tracking-widest text-sm resize-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-focus-within:w-full" />
          </div>

          <div className="flex justify-start pt-8">
            <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold tracking-widest text-sm hover:scale-105 transition-transform duration-300">
              SEND MESSAGE
            </button>
          </div>
        </form>

      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-24 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            N.KS
          </div>
          <div className="text-sm font-medium tracking-widest text-white/40">
            © {new Date().getFullYear()} NANDAKISHORE KS
          </div>
          <div className="flex gap-6">
            {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
              <a key={social} href="#" className="text-xs font-semibold tracking-widest text-white/60 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </section>
  );
}
