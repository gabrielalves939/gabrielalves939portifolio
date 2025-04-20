import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPING_TEXT, SOCIAL_LINKS } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = TYPING_TEXT;
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      if (typedText.length < fullText.length) {
        timer = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(true);
          setTypedText("");
        }, 2000);
      }
    }
    
    return () => clearTimeout(timer);
  }, [typedText, isTyping]);
  
  // Usando a função utils scrollToElement

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 text-sm font-medium">
              Hello world 👋🏾
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Eu sou <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-300 relative animate-pulse">Gabriel</span>,
            </h1>
            
            <div className="relative h-8 overflow-hidden">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={() => scrollToElement('contact')}
                className="px-6 py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Fale Comigo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-6">
              <a 
                href="https://github.com/gabrielalves939" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/gabrielalves939/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://instagram.com/gabrielalves_939" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full max-w-[500px] mx-auto md:mx-0 md:ml-auto"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full perspective-800">
                {/* Efeito de código de fundo */}
                <motion.div 
                  className="absolute inset-0 -z-10 opacity-20 overflow-hidden rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary-300/40 dark:from-primary-500/40 dark:to-secondary-300/40"></div>
                  <pre className="text-[8px] text-black dark:text-white p-4 font-mono overflow-hidden">
                    {`function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await fetch('/api/projects');
        const json = await data.json();
        setProjects(json);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchProjects();
  }, []);
  
  return (
    <main className="container mx-auto">
      <Hero />
      <About />
      <ProjectList projects={projects} />
      <Skills />
      <Contact />
    </main>
  );
}`}
                  </pre>
                </motion.div>
                
                {/* Laptop/Notebook com efeito 3D */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotateX: 15, rotateY: -20 }}
                  animate={{ rotateX: [15, 5, 15], rotateY: [-10, 5, -10] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative w-[85%] mx-auto">
                    {/* Tela */}
                    <motion.div 
                      className="rounded-t-xl bg-gray-800 border-4 border-gray-700 overflow-hidden aspect-[16/10] relative shadow-xl"
                      animate={{ boxShadow: ["0 10px 25px rgba(0,0,0,0.2)", "0 15px 35px rgba(0,0,0,0.3)", "0 10px 25px rgba(0,0,0,0.2)"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Conteúdo da tela */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-2">
                        {/* Barra de navegação do editor */}
                        <div className="flex items-center h-5 bg-gray-800 rounded-t mb-1">
                          <div className="flex space-x-1 ml-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="mx-auto text-[6px] text-gray-400">hero.jsx - VS Code</div>
                        </div>
                        
                        {/* Código animado simplificado */}
                        <motion.div 
                          className="text-[7px] font-mono text-white h-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        >
                          <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [-120, 0, -60, -30, -90, -120] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <div className="text-blue-400">import React from 'react';</div>
                            <div className="text-blue-400">import &#123; motion &#125; from 'framer-motion';</div>
                            <div className="text-white"> </div>
                            <div><span className="text-purple-400">const</span> <span className="text-yellow-300">Hero</span> <span className="text-white">= () =&gt; &#123;</span></div>
                            <div><span className="text-purple-400">  return</span> <span className="text-white">(</span></div>
                            <div><span className="text-white">    &lt;</span><span className="text-red-400">motion.div</span></div>
                            <div><span className="text-white">      </span><span className="text-cyan-300">initial</span><span className="text-white">&#123;&#123; opacity: 0 &#125;&#125;</span></div>
                            <div><span className="text-white">      </span><span className="text-cyan-300">animate</span><span className="text-white">&#123;&#123; opacity: 1 &#125;&#125;</span></div>
                            <div><span className="text-white">      </span><span className="text-cyan-300">className</span><span className="text-white">="container"&gt;</span></div>
                            <div><span className="text-white">      &lt;</span><span className="text-red-400">h1</span><span className="text-white">&gt;Gabriel Alves&lt;/</span><span className="text-red-400">h1</span><span className="text-white">&gt;</span></div>
                            <div><span className="text-white">      &lt;</span><span className="text-red-400">p</span><span className="text-white">&gt;Desenvolvedor Web&lt;/</span><span className="text-red-400">p</span><span className="text-white">&gt;</span></div>
                            <div><span className="text-white">    &lt;/</span><span className="text-red-400">motion.div</span><span className="text-white">&gt;</span></div>
                            <div><span className="text-white">  );</span></div>
                            <div><span className="text-white">&#125;;</span></div>
                            <div className="text-white"> </div>
                            <div><span className="text-blue-400">export default</span><span className="text-white"> Hero;</span></div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Base do notebook */}
                    <div className="h-3 bg-gray-700 rounded-b-md mx-auto w-[95%]"></div>
                    <div className="h-1 bg-gray-800 rounded-b-2xl mx-auto w-[90%]"></div>
                  </div>
                </motion.div>
                
                {/* Elementos flutuantes */}
                <motion.div 
                  className="absolute right-0 top-10 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, y: [-5, 5, -5] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.8 },
                    x: { duration: 0.5, delay: 0.8 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                >
                  <div className="w-10 h-10 bg-amber-400 rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-js text-lg"></i>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute right-16 top-[60%] p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, y: [-8, 8, -8] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1 },
                    x: { duration: 0.5, delay: 1 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-react text-lg"></i>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute left-10 bottom-20 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, x: [-5, 5, -5] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1.2 },
                    y: { duration: 0.5, delay: 1.2 },
                    x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 } 
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-css3-alt text-lg"></i>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute right-2 bottom-10 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [-7, 7, -7] }}
                  transition={{ 
                    scale: { duration: 0.5, delay: 1.4 },
                    opacity: { duration: 0.5, delay: 1.4 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
                  }}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-html5 text-lg"></i>
                  </div>
                </motion.div>
                
                {/* Partículas de código */}
                <motion.div 
                  className="absolute bottom-3 left-5 w-2 h-2 bg-primary rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: -50,
                    x: 20 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
                
                <motion.div 
                  className="absolute top-20 right-10 w-3 h-3 bg-secondary-500 rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: 70,
                    x: -30 
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-40 right-5 w-2 h-2 bg-amber-400 rounded-full"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    y: -40,
                    x: -20 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    delay: 2
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
