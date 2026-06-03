"use client";
import { ServiceCard } from "./components/ServiceCard";
import { Puzzle, Rocket, BriefcaseBusiness, Paintbrush, Server, Zap, Wrench } from "lucide-react";
import WorkWithMe from "./components/WrokWithMe";

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
    icon: Puzzle,
    cardImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
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
    icon: Rocket,
    cardImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
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
    icon: Paintbrush,
    cardImage: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80",
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
    icon: Server,
    cardImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
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
    icon: Zap,
    cardImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
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
    icon: Wrench,
    cardImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
  },
];

const ServicesPage = () => {
  return (
      <div className={"relative z-10 max-w-[90%] mx-auto py-5 md:py-10 flex flex-col gap-16"}>
        <section data-aos="fade-up" suppressHydrationWarning className={"flex flex-col mt-6 md:mt-10 gap-8"}>
          <div className="text-center px-4" >
          <span className="inline-block text-[var(--text-red)] text-[0.6rem] md:text-[0.8rem] font-bold uppercase tracking-[0.35em] ">Our Services</span>
          <h2 className="mt-1 text-[1.1rem] sm:text-[1.8rem] md:text-[2.2rem] font-black text-black leading-tight">
            Checkout Our{" "}
            <span className="relative inline-block text-[var(--text-red)]">
              All Services
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" preserveAspectRatio="none" style={{ height: "7px" }}>
                <path d="M0,6 Q45,0 90,5 Q135,10 180,3" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-3 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] max-w-lg text-[var(--text-secondary)] text-sm sm:text-base mx-auto">
           Skip long development cycles with customizable SaaS starters that help you launch faster without sacrificing quality.  </p>
          <div
            className="mx-auto mt-5 mb-5 h-1 w-16 rounded-full bg-[#a78bfa]"
          />
        </div>

          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} total={services.length} />
            ))}
          </div>
        </section>

       <WorkWithMe />
      </div>
  );
};

export default ServicesPage;
