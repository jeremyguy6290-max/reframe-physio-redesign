"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

/* ────────────────────────────────────────────────────────────────────────────
   Service marks — bold, single-weight graphic symbols drawn for large display.
   System: 64×64 viewBox, 3px round stroke, one solid accent dot per mark.
   ──────────────────────────────────────────────────────────────────────────── */

function PainMark() {
  // A pulse that resolves into calm — jagged wave settling flat
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M4 36 H14 L21 18 L30 48 L37 28 L42 36 H60" />
      <circle cx="60" cy="36" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VestibularMark() {
  // Inner-ear spiral — balance returning to centre
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true" className="w-full h-full">
      <path d="M34 32 a2 2 0 0 1 4 0 a4 4 0 0 1 -8 0 a6 6 0 0 1 12 0 a8 8 0 0 1 -16 0 a10 10 0 0 1 20 0 a12 12 0 0 1 -24 0 a14 14 0 0 1 28 0" />
      <circle cx="36" cy="32" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ConcussionMark() {
  // Head core with recovery rings settling around it
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true" className="w-full h-full">
      <circle cx="32" cy="34" r="10" />
      <path d="M14 22 a24 24 0 0 1 18 -8" />
      <path d="M50 46 a24 24 0 0 1 -18 8" />
      <path d="M52 24 a26 26 0 0 1 4 10" />
      <circle cx="32" cy="34" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FNDMark() {
  // Brain–body signal: one source, branching pathways reconnecting
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <circle cx="32" cy="12" r="6" />
      <path d="M32 18 V32" />
      <path d="M32 32 L18 46" />
      <path d="M32 32 L46 46" />
      <circle cx="16" cy="50" r="4.5" />
      <circle cx="48" cy="50" r="4.5" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ManualMark() {
  // Hands cradling a joint — contact, support, movement
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true" className="w-full h-full">
      <path d="M12 38 a20 20 0 0 1 40 0" />
      <path d="M18 50 a18 10 0 0 0 28 0" />
      <circle cx="32" cy="40" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────────── */

interface Service {
  Mark: () => React.ReactElement;
  title: [string, string];
  href: string;
  description: string;
  index: string;
}

const services: Service[] = [
  {
    Mark: PainMark,
    title: ["Pain", "Management"],
    href: "/pain-management",
    description: "Understand pain. Rebuild confidence. Move forward.",
    index: "01",
  },
  {
    Mark: VestibularMark,
    title: ["Vestibular", "Physio"],
    href: "/vestibular-physio",
    description: "For dizziness, vertigo and balance problems.",
    index: "02",
  },
  {
    Mark: ConcussionMark,
    title: ["Concussion", "Rehab"],
    href: "/concussion-rehab",
    description: "Graded recovery for headaches, brain fog and return to activity.",
    index: "03",
  },
  {
    Mark: FNDMark,
    title: ["FND", "Rehab"],
    href: "/fnd-rehab",
    description: "Movement retraining for brain-body symptoms.",
    index: "04",
  },
  {
    Mark: ManualMark,
    title: ["Manual", "Therapy"],
    href: "/manual-therapy",
    description: "Hands-on care to restore movement and reduce pain.",
    index: "05",
  },
];

// Alternating panel surfaces — two forest tones so the row reads as one composition
const panelSurfaces = ["#20452F", "#1B3A2C", "#20452F", "#1B3A2C", "#20452F"];

const railVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function PanelContent({
  service,
  active,
  alwaysShowDescription = false,
}: {
  service: Service;
  active: boolean;
  alwaysShowDescription?: boolean;
}) {
  const { Mark, title, description, index } = service;
  const showDescription = alwaysShowDescription || active;

  return (
    <div className="relative z-10 flex flex-col h-full w-full p-7">
      {/* Index */}
      <span className="font-display font-semibold text-[12px] tracking-[0.2em] text-mint/40">
        {index}
      </span>

      {/* Mark — large, central */}
      <div className="flex-1 flex items-center justify-center py-6">
        <div
          className={`w-24 h-24 lg:w-28 lg:h-28 text-mint transition-all duration-500 ease-out ${
            active ? "scale-110 -rotate-3 text-foam" : ""
          }`}
        >
          <Mark />
        </div>
      </div>

      {/* Title + reveal */}
      <div>
        <h3 className="font-display font-bold text-cream text-[1.35rem] lg:text-[1.5rem] leading-[1.05] tracking-[-0.01em] uppercase">
          {title[0]}
          <br />
          {title[1]}
        </h3>

        <div
          className={`grid transition-all duration-500 ease-out ${
            showDescription ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-[13.5px] text-mint/75 leading-[1.6]">
              {description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide uppercase text-foam">
              Learn more
              <ArrowRight size={12} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-forest -mt-px py-24 lg:py-32 scroll-mt-32 relative overflow-hidden">
      {/* Ambient depth behind the panels — kept clear of the top edge so the
          hero video fade dissolves into this section with no visible seam */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 45%, rgba(61,122,85,0.16) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 lg:mb-16"
        >
          <span className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-sage block mb-5">
            What we treat
          </span>
          <h2 className="font-display font-bold text-cream text-[2.3rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.02] tracking-[-0.03em] max-w-3xl">
            Specialist care for complex symptoms.
          </h2>
          <p className="mt-5 text-[15px] lg:text-[16px] text-mint/60">
            Five focused services. One clear plan.
          </p>
        </motion.div>

        {/* ── Desktop: expanding split panels ─────────────────────────────── */}
        <motion.div
          variants={reduceMotion ? undefined : railVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:flex gap-2.5 h-[540px]"
          onMouseLeave={() => setHovered(null)}
        >
          {services.map((service, i) => {
            const isHovered = hovered === i;
            const isDimmed = hovered !== null && !isHovered;
            return (
              <motion.div
                key={service.href}
                variants={reduceMotion ? undefined : panelVariants}
                className="min-w-0"
                style={{
                  flexGrow: isHovered ? 1.9 : 1,
                  flexBasis: 0,
                  transition: "flex-grow 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <Link
                  href={service.href}
                  prefetch={true}
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className="group relative block h-full rounded-[1.75rem] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  style={{
                    backgroundColor: panelSurfaces[i],
                    opacity: isDimmed ? 0.55 : 1,
                    transition: "opacity 0.45s ease",
                  }}
                >
                  {/* Panel glow on hover */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(111,171,133,0.28) 0%, transparent 65%)",
                    }}
                  />
                  <PanelContent service={service} active={isHovered} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Mobile: horizontal snap rail ─────────────────────────────────── */}
        <div className="lg:hidden">
          <div className="no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                prefetch={true}
                className="relative snap-center flex flex-shrink-0 w-[80vw] max-w-[340px] min-h-[420px] rounded-[1.5rem] overflow-hidden bg-grove"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(111,171,133,0.18) 0%, transparent 65%)",
                  }}
                />
                <PanelContent service={service} active={false} alwaysShowDescription />
              </Link>
            ))}
          </div>
          {/* Scroll hint */}
          <div className="flex items-center gap-2 mt-5 text-mint/50">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
              Swipe to explore
            </span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </div>
        </div>

        {/* ── CTA strip ────────────────────────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 lg:mt-16 pt-10 border-t border-fern/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display font-bold text-cream text-[1.2rem] tracking-[-0.01em]">
              Not sure where to start?
            </p>
            <p className="text-[14px] text-mint/60 mt-1">
              Book an assessment and we&apos;ll help work out what fits.
            </p>
          </div>
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-forest text-[13.5px] font-semibold px-7 py-3.5 rounded-full hover:bg-parchment transition-colors duration-200 whitespace-nowrap"
          >
            Book an appointment
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
