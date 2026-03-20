"use client"
import { EmailIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons/Icons";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className={"relative  w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]"}
      
    >
      <div className={"relative mt-6 md:mt-10 z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6"}>
      <motion.h2
        className={"text-3xl sm:text-4xl font-black tracking-tight text-[#1a1a2e]"}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Your Heading Text
      Let&apos;s build something{" "}
          <span className={"bg-gradient-to-r from-[#6b9fff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-transparent"}>
            great
          </span>
          {" "}for the web.
</motion.h2>

        <motion.p
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         viewport={{ once: true }}
        className={"max-w-xl text-sm sm:text-base text-[#4a4a6a] font-medium"}>
          Have an idea, startup, or freelance project in mind? Share a few
          details and I&apos;ll get back to you with next steps, timelines, and
          how we can work together.
        </motion.p>

        <div
          className={"mt-4 w-full rounded-3xl bg-white border border-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-6 sm:p-8 flex flex-col gap-5 items-center"}
          data-aos="zoom-in"
          data-aos-delay="120"
        >
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

          <p className={"text-[11px] sm:text-xs text-[#6b7280]"}>
            WhatsApp number:{" "}
            <span className={"font-semibold text-[#16a34a]"}>+91 70694 39842</span>
          </p>

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
