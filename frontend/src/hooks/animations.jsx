import { useEffect, useRef } from "react";
import { Social_Media, Tech_Stack } from "../data/image_resources";

export function useScrollAnimation(className, options = { threshold: 0.2 }) {
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



export function TechStackAnimation(){
  const containerRef = useRef(null)
  const contentRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        let scrollAmount = 0;
        let animationFrame;

        const scroll = () => {
            scrollAmount += 3; // Speed
        if (scrollAmount >= content.scrollHeight / 2) {
            scrollAmount = 0; // reset back to top seamlessly
        }
            content.style.transform = `translateY(-${scrollAmount}px)`;
            animationFrame = requestAnimationFrame(scroll);
        };

        const start = setTimeout(() => {
            scroll();
        }, 100);
    

        container.addEventListener("mouseenter", () => cancelAnimationFrame(animationFrame));
        container.addEventListener("mouseleave", () => (animationFrame = requestAnimationFrame(scroll)));

        return () => {
            setTimeout(start)
            cancelAnimationFrame(animationFrame);
        }
        
  }, []);


  return(
    <>
      <div 
      ref={containerRef}
      className="relative center w-full h-[400px] 
          rounded-[10px] overflow-hidden ">

        <div 
           ref={contentRef}
          className="flex items-center justify-center flex-col 
          animate-scroll-stack  w-full">
            {[...Array(2)].map((_, repeatIdx) => (
                Tech_Stack.map((item, idx) => (
                    <a
                    key={`stack-${repeatIdx}-${idx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 my-4 flex flex-col items-center justify-center rounded-[10px]"
                    >
                    <img
                        src={item.src}
                        className="w-12 p-2 h-auto mx-4 rounded-[16px] bg-[var(--moon-phases-e)] shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                    />
                    <span className="text-xs text-[var(--metal-dark4)] mt-2 transition-transform duration-500 hover:text-[var(--white-blple)]">
                        {item.label}
                    </span>
                    </a>
                ))
            ))}
        
        </div>
    </div>
    </>
  )


}