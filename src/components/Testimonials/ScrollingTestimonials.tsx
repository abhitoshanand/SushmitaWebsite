import { useEffect, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '../../types/testimonial';

interface ScrollingTestimonialsProps {
  testimonials: Testimonial[];
  speed?: number;
}

export function ScrollingTestimonials({ 
  testimonials,
  speed = 20 
}: ScrollingTestimonialsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const content = scrollerRef.current;
    const clone = content.cloneNode(true) as HTMLDivElement;
    content.parentElement?.appendChild(clone);

    const contentHeight = content.offsetHeight;
    const duration = contentHeight / speed;

    const keyframes = `
      @keyframes scroll {
        0% { transform: translateY(0); }
        100% { transform: translateY(-${contentHeight}px); }
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);

    [content, clone].forEach(element => {
      (element as HTMLDivElement).style.animation = `scroll ${duration}s linear infinite`;
    });

    const container = content.parentElement;
    if (container) {
      container.addEventListener('mouseenter', () => {
        [content, clone].forEach(element => {
          (element as HTMLDivElement).style.animationPlayState = 'paused';
        });
      });

      container.addEventListener('mouseleave', () => {
        [content, clone].forEach(element => {
          (element as HTMLDivElement).style.animationPlayState = 'running';
        });
      });
    }

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [speed, testimonials]);

  return (
    <div 
      className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div 
        ref={scrollerRef}
        className="flex flex-col gap-4 md:gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 md:px-0">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}