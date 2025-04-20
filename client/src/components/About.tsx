import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto">
                <img 
                  src="/assets/images/gabrielimglinkedin.jpeg" 
                  alt="Gabriel Alves" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -right-4 -bottom-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary dark:from-primary-400 to-secondary-500 bg-clip-text text-transparent">4+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">anos de experiência</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 text-sm font-medium">
              Sobre mim
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Transformando ideias em <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary dark:from-primary-400 to-secondary-500">soluções práticas</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Apaixonado por tecnologia e inovação, Formado como Engenheiro da Computação com expertise em 
              desenvolvimento Fullstack e experiência em vendas. Minha trajetória combina habilidades técnicas 
              e estratégicas, focando em transformar ideias em soluções práticas e conectando tecnologia às 
              necessidades do mercado. Sempre motivado pelo aprendizado contínuo, estou pronto para agregar valor 
              em ambientes dinâmicos e desafiadores.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary dark:text-primary-400">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projetos Completos</div>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary dark:text-primary-400">5+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Tecnologias Dominadas</div>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary dark:text-primary-400">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Certificações</div>
              </motion.div>
            </div>
            
            <div className="pt-4">
              <Button
                variant="outline"
                className="px-5 py-6 border-primary dark:border-primary-400 text-primary dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => scrollToSection('projects')}
              >
                Ver meus projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
