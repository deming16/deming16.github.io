import { ReactNode } from "react";

type Props = {
  btnStyle?: string;
  text: ReactNode;
  onClick?: () => void;
};

const BaseButton = ({ btnStyle = "", text, onClick }: Props) => {
  const activeClasses =
    "active:-translate-y-[1px] active:transform active:shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.2)] ";
  const afterClasses =
    "after:z-[-1] after:content-[''] after:inline-block after:w-full after:h-full after:rounded-full after:absolute after:top-0 after:left-0 after:transition-all after:duration-[400ms]";

  const hoverClasses =
    "hover:transform hover:-translate-y-[3px] hover:shadow-[0_1rem_2rem_rgba(0,_0,_0,_0.2)]";
  const hoverAfterClasses =
    "hover:after:transform hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 hover:after:bg-white";
  return (
    <button
      className={`relative inline-block rounded-full px-[4rem] py-[1.9rem] text-[1.6rem] uppercase no-underline transition-all duration-[200ms] ${afterClasses} ${activeClasses} ${hoverClasses} ${hoverAfterClasses} ${btnStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BaseButton;
