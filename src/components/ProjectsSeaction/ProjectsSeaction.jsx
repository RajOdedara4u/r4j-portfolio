
import ProjectCard from "@/page/ProjectsPage/ProjectCard";
import projectData from "@/page/ProjectsPage/projectData";
import { ArrowIcon2 } from "../Icons/Icons";

const ProjectsSeaction=()=>{
    return <>  <section
    id="projects"
    className={"relative w-full py-5 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}
  >
    <div className={"relative z-10 max-w-6xl mx-auto"}>
      <div className={"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"}>
        <div>
          <p className={"text-xs font-semibold tracking-[0.2em] uppercase text-[#94a3b8] mb-1"}>
            Selected work
          </p>
          <h2 className={"text-2xl sm:text-3xl font-black tracking-tight text-[#1a1a2e]"}>
            Featured{" "}
            <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
              Projects
            </span>
          </h2>
        </div>

       
      </div>

      <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"}>
        {projectData.slice(0, 6).map((project) => (
          <ProjectCard key={project.name} project={project} index={undefined} />
        ))}
      </div>
    </div>
    <div className={"flex justify-center"}>
    <a
          href="/projects"
          className={"inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold text-[#1a1a2e] bg-white border border-[#e2e8f0] shadow-[0_6px_18px_rgba(148,163,184,0.25)] hover:-translate-y-0.5 hover:border-[#6b9fff]/60 hover:text-[#6b9fff] transition-all mt-10 mx-auto"}
          >
          View all projects
         <ArrowIcon2 />
        </a>
              </div>
  </section></>
}

export default ProjectsSeaction