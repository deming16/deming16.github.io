import ProjectCard from "../../components/ProjectCard";
import SecondaryHeader from "../../components/SecondaryHeader";
import { PROJECT_DETAILS } from "../../constants/project";

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="wow fadeInUp mx-auto grid max-w-[40rem] md:max-w-[85rem] lg:max-w-[114rem]"
      >
        <div className="wow fadeInUp mb-20 mt-20 text-center">
          <SecondaryHeader text="Education" type="dark" />
        </div>
        <div className="text-5xl">National University of Singapore</div>
        <div className="text-3xl">
          Bachelor's Degree, Computer Science (2021)
        </div>
        <div className="text-xl">
          <b>Software Engineering Focus Area (Merit): </b> Software Engineering,
          Software Design Principles and Patterns, Formal Methods of Software
          Engineering
        </div>
        <div className="text-xl">
          <b>Other Relevant Coursework: </b> Relational Databases, Data
          Structures and Algorithms, Computer Networks, Internet Architecture,
          Operating Systems
        </div>

        <div className="mt-10 text-5xl">Projects</div>
        <div className="mt-10 grid grid-cols-1 justify-center gap-y-20 md:grid-cols-2 min-[1280px]:grid-cols-3 min-[1280px]:gap-x-96">
          {PROJECT_DETAILS.map((project) => (
            <ProjectCard details={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
