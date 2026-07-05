"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";
import { useIsMobile } from "../lib/useIsMobile";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const bioVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const bioItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

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
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  // Mobile renders this section static: no reveals, no staggers.
  const still = reduceMotion || isMobile;
  return (
    <section id="about" className="bg-cream pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden scroll-mt-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content — items slide in from the left, one after another */}
          <motion.div
            variants={still ? undefined : bioVariants}
            initial={still ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-7"
          >
            <motion.div variants={still ? undefined : bioItemVariants}>
              <h2 className="font-display font-bold text-4xl lg:text-[3.4rem] text-forest leading-[1.02] tracking-[-0.03em]">
                John Lee
              </h2>
              <p className="text-base text-fern font-medium mt-3">
                Founder &amp; Senior Physiotherapist
              </p>
            </motion.div>

            <motion.div
              variants={still ? undefined : bioItemVariants}
              className="flex flex-col gap-3 text-[15px] text-charcoal leading-[1.75]"
            >
              <p>
                John Lee is the founder and senior physiotherapist at Reframe
                Physio, with over a decade of specialist experience across
                pain, FND, concussion, and vestibular physiotherapy.
              </p>
              <p>
                He takes the time to understand each patient&apos;s full
                picture — then builds a treatment plan that actually fits their
                life.
              </p>
            </motion.div>

            {/* Qualifications */}
            <motion.div variants={still ? undefined : bioItemVariants}>
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
            </motion.div>

            {/* Areas of specialisation */}
            <motion.div variants={still ? undefined : bioItemVariants}>
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
            </motion.div>

            <motion.div variants={still ? undefined : bioItemVariants} className="pt-1">
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-grove text-cream text-sm font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors duration-200 shadow-md shadow-grove/15"
              >
                Book with John
              </a>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={still ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={still ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="group relative rounded-[1.75rem] overflow-hidden aspect-[3/4] ring-1 ring-forest/10"
              style={{
                boxShadow: "0 28px 80px -24px rgba(27, 58, 44, 0.45)",
              }}
            >
              <Image
                src="/images/john-lee.jpg"
                alt="John Lee – Founder and Senior Physiotherapist at Reframe Physio"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: "center 15%" }}
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 640px"
                quality={95}
              />
              {/* Soft forest grounding at the base of the portrait */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-36"
                style={{
                  background:
                    "linear-gradient(to top, rgba(27,58,44,0.28) 0%, rgba(27,58,44,0.08) 55%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Floating experience card */}
            <motion.div
              initial={still ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-8 -left-6 lg:-left-10 rounded-2xl px-6 py-5 ring-1 ring-sage/25"
              style={{
                background: "linear-gradient(150deg, #1B3A2C 0%, #0C1711 100%)",
                boxShadow: "0 20px 50px -16px rgba(7, 10, 8, 0.55)",
              }}
            >
              <p className="font-display font-bold text-4xl text-cream leading-none tracking-[-0.03em]">
                10+
              </p>
              <p className="text-[11.5px] font-medium text-sage mt-1.5 leading-snug">
                Years specialist
                <br />
                experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
