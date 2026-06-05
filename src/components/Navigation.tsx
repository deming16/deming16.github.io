import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavigationIcon = ({ isShow }: { isShow: boolean }) => {
  return (
    <label
      htmlFor="navi-toggle"
      className={`group fixed right-[6rem] top-[6rem] z-[2000] flex h-[7rem] w-[7rem] cursor-pointer items-center justify-center rounded-full bg-white text-center shadow-[0_1rem_3rem_rgba(0,0,0,0.1)] dark:bg-slate-700`}
    >
      <span
        className={`relative mt-0 inline-block h-[2px] w-[3rem] bg-[#333] before:absolute before:left-0 before:inline-block before:h-[2px] before:w-[3rem] before:bg-[#333] before:transition-all before:duration-200 after:absolute after:left-0 after:inline-block after:h-[1px] after:w-[3rem] after:bg-[#333] after:transition-all after:duration-200 dark:bg-white dark:before:bg-white dark:after:bg-white ${isShow ? "bg-transparent before:top-0 before:rotate-[135deg] after:top-0 after:rotate-[-135deg]" : "before:top-[-0.8rem] after:top-[0.8rem] group-hover:before:top-[-1rem] group-hover:after:top-[1rem]"} `}
      >
        &nbsp;
      </span>
    </label>
  );
};

const NavigationItem = ({
  href,
  text,
  onSelect,
}: {
  href: string;
  text: string;
  onSelect: () => void;
}) => {
  const hoverClasses = `hover:bg-[position:100%] hover:text-black hover:transform hover:translate-x-[1rem] dark:hover:text-white`;
  const classes = `inline-block bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_#fff_50%)] bg-[length:250%] px-[2rem] py-[1rem] text-[3rem] font-[300] uppercase text-white no-underline transition-all duration-[400ms] dark:bg-[linear-gradient(120deg,_transparent_0%,_transparent_50%,_#1e293b_50%)]`;
  return (
    <li className={`m-[1rem]`} onClick={onSelect}>
      <a href={href} className={`${classes} ${hoverClasses}`}>
        {text}
      </a>
    </li>
  );
};

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  const onSelect = () => setIsShow(false);
  return (
    <div>
      <input
        id="navi-toggle"
        type="checkbox"
        className="hidden"
        checked={isShow}
        onChange={(e) => {
          setIsShow(e.target.checked);
        }}
      />

      <NavigationIcon isShow={isShow} />

      {/* Theme Toggle Button */}
      <div className="fixed right-[13rem] top-[6.5rem] z-[2000]">
        <ThemeToggle />
      </div>

      <div
        className={`fixed right-[6.5rem] top-[6.5rem] z-[1000] h-[6rem] w-[6rem] rounded-full bg-black transition-transform duration-[800ms] ease-[cubic-bezier(0.86,_0,_0.07,_1)] dark:bg-slate-600 ${isShow ? "scale-[80] transform" : ""}`}
      >
        &nbsp;
      </div>

      <nav
        className={`fixed right-0 top-0 h-screen transition-all duration-[800ms] ease-[cubic-bezier(0.68,_-0.55,_0.265,_1.55)] ${isShow ? "z-[1500] w-full opacity-100" : "z-[-1] w-0 opacity-0"}`}
      >
        <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform list-none text-center">
          <NavigationItem href="#home" text="Home" onSelect={onSelect} />
          <NavigationItem
            href="#experience"
            text="Experience"
            onSelect={onSelect}
          />
          <NavigationItem href="#projects" text="Projects" onSelect={onSelect} />
          <NavigationItem
            href="#education"
            text="Education & Certifications"
            onSelect={onSelect}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
