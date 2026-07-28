import Hero from "./Sections/Hero";
import { Toaster } from "react-hot-toast";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
