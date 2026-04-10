const AskedQuestions = () => {
  const questions = [
    {
      question:
        "How long does it take to deliver a pre-built application or website?",
      answer:
        "We usually complete the entire pre-built application or website development within 14 days, including deployment, testing, and final handover.",
    },
    {
      question: "Do you provide the complete source code after development?",
      answer:
        "Yes, absolutely. Once the development is complete and the final payment is processed, we hand over the entire source code, along with all project files and credentials. The complete authority of the code remains yours.",
    },
    {
      question:
        "What’s the difference between a pre-built and a custom development project?",
      answer:
        "Our pre-built projects come with ready-made modules that can be quickly deployed and customized with your branding—perfect for fast launches. In contrast, custom development is built from scratch according to your unique requirements, giving you complete flexibility in design, functionality, and integrations.",
    },
    {
      question: "Do you provide maintenance and support after delivery?",
      answer:
        "Yes, we provide 6 months of maintenance and support after project delivery. During this period, if there’s any glitch, bug, or technical issue, our team will resolve it promptly at no extra cost.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We use modern technologies like React JS, React Native, Node JS, and Next JS for frontend and backend, along with Figma for UI/UX design and Hostinger/AWS for hosting. This ensures high performance, scalability, and long-term reliability.",
    },
  ];

  return (
    <section className={"relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}>
      <div
        className={"pointer-events-none absolute inset-0 opacity-80"}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 0%, rgba(107,159,255,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,139,250,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 10%, rgba(244,114,182,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className={"relative z-10 max-w-4xl mx-auto"}>
        <div className={"mb-12 text-center flex flex-col items-center gap-3"}>
          <span className={"inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-white/70 text-xs font-semibold text-[#6b9fff] tracking-[0.2em] uppercase shadow-[0_4px_16px_rgba(107,159,255,0.12),inset_0_1px_0_rgba(255,255,255,1)]"}>
            FAQ
          </span>
          <h2 className={"text-2xl sm:text-3xl font-black tracking-tight text-[#0f172a]"}>
            Frequently Asked{" "}
            <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
              Questions
            </span>
          </h2>
          <p className={"max-w-xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
            Answers to the most common questions about timelines, ownership,
            support, and the tech stack I use to build your project.
          </p>
        </div>

        <div className={"space-y-4"}>
          {questions.map((item, index) => (
            <details
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={item.question}
              className={"group rounded-2xl border border-white/80 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.08)] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"}
            >
              <summary  className={"flex items-center justify-between gap-4 cursor-pointer list-none px-4 sm:px-5 py-4 sm:py-4.5"}>
                <div className={"flex items-start gap-3"}>
                  <span className={"mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#eef2ff] to-[#e0f2fe] text-[11px] font-semibold text-[#4f46e5] shadow-[0_2px_6px_rgba(79,70,229,0.25)]"}>
                    {index + 1}
                  </span>
                  <h3 className={"text-sm sm:text-[15px] font-semibold text-[#020617]"}>
                    {item.question}
                  </h3>
                </div>
                <div className={"relative h-7 w-7 flex items-center justify-center rounded-full bg-[#eef2ff] text-[#4b5563] shadow-[0_2px_6px_rgba(148,163,184,0.5)]"}>
                  <span className={"absolute h-[1.5px] w-2.5 bg-current transition-transform duration-200 group-open:rotate-90"} />
                  <span className={"h-[1.5px] w-2.5 bg-current transition-opacity duration-200 group-open:opacity-0"} />
                </div>
              </summary>

              <div className={"px-4 sm:px-5 border-t border-[#e5e7eb] bg-[#f9fafb]/80 overflow-hidden"}>
                <div className={"text-xs sm:text-[13px] text-[#4b5563] leading-relaxed transform transition-[max-height,opacity,transform,padding] duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)] max-h-0 opacity-0 translate-y-1 py-0 group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0 group-open:py-3"}>
                  {item.answer}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskedQuestions;