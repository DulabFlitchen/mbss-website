'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    description: 'Nurturing excellence through quality education and character development.',
  },
  {
    id: 2,
    image: '/carousel/carosel2.jpeg',
    title: 'Learn & Serve',
    description: 'Our motto guides every student toward academic excellence and social responsibility.',
  },
  {
    id: 3,
    image: '/carousel/carosel3.jpg',
    title: 'State-of-the-Art Facilities',
    description: 'Modern laboratories, advanced library, and technology tools for holistic learning.',
  },
  {
    id: 4,
    image: '/carousel/carosel4.jpeg',
    title: 'Disciplined Leaders',
    description: 'Our vision: to be the most disciplined secondary school in Tanzania.',
  },
  {
    id: 5,
    image: '/carousel/carosel5.jpg',
    title: 'Critical Thinking & Innovation',
    description: 'WTS Program develops creativity, resilience, and problem-solving skills.',
  },
  {
    id: 6,
    image: '/carousel/carosel6.jpeg',
    title: 'Building Great Thinkers',
    description: 'Developing talent and potential through professional facilitation and mentorship.',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
    <div className="group relative h-[84vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === 0} quality={86} />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,6,23,0.9)_8%,rgba(2,6,23,0.72)_45%,rgba(2,6,23,0.46)_100%)]" />
        </div>
      ))}

{/* Carousel card */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="flex h-[320px] max-w-3xl flex-col rounded-3xl border border-white/20 bg-white/8 p-7 shadow-2xl backdrop-blur-sm sm:h-[350px] sm:p-10 lg:h-[380px]">
            <span className="kicker self-start !border-sky-100/35 !bg-sky-200/15 !text-sky-100">Academic Excellence in Action</span>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">{currentSlideData.title}</h2>
            <p className="mt-4 max-w-2xl text-base text-on-dark sm:text-lg">{currentSlideData.description}</p>
            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <Link href="/admission" className="cta-primary">Apply Now</Link>
              <Link href="/about" className="cta-secondary !border-white/35 !bg-white/15 !text-white hover:!bg-white/20">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="pointer-events-none absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-2.5 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 group-hover:pointer-events-auto group-hover:opacity-100 sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="pointer-events-none absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/15 p-2.5 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 group-hover:pointer-events-auto group-hover:opacity-100 sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${index === currentSlide ? 'w-9 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

{/* Play badge btn */}
      {/* <div className="absolute left-5 top-5 z-20 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-semibold tracking-[0.05em] text-white backdrop-blur sm:left-7">
        {isAutoPlay ? 'Auto Play' : 'Manual'}
      </div> 

      <button
        onClick={() => setIsAutoPlay((prev) => !prev)}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-xs font-semibold tracking-[0.05em] text-white backdrop-blur hover:bg-black/50 sm:right-7"
        aria-label={isAutoPlay ? 'Pause carousel' : 'Play carousel'}
      >
        {isAutoPlay ? 'Pause' : 'Play'}
      </button>*/}
    </div>
  );
}
