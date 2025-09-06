import { useState, useEffect } from 'react';

interface ScrollProgress {
  progress: number; // 0 to 1
  progressPercent: number; // 0 to 100
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
}

export const useScrollProgress = (throttleMs: number = 10): ScrollProgress => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    progressPercent: 0,
    scrollY: 0,
    scrollDirection: null,
    isScrolling: false,
  });

  useEffect(() => {
    let timeoutId: number;
    let lastScrollY = window.scrollY;
    let lastExecution = 0;
    let scrollTimeout: number;

    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? currentScrollY / documentHeight : 0;
      const progressPercent = progress * 100;
      
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 
                             currentScrollY < lastScrollY ? 'up' : null;

      setScrollProgress({
        progress: Math.min(Math.max(progress, 0), 1),
        progressPercent: Math.min(Math.max(progressPercent, 0), 100),
        scrollY: currentScrollY,
        scrollDirection,
        isScrolling: true,
      });

      lastScrollY = currentScrollY;

      // Reset scrolling state after scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollProgress(prev => ({ ...prev, isScrolling: false }));
      }, 150);
    };

    const throttledScrollHandler = () => {
      const now = Date.now();
      
      if (now - lastExecution > throttleMs) {
        updateScrollProgress();
        lastExecution = now;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(updateScrollProgress, throttleMs - (now - lastExecution));
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });

    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [throttleMs]);

  return scrollProgress;
};

export const useScrollDirection = (threshold: number = 10) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      setScrollDirection(direction);
      setIsScrollingUp(direction === 'up');
      setIsScrollingDown(direction === 'down');
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });

    return () => window.removeEventListener('scroll', requestScrollUpdate);
  }, [threshold]);

  return { scrollDirection, isScrollingUp, isScrollingDown };
};
