import { useEffect } from "react";

const useIntersectionObserver = (elementsRef, onIntersect, options = { threshold: 0.1 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry.target); // Call the callback
          observer.unobserve(entry.target); // Stop observing
        }
      });
    }, options);

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Cleanup
  }, [elementsRef, onIntersect, options]);
};

export default useIntersectionObserver;
