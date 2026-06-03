"use client";

export default function Spinner({ fullscreen = true }) {
  const wrapper = fullscreen
    ? "fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-white/40"
    : "w-full flex items-center justify-center py-20";

  return (
    <div className={wrapper}>
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-[3px] border-[#eef2ff] border-t-[#6b9fff] animate-spin" />
        <div
          className="absolute h-11 w-11 rounded-full border-[3px] border-white border-b-[#a78bfa] animate-spin"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        />
        <div
          className="absolute h-7 w-7 rounded-full border-[3px] border-[#fce7f3] border-l-[#f472b6] animate-spin"
          style={{ animationDuration: "0.8s" }}
        />
        <div className="absolute h-4 w-4 rounded-full bg-[#a78bfa] animate-ping opacity-30" />
        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-[#6b9fff] to-[#f472b6] shadow-[0_0_12px_rgba(167,139,250,0.7)]" />
      </div>
    </div>
  );
}
