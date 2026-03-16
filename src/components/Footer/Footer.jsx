"use client";

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
                <svg
                className={"w-4 h-4"}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
                  <a
                    href="https://github.com/RajOdedara4u"
                    className={"hover:text-black transition-colors"}>
                    GitHub
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                <svg
                className={"w-4 h-4"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M72.658 52.912c7.188-8.265 15.318-12.457 25.597-11.951 16.723.822 28.493 12.464 29.339 30.639.743 16.008.216 32.072.33 48.108.028 3.848-1.774 5.286-5.467 5.193-4.947-.125-9.912-.239-14.847.049-4.896.286-6.758-1.679-6.674-6.542.193-10.887.074-21.782.053-32.673-.007-2.968.03-5.95-.202-8.904-.715-9.143-6.08-14.661-14.034-14.599-8.175.063-14.789 6.633-14.933 15.374-.211 12.868-.084 25.741-.111 38.612-.019 8.618-.026 8.618-8.535 8.674-18.4.118-18.393.118-18.4-18.286-.007-18.811.13-37.627-.144-56.434-.079-5.446 1.742-7.627 7.172-7.118 3.14.295 6.331.033 9.501.046C70.761 43.142 70.761 43.147 72.658 52.912zM1.921 83.654c0-11.282.207-22.569-.091-33.842-.137-5.272 1.876-7.097 6.958-6.784 4.93.302 9.896.17 14.84.065 3.714-.077 5.393 1.435 5.379 5.27-.088 23.751-.1 47.499-.054 71.25.007 3.802-1.637 5.369-5.376 5.29-5.341-.114-10.692-.156-16.029.021-4.097.137-5.636-1.614-5.592-5.646.13-11.874.046-23.751.046-35.625C1.977 83.654 1.949 83.654 1.921 83.654zM15.182 31.319C6.494 31.282.059 25.299 0 17.203-.06 9.245 6.582 3.029 15.147 3.023c9.32-.005 15.632 5.739 15.595 14.19C30.702 25.819 24.592 31.356 15.182 31.319z"
                  clipRule="evenodd"
                ></path>
              </svg>
                  <a
                    href="https://www.linkedin.com/in/raj-maher"
                    className={"hover:text-[#6b9fff] transition-colors"}
                  >
                    LinkedIn
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
                <svg
                className={"w-4 h-4"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
                  <a
                    href="https://www.youtube.com/@Raj_odedara4u"
                    className={"hover:text-red-400 transition-colors"}
                  >
                    YouTube
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={"h-4 w-4"} fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                  <a
                    href="https://www.instagram.com/pixel2profit_4u/"
                    className={"hover:text-pink-400 transition-colors"}
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                <svg className={"h-4 w-4"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
                  <a
                    href="https://x.com/RAJBHAI4955"
                    className={"hover:text-[#6b9fff] transition-colors"}
                  >
                    X (Twitter)
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
                <svg xmlns="http://www.w3.org/2000/svg" className={"size-4"} fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                  <a
                    href="tel:+917069439842"
                    className={"hover:text-[#6b9fff] transition-colors"}
                  >
                    +91 706 943 9842
                  </a>
                </li>
                <li className={"flex gap-3 items-center"}>
                <svg xmlns="http://www.w3.org/2000/svg" className={"size-4"} fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                  <a
                    href="mailto:odedararaj4u@gmail.com"
                    className={"hover:text-[#6b9fff] transition-colors"}
                  >
                    odedararaj4u@gmail.com
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
              <svg
                className={"w-4 h-4"}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raj-maher"
              className={"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(148,163,184,0.35)] border border-white/80 text-[#0f172a] hover:-translate-y-0.5 hover:text-[#6b9fff] transition-all"}
              aria-label="LinkedIn"
            >
              <svg
                className={"w-4 h-4"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M72.658 52.912c7.188-8.265 15.318-12.457 25.597-11.951 16.723.822 28.493 12.464 29.339 30.639.743 16.008.216 32.072.33 48.108.028 3.848-1.774 5.286-5.467 5.193-4.947-.125-9.912-.239-14.847.049-4.896.286-6.758-1.679-6.674-6.542.193-10.887.074-21.782.053-32.673-.007-2.968.03-5.95-.202-8.904-.715-9.143-6.08-14.661-14.034-14.599-8.175.063-14.789 6.633-14.933 15.374-.211 12.868-.084 25.741-.111 38.612-.019 8.618-.026 8.618-8.535 8.674-18.4.118-18.393.118-18.4-18.286-.007-18.811.13-37.627-.144-56.434-.079-5.446 1.742-7.627 7.172-7.118 3.14.295 6.331.033 9.501.046C70.761 43.142 70.761 43.147 72.658 52.912zM1.921 83.654c0-11.282.207-22.569-.091-33.842-.137-5.272 1.876-7.097 6.958-6.784 4.93.302 9.896.17 14.84.065 3.714-.077 5.393 1.435 5.379 5.27-.088 23.751-.1 47.499-.054 71.25.007 3.802-1.637 5.369-5.376 5.29-5.341-.114-10.692-.156-16.029.021-4.097.137-5.636-1.614-5.592-5.646.13-11.874.046-23.751.046-35.625C1.977 83.654 1.949 83.654 1.921 83.654zM15.182 31.319C6.494 31.282.059 25.299 0 17.203-.06 9.245 6.582 3.029 15.147 3.023c9.32-.005 15.632 5.739 15.595 14.19C30.702 25.819 24.592 31.356 15.182 31.319z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Raj_odedara4u"
              className={"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(148,163,184,0.35)] border border-white/80 text-[#0f172a] hover:-translate-y-0.5 hover:text-[#ff0000] transition-all"}
              aria-label="YouTube"
            >
              <svg
                className={"w-4 h-4"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;