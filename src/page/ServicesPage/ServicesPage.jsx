import {ArrowIcon2} from "../../components/Icons/Icons"

const services = [
  {
    title: "Custom Web Application Development",
    label: "From Scratch",
    description:
      "Transform your idea into a scalable, production-ready web app using MERN Stack, Next.js, and NestJS — from planning to deployment.",
    points: [
      "End-to-end architecture & implementation",
      "Pixel-perfect UI with modern UX",
      "Secure, scalable backend and APIs",
    ],
    icon: "🧩",
  },
  {
    title: "Startup MVP Development",
    label: "Launch Faster",
    description:
      "Validate your idea quickly with a functional MVP built on a scalable foundation that can grow with your startup.",
    points: [
      "Rapid prototyping and iterations",
      "Scalable database & API structure",
      "Analytics and basic monitoring setup",
    ],
    icon: "🚀",
  },
  {
    title: "Prebuilt SaaS Solutions",
    label: "For Startups",
    description:
      "Skip long development cycles with customizable SaaS starters that help you launch faster without sacrificing quality.",
    points: [
      "Ready-made auth, billing & roles",
      "Multi-tenant friendly architecture",
      "Optimized for performance and SEO",
    ],
    icon: "💼",
  },
  {
    title: "Frontend Development",
    label: "UI & UX",
    description:
      "Modern, responsive, and interactive frontends built with React, Next.js, and Tailwind CSS for a smooth user experience.",
    points: [
      "Responsive layouts for all devices",
      "Smooth animations & micro-interactions",
      "Reusable, maintainable component design",
    ],
    icon: "🎨",
  },
  {
    title: "Backend & API Development",
    label: "Node.js, NestJS",
    description:
      "Secure and scalable backend systems using Node.js, Express, NestJS, and MongoDB with clean API design.",
    points: [
      "RESTful & modular API architecture",
      "Authentication, authorization & roles",
      "Database design with MongoDB",
    ],
    icon: "🛠️",
  },
  {
    title: "Website Performance Optimization",
    label: "Speed & SEO",
    description:
      "Improve page speed, Core Web Vitals, and SEO so your website loads fast and ranks better.",
    points: [
      "Core Web Vitals and Lighthouse audits",
      "Image, bundle, and caching optimization",
      "Best practices for SEO & accessibility",
    ],
    icon: "⚡",
  },
  {
    title: "Website Maintenance & Support",
    label: "On-going",
    description:
      "Keep your product healthy with continuous monitoring, updates, and improvements.",
    points: [
      "Bug fixes and feature enhancements",
      "Security and dependency updates",
      "Performance monitoring & reports",
    ],
    icon: "🧾",
  },
];

const highlights = [
  {
    title: "Modern Tech Stack",
    description: "MERN, Next.js, NestJS, Tailwind CSS, and modern tooling.",
  },
  {
    title: "Scalable Architecture",
    description: "Clean, modular code designed to grow with your product.",
  },
  {
    title: "Fast Communication",
    description: "Clear updates, quick iterations, and transparent timelines.",
  },
  {
    title: "Clean & Maintainable Code",
    description: "Readable, well-structured code that your team can extend.",
  },
];

const ServicesPage = () => {
  return (
    <section
      id="services"
      className={"relative w-full min-h-screen bg-[#f8f9fc] px-4 sm:px-6 lg:px-8 py-24"}
          >
      {/* Soft background matching portfolio theme */}
      <div
        className={"pointer-events-none absolute inset-0 opacity-80"}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 0%, rgba(107,159,255,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(167,139,250,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 10%, rgba(244,114,182,0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className={"relative z-10 max-w-6xl mx-auto flex flex-col gap-16"}>
        {/* Hero */}
        <header className={"flex flex-col items-center text-center gap-4"}>
          <span  data-aos="fade-up" className={"inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-white/70 text-xs font-semibold text-[#6b9fff] tracking-[0.2em] uppercase shadow-[0_4px_16px_rgba(107,159,255,0.12),inset_0_1px_0_rgba(255,255,255,1)]"}>
            Services I Offer
          </span>

          <h1  data-aos="fade-up" className={"text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1a1a2e]"}>
          Build.
            <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
            Launch.
            </span>{" "}
            Scale.
          </h1>

          <p data-aos="fade-up"  className={"max-w-2xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
            I help startups, founders, and businesses design, build, and launch
            modern web applications using{" "}
            <span className={"font-semibold text-[#6b9fff]"}>
              MERN Stack, Next.js, and modern web technologies
            </span>
            . From idea to deployment, I focus on performance, scalability, and
            clean user experiences.
          </p>
        </header>

        {/* Services Grid */}
        <section data-aos="fade-up"  className={"flex flex-col gap-8"}>
          <div className={"flex items-center justify-between gap-4 flex-wrap"}>
            <h2 className={"text-xl sm:text-2xl font-extrabold text-[#1a1a2e]"}>
              Services for serious products
            </h2>
            <p className={"text-xs sm:text-sm text-[#6b7280] max-w-sm"}>
              Every service is tailored to your business needs — with a focus on
              long-term maintainability and real-world performance.
            </p>
          </div>

          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
            {services.map((service, index) => (
              <article
                key={service.title}
                className={"group relative flex flex-col gap-4 rounded-3xl bg-white/95 border border-white/80 shadow-[0_14px_40px_rgba(15,23,42,0.06),0_4px_16px_rgba(148,163,184,0.18)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-200 p-5 sm:p-6"}
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                {/* Icon */}
                <div className={"inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#6b9fff]/15 via-[#a78bfa]/10 to-[#f472b6]/20 text-lg shadow-[0_10px_30px_rgba(107,159,255,0.25)] group-hover:scale-105 transition-transform duration-200"}>
                  <span>{service.icon}</span>
                </div>

                {/* Title + Label */}
                <div className={"flex flex-col gap-1"}>
                  <div className={"flex items-center justify-between gap-3"}>
                    <h3 className={"text-base sm:text-lg font-extrabold text-[#1a1a2e]"}>
                      {service.title}
                    </h3>
                    <span className={"text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b9fff] bg-[#eef2ff] px-2 py-1 rounded-full"}>
                      {service.label}
                    </span>
                  </div>
                  <p className={"text-xs sm:text-sm text-[#4a4a6a] leading-relaxed"}>
                    {service.description}
                  </p>
                </div>

                {/* Points */}
                <ul className={"mt-1 space-y-1.5 text-xs text-[#4a4a6a]"}>
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className={"flex items-start gap-2 group-hover:text-[#1a1a2e] transition-colors"}
                    >
                      <span className={"mt-[3px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6b9fff] to-[#a78bfa]"} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Why Work With Me */}
        <section className={"flex flex-col gap-6"}>
          <div className={"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"}>
            <div>
              <h2 className={"text-xl sm:text-2xl font-extrabold text-[#1a1a2e]"}>
                Why work with me?
              </h2>
              <p className={"text-xs sm:text-sm text-[#6b7280] max-w-md"}>
                Beyond just shipping features, I care about long-term
                reliability, developer experience, and how your product feels to
                real users.
              </p>
            </div>
          </div>

          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"}>
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={"rounded-2xl bg-white/95 border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] px-4 py-4 flex flex-col gap-1.5"}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <h3 className={"text-sm font-semibold text-[#1a1a2e]"}>
                  {item.title}
                </h3>
                <p className={"text-xs text-[#6b7280]"}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className={"relative mt-4 rounded-3xl bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] px-6 sm:px-10 py-8 sm:py-10 overflow-hidden shadow-[0_22px_70px_rgba(56,96,255,0.55)]"}
          data-aos="zoom-in"
          data-aos-delay="120"
        >
          {/* subtle overlay */}
          <div className={"pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.5),transparent_55%)]"} />

          <div className={"relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6"}>
            <div className={"flex flex-col gap-2 text-center sm:text-left"}>
              <h2 className={"text-2xl sm:text-3xl font-black tracking-tight text-white"}>
                Have an idea for a project?
              </h2>
              <p className={"text-sm sm:text-base text-white/80 max-w-xl"}>
                Let&apos;s build something amazing together — from a fast MVP to
                a fully scalable SaaS product. I&apos;ll help you ship with
                confidence.
              </p>
            </div>

            <div className={"flex flex-col sm:flex-row items-center gap-3"}>
              <a
                href="/contact"
                className={"inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-[#1a1a2e] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(15,23,42,0.45)] transition-all duration-200"}
              >
                Start Your Project
               <ArrowIcon2 />
              </a>

              <a
                href="mailto:rajodedara294@gmail.com"
                className={"inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white/90 border border-white/60 hover:bg-white/10 transition-colors"}
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesPage;