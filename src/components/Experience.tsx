import { useInView } from 'react-intersection-observer';

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Teaching Intern',
      period: 'Nov 2023 - Present',
      organization: 'High School Asanbani, Jamshedpur (JCERT Government Affiliated)',
      achievements: [
        'Supported foundational English language skills for students with limited exposure to English outside the classroom, adhering to the JCERT curriculum.',
        'Developed lesson plans that were accessible and engaging, emphasizing reading, writing, grammar, and comprehension.',
        'Assessed student progress, provided constructive feedback.'
      ]
    },
    {
      title: 'Micro-teaching Workshop',
      period: 'Oct 2023 - Nov 2023',
      organization: 'Jamshedpur Co-Operative College, Jamshedpur, Jharkhand',
      achievements: [
        'Participated in hands-on teaching sessions focused on essential teaching techniques, including effective questioning, classroom management, and time management.',
        'Practiced delivering short, targeted lessons and refined competencies in adapting lessons for diverse learners through peer feedback and observation.'
      ]
    },
    {
      title: 'English Tutor',
      period: 'Feb 2019 - Mar 2023',
      organization: 'Disha Institute of Education, Jamshedpur, Jharkhand',
      achievements: [
        'Instructed students in reading comprehension, writing, grammar, and vocabulary, fostering communication and analytical skills through carefully designed lesson plans.',
        'Provided constructive feedback through regular assessments, integrated diverse resources, and collaborated with faculty to support student development.',
        'Engaged with parents and guided students in effective study habits, promoting academic integrity and a love for literature and language.'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        My Journey
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Experience & Internships
      </h2>

      <div className={`max-w-4xl mx-auto space-y-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
            </div>
            {exp.organization && (
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.organization}</p>
            )}
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
