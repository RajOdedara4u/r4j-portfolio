"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f8f9fc] tron-grid flex items-center justify-center px-4">

      <div
        className="blob-morph absolute -top-24 -left-24 w-96 h-96 opacity-25 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg,#6b9fff,#a78bfa)" }}
      />
      <div
        className="blob-morph absolute -bottom-24 -right-24 w-[28rem] h-[28rem] opacity-20 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg,#f472b6,#a78bfa)", animationDelay: "4s" }}
      />
      <div
        className="blob-morph absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg,#6b9fff,#f472b6)", animationDelay: "2s" }}
      />

      <div className="absolute top-6 left-6 w-10 h-10 pointer-events-none" style={{ borderTop: "2px solid rgba(107,159,255,0.5)", borderLeft: "2px solid rgba(107,159,255,0.5)" }} />
      <div className="absolute top-6 right-6 w-10 h-10 pointer-events-none" style={{ borderTop: "2px solid rgba(167,139,250,0.5)", borderRight: "2px solid rgba(167,139,250,0.5)" }} />
      <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none" style={{ borderBottom: "2px solid rgba(167,139,250,0.5)", borderLeft: "2px solid rgba(167,139,250,0.5)" }} />
      <div className="absolute bottom-6 right-6 w-10 h-10 pointer-events-none" style={{ borderBottom: "2px solid rgba(244,114,182,0.5)", borderRight: "2px solid rgba(244,114,182,0.5)" }} />

      <div className="scan-line" />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">

        <div className="relative select-none">
          <span
            className="block text-[8rem] sm:text-[11rem] font-black leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg,#6b9fff,#a78bfa,#f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: glitch ? "drop-shadow(4px 0 0 rgba(244,114,182,0.8)) drop-shadow(-4px 0 0 rgba(107,159,255,0.8))" : "drop-shadow(0 0 40px rgba(107,159,255,0.35))",
              transform: glitch ? "skewX(-3deg) translateX(3px)" : "none",
              transition: "filter 0.05s, transform 0.05s",
            }}
          >
            404
          </span>
          {glitch && (
            <>
              <span className="absolute inset-0 block text-[8rem] sm:text-[11rem] font-black leading-none tracking-tighter text-[#6b9fff] opacity-50" style={{ clipPath: "inset(30% 0 40% 0)", transform: "translateX(-4px)" }}>404</span>
              <span className="absolute inset-0 block text-[8rem] sm:text-[11rem] font-black leading-none tracking-tighter text-[#f472b6] opacity-50" style={{ clipPath: "inset(60% 0 10% 0)", transform: "translateX(4px)" }}>404</span>
            </>
          )}
        </div>

        <div className="w-48 sm:w-64 h-px" style={{ background: "linear-gradient(90deg,transparent,#6b9fff,#a78bfa,#f472b6,transparent)", boxShadow: "0 0 12px rgba(167,139,250,0.6)" }} />

        <p className="text-sm sm:text-base text-[#4a4a6a] font-medium max-w-sm leading-relaxed">
           Page Not Found Please Return to the{" "}
          <span className="bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent">
            Home Page
            </span>
           </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#6b9fff] to-[#a78bfa] shadow-[0_8px_28px_rgba(107,159,255,0.42),inset_0_1px_0_rgba(255,255,255,0.25)] hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(107,159,255,0.52)] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-[#1a1a2e] bg-white border-[1.5px] border-[#6b9fff]/25 shadow-[0_6px_20px_rgba(26,26,46,0.07),inset_0_1px_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:border-[#6b9fff]/50 hover:shadow-[0_10px_28px_rgba(26,26,46,0.11)] transition-all duration-200"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
