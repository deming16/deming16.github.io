import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../../img/about.jpg";
import SlideInOnLoad from "../../components/SlideInOnLoad";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center bg-brand-light-page dark:bg-black">
      <div
        className="mx-auto flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center"
        style={{ maxWidth: "1400px", padding: "2rem 3.5rem" }}
      >
        <SlideInOnLoad direction="left" className="max-w-5xl flex-1">
          <h1
            className="font-bold text-brand-light-text dark:text-yellow-300"
            style={{ marginBottom: "2rem", fontSize: "8.5rem" }}
          >
            Deming Lin
          </h1>

          <p
            className="text-brand-light-body dark:text-slate-300"
            style={{
              marginBottom: "3.75rem",
              maxWidth: "72rem",
              fontSize: "2.25rem",
              lineHeight: 1.8,
            }}
          >
            I'm a software engineer passionate about delivering end-to-end web and
            cross-platform software products. I love turning complex challenges
            into elegant solutions and building scalable systems that make a
            difference.
          </p>

          <div className="flex flex-wrap items-center gap-10">
            <a
              href="/Lin_Deming.pdf"
              className="inline-flex items-center gap-4 rounded-2xl bg-brand-light-text px-10 py-5 text-2xl font-semibold text-brand-light-page shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-light-body dark:bg-yellow-300 dark:text-black dark:hover:bg-yellow-200"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </a>
            <a
              href="https://github.com/deming16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light-body transition-colors hover:text-brand-light-text dark:text-slate-400 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2.4rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/lindeming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light-body transition-colors hover:text-brand-light-accent dark:text-slate-400 dark:hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2.4rem" }} />
            </a>
          </div>
        </SlideInOnLoad>

        <SlideInOnLoad direction="right" delayMs={120} className="flex-shrink-0 lg:w-[34rem]">
          <img
            src={aboutImage}
            alt="Deming Lin"
            className="h-[30rem] w-[30rem] rounded-3xl object-cover shadow-2xl ring-2 ring-black/10 dark:ring-slate-800 lg:h-[38rem] lg:w-[34rem]"
          />
        </SlideInOnLoad>
      </div>
    </div>
  );
};

export default Home;
