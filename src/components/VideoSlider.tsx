import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  videoUrl: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    videoUrl: "http://epicfences.com/wp-content/uploads/2024/11/2010550_Kitchen_Professional_1920x1080.mp4",
    title: "Famingo Pete's",
    description: "Private Chef / Catering Service / Hot Sauce"
  },
  {
    videoUrl: "http://epicfences.com/wp-content/uploads/2024/11/6770747_Cuisine_Food_1920x1080.mp4",
    title: "FullMenus for Every Occasion",
    description: ""
  },
  {
    videoUrl: "http://epicfences.com/wp-content/uploads/2024/11/2010550_Kitchen_Professional_1920x1080-1.mp4",
    title: "Hot Sauces & Signature Flavors",
    description: "Add a touch of heat to your dining experience!"
  }
];

export const VideoSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(handleNext, 8000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.1)' }}
          >
            <source src={slide.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-5xl font-bold mb-4 transform translate-y-0 transition-transform duration-700">
              {slide.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl text-center transform translate-y-0 transition-transform duration-700 delay-200">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-6'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};