import { ProjectDetail } from "../typings/common";
import SecondaryHeader from "./SecondaryHeader";

type Props = {
  details: ProjectDetail;
};

const ProjectCard = ({ details }: Props) => {
  const { date, title, techStack, pointers, thumbnail } = details;
  return (
    <div className="wow fadeInUp">
      <div className="perspective-150 group relative h-[30rem] w-[400px] bg-[#f5f5f5]">
        <div className="card__side--front absolute left-0 top-0 h-[30rem] w-full transform rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] duration-[800ms] ease-in-out [backface-visibility:hidden] group-hover:[transform:rotateY(-180deg)]">
          <div>
            <img
              className="backface-hidden h-[20rem] w-full bg-cover bg-center bg-blend-screen"
              src={thumbnail}
            />
          </div>
          <h4 className="absolute right-0 top-[26rem] w-[35%] bg-black text-center text-[1.2rem] font-light text-white">
            <span className="decoration-clone p-[1rem] px-[1.5rem]">
              {date}
            </span>
          </h4>
          <h4>
            <ul className="mx-auto w-full list-none pl-[1.5rem]">
              <li className="m-[0.5rem] text-[1.5rem]">
                <span className="font-roboto text-3xl font-bold tracking-[2px] text-[#455a64]">
                  {title}
                </span>
              </li>

              <li>
                {techStack.map((stack) => (
                  <span className="font-roboto-mono m-[5px] min-w-[36px] rounded-[20px] bg-[hsla(0,0%,98%,0.9)] px-2 py-1 text-center font-medium uppercase shadow-[0_2px_4px_rgb(55_71_79/_20%)]">
                    {stack}
                  </span>
                ))}
              </li>
            </ul>
          </h4>
        </div>

        <div className="absolute left-0 top-0 h-[30rem] w-full rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-in-out [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0)]">
          <div className="backface-hidden absolute left-1/2 top-1/2 h-[80%] w-[85%] -translate-x-1/2 -translate-y-1/2">
            <div className="mb-4 text-center text-6xl font-bold">{title}</div>
            {pointers.map((point) => (
              <div>- {point}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
