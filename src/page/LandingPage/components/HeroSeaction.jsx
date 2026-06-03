"use client";
import { useEffect, useRef, useState } from "react";
import { BrowserWindow, CodeCard, TechBadge, DevAvatar } from "@/components/HeroIllustration/HeroIllustration";
import { ArrowIcon, DownloadIcon, NextIcon, ReactIcon, ScrollArrow } from "../../../components/Icons/Icons";
const CV_URL = "/CV/Raj_Odedara_Resume.pdf";

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const mounted = { current: true };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        if (!mounted.current) return;
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      mounted.current = false;
      observer.disconnect();
    };
  }, [target, duration]);
  return { count, ref };
}

function StatItem({ num, label }) {
  const numeric = parseFloat(num);
  const suffix = num.replace(String(numeric), "");
  const { count, ref } = useCountUp(numeric);
  return (
    <div ref={ref} className="flex flex-col text-center">
      <span className="text-[1rem] sm:text-[1.2rem]  font-black text-[#1a1a2e] leading-none">
        {count}{suffix}
      </span>
      <span className="text-[0.7rem] md:text-[0.8rem] text-[#4a4a6a] font-medium mt-0.5">{label}</span>
    </div>
  );
}

const HeroSeaction = () => {
    return  <main
    id="home"
    className={"relative min-h-screen w-full overflow-hidden flex items-center pt-25 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8 tron-grid"}
  >
    <div className="scan-line" />

    <div className="blob-morph absolute top-10 -left-40 w-96 h-96 opacity-25 blur-3xl pointer-events-none" style={{ background: "linear-gradient(135deg,#6b9fff,#a78bfa)" }} />
    <div className="blob-morph absolute bottom-0 -right-40 w-[28rem] h-[28rem] opacity-20 blur-3xl pointer-events-none" style={{ background: "linear-gradient(135deg,#f472b6,white)", animationDelay: "3s" }} />
    <div className="blob-morph absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none" style={{ background: "linear-gradient(135deg,#6b9fff,#f472b6)", animationDelay: "6s" }} />
    <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none" style={{ borderTop: "2px solid rgba(107,159,255,0.4)", borderLeft: "2px solid rgba(107,159,255,0.4)", boxShadow: "inset 4px 4px 12px rgba(107,159,255,0.1)" }} />
    <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none" style={{ borderBottom: "2px solid rgba(167,139,250,0.4)", borderRight: "2px solid rgba(167,139,250,0.4)", boxShadow: "inset -4px -4px 12px rgba(167,139,250,0.1)" }} />

    <div className={"mt-5 md:mt-0 relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>

      <div className={"flex flex-col gap-3 animate-[fadeInUp_0.7s_ease_both]"}>

        <div>
          <p className={"text-[0.8rem] md:text-[0.85rem] font-semibold text-[#6b9fff] tracking-widest mb-1"}>
            Hii There 👋, I&apos;m
          </p>
          <h1 className={"text-[1.8rem] md:text-[2.3rem] font-black leading-[1.1] tracking-tight text-[#1a1a2e]"}>
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

        <p className={"text-[#4a4a6a] text-base text-[0.8rem] md:text-[0.9rem] leading-relaxed max-w-lg font-medium"}>
        I build modern, performant web applications with beautiful UI and
          clean, scalable code. Let&apos;s ship your next idea—from MVP to
          production.
        </p>

        <div className={"flex flex-wrap items-center gap-4 mt-1"}>
          <a
            href="projects"
            className={"inline-flex items-center  gap-2 px-5 md:px-7 py-3.5 rounded-2xl                    text-sm font-bold text-white                   bg-gradient-to-r from-[#6b9fff] to-[#a78bfa]                   shadow-[0_8px_28px_rgba(107,159,255,0.42),inset_0_1px_0_rgba(255,255,255,0.25)]                   hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(107,159,255,0.52)]                   transition-all duration-200 ease-out cursor-pointer              "}
          >
            View Projects
           <ArrowIcon />
          </a>

          <a
            href={CV_URL}
            download="Raj_Odedara_Resume.pdf"
            className={" inline-flex items-center gap-2 px-5 md:px-7 py-3.5 rounded-2xl text-sm font-bold text-[#1a1a2e] bg-white border-[1.5px] border-[#6b9fff]/25 shadow-[0_6px_20px_rgba(26,26,46,0.07),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:border-[#6b9fff]/50 hover:shadow-[0_10px_28px_rgba(26,26,46,0.11)] transition-all duration-200 ease-out cursor-pointer "}
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>

        <div className={"flex  items-center gap-6 mt-2 pt-4 border-t border-[#e8eaf2]"}>
          {[
            { num: "1.5+", label: "Years Exp." },
            { num: "7+", label: "Projects" },
            { num: "95%", label: "Satisfaction" },
          ].map(({ num, label }) => (
            <StatItem key={label} num={num} label={label} />
          ))}
        </div>
      </div>

      <div className={"relative flex items-center justify-center h-[500px] lg:h-[560px]"}>

        <div className={"animate-[floatY_5s_ease-in-out_infinite] [--floatY:1]"} style={{ animation: "floatY 5s ease-in-out infinite" }}>
          <DevAvatar />
        </div>

        <div
          className={"absolute top-4 left-0 lg:-left-8"}
          style={{ animation: "floatY2 6s ease-in-out infinite" }}
        >
          <BrowserWindow />
        </div>

        <div
          className={"absolute bottom-8 right-0 lg:-right-4"}
          style={{ animation: "floatY3 7s ease-in-out infinite" }}
        >
          <CodeCard />
        </div>

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

        <div
          className={"absolute top-1/2 right-[-16px] w-12 h-12 rounded-[40%_60%_30%_70%_/_50%_60%_40%_50%] opacity-60"}
          style={{
            background: "linear-gradient(135deg, #a78bfa, #f472b6)",
            boxShadow: "0 8px 20px rgba(167,139,250,0.35)",
            animation: "morphBlob 10s ease-in-out infinite, floatY2 7s ease-in-out infinite"
          }}
        />
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

    <div className={"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"}>
      <span className={"text-[10px] font-medium text-[#4a4a6a] tracking-wider uppercase"}>Scroll</span>
     <ScrollArrow />
    </div>
  </main>
}

export default HeroSeaction