
import ProjectCard from "@/page/ProjectsPage/ProjectCard";
import projectData from "@/page/ProjectsPage/projectData";
import { ArrowIcon2 } from "../../../components/Icons/Icons";

const ProjectsSeaction=()=>{
    return <section
    id="projects"
    className={"relative w-full py-5 px-4 lg:px-8"}
  >
    <div className={"relative z-10 max-w-6xl mx-auto"}>
      <div className="text-center px-4" >
          <h2 className="mt-1 text-[1.1rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-black leading-tight">
            Real-world {" "}
            <span className="relative inline-block text-[var(--text-red)]">
              Projects
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] max-w-lg text-[var(--text-secondary)] text-sm sm:text-base mx-auto">
A curated collection of applications I've designed and developed — from client projects to personal builds.   </p>
          <div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#a78bfa]"
          />
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
          className={"inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#1a1a2e] bg-white border border-black/20 shadow-[0_6px_18px_rgba(148,163,184,0.25)] hover:-translate-y-0.5 hover:border-[#a78bfa]/60 hover:text-[#a78bfa] transition-all mt-10 mx-auto"}
          >
          View All Projects
         <ArrowIcon2 />
        </a>
  </div>
  </section>
}

export default ProjectsSeaction