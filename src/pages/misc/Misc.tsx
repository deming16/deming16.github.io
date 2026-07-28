import ProjectCard from "../../components/ProjectCard";
import SlideInOnLoad from "../../components/SlideInOnLoad";
import { AWARDS, SHARINGS } from "../../constants/awardsSharings";
import { PROJECT_DETAILS } from "../../constants/project";

const Misc = () => {
  return (
    <div className="min-h-screen bg-brand-light-page pb-32 transition-colors duration-300 dark:bg-black">
      <div
        className="mx-auto"
        style={{ maxWidth: "1100px", padding: "6rem 2.5rem" }}
      >
        <SlideInOnLoad direction="up">
          <div style={{ display: "grid", gap: "4rem" }}>
            <section>
              <h2
                className="font-semibold leading-tight text-brand-light-text dark:text-white"
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              >
                Awards
              </h2>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {AWARDS.map((award, index) => (
                  <li
                    key={index}
                    className="text-brand-light-body dark:text-slate-300"
                    style={{ fontSize: "1.5rem", lineHeight: 1.7 }}
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2
                className="font-semibold leading-tight text-brand-light-text dark:text-white"
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              >
                Sharings
              </h2>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {SHARINGS.map((sharing, index) => (
                  <li
                    key={index}
                    className="text-brand-light-body dark:text-slate-300"
                    style={{ fontSize: "1.5rem", lineHeight: 1.7 }}
                  >
                    {sharing}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2
                className="font-semibold leading-tight text-brand-light-text dark:text-white"
                style={{ fontSize: "3rem", marginBottom: "2rem" }}
              >
                Projects
              </h2>
              <div className="flex flex-wrap gap-10">
                {PROJECT_DETAILS.map((project, index) => (
                  <SlideInOnLoad
                    key={project.title}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delayMs={index * 100}
                    className="w-full md:w-[calc(50%-1.25rem)] self-stretch"
                  >
                    <ProjectCard details={project} />
                  </SlideInOnLoad>
                ))}
              </div>
            </section>
          </div>
        </SlideInOnLoad>
      </div>
    </div>
  );
};

export default Misc;
