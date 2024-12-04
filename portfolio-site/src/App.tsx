import { useEffect } from "react";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Landing from "./pages/landing/Landing";
import Skills from "./pages/skills/Skills";
//@ts-ignore
import WOW from "wowjs";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="font-roboto text-[1.6rem] font-normal leading-[1.7] text-[#777]">
      <Landing />
      <About />
      <Skills />
      <Experience />
      <div>
        <Education />
      </div>
    </div>
  );
}

export default App;
