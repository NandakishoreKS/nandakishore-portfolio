import { useEffect, useRef } from 'react';

export function useScrollReveal(options = { threshold: 0.1, thresholdOffset: "0px" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          // Optional: observer.unobserve(element) if you only want it to reveal once.
          // Leaving it unobserved for one-time animation as typical for "reveal" effects,
          // though some prefer it triggering on scroll up too. We will unobserve to keep it clean.
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.thresholdOffset || "0px"
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.thresholdOffset]);

  return ref;
}
