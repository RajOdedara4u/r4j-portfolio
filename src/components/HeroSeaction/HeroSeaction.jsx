import { BrowserWindow, CodeCard, TechBadge, DevAvatar } from "@/components/HeroIllustration/HeroIllustration";
import { ArrowIcon, DownloadIcon, NextIcon, ReactIcon, ScrollArrow } from "../Icons/Icons";
const CV_URL = "/CV/Raj_Odedara_Resume.pdf";

const HeroSeaction =()=>{
    return  <main
    id="home"
    className={"relative min-h-screen w-full overflow-hidden flex items-center pt-25 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8"}
  >

    {/* ── Decorative Background Blobs ── */}
    <div
      className={"absolute top-20 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"}
      style={{ background: "linear-gradient(135deg,#6b9fff,#a78bfa)" }}
    />
    <div
      className={"absolute bottom-10 -right-32 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"}
      style={{ background: "linear-gradient(135deg,#f472b6,#a78bfa)" }}
    />
    <div
      className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"}
      style={{ background: "linear-gradient(135deg,#6b9fff,#f472b6)" }}
    />

    {/* ── Main Grid ── */}
    <div className={"relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>

      {/* ════ LEFT COLUMN — Text Content ════ */}
      <div className={"flex flex-col gap-6 animate-[fadeInUp_0.7s_ease_both]"}>

        {/* Availability badge */}
       

        {/* Main Headline */}
        <div>
          <p className={"text-sm font-semibold text-[#6b9fff] tracking-widest mb-2"}>
            Hii There 👋, I&apos;m
          </p>
          <h1 className={"text-4xl sm:text-5xl lg:text-[3rem] font-black leading-[1.1] tracking-tight text-[#1a1a2e]"}>
            Raj{" "}
            <span
              className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}
              style={{ backgroundSize: "200% 200%", animation: "gradientShift 4s ease infinite" }}
            >
              Odedara
            </span>
            <br />
            Website Developer
          </h1>
        </div>

        {/* Subtitle */}
        <p className={"text-[#4a4a6a] text-base sm:text-md leading-relaxed max-w-lg font-medium"}>
        I build modern, performant web applications with beautiful UI and
          clean, scalable code. Let&apos;s ship your next idea—from MVP to
          production.
        </p>

        {/* CTA Buttons */}
        <div className={"flex flex-wrap items-center gap-4 mt-1"}>
          {/* Primary — View Projects */}
          <a
            href="projects"
            className={"inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl                    text-sm font-bold text-white                   bg-gradient-to-r from-[#6b9fff] to-[#a78bfa]                   shadow-[0_8px_28px_rgba(107,159,255,0.42),inset_0_1px_0_rgba(255,255,255,0.25)]                   hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(107,159,255,0.52)]                   transition-all duration-200 ease-out cursor-pointer              "}
          >
            View Projects
           <ArrowIcon />
          </a>

          {/* Secondary — Download CV */}
          <a
            href={CV_URL}
            download="Raj_Odedara_Resume.pdf"
            className={" inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-[#1a1a2e] bg-white border-[1.5px] border-[#6b9fff]/25 shadow-[0_6px_20px_rgba(26,26,46,0.07),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:border-[#6b9fff]/50 hover:shadow-[0_10px_28px_rgba(26,26,46,0.11)] transition-all duration-200 ease-out cursor-pointer "}
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>

        {/* Stats row */}
        <div className={"flex items-center gap-6 mt-2 pt-4 border-t border-[#e8eaf2]"}>
          {[
            { num: "1.5+", label: "Years Exp." },
            { num: "7+", label: "Projects" },
            { num: "95%", label: "Satisfaction" },
          ].map(({ num, label }) => (
            <div key={label} className={"flex flex-col"}>
              <span className={"text-2xl font-black text-[#1a1a2e] leading-none"}>{num}</span>
              <span className={"text-xs text-[#4a4a6a] font-medium mt-0.5"}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════ RIGHT COLUMN — Illustration + Floating Cards ════ */}
      <div className={"relative flex items-center justify-center h-[500px] lg:h-[560px]"}>

        {/* ── Center: Developer Avatar ── */}
        <div className={"animate-[floatY_5s_ease-in-out_infinite] [--floatY:1]"} style={{ animation: "floatY 5s ease-in-out infinite" }}>
          <DevAvatar />
        </div>

        {/* ── Floating: Browser Card (top-left) ── */}
        <div
          className={"absolute top-4 left-0 lg:-left-8"}
          style={{ animation: "floatY2 6s ease-in-out infinite" }}
        >
          <BrowserWindow />
        </div>

        {/* ── Floating: Code Card (bottom-right) ── */}
        <div
          className={"absolute bottom-8 right-0 lg:-right-4"}
          style={{ animation: "floatY3 7s ease-in-out infinite" }}
        >
          <CodeCard />
        </div>

        {/* ── Floating: React Badge (top-right) ── */}
        <div
          className={"absolute top-10 right-4 lg:right-0"}
          style={{ animation: "floatRotate 8s ease-in-out infinite" }}
        >
          <div
            className={"flex items-center gap-1 px-3.5 py-2.5 rounded-2xl bg-white border border-white/70 text-sm font-bold text-[#61dafb]"}
            style={{
              boxShadow: "0 8px 24px rgba(97,218,251,0.2), 0 3px 8px rgba(26,26,46,0.07), inset 0 1px 0 rgba(255,255,255,1)"
            }}
          >
           <ReactIcon /> React
          </div>
        </div>

        {/* ── Floating: MongoDB Badge (bottom-left) ── */}
        <div
          className={"absolute bottom-16 left-4 lg:-left-2"}
          style={{ animation: "floatY 9s ease-in-out infinite reverse" }}
        >
          <div
            className={"flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white border border-white/70 text-sm font-bold text-black"}
            style={{
              boxShadow: "0 8px 24px rgba(71,162,72,0.15), 0 3px 8px rgba(26,26,46,0.07), inset 0 1px 0 rgba(255,255,255,1)"
            }}
          >
          <NextIcon />
Next.js
          </div>
        </div>

        {/* ── Abstract clay shapes ── */}
        {/* Purple shape */}
        <div
          className={"absolute top-1/2 right-[-16px] w-12 h-12 rounded-[40%_60%_30%_70%_/_50%_60%_40%_50%] opacity-60"}
          style={{
            background: "linear-gradient(135deg, #a78bfa, #f472b6)",
            boxShadow: "0 8px 20px rgba(167,139,250,0.35)",
            animation: "morphBlob 10s ease-in-out infinite, floatY2 7s ease-in-out infinite"
          }}
        />
        {/* Blue shape */}
        <div
          className={"absolute top-28 left-1/2 w-8 h-8 rounded-full opacity-50"}
          style={{
            background: "linear-gradient(135deg, #6b9fff, #4ade80)",
            boxShadow: "0 6px 16px rgba(107,159,255,0.4)",
            animation: "floatRotate 6s ease-in-out infinite"
          }}
        />
      </div>
    </div>

    {/* ── Scroll arrow ── */}
    <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"}>
      <span className={"text-[10px] font-medium text-[#4a4a6a] tracking-wider uppercase"}>Scroll</span>
     <ScrollArrow />
    </div>
  </main>
}

export default HeroSeaction