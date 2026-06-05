import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full bg-slate-100 transition-all duration-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
      style={{ width: "4rem", height: "4rem" }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <FontAwesomeIcon
        icon={theme === "light" ? faMoon : faSun}
        className="text-slate-600 dark:text-amber-400"
        style={{ fontSize: "1.7rem" }}
      />
    </button>
  );
};

export default ThemeToggle;
