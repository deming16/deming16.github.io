import { ReactNode } from "react";

type Props = {
  btnStyle?: string;
  insetStyle?: string;
  text: ReactNode;
};

const BaseButton = ({ btnStyle = "", insetStyle = "", text }: Props) => {
  return (
    <button
      className={`btn relative inline-block rounded-full px-[4rem] py-[1.5rem] text-sm uppercase text-[#000] no-underline transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.2)] active:translate-y-[-1px] active:shadow-[0_.5rem_1rem_rgba(0,0,0,0.2)] ${btnStyle}`}
    >
      <span
        className={`duration-400 absolute inset-0 z-[-1] scale-x-[1.4] scale-y-[1.6] transform rounded-full bg-white opacity-0 transition-all ${insetStyle}`}
      ></span>
      {text}
    </button>
  );
};

export default BaseButton;
