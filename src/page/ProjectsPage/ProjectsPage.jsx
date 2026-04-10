import projectData from "./projectData"
import ProjectCard from "./ProjectCard"

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className={"relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}
      
    >
      <div
        className={"pointer-events-none absolute inset-0 opacity-80"}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 0%, rgba(107,159,255,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,139,250,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 10%, rgba(244,114,182,0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className={"relative pt-7 z-10 max-w-6xl mx-auto"}>
        <div className={"flex flex-col items-center text-center gap-4 mb-12"}>

          <h2 className={"text-3xl sm:text-4xl font-black tracking-tight text-[#1a1a2e]"}>
            Real-world{" "}
            <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
              Projects
            </span>
          </h2>

          <p className={"max-w-2xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
            A curated collection of applications I&apos;ve designed and
            developed — from{" "}
            <span className={"text-[#6b9fff] font-semibold"}>client projects</span>{" "}
            to <span className={"text-[#a78bfa] font-semibold"}>personal builds</span>.
            Each one focuses on clean UI, performance, and real business value.
          </p>
        </div>

        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"}>
          {projectData.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
