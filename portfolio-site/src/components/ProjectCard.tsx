import pic from "../img/portfolioproject.png";
import SecondaryHeader from "./SecondaryHeader";
const ProjectCard = () => {
  return (
    <div className="wow fadeInUp">
      <div className="perspective-150 group relative h-[30rem] bg-[#f5f5f5]">
        <div className="card__side--front absolute left-0 top-0 h-[30rem] w-full transform rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] duration-[800ms] ease-in-out [backface-visibility:hidden] group-hover:[transform:rotateY(-180deg)]">
          <div>
            <img
              className="backface-hidden h-[20rem] bg-cover bg-center bg-blend-screen"
              src={pic}
            />
          </div>
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
        <div className="absolute left-0 top-0 h-[30rem] w-full rounded-[10px] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-in-out [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0)]">
          <div className="backface-hidden absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
