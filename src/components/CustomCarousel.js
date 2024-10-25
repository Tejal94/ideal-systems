import { useEffect, useState, useRef } from 'react';
import HomeCarousel1 from "../assets/banner/banner-home-11.jpg";
import HomeCarousel2 from "../assets/banner/banner-home-21.jpg";
import HomeCarousel3 from "../assets/banner/banner-home-31.jpg";

const slides = [HomeCarousel1, HomeCarousel2, HomeCarousel3];

const TestCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === slides.length) {
      setCurrentSlide(0);
      containerRef.current.style.transition = 'none';
      containerRef.current.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        containerRef.current.style.transition = 'transform 1.5s ease';
      }, 0);
    } else if (currentSlide === -1) {
      setCurrentSlide(slides.length - 1);
      containerRef.current.style.transition = 'none';
      containerRef.current.style.transform = `translateX(-${slides.length * 100}%)`;
      setTimeout(() => {
        containerRef.current.style.transition = 'transform 1.5s ease';
      }, 0);
    }
  };

  return (
    <div className="carousel w-full overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex transition-transform duration-[1.5s] ease"
        style={{ transform: `translateX(-${(currentSlide + 1) * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="w-full flex-shrink-0">
          <img src={slides[slides.length - 1]} className="w-full" />
        </div>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide} className="w-full" />
          </div>
        ))}
        <div className="w-full flex-shrink-0">
          <img src={slides[0]} className="w-full" />
        </div>
      </div>
      {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn btn-circle"
          onClick={prevSlide}
        >❮</button>
        <button
          className="btn btn-circle"
          onClick={nextSlide}
        >❯</button>
      </div> */}
    </div>
  );
}

export default TestCarousel;