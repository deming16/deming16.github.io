import { ProjectDetail } from "../typings/common";

type Props = {
  details: ProjectDetail;
};

const ProjectCard = ({ details }: Props) => {
  const { date, title, thumbnail, description, techStack, pointers, link } = details;

  const content = (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 dark:bg-slate-800/50 dark:hover:bg-yellow-300 dark:shadow-none ${link ? "cursor-pointer" : ""}`}
      style={{ boxShadow: "0 22px 60px rgba(15, 23, 42, 0.12)", transformOrigin: "center" }}
    >
      <div className="aspect-[695/494] w-full overflow-hidden bg-slate-100 transition-colors duration-300 group-hover:bg-yellow-300 dark:bg-slate-900 dark:group-hover:bg-yellow-300">
        <img
          src={thumbnail}
          alt={`${title} preview`}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div style={{ padding: "3.5rem" }}>
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
          style={{ marginBottom: "2rem" }}
        >
          <h3
            className="font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950 dark:text-white dark:group-hover:text-slate-950"
            style={{ fontSize: "3.5rem" }}
          >
            {title}
          </h3>
          <span
            className="shrink-0 font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-800"
            style={{ fontSize: "1.4rem" }}
          >
            {date}
          </span>
        </div>

        {description && (
          <p
            className="text-slate-600 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-900"
            style={{ marginBottom: "2rem", fontSize: "1.4rem", lineHeight: 1.8 }}
          >
            {description}
          </p>
        )}

        <ul style={{ marginBottom: "2rem", display: "grid", gap: "1rem" }}>
          {pointers.map((pointer, index) => (
            <li
              key={index}
              className="text-slate-600 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-900"
              style={{ fontSize: "1.4rem", lineHeight: 1.8 }}
            >
              {pointer}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {techStack.map((stack) => (
            <span
              key={stack}
              className="rounded-full bg-[#f8eedc] font-semibold text-[#c47a1d] transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-amber-300 dark:bg-[#2b3348] dark:text-[#f0c550] dark:group-hover:bg-slate-900 dark:group-hover:text-amber-300"
              style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (!link) {
    return content;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  );
};

export default ProjectCard;
