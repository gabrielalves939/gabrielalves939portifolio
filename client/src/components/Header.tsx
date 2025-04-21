import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity animate-pulse"
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 dark:from-blue-300 to-blue-100 dark:to-blue-100">Gabriel</span><span className="text-xl font-light">.Alves</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection('about')}
            >
              Sobre
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              Projetos
            </a>
            <a 
              href="#knowledge" 
              className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection('knowledge')}
            >
              Conhecimentos
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-primary dark:hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Contato
            </a>
            
            {/* Dark/Light Toggle */}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              {theme === 'light' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-blue-300" />
              )}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 py-4"
            >
              <div className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => scrollToSection('about')}
                >
                  Sobre
                </a>
                <a 
                  href="#projects" 
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => scrollToSection('projects')}
                >
                  Projetos
                </a>
                <a 
                  href="#knowledge" 
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => scrollToSection('knowledge')}
                >
                  Conhecimentos
                </a>
                <a 
                  href="#contact" 
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  Contato
                </a>
                
                <div className="border-t dark:border-gray-800 pt-4 mt-2">
                  <div className="flex space-x-4 px-4">
                    <a 
                      href="https://github.com/gabrielalves939" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-primary dark:hover:text-primary-400"
                    >
                      <i className="fa-brands fa-github text-xl"></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/gabrielalves939/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-primary dark:hover:text-primary-400"
                    >
                      <i className="fa-brands fa-linkedin text-xl"></i>
                    </a>
                    <a 
                      href="https://instagram.com/gabrielalves_939" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-primary dark:hover:text-primary-400"
                    >
                      <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                    
                    {/* Mobile Dark/Light Toggle */}
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="ml-auto rounded-full border-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      onClick={toggleTheme}
                      aria-label={theme === 'light' ? "Ativar modo escuro" : "Ativar modo claro"}
                    >
                      {theme === 'light' ? (
                        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
                      ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-300" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
