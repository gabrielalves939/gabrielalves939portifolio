import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  BIO, 
  EDUCATION, 
  EXPERIENCE 
} from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Profile and Bio */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
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
                  src="/assets/images/gabriel-profile.png" 
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
                <div className="text-3xl font-bold bg-gradient-to-r from-primary dark:from-primary-400 to-secondary-300 bg-clip-text text-transparent">4+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 dark:from-blue-300 to-blue-100 dark:to-blue-100 animate-pulse">Sobre mim</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {BIO}
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
                className="px-5 py-6 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all duration-300"
                onClick={() => scrollToElement('projects')}
              >
                Ver meus projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Experience and Education Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Experience Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="experience" className="border-none">
              <AccordionTrigger className="py-6 px-8 bg-gray-800/90 dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-700 text-white rounded-xl font-medium text-xl flex items-center shadow-md transition-all duration-300 hover:shadow-blue-800/20 hover:shadow-xl group hover:scale-[1.01] motion-safe:animate-subtle-pulse">
                <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  <Briefcase className="mr-3 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 group-hover:from-blue-300 group-hover:to-white transition-colors">Experiência Profissional</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-8 pb-2">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
                  {EXPERIENCE.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-700 bg-primary dark:bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        {index + 1}
                      </div>
                      
                      <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-lg text-primary dark:text-primary-400">{exp.role}</div>
                          <Badge className="bg-primary/10 dark:bg-primary-900/30 text-primary dark:text-primary-400 hover:bg-primary/20 dark:hover:bg-primary-900/40">
                            {exp.duration}
                          </Badge>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 mb-2">{exp.company}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Education Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="education" className="border-none">
              <AccordionTrigger className="py-6 px-8 bg-gray-800/90 dark:bg-gray-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-700 text-white rounded-xl font-medium text-xl flex items-center shadow-md transition-all duration-300 hover:shadow-blue-800/20 hover:shadow-xl group hover:scale-[1.01] motion-safe:animate-subtle-pulse">
                <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  <GraduationCap className="mr-3 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 group-hover:from-blue-300 group-hover:to-white transition-colors">Formação Acadêmica</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-8 pb-2">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-600 before:to-transparent">
                  {EDUCATION.map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-700 bg-secondary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      
                      <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-lg text-secondary-600 dark:text-secondary-400">{edu.degree}</div>
                          {edu.inProgress && (
                            <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200">
                              Em andamento
                            </Badge>
                          )}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 mb-2">{edu.institution}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
