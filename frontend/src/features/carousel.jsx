import { useEffect, useState, useRef } from "react";
import Certificate from "../assets/Images/3rd Place Certificate.png";
import Hackathon from "../assets/Images/Hackathon 2.jpg";
import Hackahton2 from "../assets/Images/7.jpg";
import VideoSample from "../assets/Videos/Hackathon First Minute.mp4";

function Carousel() {
  const achievements_2 = [
    { type: "image", name: "group", src: Hackathon, about: "openIT Hackathon - 3rd Place" },
    { type: "image", name: "solo", src: Hackahton2, about: "openIT Hackathon - 3rd Place" },
    { type: "image", name: "certificate", src: Certificate, about: "openIT Hackathon  - 3rd Place" },
    { type: "video", name: "vid", src: VideoSample, about: "openIT Hackathon - 3rd Place" }
  ];
  
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % achievements_2.length);
  };

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    const current = achievements_2[index];

    if (current.type === "image") {
      timeoutRef.current = setTimeout(goNext, 5000);
    } else if (current.type === "video") {
      const video = videoRef.current;
      if (video) {
        const handleEnded = () => goNext();
        video.addEventListener("ended", handleEnded);

        video.currentTime = 0;
        video.play();

        return () => {
          video.removeEventListener("ended", handleEnded);
        };
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [index]);


  return (
    <div className="relative overflow-hidden w-full h-full rounded-[10px] flex flex-col items-center">
    
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-[90%]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {achievements_2.map((item, i) => (
          <div key={i} className="relative min-w-full h-full flex justify-center items-center">
            {item.type === "image" ? (
              <img src={item.src} className="w-full h-full object-cover rounded-lg shadow-lg" alt="" />
            ) : (
              <video
                ref={i === index ? videoRef : null}
                src={item.src}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="mt-2 flex gap-2">
        {achievements_2.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all 
            ${index === i ? "bg-white scale-125" : "bg-white/40"}`}
          ></button>
        ))}
      </div>

      {/* About Text BELOW Indicators */}
      <p className="mt-3 text-center text-sm text-white/90 px-3">
        {achievements_2[index].about}
      </p>
    </div>
  );
}

export default Carousel;
