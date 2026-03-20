import { ReactIcon ,MongoIcon ,NextIcon,PostmanIcon, GitHubIcon ,TailwindIcon, ReduxIcon, NodeIcon ,ExpressIcon ,PostgresIcon ,TypeScriptIcon } from "../Icons/Icons";

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
    <section
     data-aos="fade-up"
      id="tech"
      className={"relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}
    >
      <div
        className={"pointer-events-none absolute inset-0 opacity-80"}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 0%, rgba(107,159,255,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,139,250,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 10%, rgba(244,114,182,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className={"relative z-10 max-w-6xl mx-auto"}>
        <div className={"flex flex-col items-center text-center gap-3 mb-10"}>
          <span className={"inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-white/70 text-xs font-semibold text-[#6b9fff] tracking-[0.2em] uppercase shadow-[0_4px_16px_rgba(107,159,255,0.12),inset_0_1px_0_rgba(255,255,255,1)]"}>
            Tech Stack
          </span>
          <h2 className={"text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a]"}>
            Tools I{" "}
            <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
              build with
            </span>
          </h2>
          <p className={"max-w-2xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
            A carefully selected set of technologies I use every day to ship
            fast, scalable and visually polished web applications.
          </p>
        </div>

        <div className={"grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}>
          {TECH_ITEMS.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
               data-aos="fade-up"
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
    </section>
  );
};

export default TechStack;
