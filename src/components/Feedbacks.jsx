import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ index, testimonial, name, designation, company, image, isHovered, onMouseEnter, onMouseLeave }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // Add the ScrollTrigger animation with GSAP
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`bg-black-200 p-6 rounded-3xl transition-all duration-500 ease-in-out w-[320px] max-w-[320px] flex-shrink-0 ${
        isHovered ? 'h-auto' : 'h-[320px]'
      }`}
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p 
          className={`text-white tracking-wider text-[16px] transition-all duration-500 ${
            isHovered ? 'line-clamp-none' : 'line-clamp-4'
          }`}
        >
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create extended array with duplicates for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Reset to beginning when reaching the end
  useEffect(() => {
    if (currentSlide === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Wait for transition to complete
    }
  }, [currentSlide]);

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} overflow-hidden`}>
        <div 
          className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${currentSlide * (320 + 24)}px)` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <FeedbackCard 
              key={`${testimonial.name}-${index}`}
              index={index} 
              {...testimonial}
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide % testimonials.length === index ? 'w-8 bg-white' : 'w-2 bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
