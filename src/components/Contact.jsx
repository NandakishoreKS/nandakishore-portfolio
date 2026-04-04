export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white text-black py-32 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 lg:gap-32">
        
        {/* Left Column (Heading + Email) */}
        <div className="md:w-1/2 flex flex-col justify-center">
          
          <h2 className="font-extrabold uppercase leading-none mb-12 flex flex-col" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            <span>LET'S</span>
            <span>GET IN</span>
            <span>TOUCH</span>
          </h2>

          <div className="mb-8 relative w-max group">
            <a href="mailto:nandakishoreks21@gmail.com" className="text-lg md:text-2xl font-bold tracking-tight pb-1 relative z-10">
              nandakishoreks21@gmail.com
            </a>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          <div className="text-6xl mt-4 animate-bounce">
            🫵
          </div>
          
        </div>

        {/* Right Column (Form) */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-transparent border-b border-gray-300 text-black text-xl md:text-2xl pb-3 outline-none placeholder:text-gray-400 focus:border-black transition-colors"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-gray-300 text-black text-xl md:text-2xl pb-3 outline-none placeholder:text-gray-400 focus:border-black transition-colors"
                required
              />
            </div>

            <div className="flex flex-col">
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 text-black text-xl md:text-2xl pb-3 outline-none placeholder:text-gray-400 resize-none focus:border-black transition-colors"
                required
              />
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-xl"
              >
                Send Message
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
