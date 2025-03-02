
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

/**
 * A hook to reveal elements as they scroll into view
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once it's visible, stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
};

/**
 * A hook to reveal multiple elements as they scroll into view
 */
export const useMultiScrollReveal = (count: number, options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const refsArray = useRef<(HTMLElement | null)[]>(Array(count).fill(null));
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = refsArray.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              
              // Once it's visible, stop observing
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    refsArray.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refsArray.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [threshold, rootMargin]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    refsArray.current[index] = el;
  };

  return { setRef, visibleItems };
};

export default useScrollReveal;
