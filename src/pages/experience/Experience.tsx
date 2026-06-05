import ExperienceCard from "../../components/ExperienceCard";
import SlideInOnLoad from "../../components/SlideInOnLoad";
import { EXPERIENCE_DETAILS } from "../../constants/experience";

const Experience = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] transition-colors duration-300 dark:bg-black">
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px", padding: "6rem 2.5rem" }}
      >
        <div style={{ display: "grid", gap: "2.5rem" }}>
          {EXPERIENCE_DETAILS.map((details, index) => (
            <SlideInOnLoad
              key={`${details.company}-${details.date}`}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={index * 100}
            >
              <ExperienceCard details={details} />
            </SlideInOnLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
