import { LanguageProvider } from "./context/Language";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/contact";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-paper font-sans text-ink antialiased selection:bg-accent selection:text-ink">
        <Background />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
