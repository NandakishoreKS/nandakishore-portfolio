import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const headingRef = useScrollReveal();
  const contactRef = useScrollReveal({ threshold: 0.1 });
  const formRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="relative w-full bg-transparent border-t border-white/10 flex flex-col justify-between overflow-hidden pt-32">
      
      {/* Giant Ghost Background Text */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap z-0">
        <h2 
          className="font-bold text-outline opacity-[0.04] uppercase leading-none"
          style={{ fontSize: 'clamp(4rem, 14vw, 16rem)' }}
        >
          CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-grow flex flex-col items-center text-center">
        
        {/* Main Heading */}
        <div ref={headingRef} className="reveal-target flex flex-col items-center mb-16">
          <h2 
            className="font-bold tracking-tighter uppercase leading-[0.85] text-white"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            GET IN<br/>TOUCH
          </h2>
        </div>
        
        {/* Email Link */}
        <div ref={contactRef} className="reveal-target mb-24">
          <a href="mailto:nandakishoreks21@gmail.com" className="text-2xl md:text-4xl font-light tracking-wide text-white transition-colors duration-300 relative group inline-block">
            nandakishoreks21@gmail.com
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#c8f04a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="reveal-target w-full max-w-3xl text-left bg-black border border-white/10 p-8 md:p-16 rounded-2xl relative z-20 shadow-2xl">
          <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col md:flex-row gap-12">
              
              <div className="flex-1 flex flex-col">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent outline-none text-white text-lg pb-4 border-b border-white/20 transition-all duration-300 focus:border-[#c8f04a] focus:shadow-[0_2px_0_0_#c8f04a]"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent outline-none text-white text-lg pb-4 border-b border-white/20 transition-all duration-300 focus:border-[#c8f04a] focus:shadow-[0_2px_0_0_#c8f04a]"
                />
              </div>

            </div>

            <div className="w-full flex flex-col">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent outline-none text-white text-lg pb-4 border-b border-white/20 resize-none transition-all duration-300 focus:border-[#c8f04a] focus:shadow-[0_2px_0_0_#c8f04a]"
              />
            </div>

            <div className="block mt-4">
              <button 
                type="submit" 
                className="w-full py-5 rounded-full bg-gradient-to-r from-[#c8f04a] to-[#dfff6e] text-black font-extrabold tracking-widest uppercase hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(200,240,74,0.3)] transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-32 relative z-10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-xl font-bold tracking-tighter">
            N<span className="text-[#c8f04a]">.</span>KS
          </div>
          
          <div className="text-xs font-semibold tracking-widest text-white/40 uppercase">
            © {new Date().getFullYear()} NANDAKISHORE KS
          </div>
          
          <div className="flex gap-8">
            {['GITHUB', 'LINKEDIN', 'TWITTER'].map((social) => (
              <a key={social} href="#" className="hidden sm:inline-block text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-[#c8f04a] transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
          
        </div>
      </footer>

    </section>
  );
}
