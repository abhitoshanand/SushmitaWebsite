import { GraduationCap, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">Get To Know More</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 dark:text-white animate-slide-up">About Me</h2>
      
      <div className={`flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600"
            alt="About"
            className="w-full rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300">
              <Briefcase className="mx-auto mb-3 md:mb-4 dark:text-gray-400" size={28} />
              <h3 className="font-semibold mb-1 md:mb-2 dark:text-white text-sm md:text-base">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">5+ years<br />Home Tuition (class VI to XII)</p>
            </div>
            <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300">
              <GraduationCap className="mx-auto mb-3 md:mb-4 dark:text-gray-400" size={28} />
              <h3 className="font-semibold mb-1 md:mb-2 dark:text-white text-sm md:text-base">Education</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">B.Sc. with Physics Hons.<br />M.Sc.Physics<br/>Bachelor's in Education </p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            As a Physics enthusiast with five years of experience, I specialize in making complex physics concepts accessible and engaging for students. My teaching methodology has evolved significantly, enhanced by my microteaching training during my Bachelor's in Education and a five-month JCERT internship at government schools. The research experience gained through various projects during my B.Sc. and M.Sc. programs has been instrumental in developing effective and comprehensive lesson plans for my students.
          </p>
        </div>
      </div>
    </section>
  );
}