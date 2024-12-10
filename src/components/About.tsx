import { GraduationCap, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">Get To Know More</p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">About Me</h2>
      
      <div className={`flex flex-col md:flex-row gap-12 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        
        
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300">
              <Briefcase className="mx-auto mb-4 dark:text-gray-400" size={32} />
              <h3 className="font-semibold mb-2 dark:text-white">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">5+ years of<br />experience in fostering literacy, communication, and critical thinking skills among students</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300">
              <GraduationCap className="mx-auto mb-4 dark:text-gray-400" size={32} />
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">B.A in English Language and Literature<br />M.A in English Language and Literature<br/>Bachelor of Education </p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Dedicated English teacher with over 5 years of experience in fostering literacy, communication, and critical thinking skills among students. Known for creating engaging, student-centered lessons tailored to diverse learning needs. Strengths include curriculum development, classroom management, and integrating technology to enhance learning. Committed to inspiring a love for reading and language, nurturing students' confidence and communication abilities, and driving measurable improvements in academic performance.
          </p>
        </div>
      </div>
    </section>
  );
}
