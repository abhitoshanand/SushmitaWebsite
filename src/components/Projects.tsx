import { Book } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedAbstract, setSelectedAbstract] = useState<string | null>(null);

  const projects = [
    {
      title: 'Recasting myth, Cyberculture & Posthumanism in Manjula Padmanabhan’s – Harvest',
      description: 'This study explores women, violence, and hysteria as semiotic elements in Indian feminist theatre, analyzing gender politics and representation.',
      image: '/71vtFSHR1GL._AC_UF1000,1000_QL80__Nero AI_Photo_Face (1).jpeg',
      abstract: 'This study examines the semiotic interplay of women, violence, and hysteria in contemporary Indian feminist theatre, with particular focus on the dramatic works of Padmanabhan, Mehta, and Sengupta. Through a theoretical framework that synthesizes theatre semiotics with feminist semiotic theory, the research investigates how these playwrights deploy theatrical signs to articulate gender politics and cultural resistance. The analysis demonstrates how the triumvirate of woman as emblematic ideology, violence as suppression, and hysteria as dramatic outburst collectively constructs a unified semiotic system that illuminates feminist theatrical aesthetics. The study employs Brechtian concepts of gestus and alienation effect to examine how female dramatists translate corporeal presence into political discourse. By analyzing the semiotization of female performers physical attributes alongside their mimetic and representational capabilities, the research reveals how women-centric plays decode social hierarchies and cultural paradigms. Drawing upon Elaine Astons theatre semiotics and contemporary feminist theory, the paper explores how the intersection of theatrical and feminist semiotic approaches generates new methodologies for understanding gender representation in performance. The findings suggest that Indian womens dramaturgy uniquely deploys semiotic elements to create a demonstrable approach for unearthing textual meanings and their relational politics of representation. This research contributes to the growing discourse on feminist theatre by highlighting how the strategic deployment of theatrical signs can effectively challenge patriarchal ideologies while establishing new paradigms for female representation in contemporary theatre.'
        },
    {
      title: 'Understanding the Principles of Growth and Development of Children in Education',
      description: 'This project explores principles of growth and development of children, emphasizing their importance in shaping effective educational strategies.',
      image: '/Pic2project.jpg',
      abstract: `Growth and development are fundamental processes in the life of every individual, often discussed together but distinctly different. Growth refers to the physical changes in an individual, such as height, weight, and size, while development encompasses the overall changes in structure, function, and behavior. A teacher's understanding of these processes is crucial for effectively stimulating a child's growth and development. Growth is a quantitative process, starting from conception and ceasing at a particular age, while development is both qualitative and quantitative, continuing throughout life. Various principles govern these processes, including continuity, integration, individual differences, and the interaction between heredity and environment. These principles guide teachers in creating conducive learning environments, recognizing individual needs, and fostering well-rounded development. Understanding these principles helps educators address developmental challenges and plan educational experiences that cater to children's physical, cognitive, and emotional growth. Through this knowledge, teachers can promote balanced development and maximize each child's potential.`,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 dark:bg-gray-900" ref={ref}>
      <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mb-2 animate-fade-in">
        Browse My Research
      </p>
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white animate-slide-up">
        Projects
      </h2>

      <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
              <button
                onClick={() => setSelectedAbstract(selectedAbstract === project.title ? null : project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <Book className="w-4 h-4" />
                {selectedAbstract === project.title ? 'Hide Abstract' : 'Read Abstract'}
              </button>
              {selectedAbstract === project.title && (
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {project.abstract}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
