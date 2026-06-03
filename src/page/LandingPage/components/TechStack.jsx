"use client";
import { ReactIcon ,MongoIcon ,NextIcon,PostmanIcon, GitHubIcon ,TailwindIcon, ReduxIcon, NodeIcon ,ExpressIcon ,PostgresIcon ,TypeScriptIcon } from "../../../components/Icons/Icons";

const TECH_ITEMS = [
  { label: "React", type: "core", Icon: ReactIcon },
  { label: "Next.js", type: "core", Icon: NextIcon },
  { label: "Redux Toolkit", type: "core", Icon: ReduxIcon },
  { label: "Node.js", type: "backend", Icon: NodeIcon },
  { label: "Express.js", type: "backend", Icon: ExpressIcon },
  { label: "MongoDB", type: "database", Icon: MongoIcon },
  { label: "PostgreSQL", type: "database", Icon: PostgresIcon },
  { label: "Tailwind CSS", type: "ui", Icon: TailwindIcon },
  { label: "TypeScript", type: "language", Icon: TypeScriptIcon },
  { label: "Postman", type: "tool", Icon: PostmanIcon },
  { label: "Git & GitHub", type: "tool", Icon: GitHubIcon },
];

const TechStack = () => {
  return (
      <div className={"relative z-10 max-w-[90%] mx-auto py-5 md:py-10 sm:px-6 lg:px-8"}>
    <div className="text-center px-4" >
          <h2 className="mt-1 text-[1.1rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-black leading-tight">
                Tools I{" "}
            <span className="relative inline-block text-[var(--text-red)]">
                build with
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] max-w-lg text-[var(--text-secondary)] text-sm sm:text-base mx-auto">
          A carefully selected set of technologies I use every day to ship fast, scalable and visually polished web applications.  </p>
          <div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#a78bfa]"
          />
        </div>
        <div className={"grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}>
          {TECH_ITEMS.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
               data-aos="fade-up"
               suppressHydrationWarning
                key={item.label}
                className={"group relative overflow-hidden rounded-2xl bg-white/95 border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] px-3.5 py-3 sm:px-4 sm:py-4 flex items-center gap-3 sm:gap-3.5 transition-transform duration-200 hover:-translate-y-1"}
                style={{
                  animation: `fadeUp 0.4s ease-out ${index * 40}ms both`,
                }}
              >
                <div className={"flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-[#eef2ff] to-[#e0f2fe] shadow-[0_4px_14px_rgba(107,159,255,0.25)] shrink-0"}>
                  <Icon />
                </div>

                <div className={"flex flex-col gap-0.5 min-w-0"}>
                  <span className={"text-xs font-semibold uppercase tracking-[0.16em] text-[#94a3b8]"}>
                    {item.type}
                  </span>
                  <span className={"text-sm sm:text-[15px] font-semibold text-[#0f172a]"}>
                    {item.label}
                  </span>
                </div>

                <div className={"pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#eef2ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"} />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default TechStack;
