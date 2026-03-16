export default function ContactPage() {
  return (
    <section
      id="contact"
      className={"relative  w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}
      data-aos="fade-up"
    >
      <div className={"relative mt-6 md:mt-10 z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6"}>
        <h2 className={"text-3xl sm:text-4xl font-black tracking-tight text-[#1a1a2e]"}>
          Let&apos;s build something{" "}
          <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
            great
          </span>
          {" "}for the web.
        </h2>

        <p className={"max-w-xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
          Have an idea, startup, or freelance project in mind? Share a few
          details and I&apos;ll get back to you with next steps, timelines, and
          how we can work together.
        </p>

        <div
          className={"mt-4 w-full rounded-3xl bg-white border border-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 flex flex-col gap-5 items-center"}
          data-aos="zoom-in"
          data-aos-delay="120"
        >
          {/* Primary actions */}
          <div className={"flex flex-col sm:flex-row gap-3 w-full sm:justify-center"}>
            <a
              href="mailto:rajodedara294@gmail.com"
              className={"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#6b9fff] to-[#a78bfa] shadow-[0_10px_35px_rgba(107,159,255,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(107,159,255,0.55)] transition-all duration-200 w-full sm:w-auto"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={"size-4"} fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
              Start via Email
            </a>

            <a
              href="https://wa.me/917069439842"
              target="_blank"
              rel="noreferrer"
              className={"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm sm:text-base font-semibold text-white bg-[#22c55e] shadow-[0_10px_35px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(34,197,94,0.55)] transition-all duration-200 w-full sm:w-auto"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={"size-4"} fill="currentColor" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
              Chat on WhatsApp
             
            </a>
          </div>

          {/* Small note with number */}
          <p className={"text-[11px] sm:text-xs text-[#6b7280]"}>
            WhatsApp number:{" "}
            <span className={"font-semibold text-[#16a34a]"}>+91 70694 39842</span>
          </p>

          {/* Social links */}
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
                href="https://www.instagram.com/pixel2profit_4u"
                target="_blank"
                rel="noreferrer"
                className={"inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] px-3 py-1.5 text-[11px] font-semibold text-[#0f172a] bg-[#f8fafc] hover:border-[#f472b6] hover:text-[#f472b6] transition-colors"}
              >
                   <svg
  xmlns="http://www.w3.org/2000/svg"
  className={"h-4 w-4"}
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
</svg>
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
