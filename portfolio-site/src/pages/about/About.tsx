import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGuitar } from "@fortawesome/free-solid-svg-icons";
import SecondaryHeader from "../../components/SecondaryHeader";
import TextButton from "../../components/TextButton";
import profilePic from "../../img/about.jpg";

const About = () => {
  return (
    <section
      className="mt-[-20vh] bg-[#f7f7f7] py-[25rem] lg:py-[25rem]"
      id="about"
    >
      <div className="lg:mb-[5rem]! wow fadeInUp mb-[8rem] text-center">
        <SecondaryHeader text="About Me" type="dark" />
      </div>

      <div className="mx-auto grid max-w-[114rem] grid-cols-2 gap-4">
        <div className="wow fadeInUp">
          <div className="group relative">
            <div className="photo group-hover:scale-[.95]">
              <img
                src={profilePic}
                className="composition__photo--p2 w-[55%] rounded-[0.2rem] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.4)] outline-offset-[2rem] transition-all duration-200 hover:z-20 hover:scale-105 hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.5)] hover:outline-[1.5rem_solid_var(--color-primary)]"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading-tertiary wow fadeInUp mb-6">
            Hi! My name is Deming
          </h3>
          <p className="wow fadeInUp justify-center text-2xl">
            I am a software engineer passionate in delivering end-to-end web and
            cross platform software products. My interest includes software
            development, user experience, product management, technical
            leadership.
          </p>

          <div className="wow fadeInUp">
            <TextButton
              href={"https://github.com/deming16"}
              children={
                <>
                  <FontAwesomeIcon icon={faGuitar} /> Github
                </>
              }
            />
            <TextButton
              href={"https://www.linkedin.com/in/lindeming/"}
              children={
                <>
                  <FontAwesomeIcon icon={faGuitar} /> Linkedin
                </>
              }
            />
            <TextButton
              href={"mailto:deminglindm@gmail.com"}
              children={
                <>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
