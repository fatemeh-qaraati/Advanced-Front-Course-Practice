import Header from "..//src//components//Header//Header.jsx";
import About from "..//src//components//About//About.jsx";
import Contact from "..//src//components//Contact//Contact.jsx";
import Skill from "..//src//components//Skill//Skill.jsx";
import Education from "..//src//components//Education//Education.jsx";
import Experience from "..//src//components//Experience//Experience.jsx";
import Project from "..//src//components//Project//Project.jsx";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <Header />

      <div className="rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6 lg:flex-row">
        <div className="order-2 flex w-full md:w-1/2 md:order-none  lg:max-w-sm">
          <div className="p-6 flex-1">
            <Contact />
            <Skill />
            <Education />
          </div>
        </div>

        <div className="flex-1 ml-6">
          <About />
          <Experience />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
