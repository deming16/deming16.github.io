import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const TextButton = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn-text inline-block border-b-[0.1rem] border-brand-light-text p-[1rem] text-[1.6rem] text-brand-light-text no-underline transition-all duration-200 hover:translate-y-[-2px] hover:bg-brand-light-text hover:text-brand-light-page hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] active:translate-y-0 active:shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800"
    >
      {children}
    </a>
  );
};

export default TextButton;
