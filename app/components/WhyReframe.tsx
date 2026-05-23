"use client";

import { motion, type Variants } from "framer-motion";
import { Microscope, HeartHandshake, ScanSearch } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

const pillars = [
  {
    icon: Microscope,
    number: "01",
    title: "Specialist experience",
    description:
      "Over a decade of clinical work across pain management, FND, concussion, vestibular physiotherapy, and manual therapy. We've seen complex — and know how to navigate it.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Whole-person care",
    description:
      "We don't just treat the symptom. We look at the full picture: your nervous system, your lifestyle, your history, and your goals — then build a plan that actually fits your life.",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "Clear diagnosis first",
    description:
      "Understanding what's happening in your body is the foundation of good treatment. We take the time to explain your condition in plain language before we start anything.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function WhyReframe() {
  return (
    <section className="bg-forest py-24 lg:py-32 overflow-hidden relative">
      {/* Decorative radial */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(61,122,85,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-fern/50" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-sage">
              Our approach
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-[2.6rem] text-cream leading-[1.12] tracking-[-0.01em] max-w-xl">
            Why patients choose Reframe
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-grove/60 flex items-center justify-center flex-shrink-0 border border-fern/30">
                    <Icon size={20} strokeWidth={1.6} className="text-sage" />
                  </div>
                  <span className="font-mono text-xs text-sage/60 mt-1 pt-1">
                    {pillar.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-cream text-[18px] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-mint/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-fern/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-sm text-mint/70 max-w-md">
            Reframe Physio is based in central Wellington. No referral required,
            ACC and Southern Cross accepted.
          </p>
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-grove text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-fern transition-colors duration-200 whitespace-nowrap"
          >
            Book an appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
