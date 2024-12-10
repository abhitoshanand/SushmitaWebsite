import { Quote } from 'lucide-react';
import type { Testimonial } from '../../types/testimonial';

export function TestimonialCard({ name, grade, image, text }: Testimonial) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 mx-auto max-w-2xl">
      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{text}</p>
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold dark:text-white text-sm sm:text-base">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{grade}</p>
        </div>
      </div>
    </div>
  );
}