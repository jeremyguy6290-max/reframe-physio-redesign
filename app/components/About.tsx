"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

const qualifications = [
  "PGDipPhty Orthopaedic Manipulative Therapy, Distinction",
  "BSc (Hons) Physiotherapy",
  "Vestibular Physiotherapist",
  "NZRP Registered Physiotherapist",
];

const specialisms = [
  "Pain management & chronic pain",
  "FND rehabilitation",
  "Autonomic dysfunction",
  "Concussion rehabilitation",
  "Vestibular physiotherapy",
  "Manual therapy",
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label centred above */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="h-px flex-1 bg-linen" />
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-fern whitespace-nowrap">
            Meet your physiotherapist
          </span>
          <div className="h-px flex-1 bg-linen" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl text-forest leading-[1.08] tracking-[-0.02em]">
                John Lee
              </h2>
              <p className="text-base text-fern font-medium mt-2">
                Founder &amp; Senior Physiotherapist
              </p>
            </div>

            <div className="flex flex-col gap-3 text-[15px] text-charcoal leading-[1.75]">
              <p>
                John Lee is the founder and senior physiotherapist at Reframe
                Physio. He has over a decade of experience across pain
                management, FND, autonomic dysfunction, concussion, vestibular
                physiotherapy and manual therapy.
              </p>
              <p>
                John&apos;s approach is grounded in the belief that complex
                presentations deserve thoughtful, specialised care — not
                generic protocols. He takes the time to understand each
                patient&apos;s full picture before treatment begins.
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <GraduationCap size={15} className="text-fern" />
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-fern">
                  Qualifications
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-sage mt-[7px] flex-shrink-0" />
                    <span className="text-[14px] text-charcoal leading-snug">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas of specialisation */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <Award size={15} className="text-fern" />
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-fern">
                  Specialisations
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {specialisms.map((s) => (
                  <span
                    key={s}
                    className="text-[12px] font-medium bg-foam text-grove border border-mint/60 px-3.5 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-1">
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-grove text-cream text-sm font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors duration-200 shadow-md shadow-grove/15"
              >
                Book with John
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* Rotated background surface */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-parchment"
              style={{ transform: "rotate(-2.5deg)" }}
            />
            {/* Second layer for depth */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-foam/60"
              style={{ transform: "rotate(-1deg)" }}
            />

            <div className="relative rounded-[1.75rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-forest/12">
              <Image
                src="/images/john-lee.jpg"
                alt="John Lee – Founder and Senior Physiotherapist at Reframe Physio"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 640px"
                quality={95}
              />
              {/* Bottom vignette */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(27,58,44,0.15) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating experience card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-8 -left-6 lg:-left-10 bg-cream rounded-2xl px-5 py-4 shadow-xl shadow-forest/12 border border-linen"
            >
              <p className="text-[10px] text-ash font-semibold uppercase tracking-wider mb-1">
                Clinical experience
              </p>
              <p className="text-2xl font-serif text-forest leading-none">10+</p>
              <p className="text-xs text-charcoal mt-0.5">Years specialist</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
