import { ReactNode } from "react";

type Props = {
  btnStyle?: string;
  insetStyle?: string;
  text: ReactNode;
};

const BaseButton = ({ btnStyle = "", insetStyle = "", text }: Props) => {
  return (
    <button
      className={`btn relative inline-block text-[#000] text-sm uppercase no-underline px-[4rem] py-[1.5rem] rounded-full transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.2)] active:translate-y-[-1px] active:shadow-[0_.5rem_1rem_rgba(0,0,0,0.2)] ${btnStyle}`}
    >
      <span
        className={`absolute inset-0 rounded-full transition-all duration-400 bg-white opacity-0 transform scale-x-[1.4] scale-y-[1.6] z-[-1] ${insetStyle}`}
      ></span>
      {text}
    </button>
  );
};

export default BaseButton;
