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
    { type: "video", name: "solo", src: VideoSample }
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
      // For images, use the 5-second timeout
      timeoutRef.current = setTimeout(goNext, 5000);
    } else {
      // For videos, set up event listeners
      if (videoRef.current) {
        const video = videoRef.current;
        
        const handleVideoEnd = () => {
          goNext();
        };

        const handleLoadedMetadata = () => {
          // Remove any existing timeout and use the video's natural end
          clearTimeout(timeoutRef.current);
          video.addEventListener('ended', handleVideoEnd);
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        
        // Fallback: if metadata doesn't load, use a reasonable timeout
        timeoutRef.current = setTimeout(goNext, 10000);

        // Cleanup function
        return () => {
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
          video.removeEventListener('ended', handleVideoEnd);
        };
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative overflow-hidden w-full h-full rounded-[10px] flex items-center">
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
    </div>
  );
}

export default Carousel;