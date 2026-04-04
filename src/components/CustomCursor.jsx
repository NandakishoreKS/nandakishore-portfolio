import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Hide default cursor on body
    document.body.style.cursor = 'none';
    
    // Select all interactive elements that need cursor styling overriden
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
      el.style.cursor = 'none';
    });

    const xTo = gsap.quickTo(cursorRef.current, 'x', { duration: 0.1, ease: 'power3' });
    const yTo = gsap.quickTo(cursorRef.current, 'y', { duration: 0.1, ease: 'power3' });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        el.style.cursor = '';
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100]"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
}
