import { act, ReactNode } from "react";

type Props = {
  btnStyle?: string;
  insetStyle?: string;
  text: ReactNode;
};

const BaseButton = ({ btnStyle = "", insetStyle = "", text }: Props) => {
  const activeClasses =
    "active:-translate-y-[1px] active:transform active:shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.2)] ";
  const afterClasses =
    "after:relative after:z-[-1] after:content-[''] after:inline-block after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:transition-all after:duration-[400ms]";

  const hoverClasses =
    "hover:transform hover:-translate-y-[3px] hover:shadow-[0_1rem_2rem_rgba(0,_0,_0,_0.2)]";
  const hoverAfterClasses =
    "hover:after:transform hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 hover:after:bg-white";
  return (
    <a
      href="https://lindeming.com/#home"
      className={`relative inline-block rounded-full px-[4rem] py-[1.5rem] text-[1.6rem] uppercase no-underline transition-all duration-[200ms] ${afterClasses} ${activeClasses} ${hoverClasses} ${hoverAfterClasses} ${btnStyle}`}
    >
      {text}
    </a>
    // <button
    //   className={`relative inline-block rounded-full px-[4rem] py-[1.5rem] text-sm uppercase text-[#000] no-underline transition-all duration-200 hover:translate-y-[-3px] hover:transform hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.2)] hover:after:bg-white active:translate-y-[-1px] active:shadow-[0_.5rem_1rem_rgba(0,0,0,0.2)] ${btnStyle}`}
    // >
    //   <span
    //     className={`duration-400 absolute inset-0 z-[-1] scale-x-[1.4] scale-y-[1.6] transform rounded-full bg-white opacity-0 transition-all ${insetStyle}`}
    //   ></span>
    //   {text}
    // </button>
  );
};

export default BaseButton;
