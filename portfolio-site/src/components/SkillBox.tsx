import { ReactNode } from "react";

type Props = {
  header: string;
  current: ReactNode;
  previous: ReactNode;
  icon: ReactNode;
};

const SkillBox = ({ header, current, previous, icon }: Props) => {
  return (
    <div className="wow fadeInUp">
      <div className="rounded-[3px] bg-white bg-opacity-80 p-[2.5rem] text-center text-xl shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-transform duration-300">
        {icon}
        <div className="mb-6 text-[1.6rem] font-bold uppercase">{header}</div>
        <div className="mx-auto w-full list-none">
          <ul>
            <li>
              <b>Currently Using:</b> {current}
            </li>
            <li>
              <b>Previously Used:</b>
              {previous}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
