import React from 'react';

// this hook can be useful when you want to know if element is in viewport of the screen or not
// very useful when using animations
// first parameter is the reference of the wanted element
// second parameter is root margin which tells us how much of element is needed to be in viewport to set visibility of element to TRUE

export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    }
  }, [ref.current, rootMargin]);

  return isVisible;
};
