"use client";
import { CallIcon, EmailIcon, GitHubIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "../Icons/Icons";
const Footer = () => {
  return (
    <footer className={"relative mt-5 border-t border-[#e2e8f0] bg-[#f9fafb]"}>
      {/* subtle gradient background to match hero/projects */}
      <div
        className={"pointer-events-none absolute inset-0 opacity-80"}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 0%, rgba(107,159,255,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,139,250,0.07) 0%, transparent 55%)
          `,
        }}
      />

      <div className={"relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-12 lg:py-14"}>
        <div className={"flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"}>
          {/* Brand / short bio */}
          <div className={"max-w-sm"}>
            <div className={"inline-flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-1 shadow-[0_6px_18px_rgba(148,163,184,0.35)] border border-white/80 mb-4"}>
              <span className={"h-2 w-2 rounded-full bg-[#4ade80]"} />
              <span className={"text-[11px] font-semibold tracking-[0.18em] uppercase text-[#64748b]"}>
                Available for projects
              </span>
            </div>
            <h3 className={"text-xl sm:text-2xl font-extrabold tracking-tight text-[#0f172a]"}>
              Raj Odedara
            </h3>
          </div>

          {/* Links columns */}
          <div className={"grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-sm"}>
            <div>
              <h4 className={"mb-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#94a3b8]"}>
                Resources
              </h4>
              <ul className={"space-y-2 text-[#475569]"}>
                <li className="flex gap-3 items-center">
                  <a
                    href="https://github.com/RajOdedara4u"
                    className={"hover:text-black transition-colors flex items-center gap-3"}>
                  <GitHubIcon />
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/in/raj-maher"
                    className={"hover:text-[#6b9fff] transition-colors flex items-center gap-3"}
                  >
                 <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={"mb-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#94a3b8]"}>
                Social
              </h4>
              <ul className={"space-y-2 text-[#475569]"}>
                <li className="flex gap-3 items-center">
                  <a
                    href="https://www.youtube.com/@Raj_odedara4u"
                    className={"hover:text-red-400 transition-colors flex items-center gap-3"}
                  >
                 <YoutubeIcon />
                    <span>YouTube</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <a
                    href="https://www.instagram.com/pixel2profit_4u/"
                    className={"hover:text-pink-400 transition-colors flex items-center gap-3"}
                  >
                 <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <a
                    href="https://x.com/RAJBHAI4955"
                    className={"hover:text-[#6b9fff] transition-colors flex items-center gap-3"}
                  >
                  <XIcon />
                    <span>X (Twitter)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={"mb-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#94a3b8]"}>
                Contact
              </h4>
              <ul className={"space-y-2 text-[#475569]"}>
                <li className="flex gap-3 items-center">
                  <a
                    href="tel:+917069439842"
                    className={"hover:text-[#6b9fff] transition-colors flex items-center gap-3"}
                  >
                 <CallIcon />
                  <span>+91 706 943 9842</span>
                  </a>
                </li>
                <li className={"flex gap-3 items-center"}>
                  <a
                    href="mailto:odedararaj4u@gmail.com"
                    className={"hover:text-[#6b9fff] transition-colors flex items-center gap-3"}
                  >
                <EmailIcon />
                    <span>odedararaj4u@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className={"mt-8 border-t border-[#e2e8f0] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3"}>
          <p className={"text-xs sm:text-sm text-[#94a3b8]"}>
            © 2026 Raj Odedara. All rights reserved.
          </p>

          <div className={"flex items-center gap-3"}>
            <a
              href="https://github.com/RajOdedara4u"
              className={"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(148,163,184,0.35)] border border-white/80 text-[#0f172a] hover:-translate-y-0.5 hover:text-black transition-all"}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-maher"
              className={"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(148,163,184,0.35)] border border-white/80 text-[#0f172a] hover:-translate-y-0.5 hover:text-[#6b9fff] transition-all"}
              aria-label="LinkedIn"
            >
             <LinkedinIcon />
            </a>
            <a
              href="https://www.youtube.com/@Raj_odedara4u"
              className={"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(148,163,184,0.35)] border border-white/80 text-[#0f172a] hover:-translate-y-0.5 hover:text-[#ff0000] transition-all"}
              aria-label="YouTube"
            >
             <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;