import { useEffect } from "react";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Landing from "./pages/landing/Landing";
import Skills from "./pages/skills/Skills";
//@ts-ignore
import WOW from "wowjs";
import Navigation from "./components/Navigation";
import { initTypeWriter } from "./scripts/typewriter";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    initTypeWriter();
  }, []);
  return (
    <div className="font-roboto text-[1.6rem] font-normal leading-[1.7] text-[#777]">
      <Navigation />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <div>
        <Education />
      </div>
      <div className="mt-40 h-[4rem] bg-black text-center text-white">
        2017 - 2024 Deming Lin
      </div>
    </div>
  );
}

export default App;
