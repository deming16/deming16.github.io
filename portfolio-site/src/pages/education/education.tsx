import ProjectCard from "../../components/ProjectCard";
import SecondaryHeader from "../../components/SecondaryHeader";

const Education = () => {
  return (
    <>
      <div id="education" className="wow fadeInUp mx-auto grid max-w-[114rem]">
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

        <div className="text-5xl">Projects</div>
        <div className="grid grid-cols-3 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Education;
