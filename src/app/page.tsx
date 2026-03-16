import { BrowserWindow, CodeCard, TechBadge, DevAvatar } from "@/components/HeroIllustration/HeroIllustration";
import AboutPage from "@/page/AboutPage/AboutPage";
import AskedQuestions from "@/components/AskedQuestions/AskedQuestions";
import TechStack from "@/components/TechStack/TechStack";
import ProjectCard from "@/page/ProjectsPage/ProjectCard";
import projectData from "@/page/ProjectsPage/projectData";

const CV_URL = "/CV/Raj_Odedara_Resume.pdf";

export default function Home() {
  return (
    <div  data-aos="fade-up" className={"min-h-screen bg-[#f8f9fc]"} style={{
      backgroundImage: `
        radial-gradient(ellipse 80% 60% at 20% 10%, rgba(107,159,255,0.11) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 80%, rgba(167,139,250,0.09) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 50% 45%, rgba(244,114,182,0.05) 0%, transparent 50%)
      `
    }}>
      <main
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
                <svg className={"w-4 h-4"} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Secondary — Download CV */}
              <a
                href={CV_URL}
                download="Raj_Odedara_Resume.pdf"
                className={" inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-[#1a1a2e] bg-white border-[1.5px] border-[#6b9fff]/25 shadow-[0_6px_20px_rgba(26,26,46,0.07),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:border-[#6b9fff]/50 hover:shadow-[0_10px_28px_rgba(26,26,46,0.11)] transition-all duration-200 ease-out cursor-pointer "}
              >
                Download CV
                <svg className={"w-4 h-4 text-[#a78bfa]"} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
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
                className={"flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white border border-white/70 text-sm font-bold text-[#61dafb]"}
                style={{
                  boxShadow: "0 8px 24px rgba(97,218,251,0.2), 0 3px 8px rgba(26,26,46,0.07), inset 0 1px 0 rgba(255,255,255,1)"
                }}
              >
                <svg
                className={"h-4 w-4"}
                viewBox="175.7 78 490.6 436.9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#61dafb">
                  <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                  <circle cx="420.9" cy="296.5" r="45.7" />
                </g>
              </svg> React
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
                 <svg 
                 className={"h-6 w-6"}
  viewBox="0 0 256 256"  >
    <g>
        <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000">
</path>
    </g>
</svg> Next.js
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
          <svg className={"w-4 h-4 text-[#6b9fff]"} style={{ animation: "floatY 2s ease-in-out infinite" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </main>

      {/* ════════════════════════════════════════
          TECH STACK STRIP
      ════════════════════════════════════════ */}
      <TechStack />

      {/* About section */}
      <AboutPage />

      {/* ════════════════════════════════════════
          FEATURED PROJECTS (first 6)
      ════════════════════════════════════════ */}
      <section
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
              <svg
                className={"w-3.5 h-3.5"}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5h10M19 5v10M19 5L5 19"
                  />
              </svg>
            </a>
                  </div>
      </section>

      <AskedQuestions />
    </div>
  );
}
