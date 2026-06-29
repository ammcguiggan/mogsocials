import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
