"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';

const images = [
  {
    url: "/images/slide1.jpg",
    caption: "Cylinder Head Inspection & Precision Measurement"
  },
  {
    url: "/images/slide2.jpg",
    caption: "Compression Testing & Valve Leak-Down Verification"
  },
  {
    url: "/images/slide3.jpg",
    caption: "Precision Valve Seat Machining"
  },
  {
    url: "/images/slide4.jpg",
    caption: "Advanced Machining & Surface Finishes"
  },
  // {
  //   url: "/images/slide1.jpg",
  //   caption: "Final Assembly & Quality Control Approval"
  // }
];

const CylinderHeadSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);

    const slides = gsap.utils.toArray('.slide') as HTMLElement[];
    
    gsap.to(slides[currentIndex], { 
      opacity: 0, 
      duration: 0.8, 
      ease: "power2.inOut" 
    });
    
    gsap.to(slides[index], { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }
    });
  }, [currentIndex, isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentIndex + 1) % images.length;
    goToSlide(next);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    goToSlide(prev);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-16">
          <h2 className="text-[#D32F2F] font-bold text-sm tracking-widest uppercase mb-3">
            Precision Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight">
            Cylinder Head Excellence
          </h3>
          <p className="mt-4 text-[#4A5568] max-w-2xl mx-auto">
            Our precision cylinder head machines.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="reveal relative max-w-5xl mx-auto aspect-[16/9] rounded-[32px] overflow-hidden shadow-2xl border border-[#4A5568]/10 bg-[#F7FAFC] group"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide absolute inset-0 transition-opacity duration-800 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: index === currentIndex ? 10 : 1 }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                <p className="text-lg md:text-2xl font-bold tracking-tight mb-4 max-w-2xl">
                  {image.caption}
                </p>
                <div className="flex space-x-2">
                  {images.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === currentIndex ? 'w-10 bg-[#D32F2F]' : 'w-3 bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#003366] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#003366] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CylinderHeadSlideshow;
