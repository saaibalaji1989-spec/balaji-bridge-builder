import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Connect from "@/components/Connect";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Connect />
    </main>
  );
};

export default Index;
