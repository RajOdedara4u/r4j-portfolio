"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/Icons/Icons";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const techs = project.techonology.split(",").map((t) => t.trim()).filter(Boolean);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: hovered
          ? "0 20px 44px rgba(167,139,250,0.17)"
          : "0 2px 12px rgba(167,139,250,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",

        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, borderRadius: "16px 16px 0 0", overflow: "hidden", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)", transform: hovered ? "scale(1.07)" : "scale(1.01)" }}>
          <Image src={project.img} alt={project.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        </div>


        {/* Live badge */}
        <span className="absolute top-[10px] left-3 text-[9px] tracking-[0.16em] uppercase text-white bg-[#a78bfa] border border-[rgba(196,168,130,0.55)] px-2 py-[3px] rounded-full font-medium flex items-center gap-1">
          <span className="w-[5px] h-[5px] rounded-full bg-[#4ade80] inline-block" />
          Live
        </span>

      </div>

      {/* Content */}
      <div style={{ padding: "26px 0 0", display: "flex", flexDirection: "column", flex: 1 }}>
      <div className="px-4 flex-1">
        <h3 className="text-[17px] font-bold text-black leading-[1.2] mb-[6px]">
          {project.name}
        </h3>

        <p className="text-[12px] text-black/70 leading-[1.55] font-light mb-[10px]">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-[5px] mb-[10px]">
          {techs.slice(0, 5).map((tech) => (
            <span key={tech} className="inline-flex items-center px-[7px] py-[2px] rounded-full text-[10px] font-semibold text-[#a78bfa]/80 border border-black/20">
              {tech}
            </span>
          ))}
          {techs.length > 5 && (
            <span className="inline-flex items-center px-[7px] py-[2px] rounded-full text-[9px] font-semibold text-black/40 bg-[#f8fafc] border border-[#e2e8f0]">
              +{techs.length - 5}
            </span>
          )}
        </div>

        {/* Topics */}
        {project.topic?.length > 0 && (
          <ul className="list-none p-0 grid grid-cols-2 gap-y-[5px] gap-x-2 mb-[10px] flex-1">
            {project.topic.map((item) => (
              <li key={item} className="flex items-center gap-[5px] text-[11px] text-black/70">
                <span className="w-[3px] h-[3px] rounded-full bg-[#a78bfa] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
       </div>

        <div className="flex items-center justify-between bg-[#a78bfa]/40 px-4 py-3">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-[5px] text-[10px] font-medium tracking-[0.08em] text-black/70 hover:text-[#a78bfa] border border-black/30 bg-white px-2 py-1 rounded-full transition-colors"
          >
            <GitHubIcon size={12} strokeWidth={1.8} />
            Code
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex text-black/70 hover:text-[#a78bfa] bg-white/90 border border-black/30 px-2 py-1 rounded-full items-center gap-[5px] text-[10px] font-medium tracking-[0.12em] uppercase text-[#a78bfa]"
          >
              <ArrowUpRight size={13} strokeWidth={2} />
              Live
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
