import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Knowledge from "@/components/Knowledge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen transition-colors duration-300 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
