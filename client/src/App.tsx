import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Função para verificar se está em produção (GitHub Pages)
const isProduction = () => {
  return import.meta.env.MODE === 'production';
}

// Hook para configurar o base path para GitHub Pages
const useBasePath = () => {
  const basePath = isProduction() ? '/gabrielalves939portifolio' : '';
  
  // Use um custom baseLocation para o wouter
  const [location, setLocation] = useLocation({ 
    base: basePath 
  });
  
  return { location, setLocation, basePath };
}

function Router() {
  const { basePath } = useBasePath();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
