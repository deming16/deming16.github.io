import SecondaryHeader from "../../components/SecondaryHeader";
import SkillBox from "../../components/SkillBox";

const Skills = () => {
  return (
    <section className="mt-[-10vh] bg-[#2e3830] py-[13rem]" id="skills">
      <div className="wow fadeInUp mb-8 text-center">
        <SecondaryHeader text="Skills" type="light" />
      </div>

      <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-10 sm:max-w-[70rem] md:max-w-[80rem] md:grid-cols-2 lg:max-w-[100rem] xl:max-w-[114rem]">
        <SkillBox
          icon={<span className="devicon-java-plain mb-2 text-[4rem]" />}
          header={"Languages/Frameworks"}
          current={["TypeScript", "React", "Jest/Cypress", "Node.js"]}
          previous={[
            "Java",
            "Python/Flask",
            "Ruby on Rails",
            "PostgreSQL",
            "Flutter",
            "Unity/C#",
            "Electron",
          ]}
        />
        <SkillBox
          icon={<span className="devicon-git-plain mb-2 text-[4rem]" />}
          header={"Technologies"}
          current={["Git", "AWS"]}
          previous={["Docker", "Azure", "MongoDB"]}
        />
      </div>
    </section>
  );
};

export default Skills;
