import pic from "../img/portfolioproject.png";
import SecondaryHeader from "./SecondaryHeader";
const ProjectCard = () => {
  return (
    <div className="wow fadeInUp">
      <div className="perspective-[150rem] relative h-[30rem] bg-[#f5f5f5]">
        <div className="backface-hidden absolute left-0 top-0 h-[30rem] w-full overflow-hidden rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-in-out hover:rotate-[rotateY(-180deg)]">
          <img
            className="h-[20rem] bg-cover bg-center bg-blend-screen"
            src={pic}
          />
          <h4 className="absolute right-0 top-[26rem] w-[35%] bg-black text-center text-[1.2rem] font-light text-white">
            <span className="decoration-clone p-[1rem] px-[1.5rem]">
              Hack & Roll 2019
            </span>
          </h4>
          <h4>
            <ul className="mx-auto w-full list-none pl-[1.5rem]">
              <li className="m-[0.5rem] text-[1.5rem]">
                <span className="project-title">Gyroscope Pong</span>
              </li>
              <li>
                <span className="skill-tab">Unity3D</span>
                <span className="skill-tab">JavaScript</span>
                <span className="skill-tab">WebRTC</span>
              </li>
            </ul>
          </h4>
        </div>
        {/* <div className="backface-hidden absolute left-0 top-0 h-[30rem] w-full rotate-[180deg] transform rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-in-out hover:rotate-[rotateY(0)]">
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2">
            <p>
              <SecondaryHeader text="Gyroscope Pong" type="dark" />
              • Made a multiplayer game where players play using a shared screen
              while using their mobile devices as a controller
              <br />• Handled the making of the game itself and connecting
              WebRTC to the WebGL game
            </p>
            <br />
            <a
              href="https://github.com/deming16/deming16.github.io"
              target="_blank"
              className="btn btn--green"
            >
              GitHub Link
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
