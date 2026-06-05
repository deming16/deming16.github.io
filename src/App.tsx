import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
//@ts-ignore
import WOW from "wowjs";
import TopNavigation from "./components/TopNavigation";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  useEffect(() => {
    const updateScrollToTopVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom = scrollTop + viewportHeight >= documentHeight - 120;

      setShowScrollToTop(isNearBottom && scrollTop > viewportHeight * 0.5);
    };

    updateScrollToTopVisibility();
    window.addEventListener("scroll", updateScrollToTopVisibility, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollToTopVisibility);

    return () => {
      window.removeEventListener("scroll", updateScrollToTopVisibility);
      window.removeEventListener("resize", updateScrollToTopVisibility);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div
          className="min-h-screen bg-slate-50 font-roboto font-normal text-slate-600 dark:bg-black dark:text-slate-300"
          style={{ fontSize: "1.75rem", lineHeight: 1.7 }}
        >
          <TopNavigation />
          <main style={{ paddingTop: "8.5rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </main>
          {showScrollToTop && (
            <button
              type="button"
              className="fixed bottom-10 right-10 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg transition-all duration-300 hover:bg-amber-300"
              aria-label="Scroll back to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <ArrowUp aria-hidden="true" className="h-8 w-8" strokeWidth={2.5} />
            </button>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
