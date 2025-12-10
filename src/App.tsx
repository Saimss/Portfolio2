import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeBackground from './components/ThemeBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900  to-slate-900">
      <ThemeBackground />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
