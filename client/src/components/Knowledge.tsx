import { motion } from "framer-motion";
import { Code, Server, Smartphone } from "lucide-react";
import { SkillCategory, Technology } from "@/types";

// Skill categories data
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Criação de interfaces responsivas, modernas e otimizadas para máxima performance.",
    icon: "code",
    iconBgClass: "bg-primary-100 dark:bg-primary-900/30",
    iconColorClass: "text-primary dark:text-primary-400",
    skills: [
      { name: "HTML5 & CSS3", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "React", percentage: 85 },
      { name: "TailwindCSS", percentage: 80 }
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Desenvolvimento de APIs e serviços web com foco em performance e escalabilidade.",
    icon: "server",
    iconBgClass: "bg-secondary-100 dark:bg-secondary-900/30",
    iconColorClass: "text-secondary-600 dark:text-secondary-400",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express", percentage: 80 },
      { name: "MongoDB", percentage: 75 },
      { name: "Firebase", percentage: 70 }
    ]
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Criação de aplicativos móveis performáticos e intuitivos para iOS e Android.",
    icon: "smartphone",
    iconBgClass: "bg-purple-100 dark:bg-purple-900/30",
    iconColorClass: "text-purple-600 dark:text-purple-400",
    skills: [
      { name: "React Native", percentage: 80 },
      { name: "Swift", percentage: 60 },
      { name: "Flutter", percentage: 65 },
      { name: "Kotlin", percentage: 50 }
    ]
  }
];

// Technology icons data
const technologies: Technology[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
];

// Helper function to render the appropriate icon
const renderIcon = (iconName: string, colorClass: string) => {
  switch (iconName) {
    case "code":
      return <Code className={`text-xl ${colorClass}`} />;
    case "server":
      return <Server className={`text-xl ${colorClass}`} />;
    case "smartphone":
      return <Smartphone className={`text-xl ${colorClass}`} />;
    default:
      return <Code className={`text-xl ${colorClass}`} />;
  }
};

export default function Knowledge() {
  return (
    <section id="knowledge" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 text-sm font-medium">
            Minhas Habilidades
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Conhecimentos <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary dark:from-primary-400 to-secondary-500">& Tecnologias</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Tecnologias e frameworks com os quais já trabalhei e continuo estudando.
          </p>
        </motion.div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-lg ${category.iconBgClass} flex items-center justify-center mb-4`}>
                {renderIcon(category.icon, category.iconColorClass)}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-5">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full ${
                          category.id === 1 ? 'bg-primary dark:bg-primary-500' :
                          category.id === 2 ? 'bg-secondary-600 dark:bg-secondary-500' :
                          'bg-purple-600 dark:bg-purple-500'
                        }`}
                        style={{ width: `${skill.percentage}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Technology Icons */}
        <div className="py-8">
          <h3 className="text-xl font-bold mb-8 text-center">Tecnologias que utilizo</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="tech-item flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                <span className="mt-2 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
