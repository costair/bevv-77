
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <div id="services" className="w-full">
        <Services />
      </div>
      <div id="about" className="w-full">
        <About />
      </div>
      <div id="pricing" className="w-full">
        <Pricing />
      </div>
      <div id="contact" className="w-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
