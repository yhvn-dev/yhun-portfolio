import { useEffect, useState, useRef } from "react";
import Certificate from "../assets/Images/3rd Place Certificate.png";
import Hackathon from "../assets/Images/Hackathon 2.jpg";
import Hackahton2 from "../assets/Images/7.jpg";
import VideoSample from "../assets/Videos/Hackathon First Minute.mp4";

function Carousel() {
  const achievements_2 = [
    { type: "image", name: "certifiacte", src: Certificate },
    { type: "image", name: "group", src: Hackathon },
    { type: "image", name: "solo", src: Hackahton2 },
    { type: "video", name: "vid", src: VideoSample }
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
    <div className="relative overflow-hidden w-full h-full rounded-[10px] flex items-center">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {achievements_2.map((item, i) => (
          <div
            key={i}
            className="min-w-full h-full w-full flex justify-center items-center"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            ) : (
              <video
                key={index}
                ref={i === index ? videoRef : null}
                src={item.src}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                autoPlay
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {achievements_2.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`carousel-indicators w-2 h-2 rounded-full transition-all 
              ${index === i ? "bg-white scale-125" : "bg-white/40"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
