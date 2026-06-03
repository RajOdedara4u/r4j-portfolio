"use client";
import Image from "next/image";

export default function AboutCard() {
    return (
         <div className={"relative z-10 max-w-[90%] mx-auto flex items-center h-auto py-5 md:py-10"}>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center"}>
          <div suppressHydrationWarning className={"flex flex-col gap-5"} data-aos="fade-right">
            <span className={"inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-white/70 text-xs font-semibold text-[#6b9fff] tracking-[0.2em] uppercase shadow-[0_4px_16px_rgba(107,159,255,0.12),inset_0_1px_0_rgba(255,255,255,1)] w-fit"}>
              About Me
            </span>

            <p className={"text-sm sm:text-base text-[#4a4a6a] leading-relaxed font-medium"}>
            Hello! 👋 I’m<span className={"font-semibold text-[#6b9fff]"}> Raj Odedara </span> from Gujarat, India. I hold a Bachelor’s degree in Computer Applications and have 1.5+ years of experience in web development.
            
            I specialize in building modern web applications using technologies like  <span className={"font-semibold text-[#a78bfa]"}> MERN Stack, Next.js, NestJS,</span> and other modern web tools.

<br /><br /> My journey started with an internship where I developed real-time applications, which later led to a trainee role and a full-time developer position. These experiences helped me gain strong skills in frontend and backend development, API integration, and building scalable web applications.

I’m passionate about learning new technologies, solving complex problems, and contributing to impactful projects in the tech industry. 🚀
            </p>

          
          </div>

          <div suppressHydrationWarning className={"relative flex items-center justify-center"} data-aos="fade-left">
            <div className={"absolute inset-0 blur-3xl opacity-60 bg-gradient-to-tr from-[#6b9fff]/10 via-[#a78bfa]/30 to-[#f472b6]/60 "} />

            <div className={"relative max-w-sm w-full rounded-[2rem] bg-white border border-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.22)] overflow-hidden"}>
              <div className={"relative h-80 sm:h-96"}>
                <Image
                  src="/me.jpg"
                  alt="Raj Odedara"
                  fill
                  priority
                  className={"object-cover"}
                />

                <div className={"absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/60 backdrop-blur text-[11px] font-semibold text-white"}>
                  <span className={"relative flex h-2 w-2"}>
                    <span className={"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"} />
                    <span className={"relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"} />
                  </span>
                  Available for work
                </div>
              </div>

              <div className={"border-t border-[#e5e7eb] bg-[#f9fafb] px-4 py-3 flex items-center justify-between gap-3"}>
                  <p className={"text-xs font-semibold text-[#1f2933]"}>
                    Raj Odedara
                  </p>
                  <p className={"text-[11px] text-[#6b7280]"}>
                    Full Stack Developer
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }