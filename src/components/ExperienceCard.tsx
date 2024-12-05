import { ExperienceDetail } from "../typings/common";

type Props = {
  details: ExperienceDetail;
};

const ExperienceCard = ({ details }: Props) => {
  const { title, company, location, description, date, pointers, techStack } =
    details;
  return (
    <div className="wow fadeInUp">
      <div className="experience mx-auto mt-4 w-full p-[4rem] px-[5rem] text-[1.3rem] shadow-[0_0rem_1rem_rgba(0,0,0,0.1)] lg:px-[9rem] lg:text-[1.6rem]">
        <div className="text-[2.8rem] text-[#2e3830]">{title}</div>
        <div className="mb-2 flex justify-between">
          <div>
            <b>{company}</b> - {location}
          </div>
          <div className="font-bold">{date}</div>
        </div>
        <div className="font-bold">{description}</div>
        {pointers.map((pointer) => (
          <div key={pointer}>- {pointer}</div>
        ))}
        <div className="flex flex-wrap">
          {techStack.map((stack) => (
            <div
              key={stack}
              className="font-roboto-mono mr-4 mt-4 min-w-[36px] rounded-[20px] bg-black px-3 py-2 text-center text-xl text-white shadow-[0_2px_4px_rgb(55_71_79/_20%)]"
            >
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
