"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header  
    data-aos="fade-down"
    className={"fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6"}>
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-[20px] transition-all duration-300
        bg-white/85 backdrop-blur-xl border border-white/70
        ${
          scrolled
            ? "shadow-[0_12px_40px_rgba(107,159,255,0.18),0_4px_12px_rgba(26,26,46,0.09)]"
            : "shadow-[0_8px_28px_rgba(107,159,255,0.10),0_2px_8px_rgba(26,26,46,0.06)]"
        }`}
      >
        {/* Status */}
        <div className={"flex items-center gap-2 text-xs font-semibold text-[#4a4a6a]"}>
          <span className={"relative flex h-2 w-2"}>
            <span className={"animate-ping absolute h-full w-full rounded-full bg-[#4ade80] opacity-75"} />
            <span className={"relative h-2 w-2 rounded-full bg-[#4ade80]"} />
          </span>
          Open to work
        </div>

        {/* Desktop Navigation */}
        <ul className={"hidden md:flex items-center gap-7"}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative text-sm font-medium pb-0.5 transition-colors
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                after:h-[2px] after:rounded-full after:bg-gradient-to-r
                after:from-[#6b9fff] after:to-[#a78bfa]
                after:transition-all after:duration-300
                ${
                  isActive(href)
                    ? "text-[#6b9fff] after:w-[60%]"
                    : "text-[#4a4a6a] hover:text-[#6b9fff] after:w-[60%] after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={"hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#6b9fff] to-[#a78bfa] shadow-[0_6px_20px_rgba(107,159,255,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(107,159,255,0.5)] transition-all duration-200"}
        >
          Hire Me
          <svg
            className={"w-3.5 h-3.5"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={"md:hidden flex flex-col gap-1.5 p-2"}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-[#4a4a6a] transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#4a4a6a] transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#4a4a6a] transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[74px] left-4 right-4 bg-white rounded-[20px]
        shadow-[0_12px_40px_rgba(107,159,255,0.15)]
        border border-white/70 overflow-hidden
        transition-all duration-300
        ${
          menuOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className={"flex flex-col p-4 gap-1"}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition
                ${
                  isActive(href)
                    ? "bg-[#eef3ff] text-[#6b9fff]"
                    : "text-[#4a4a6a] hover:bg-[#f8f9fc] hover:text-[#6b9fff]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className={"mt-2 pt-2 border-t border-[#e8eaf2]"}>
            <Link
              href="/contact"
              className={"flex justify-center px-5 py-2.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#6b9fff] to-[#a78bfa]"}
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}