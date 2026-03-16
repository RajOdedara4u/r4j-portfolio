"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────
   Clay Floating Card — mini UI preview window
───────────────────────────────────────────── */
const BrowserWindow = () => (
  <div
    className={"      bg-white rounded-[22px] p-3 w-52      shadow-[0_14px_40px_rgba(107,159,255,0.18),0_4px_12px_rgba(26,26,46,0.08),inset_0_1px_0_rgba(255,255,255,1)]     border border-white/60    "}
  >
    {/* Browser top bar */}
    <div className={"flex items-center gap-1.5 mb-2.5"}>
      <span className={"w-2.5 h-2.5 rounded-full bg-[#ff6b6b] shadow-sm"} />
      <span className={"w-2.5 h-2.5 rounded-full bg-[#ffd166] shadow-sm"} />
      <span className={"w-2.5 h-2.5 rounded-full bg-[#06d6a0] shadow-sm"} />
      <div className={"flex-1 h-2 rounded-full bg-[#f1f3f9] ml-1"} />
    </div>
    {/* Content lines */}
    <div className={"space-y-1.5"}>
      <div className={"h-2 rounded-full bg-gradient-to-r from-[#6b9fff]/30 to-[#a78bfa]/20 w-4/5"} />
      <div className={"h-2 rounded-full bg-[#f1f3f9] w-full"} />
      <div className={"h-2 rounded-full bg-[#f1f3f9] w-3/4"} />
      <div className={"mt-2.5 h-6 rounded-xl bg-gradient-to-r from-[#6b9fff] to-[#a78bfa] w-2/3 shadow-[0_4px_12px_rgba(107,159,255,0.35)]"} />
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Clay Code Snippet Card
───────────────────────────────────────────── */
const CodeCard = () => (
  <div
    className={"      bg-[#1a1a2e] rounded-[20px] p-4 w-48      shadow-[0_12px_36px_rgba(26,26,46,0.25),0_4px_12px_rgba(26,26,46,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]   "}
  >
    <div className={"flex items-center gap-1.5 mb-3"}>
      <span className={"w-2 h-2 rounded-full bg-[#ff6b6b]"} />
      <span className={"w-2 h-2 rounded-full bg-[#ffd166]"} />
      <span className={"w-2 h-2 rounded-full bg-[#06d6a0]"} />
      <span className={"ml-auto text-[10px] text-white/30 font-mono"}>index.tsx</span>
    </div>
    <div className={"space-y-1 font-mono text-[10px]"}>
      <p><span className={"text-[#a78bfa]"}>const</span> <span className={"text-[#6b9fff]"}>App</span> <span className={"text-white/60"}>= () =&gt; &#123;</span></p>
      <p className={"pl-3"}><span className={"text-[#a78bfa]"}>return</span> <span className={"text-[#f472b6]"}>&lt;Hero /&gt;</span></p>
      <p><span className={"text-white/60"}>&#125;</span></p>
      <div className={"mt-2 pt-2 border-t border-white/10"}>
        <p className={"text-[#4ade80] text-[9px]"}>✓ Compiled successfully</p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Clay Tech Badge
───────────────────────────────────────────── */
const TechBadge = ({ icon, label, color }: { icon: string; label: string; color: string }) => (
  <div
    className={"      flex items-center gap-2 px-3 py-2 rounded-2xl bg-white      shadow-[0_6px_20px_rgba(107,159,255,0.12),0_2px_8px_rgba(26,26,46,0.06),inset_0_1px_0_rgba(255,255,255,1)]      border border-white/60 text-xs font-semibold text-[#1a1a2e]    "}
  >
    <span className={"text-base"}>{icon}</span>
    <span style={{ color }}>{label}</span>
  </div>
);

/* ─────────────────────────────────────────────
   Clay Developer Avatar using real photo
───────────────────────────────────────────── */
const DevAvatar = () => (
  <div className={"relative flex items-center justify-center"}>
    {/* Blob glow behind avatar */}
    <div
      className={"absolute w-72 h-72 rounded-full opacity-30 blur-3xl"}
      style={{
        background:
          "linear-gradient(135deg, #6b9fff 0%, #a78bfa 60%, #f472b6 100%)",
      }}
    />

    {/* Main avatar card with your photo */}
    <div
      className={"        relative z-10 w-64 h-64 rounded-[40px] bg-gradient-to-br from-[#eef3ff] to-[#f3f0ff]        shadow-[0_20px_60px_rgba(107,159,255,0.22),0_8px_24px_rgba(107,159,255,0.12),inset_0_2px_0_rgba(255,255,255,1)]        overflow-hidden border-2 border-white      "}
    >
      <Image
        src="/me.jpg"
        alt="Raj Odedara"
        fill
        priority
        className={"object-cover"}
      />

      {/* Online status dot */}
      <div className={"absolute top-4 right-4 flex items-center gap-1.5"}>
        <span className={"relative flex h-2.5 w-2.5"}>
          <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"} />
          <span className={"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]"} />
        </span>
        <span className={"text-[10px] font-medium text-[#4a4a6a]"}>Available</span>
      </div>
    </div>
  </div>
);

export { BrowserWindow, CodeCard, TechBadge, DevAvatar };
