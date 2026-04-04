import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Storing target and current coordinates
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      
      // Update dot immediately for no lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (['a', 'button', 'input', 'textarea', 'select'].includes(tag) || e.target.closest('a') || e.target.closest('button')) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId;

    const updateRing = () => {
      // Lerp logic for the ring
      current.current.x += (target.current.x - current.current.x) * 0.15;
      current.current.y += (target.current.y - current.current.y) * 0.15;

      if (ringRef.current) {
        // Expand and fill on hover
        const size = isHovering.current ? 56 : 32;
        const bg = isHovering.current ? 'rgba(200, 240, 74, 0.2)' : 'transparent';
        const borderColor = isHovering.current ? 'transparent' : 'rgba(255, 255, 255, 0.5)';
        
        ringRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.backgroundColor = bg;
        ringRef.current.style.borderColor = borderColor;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    updateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Lagging Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[100] transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{ width: '32px', height: '32px', borderColor: 'rgba(255, 255, 255, 0.5)' }}
      />
      {/* Exact Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100]"
      />
    </>
  );
}
