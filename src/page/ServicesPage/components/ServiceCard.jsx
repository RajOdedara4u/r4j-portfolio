"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import TronDivider from "../../../components/TronDivider/TronDivider";

export function ServiceCard({ service, index, total = 6 }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
          ? "0 20px 44px rgba(101,72,42,0.17)"
          : "0 2px 12px rgba(101,72,42,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 110,
          borderRadius: "16px 16px 0 0",
          overflow: "hidden",
          flexShrink: 0,
          background: "linear-gradient(135deg,#eef2ff 0%,#e0f2fe 60%,#fce7f3 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)", transform: hovered ? "scale(1.07)" : "scale(1.01)" }}>
          <Image
            src={service.cardImage}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
          }}
        />

        <span className="absolute top-[10px] left-3 text-[9px] tracking-[0.16em] uppercase text-white bg-[#a78bfa] border border-[rgba(196,168,130,0.55)] px-2 py-[3px] rounded-full font-medium">
          {service.label}
        </span>

        <motion.div
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className={`
            absolute left-1/2 -translate-x-1/2
            w-16 h-8 py-2 rounded-b-full bg-white
            flex items-center justify-center z-10
            transition-all duration-300
            border-b-[2.5px] border-b-[#a78bfa] shadow-[0_6px_20px_rgba(193,18,31,0.22)]
          `}
        >
          <service.icon size={16} color="#a78bfa" strokeWidth={1.7} />
        </motion.div>
      </div>  

      <div
        style={{
          padding: "26px 14px 14px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3 className="text-[15px] font-bold text-black leading-[1.2] mb-[5px]">
          {service.title}
        </h3>

        <p className="text-[0.66rem] md:text-[0.74rem] text-black/80 leading-[1.55] font-light mb-[10px]">
          {service.description}
        </p>
        <div className="w-8 h-[1.5px] rounded-sm mb-3" />

        <ul className="list-none p-0 grid grid-cols-2 gap-y-[5px] gap-x-2 mb-4 flex-1">
          {service.points.map((f) => (
            <li key={f} className="flex items-center gap-[5px] text-[0.6rem] md:text-[0.67rem] text-black/80">
              <span className="w-[3px] h-[3px] rounded-full bg-[#a78bfa] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <TronDivider />

        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#a78bfa]">
            Explore
          </span>

          <motion.div
            animate={hovered ? { rotate: 0, scale: 1.05 } : { rotate: 0, scale: 1 }}
            className={`
              w-7 h-7 rounded-full flex items-center justify-center
              transition-all duration-300
              ${
                hovered
                  ? "bg-[#a78bfa] border border-[#a78bfa]"
                  : "bg-white border border-black/20"
              }
            `}
          >
            <ArrowUpRight size={13} color={hovered ? "#fff" : "#a78bfa"} strokeWidth={2} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
