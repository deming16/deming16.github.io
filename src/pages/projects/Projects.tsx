import ProjectCard from "../../components/ProjectCard";
import SlideInOnLoad from "../../components/SlideInOnLoad";
import { PROJECT_DETAILS } from "../../constants/project";

const Projects = () => {
  return (
    <div className="min-h-screen bg-brand-light-page pb-32 dark:bg-black">
      <div
        className="mx-auto"
        style={{ maxWidth: "1500px", padding: "6rem 2rem" }}
      >
        <div className="flex flex-wrap gap-10">
          {PROJECT_DETAILS.map((project, index) => (
            <SlideInOnLoad
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={index * 100}
              className="w-full md:w-[calc(50%-1.25rem)] xl:w-[calc((100%-5rem)/3)] self-stretch"
            >
              <ProjectCard details={project} />
            </SlideInOnLoad>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
