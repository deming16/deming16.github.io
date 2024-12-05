import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import SecondaryHeader from "../../components/SecondaryHeader";
import TextButton from "../../components/TextButton";
import profilePic from "../../img/about.jpg";

const About = () => {
  return (
    <section
      className="mt-[-10vh] bg-[#f7f7f7] py-[25rem] lg:py-[25rem]"
      id="about"
    >
      <div className="lg:mb-[5rem]! wow fadeInUp mb-[8rem] text-center">
        <SecondaryHeader text="About Me" type="dark" />
      </div>

      <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-4 md:max-w-[80rem] md:grid-cols-2 lg:max-w-[100rem] xl:max-w-[114rem]">
        <div className="wow fadeInUp">
          <div className="group relative">
            <div className="photo group-hover:scale-[.95]">
              <img
                alt="profile"
                src={profilePic}
                className="composition__photo--p2 mx-auto w-[55%] rounded-[0.2rem] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.4)] outline-offset-[2rem] transition-all duration-200 hover:z-20 hover:scale-105 hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.5)] hover:outline-[1.5rem_solid_var(--color-primary)]"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="wow fadeInUp mt-10 justify-center text-2xl leading-loose md:mt-0 md:text-3xl md:leading-loose">
            I am a software engineer passionate in delivering end-to-end web and
            cross platform software products. My interest includes software
            development, user experience, product management, technical
            leadership.
          </p>

          <div className="wow fadeInUp mt-4 flex gap-6">
            <TextButton
              href={"https://github.com/deming16"}
              children={
                <>
                  <FontAwesomeIcon icon={faGithub} /> Github
                </>
              }
            />
            <TextButton
              href={"https://www.linkedin.com/in/lindeming"}
              children={
                <>
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
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
