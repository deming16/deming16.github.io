import { ReactNode } from "react";

type Props = {
  header: string;
  current: string[];
  previous: string[];
  icon: ReactNode;
};

const SkillBox = ({ header, current, previous, icon }: Props) => {
  return (
    <div className="wow fadeInUp">
      <div className="h-80 rounded-[3px] bg-white bg-opacity-80 p-[2.5rem] text-center text-xl shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-transform duration-300">
        {icon}
        <div className="mt-6 text-[1.6rem] font-bold uppercase">{header}</div>
        <div className="x-auto mt-4 w-full list-none">
          <div>
            <b>I'm okay with:</b> {current.join(" · ")}
          </div>
          <div className="mt-2">
            <b>I have dabbled with: </b>
            {previous.join(" · ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
