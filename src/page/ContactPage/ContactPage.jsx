"use client"
import { EmailIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons/Icons";
import { CheckCircle, Clock, Sparkles } from "lucide-react";
export default function ContactPage() {

  const perks = [
  { icon: Clock, text: "Reply within 24hrs" },
  { icon: CheckCircle, text: "Free consultation" },
  { icon: Sparkles, text: "Clear timelines" },
];
  return (
    <section
      id="contact"
      className={"relative  w-full py-20 px-4 sm:px-6 lg:px-8"}
    >
      <div className={"relative mt-6 md:mt-10 z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6"}>
         <div className="text-center px-4" >
          <span className="inline-block text-[var(--text-red)] text-[0.6rem] md:text-[0.8rem] font-bold uppercase tracking-[0.35em] ">Our Services</span>
          <h2 className="mt-1 text-[1.1rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-black leading-tight">
            Let's build {" "}
            <span className="relative inline-block text-[var(--text-red)]">
              Something Great
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] max-w-lg text-[var(--text-secondary)] text-sm sm:text-base mx-auto">
Have an idea, startup, or freelance project in mind? Share a few details and I'll get back to you with next steps, timelines, and how we can work together.   </p>
          <div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#a78bfa]"
          />
        </div>
        <div
          className={"w-full rounded-3xl bg-white border border-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 flex flex-col gap-5 items-center"}
          data-aos="zoom-in"
          data-aos-delay="120"
        >
                    <div className="flex items-center gap-4 mt-1">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-[10.5px] text-black/50">
                <Icon size={12} className="text-[#a78bfa]" strokeWidth={2} />
                {text}
              </div>
            ))}
          </div>
          <div className={"flex flex-col sm:flex-row gap-3 w-full sm:justify-center"}>
            <a
              href="mailto:rajodedara294@gmail.com"
              className={"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#6b9fff] to-[#a78bfa] shadow-[0_10px_35px_rgba(107,159,255,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(107,159,255,0.55)] transition-all duration-200 w-full sm:w-auto"}
            >
              <EmailIcon />
              Start via Email
            </a>

            <a
              href="https://wa.me/917069439842"
              target="_blank"
              rel="noreferrer"
              className={"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold text-white bg-[#22c55e] shadow-[0_10px_35px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(34,197,94,0.55)] transition-all duration-200 w-full sm:w-auto"}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
             
            </a>
          </div>

          <div className={"mt-2 flex flex-col items-center gap-2"}>
            <p className={"text-xs sm:text-sm text-[#6b7280]"}>
              Prefer socials? You can also connect with me here:
            </p>
            <div className={"flex items-center gap-3"}>
              <a
                href="https://www.linkedin.com/in/raj-maher"
                target="_blank"
                rel="noreferrer"
                className={"inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-[11px] font-semibold text-[#0f172a] bg-[#f8fafc] hover:border-[#6b9fff] hover:text-[#6b9fff] transition-colors"}
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/pixel2profit_4u"
                target="_blank"
                rel="noreferrer"
                className={"inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-[11px] font-semibold text-[#0f172a] bg-[#f8fafc] hover:border-[#f472b6] hover:text-[#f472b6] transition-colors"}
              >
                   <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
