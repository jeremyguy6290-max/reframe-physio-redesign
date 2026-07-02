"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CLINIKO_URL } from "../lib/booking";

const pillars = [
  {
    number: "01",
    title: "Specialist experience",
    description:
      "Over a decade of specialist work across pain, FND, concussion, and vestibular physiotherapy.",
  },
  {
    number: "02",
    title: "Whole-person care",
    description:
      "We treat the full picture — nervous system, lifestyle, and goals — not just the presenting symptom.",
  },
  {
    number: "03",
    title: "Clear diagnosis first",
    description:
      "We explain what's happening in plain language before any treatment begins.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyReframe() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-parchment py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 lg:mb-20"
        >
          <span className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-fern block mb-5">
            Our approach
          </span>
          <h2 className="font-display font-bold text-forest text-[2.3rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.02] tracking-[-0.03em] max-w-3xl">
            Complex problems deserve more than a protocol.
          </h2>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-x-10 gap-y-12"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={reduceMotion ? undefined : itemVariants}
              className="flex flex-col gap-5 pt-7 border-t-2 border-forest/15"
            >
              <span className="font-display font-semibold text-[13px] tracking-[0.2em] text-fern">
                {pillar.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-forest text-[1.4rem] leading-[1.1] tracking-[-0.015em] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[14.5px] text-charcoal/75 leading-[1.7] max-w-xs">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 lg:mt-20 pt-9 border-t border-forest/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[14px] text-charcoal/70 max-w-md">
            Central Wellington. No referral required. ACC and Southern Cross
            accepted.
          </p>
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-grove text-cream text-[13.5px] font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors duration-200 whitespace-nowrap"
          >
            Book an appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
