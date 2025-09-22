import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { ProductManagementPortfolio } from "@/components/ProductManagement";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (  
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <ProductManagementPortfolio />
        <Skills />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
