"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, GitBranch, MessageCircle, Code } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Modern Tech Stack",
    description: "MERN, Next.js, NestJS, Tailwind CSS, and modern tooling.",
  },
  {
    icon: GitBranch,
    title: "Scalable Architecture",
    description: "Clean, modular code designed to grow with your product.",
  },
  {
    icon: MessageCircle,
    title: "Fast Communication",
    description: "Clear updates, quick iterations, and transparent timelines.",
  },
  {
    icon: Code,
    title: "Clean & Maintainable Code",
    description: "Readable, well-structured code that your team can extend.",
  },
];

function HighlightCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-white overflow-hidden flex flex-col gap-3 p-5"
      style={{
        boxShadow: "0 2px 12px rgba(167,139,250,0.08)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 44px rgba(167,139,250,0.18)",
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#a78bfa]"
        style={{ background: "#f3f0ff", border: "1px solid #d8b4fe" }}
      >
        <Icon size={18} className="transition-colors duration-300 group-hover:text-white text-[#a78bfa]" strokeWidth={1.7} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-[13px] font-bold text-black leading-tight">{item.title}</h3>
        <p className="text-[11px] text-black/60 leading-[1.6]">{item.description}</p>
      </div>

      {/* Bottom index number */}
      <span className="absolute bottom-3 right-4 text-[28px] font-black text-black/[0.04] leading-none select-none">
        0{index + 1}
      </span>
    </motion.div>
  );
}

export default function WorkWithMe() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-40px" });

  return (
    <section className="flex flex-col gap-6">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-1"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-5 h-[2px] bg-[#a78bfa] rounded-full" />
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#a78bfa] font-semibold">Why choose me</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-black leading-tight">
          Why work with me?
        </h2>
        <p className="text-[12px] text-black/50 max-w-md leading-relaxed">
          Beyond just shipping features — I care about long-term reliability, developer experience, and how your product feels to real users.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, index) => (
          <HighlightCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
