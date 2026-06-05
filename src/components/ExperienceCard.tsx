import TextButton from "./TextButton";
import { ExperienceDetail } from "../typings/common";

type Props = {
  details: ExperienceDetail;
};

const ExperienceCard = ({ details }: Props) => {
  const {
    title,
    company,
    location,
    description,
    date,
    pointers,
    techStack,
    bottomImages,
    link,
    linkText,
  } = details;

  return (
    <article>
      <div
        className="rounded-2xl bg-white transition-all duration-300 dark:bg-slate-800/50 dark:shadow-none"
        style={{
          padding: "3.5rem",
          boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
        }}
      >
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
          style={{ marginBottom: "2rem" }}
        >
          <div className="min-w-0">
            <h3
              className="font-semibold leading-tight text-slate-900 dark:text-white"
              style={{ fontSize: "3.5rem" }}
            >
              {title}
            </h3>
            <p
              className="font-semibold text-[#d29b12] dark:text-yellow-300"
              style={{ marginTop: "0.75rem", fontSize: "2.25rem" }}
            >
              {company}
            </p>
            {description && (
              <p
                className="text-slate-500 dark:text-slate-400"
                style={{ marginTop: "0.75rem", fontSize: "1.4rem", lineHeight: 1.8 }}
              >
                {description}
              </p>
            )}
          </div>
          <span
            className="shrink-0 font-semibold tracking-[0.02em] text-[#d29b12] dark:text-yellow-300"
            style={{ fontSize: "1.25rem" }}
          >
            {[date, location].filter(Boolean).join(" • ")}
          </span>
        </div>

        <ul style={{ marginBottom: "2rem", gap: "1rem", display: "grid" }}>
          {pointers.map((pointer, index) => (
            <li
              key={index}
              className="text-slate-600 dark:text-slate-300"
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
              className="rounded-full bg-[#f8eedc] font-semibold text-[#c47a1d] dark:bg-[#2b3348] dark:text-[#f0c550]"
              style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
            >
              {stack}
            </span>
          ))}
        </div>

        {bottomImages?.length ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {bottomImages.map(({ src, alt }) => (
              <div key={src} className="flex-1 overflow-hidden rounded-2xl bg-slate-100 p-3 dark:bg-slate-900">
                <img src={src} alt={alt} className="h-auto w-full rounded-xl object-contain" />
              </div>
            ))}
          </div>
        ) : null}

        {link && linkText && (
          <div style={{ marginTop: "2rem" }}>
            <TextButton href={link}>{linkText}</TextButton>
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;
