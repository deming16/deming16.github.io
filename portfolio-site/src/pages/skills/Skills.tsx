import SecondaryHeader from "../../components/SecondaryHeader";
import SkillBox from "../../components/SkillBox";

const Skills = () => {
  return (
    <section className="mt-[-10vh] bg-[#2e3830] py-[13rem]" id="skills">
      <div className="wow fadeInUp mb-8 text-center">
        <SecondaryHeader text="Skills" type="light" />
      </div>

      <div className="mx-auto grid max-w-[114rem] grid-cols-2 gap-4">
        <SkillBox
          icon={<span className="devicon-java-plain mb-2 text-[6rem]" />}
          header={"Languages/Frameworks"}
          current={
            <>
              <b>Currently Using:</b> TypeScript · React/Redux · Cypress ·
              MapboxGL · Node/Express
            </>
          }
          previous={
            <>
              <b>Previously Used:</b> PostgreSQL/Sequelize · Ruby on Rails ·
              Python · Flutter · Unity/C#
            </>
          }
        />
        <SkillBox
          icon={<span className="devicon-git-plain mb-2 text-[6rem]" />}
          header={"Technologies"}
          current={<>Git/GitHub · Docker · Microsoft Azure</>}
          previous={<>AWS · Electron</>}
        />
      </div>
    </section>
  );
};

export default Skills;
