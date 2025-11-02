import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesConsulting from "@/components/ServicesConsulting";
import ECommerce from "@/components/ECommerce";
import Values from "@/components/Values";
import FounderNote from "@/components/FounderNote";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <ServicesConsulting />
      <ECommerce />
      <Values />
      <FounderNote />
      <Connect />
      <Footer />
    </main>
  );
};

export default Index;
