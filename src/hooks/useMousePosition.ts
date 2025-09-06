import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (throttleMs: number = 10): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let timeoutId: number;
    let lastExecution = 0;

    const updateMousePosition = (event: MouseEvent) => {
      const now = Date.now();
      
      if (now - lastExecution > throttleMs) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
        lastExecution = now;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setMousePosition({
            x: event.clientX,
            y: event.clientY,
          });
        }, throttleMs - (now - lastExecution));
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [throttleMs]);

  return mousePosition;
};

export const useMousePositionNormalized = (throttleMs: number = 10) => {
  const mousePosition = useMousePosition(throttleMs);
  const [normalizedPosition, setNormalizedPosition] = useState({
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
  });

  useEffect(() => {
    const xPercent = (mousePosition.x / window.innerWidth) * 100;
    const yPercent = (mousePosition.y / window.innerHeight) * 100;
    
    setNormalizedPosition({
      x: mousePosition.x,
      y: mousePosition.y,
      xPercent,
      yPercent,
    });
  }, [mousePosition]);

  return normalizedPosition;
};
