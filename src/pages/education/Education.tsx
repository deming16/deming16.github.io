import SlideInOnLoad from "../../components/SlideInOnLoad";

const stanfordCoursework = [
  "Entrepreneurship Practicum",
  "Start-Up Internship Programme",
  "Start-Up Case Study & Analysis",
  "Market Validation",
  "New Venture Creation",
];

const nusCoursework = [
  "Relational Databases",
  "Data Structures and Algorithms",
  "Computer Networks",
  "Internet Architecture",
  "Operating Systems",
  "Software Engineering",
  "Software Design Principles and Patterns",
  "Formal Methods of Software Engineering",
  "Software Testing",
];

const activities = ["NOC Silicon Valley, Batch 37"];

const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    issued: "Issued Jul 2022",
    credentialId: "Credential ID I346-2141",
    href: "https://www.credly.com/badges/35b4bba4-252b-430f-b81d-8243f116680c/public_url",
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    issued: "Issued May 2021",
    credentialId: "Credential ID 7U6 MNM 4XE",
    href: "https://skillshop.exceedlms.com/student/award/HMCcKpaVH6veK2GQ7L6NmgAW",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "AlgoExpert",
    issued: "Issued Apr 2021",
    credentialId: "Credential ID 9d95bc2264",
    href: "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-9d95bc2264",
  },
  {
    title: "Software Engineering Specialisation",
    issuer: "National University of Singapore",
    issued: "Issued Apr 2021",
    credentialId: "Credential ID 31181188",
    href: "https://credentials.nus.edu.sg/d8431a3d-51bc-4317-b027-720ba2f0f2d3",
  },
];

const educationCards = [
  {
    school: "Stanford University",
    program: "Entrepreneurship/Entrepreneurial Studies",
    meta: "2020 - 2020 • 🇺🇸 California",
    href: "/stanford.pdf",
    coursework: stanfordCoursework,
  },
  {
    school: "National University of Singapore",
    program: "Bachelor of Computing (Computer Science) with Honours (Distinction)",
    meta: "2017 - 2021 • 🇸🇬 Singapore",
    href: "/nus_degree.pdf",
    coursework: nusCoursework,
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-[#f8fafc] transition-colors duration-300 dark:bg-black">
      <div
        className="mx-auto"
        style={{ maxWidth: "1100px", padding: "6rem 2.5rem" }}
      >
        <SlideInOnLoad direction="up">
          <div style={{ display: "grid", gap: "2.5rem" }}>
            <div className="flex flex-wrap gap-6">
              {certifications.map((certification) => (
                <article
                  key={certification.href}
                  className="flex min-w-[280px] flex-1 bg-white dark:bg-slate-800/50"
                  style={{
                    padding: "2.25rem 2.5rem",
                    borderRadius: "1.5rem",
                    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
                  }}
                >
                  <div className="min-w-0">
                    <div style={{ marginBottom: "1.5rem" }}>
                      <span
                        className="inline-block rounded-full bg-[#f8eedc] font-semibold text-[#c47a1d] dark:bg-[#2b3348] dark:text-[#f0c550]"
                        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
                      >
                        Certification
                      </span>
                    </div>

                    <h3
                      className="font-semibold leading-tight text-slate-900 dark:text-white"
                      style={{ fontSize: "2rem" }}
                    >
                      {certification.title}
                    </h3>
                    <p
                      className="text-slate-700 dark:text-slate-200"
                      style={{ marginTop: "0.35rem", fontSize: "1.45rem", lineHeight: 1.6 }}
                    >
                      {certification.issuer}
                    </p>
                    <p
                      className="text-slate-500 dark:text-slate-400"
                      style={{ marginTop: "0.35rem", fontSize: "1.3rem", lineHeight: 1.6 }}
                    >
                      {certification.issued}
                    </p>
                    <p
                      className="text-slate-500 dark:text-slate-400"
                      style={{ marginTop: "0.15rem", fontSize: "1.3rem", lineHeight: 1.6 }}
                    >
                      {certification.credentialId}
                    </p>
                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-200 dark:text-slate-100 dark:hover:bg-slate-700"
                      style={{ fontSize: "1.25rem", gap: "0.5rem" }}
                    >
                      Show credential
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {educationCards.map((card, index) => (
              <article key={`${card.school}-${card.meta}`}>
                <div
                  className="flex h-full flex-col rounded-2xl bg-white transition-all duration-300 dark:bg-slate-800/50 dark:shadow-none"
                  style={{
                    padding: "3.5rem",
                    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
                  }}
                >
                  <div style={{ marginBottom: "2rem" }}>
                    <span
                      className="inline-block rounded-full bg-[#f8eedc] font-semibold text-[#c47a1d] dark:bg-[#2b3348] dark:text-[#f0c550]"
                      style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
                    >
                      Education
                    </span>
                  </div>

                  <div
                    className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
                    style={{ marginBottom: index === 0 ? 0 : "2rem" }}
                  >
                    <div className="min-w-0">
                      <h3
                        className="font-semibold leading-tight text-slate-900 dark:text-white"
                        style={{ fontSize: "3.5rem" }}
                      >
                        {card.school}
                      </h3>
                      <p
                        className="font-semibold text-[#d29b12] dark:text-yellow-300"
                        style={{ marginTop: "0.75rem", fontSize: "2.25rem" }}
                      >
                        {card.program}
                      </p>
                    </div>
                    <span
                      className="shrink-0 font-semibold tracking-[0.02em] text-[#d29b12] dark:text-yellow-300"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {card.meta}
                    </span>
                  </div>

                  {card.coursework && (
                    <div style={{ marginBottom: index === 1 ? "2rem" : 0 }}>
                      <h4
                        className="font-semibold text-slate-900 dark:text-white"
                        style={{ marginBottom: "1rem", fontSize: "2rem" }}
                      >
                        Relevant Coursework
                      </h4>
                      <ul className="flex flex-wrap gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {card.coursework.map((course) => (
                          <li
                            key={course}
                            className="rounded-2xl bg-[#f8eedc] text-[#c47a1d] dark:bg-[#2b3348] dark:text-[#f0c550]"
                            style={{ padding: "0.85rem 1.4rem", fontSize: "1.25rem", lineHeight: 1.6 }}
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {index === 1 && (
                    <div>
                      <h4
                        className="font-semibold text-slate-900 dark:text-white"
                        style={{ marginBottom: "1rem", fontSize: "2rem" }}
                      >
                        Activities
                      </h4>
                      <div style={{ display: "grid", gap: "0.75rem" }}>
                        {activities.map((activity) => (
                          <p
                            key={activity}
                            className="text-slate-600 dark:text-slate-300"
                            style={{ fontSize: "1.4rem", lineHeight: 1.8 }}
                          >
                            {activity}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {card.href && (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center self-start rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-200 dark:text-slate-100 dark:hover:bg-slate-700"
                      style={{ marginTop: "2rem", fontSize: "1.25rem", gap: "0.5rem" }}
                    >
                      Show credential
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SlideInOnLoad>
      </div>
    </section>
  );
};

export default Education;
