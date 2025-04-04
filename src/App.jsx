import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { PracticalSkills } from "./components/PracticalSkills/PracticalSkills";

function App() {
  return (
    <div className="px-6 py-4 backdrop-filter backdrop-blur-lg bg-[#04011C]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <PracticalSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
