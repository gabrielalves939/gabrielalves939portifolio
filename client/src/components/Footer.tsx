import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { SocialLink } from "@/types";

// Social links data
const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/gabrielalves939", icon: "fa-brands fa-github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gabrielalves939/", icon: "fa-brands fa-linkedin" },
  { name: "Instagram", url: "https://instagram.com/gabrielalves_939", icon: "fa-brands fa-instagram" },
  { name: "Twitter", url: "#", icon: "fa-brands fa-twitter" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-800/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#home" 
              className="text-2xl font-bold"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 dark:from-blue-300 to-cyan-200 animate-pulse">Gabriel</span><span className="text-xl font-light">.Alves</span>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              &copy; {currentYear} Gabriel Alves. Todos os direitos reservados.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:hover:text-primary-400 transition-colors"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                Termos de Uso
              </a>
            </div>
            
            <div>
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400"
              >
                Voltar ao topo
                <ArrowUp className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
