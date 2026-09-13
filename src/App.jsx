import Contacts from "./Components/Contacts/Contacts";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full">
      <Navbar />
      <div className="overflow-x-hidden">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;