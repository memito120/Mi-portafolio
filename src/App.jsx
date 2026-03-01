import { useDarkMode } from './hooks/useDarkMode';
import { DarkModeToggle } from './components/sections/DarkModeToggle';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen">
      {/* Botón de modo oscuro flotante */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      {/* Secciones principales */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

