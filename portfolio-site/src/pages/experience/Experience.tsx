import ExperienceCard from "../../components/ExperienceCard";
import SecondaryHeader from "../../components/SecondaryHeader";
import { EXPERIENCE_DETAILS } from "../../constants/experience";

const Experience = () => {
  return (
    <section id="experience">
      <div className="wow fadeInUp mb-20 mt-20 text-center">
        <SecondaryHeader text="Experience" type="dark" />
      </div>

      <div className="mx-auto grid max-w-[114rem]">
        {EXPERIENCE_DETAILS.map((details) => {
          return <ExperienceCard details={details} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
