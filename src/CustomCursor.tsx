'use client';

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      ring.style.left = `${ringX - 12}px`;
      ring.style.top = `${ringY - 12}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', updateMouse);
    animate();

    return () => {
      document.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          height: '32px',
          width: '32px',
          borderRadius: '50%',
          border: '2px solid white',
          pointerEvents: 'none',
          zIndex: 999999,
          transition: 'border-color 0.2s ease',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          height: '8px',
          width: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          pointerEvents: 'none',
          zIndex: 999999,
        }}
      />
    </>
  );
};

export default CustomCursor;
