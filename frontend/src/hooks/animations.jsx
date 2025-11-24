import { useEffect, useRef,useState } from "react";
import { Social_Media, Tech_Stack } from "../data/image_resources";
import Jhvn from "../assets/Images/jhvn_1_LOGO.png"


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



export function SociaMediaAnimation() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const firstBatchRef = useRef(null);
  const isPausedRef = useRef(false);


  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const firstBatch = firstBatchRef.current;

    // ✅ Fix: check actual elements, not refs
    if (!container || !content || !firstBatch) return;
  
    let scrollAmount = 0;
    let animationFrame;
    const speed = 0.5;

    const scroll = () => {
      if (!isPausedRef.current) {
        scrollAmount += speed;

        // ✅ Fix: use element references properly
        const resetPoint = firstBatch.offsetWidth;

        // ✅ Fix: seamless vertical scroll
        if (scrollAmount >= resetPoint) {
          scrollAmount -= resetPoint;
        }
        content.style.transform = `translateX(-${scrollAmount}px)`;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };
    const handleMouseLeave = () => {
      isPausedRef.current = false;
    };


    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Proper cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };

    
    
  }, []);

  return (
    <div
      ref={containerRef}
      className="center relative w-full overflow-hidden h-full rounded-[10px]">

      <div ref={contentRef} className="flex items-center">

        {/* First Batch */}
        <div ref={firstBatchRef} className="flex items-center p-4">
          {Social_Media.map((item, idx) => (
            <a
              key={`social-1-${idx}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center min-w-[150px] justify-center rounded-[10px]"
            >
              <img
                src={item.src}
                className="w-8 h-8 mx-4 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              />
              <span className="text-xs text-[var(--metal-dark4)] mt-2 transition-colors duration-500 hover:text-[var(--white-blple)]">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/*  Second Batch (duplicate for looping) */}
        <div className="flex  items-center p-4">
          {Social_Media.map((item, idx) => (
            <a
              key={`social-2-${idx}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center min-w-[150px] rounded-[10px]" >
              <img
                src={item.src}
                className="w-8 h-8 mx-4 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              />
              <span className="text-xs text-[var(--metal-dark4)] mt-2 transition-colors duration-500 hover:text-[var(--white-blple)]">
                {item.label}
              </span>
            </a>
          ))}
        </div>



      </div>
    </div>
  );
  
}



export function TechStackAnimation() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const firstBatchRef = useRef(null);
  const isPausedRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  // Detect small screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const firstBatch = firstBatchRef.current;
    if (!container || !content || !firstBatch) return;

    let scrollAmount = 0;
    let animationFrame;
    const speed = 0.5;

    const scroll = () => {
      if (!isPausedRef.current) {
        scrollAmount += speed;

        // reset based on axis
        const resetPoint = isMobile ? firstBatch.offsetWidth : firstBatch.offsetHeight;

        if (scrollAmount >= resetPoint) scrollAmount -= resetPoint;

        content.style.transform = isMobile
          ? `translateX(-${scrollAmount}px)`
          : `translateY(-${scrollAmount}px)`;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    const handleMouseEnter = () => (isPausedRef.current = true);
    const handleMouseLeave = () => (isPausedRef.current = false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        ref={containerRef}
        className={`relative center w-full max-w-full md:max-w-[380px] h-[200px] md:h-[300px] rounded-xl overflow-hidden `}
      >
        <div
          ref={contentRef}
          className={`flex ${isMobile ? "flex-row items-center justify-center" : "flex-col"} items-center `}
        >
          {/* First Batch */}
          <div
            ref={firstBatchRef}
            className={`flex ${isMobile ? "flex-row items-center justify-center" : "flex-col"} items-center`}
          >
            {Tech_Stack.map((item, idx) => (
              <div
                key={`stack-1-${idx}`}
                className="p-3 my-2 mx-8 flex flex-col items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-12 h-12 p-2 bg-[var(--moon-phases-e)] rounded-2xl transition-all duration-300 hover:scale-110"
                />
                <span className="text-xs text-[var(--white-blple)] mt-2 font-medium transition-colors duration-300 hover:text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Second Batch (duplicate for seamless loop) */}
          <div className={`flex ${isMobile ? "flex-row" : "flex-col"} items-center`}>
            {Tech_Stack.map((item, idx) => (
              <div
                key={`stack-2-${idx}`}
                className="p-3 my-2 mx-8 flex flex-col items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="stack-div w-12 h-12 p-2 bg-[var(--moon-phases-e)] rounded-2xl transition-all duration-300 hover:scale-110"
                />
                <span className="text-xs text-[var(--white-blple)] mt-2 font-medium transition-colors duration-300 hover:text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export function NameAnimation() {
  const NameContainerRef = useRef(null);
  const NameContentRef = useRef(null);
  const firstBatchRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = NameContainerRef.current;
    const content = NameContentRef.current;
    const firstBatch = firstBatchRef.current;

    if (!container || !content || !firstBatch) return;

    let scrollAmount = 0;
    let animationFrame;
    const speed = 1;

    const scroll = () => {
      if (!isPausedRef.current) {
        scrollAmount += speed;

        const resetPoint = firstBatch.offsetWidth;

        if (scrollAmount >= resetPoint) {
          scrollAmount -= resetPoint;
        }

        content.style.transform = `translateX(-${scrollAmount}px)`;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);



  return (
    <div
      ref={NameContainerRef}
      className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-[10px] 
      col-start-1 col-end-4 row-start-2 row-end-2">

      <div
        ref={NameContentRef}
        className="flex items-center justify-center gap-8 min-w-max ">

        {/* Batch items */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstBatchRef : null}
            className="flex items-center justify-center text-[16.08rem]  w-auto h-auto rounded-[10px] shrink-0 "
          >
            <img
              src={Jhvn}
              className="logo  w-100 max-w-[180px] h-20 md:h-auto object-contain mx-24 rounded-2xl mb-4"
              alt="Jhvn"
            />  
            <p className="text-6xl JHVN-TEXT text-white md:text-[16.08rem] leading-none whitespace-nowrap">
              JHVN
            </p>
          </div>
        ))}
      </div>
    </div>
  );


}
