import { useInView } from 'react-intersection-observer';
import { TestimonialCard } from './TestimonialCard';
import { testimonialData } from '../data/testimonials';

export function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        What My Students Say
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Testimonials
      </h2>

      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}