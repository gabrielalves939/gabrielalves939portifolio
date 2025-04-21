import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCategory, Project } from "@/types";
import { cn } from "@/lib/utils";

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Um e-commerce completo com sistema de pagamentos, gestão de produtos e dashboard administrativo.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    category: "web",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/gabrielalves939",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Aplicativo móvel para registro de atividades físicas, dieta e progresso de exercícios.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com/gabrielalves939",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Dashboard UI Redesign",
    description: "Redesign completo da interface de usuário de um dashboard administrativo para uma startup.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    category: "ui",
    tags: ["Figma", "Adobe XD", "Prototype"],
    githubUrl: "https://github.com/gabrielalves939",
    liveUrl: "#"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  
  const filterProjects = (category: ProjectCategory) => {
    setActiveFilter(category);
  };
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 text-sm font-medium">
            Meus Projetos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Projetos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 dark:from-blue-300 to-blue-100 dark:to-blue-100 animate-pulse">Em Destaque</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Confira alguns dos meus trabalhos mais recentes e interessantes.
          </p>
        </motion.div>
        
        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className={cn(
              "rounded-full text-sm",
              activeFilter === "all" ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500" : ""
            )}
            onClick={() => filterProjects("all")}
          >
            Todos
          </Button>
          <Button
            variant={activeFilter === "web" ? "default" : "outline"}
            className={cn(
              "rounded-full text-sm",
              activeFilter === "web" ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500" : ""
            )}
            onClick={() => filterProjects("web")}
          >
            Web Development
          </Button>
          <Button
            variant={activeFilter === "mobile" ? "default" : "outline"}
            className={cn(
              "rounded-full text-sm",
              activeFilter === "mobile" ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500" : ""
            )}
            onClick={() => filterProjects("mobile")}
          >
            Mobile Apps
          </Button>
          <Button
            variant={activeFilter === "ui" ? "default" : "outline"}
            className={cn(
              "rounded-full text-sm",
              activeFilter === "ui" ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500" : ""
            )}
            onClick={() => filterProjects("ui")}
          >
            UI/UX Design
          </Button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={cn(
                      project.category === "web" && "bg-primary",
                      project.category === "mobile" && "bg-secondary-500",
                      project.category === "ui" && "bg-purple-600"
                    )}>
                      {project.category === "web" && "Web"}
                      {project.category === "mobile" && "Mobile"}
                      {project.category === "ui" && "UI/UX"}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.liveUrl} 
                      className="text-primary dark:text-primary-400 hover:text-primary/80 dark:hover:text-primary-300 font-medium text-sm flex items-center"
                    >
                      Ver projeto <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-6 py-6 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10"
          >
            Ver todos os projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
