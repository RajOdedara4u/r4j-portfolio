import { ArrowIcon, ArrowIcon2, CodeIcon } from "@/components/Icons/Icons";
import Image from "next/image";
const ProjectCard = ({ project, index }) => {
  return (
    <article
      key={project.name}
      className={"group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-white/80 shadow-[0_14px_40px_rgba(15,23,42,0.06),0_4px_16px_rgba(148,163,184,0.18)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-200 h-full"}
      data-aos="fade-up"
    >
      <div className={"relative h-44 sm:h-48 shrink-0 overflow-hidden"}>
        <div className={"absolute inset-0 bg-gradient-to-br from-[#6b9fff]/20 via-transparent to-[#f472b6]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"} />
        <Image src={project.img} alt={project.name} fill className="object-cover" />

        <div className={"absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/60 backdrop-blur text-[11px] font-semibold text-white"}>
          <span className={"inline-block h-1.5 w-1.5 rounded-full bg-[#4ade80]"} />
          Live Project
        </div>
      </div>

      <div className={"flex flex-1 flex-col gap-4 p-4 sm:p-5 min-h-0"}>
        <div className={"min-h-0"}>
          <h3 className={"text-base sm:text-lg font-extrabold text-[#1a1a2e] mb-1"}>
            {project.name}
          </h3>
          <p className={"text-xs sm:text-sm text-[#4a4a6a] leading-relaxed"}>
            {project.desc}
          </p>
        </div>

        <div className={"flex flex-wrap gap-1.5"}>
          {project.techonology
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean)
            .map((tech) => (
              <span
                key={tech}
                className={"inline-flex items-center px-2 py-1 rounded-full text-[10px] font-semibold text-[#1a1a2e] bg-[#eef2ff] border border-[#e0e7ff]"}
              >
                {tech}
              </span>
            ))}
        </div>

        {project.topic && project.topic.length > 0 && (
          <div className={"flex flex-wrap gap-1.5"}>
            {project.topic.map((item) => (
              <span
                key={item}
                className={"inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium text-[#4a4a6a] bg-[#f8fafc] border border-[#e2e8f0]"}
              >
                <span className={"h-1 w-1 rounded-full bg-[#6b9fff]"} />
                {item}
              </span>
            ))}
          </div>
        )}

        <div className={"mt-auto flex items-center justify-between gap-3 pt-2 border-t border-[#e5e7eb]"}>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={"inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#1a1a2e] group-hover:text-[#6b9fff] transition-colors"}
          >
            View Live
            <span className={"inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#6b9fff]/10 text-[#6b9fff] p-[3px] group-hover:bg-[#6b9fff] group-hover:text-white transition-colors"}>
             <ArrowIcon2 />
            </span>
          </a>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className={"inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#4a4a6a] hover:text-[#a78bfa] transition-colors"}
          >
            View Code
           <CodeIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard