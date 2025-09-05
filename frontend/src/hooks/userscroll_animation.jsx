import { useEffect, useRef } from "react";

function useScrollAnimation(className, options = { threshold: 0.2 }) {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      options 
    );

    const elements = document.querySelectorAll(`.${className}`);
    elementsRef.current = elements;

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, options]);

  return elementsRef;
}

export default useScrollAnimation;



// function userScrollAnimation2({classname,options})