import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send, Phone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato, retornarei em breve.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 text-sm font-medium">
              Contato
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Vamos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-300 animate-pulse">conversar!</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Estou em busca de novas oportunidades de trabalho e disponível para entrevistas.
              Entre em contato para conversarmos sobre como posso contribuir com a sua empresa!
            </p>
            
            <div className="space-y-4 pt-4">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Mail className="text-primary dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Phone className="text-primary dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Telefone</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <MapPin className="text-primary dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Localização</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Linkedin className="text-primary dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">LinkedIn</h3>
                  <a 
                    href={SOCIAL_LINKS[1].url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400"
                  >
                    /gabrielalves939
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                  <Github className="text-primary dark:text-primary-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">GitHub</h3>
                  <a 
                    href={SOCIAL_LINKS[0].url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400"
                  >
                    github.com/gabrielalves939
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome completo
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Assunto
                  </Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                    placeholder="Oportunidade de trabalho"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
