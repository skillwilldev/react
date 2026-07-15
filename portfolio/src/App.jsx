import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
