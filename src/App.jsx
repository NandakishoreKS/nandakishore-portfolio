import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Initial Fade Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 pointer-events-none"
      />
      
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
