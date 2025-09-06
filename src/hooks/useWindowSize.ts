import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmallScreen: boolean;
  aspectRatio: number;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  small: 640,
} as const;

export const useWindowSize = (debounceMs: number = 100): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isSmallScreen: false,
    aspectRatio: 16/9,
  });

  useEffect(() => {
    let timeoutId: number;

    const updateWindowSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      const isMobile = width < BREAKPOINTS.mobile;
      const isTablet = width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet;
      const isDesktop = width >= BREAKPOINTS.desktop;
      const isSmallScreen = width < BREAKPOINTS.small;

      setWindowSize({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isSmallScreen,
        aspectRatio,
      });
    };

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWindowSize, debounceMs);
    };

    window.addEventListener('resize', debouncedResize);
    
    // Initial calculation
    updateWindowSize();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [debounceMs]);

  return windowSize;
};

export const useBreakpoint = (breakpoint: keyof typeof BREAKPOINTS = 'mobile') => {
  const { width } = useWindowSize();
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);

  useEffect(() => {
    setIsAboveBreakpoint(width >= BREAKPOINTS[breakpoint]);
  }, [width, breakpoint]);

  return isAboveBreakpoint;
};

export const useOrientation = () => {
  const { width, height } = useWindowSize();
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');

  useEffect(() => {
    setOrientation(width > height ? 'landscape' : 'portrait');
  }, [width, height]);

  return orientation;
};
