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
              Eu sou <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary dark:from-primary-400 to-secondary-500">Gabriel</span>,
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
                className="px-6 py-6 bg-primary hover:bg-primary/90 text-white"
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
          >
            <div className="absolute inset-0 flex items-center justify-center transform transition-all duration-700 hover:scale-105">
              <div className="relative w-full h-full">
                <motion.img 
                  src="/assets/images/notebook.png" 
                  alt="Notebook com código" 
                  className="absolute z-10 top-0 left-0 w-[80%] rounded-lg shadow-xl"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Floating Code Elements */}
                <motion.div 
                  className="absolute right-5 top-20 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-amber-400 rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-js text-lg"></i>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute right-20 top-40 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, delay: 0.5, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-react text-lg"></i>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute right-0 bottom-20 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 opacity-90"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, delay: 1, repeat: Infinity }}
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white">
                    <i className="fa-brands fa-html5 text-lg"></i>
                  </div>
                </motion.div>

                <motion.img 
                  src="/assets/images/vidro.png" 
                  alt="Estilhaços de vidro" 
                  className="absolute z-10 top-10 right-0 w-[60%]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
