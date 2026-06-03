import projectData from "./projectData"
import ProjectCard from "./ProjectCard"

export default function ProjectsPage() {
  return (
        <div className={"relative z-10 max-w-[90%] mx-auto py-5 md:py-10"}>
         <div className="text-center px-4" >
          <h2 className="mt-1 text-[1.1rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-black leading-tight">
            Real-world{" "}
            <span className="relative inline-block text-[var(--text-red)]">
              Projects
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] max-w-lg text-[var(--text-secondary)] text-sm sm:text-base mx-auto">
          A curated collection of applications I've designed and developed — from client projects to personal builds. Each one focuses on clean UI, Performance</p>
          <div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#a78bfa]"
          />
        </div>

        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"}>
          {projectData.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </div>
  );
}
