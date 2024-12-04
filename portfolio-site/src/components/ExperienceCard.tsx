import { ExperienceDetail } from "../typings/common";

type Props = {
  details: ExperienceDetail;
};

const ExperienceCard = ({ details }: Props) => {
  const { title, company, location, description, date, pointers } = details;
  return (
    <div className="wow fadeInUp">
      <div className="experience mx-auto mt-4 w-full p-[4rem] px-[9rem] text-[1.6rem] shadow-[0_0rem_1rem_rgba(0,0,0,0.1)]">
        <div className="text-[2.8rem] text-[#2e3830]">{title}</div>
        <p className="mb-6">
          <b>{company}</b> - {location}
        </p>
        <p>
          <b>{description}</b>
        </p>
        <ul>
          {pointers.map((pointer) => (
            <li>- {pointer}</li>
          ))}
        </ul>
        <p className="pt-6 text-right">{date}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
