'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: '/carousel/carosel1.jpg',
    title: 'Welcome to Mwandege Boys Secondary School',
    description: 'Nurturing excellence through quality education and character development',
  },
  {
    id: 2,
    image: '/carousel/carosel2.jpeg',
    title: 'Learn & Serve',
    description: 'Our motto guides every student toward academic excellence and social responsibility',
  },
  {
    id: 3,
    image: '/carousel/carosel3.jpg',
    title: 'State-of-the-Art Facilities',
    description: 'Modern laboratories, advanced library, and technology tools for holistic learning',
  },
  {
    id: 4,
    image: '/carousel/carosel4.jpeg',
    title: 'Disciplined Leaders',
    description: 'Our vision: To be the most disciplined secondary school in Tanzania',
  },
  {
    id: 5,
    image: '/carousel/carosel5.jpg',
    title: 'Critical Thinking & Innovation',
    description: 'WTS Program develops creativity, resilience, and problem-solving skills',
  },
  {
    id: 6,
    image: '/carousel/carosel6.jpeg',
    title: 'Building Great Thinkers',
    description: 'Developing talent and potential through professional facilitation and mentorship',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {currentSlideData.title}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md text-gray-100">
            {currentSlideData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Apply Now
            </a>
            <a
              href="/about"
              className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-lg z-20">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-6 left-6 text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-lg z-20 hover:bg-black/75 transition-colors"
        aria-label={isAutoPlay ? 'Pause carousel' : 'Play carousel'}
      >
        {isAutoPlay ? '⏸ Pause' : '▶ Play'}
      </button>
    </div>
  );
}
