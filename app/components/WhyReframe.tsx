"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { CLINIKO_URL } from "../lib/booking";
import { useIsMobile } from "../lib/useIsMobile";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADING_LINES = ["Complex problems deserve", "more than a protocol."];

const steps = [
  {
    number: "01",
    title: "Specialist experience",
    description:
      "Over a decade across pain, FND, concussion and vestibular physiotherapy.",
  },
  {
    number: "02",
    title: "Whole-person care",
    description:
      "We look at the full picture — nervous system, lifestyle, goals and symptoms.",
  },
  {
    number: "03",
    title: "Clear diagnosis first",
    description:
      "You understand what's happening before treatment begins.",
  },
];

const stepVariants: Variants = {
  hidden: {},
  visible: {},
};

const numberVariants: Variants = {
  hidden: { y: "112%" },
  visible: { y: 0, transition: { duration: 0.7, ease: EASE } },
};

const copyVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.14 },
  },
};

const connectorVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

/* Ripple rings — a drop-in-water motif behind the step stack.
   Two motions compose:
   1. ENTRY ripple: when the section first scrolls into view, the rings
      bloom outward in sequence (scale 0.55 → 1, 140ms stagger) — the
      "drop" moment, clearly visible, runs once.
   2. SCROLL swell: as the user scrolls through the section, rings keep
      expanding (0.88 → up to ~1.33 for the outer ring) and their opacity
      rises toward mid-section then relaxes — the ripple travelling
      outward, tied to scroll, no looping. */
const RIPPLES = [
  { size: 300, opacity: 0.09 },
  { size: 470, opacity: 0.075 },
  { size: 640, opacity: 0.06 },
  { size: 810, opacity: 0.048 },
  { size: 980, opacity: 0.036 },
  { size: 1150, opacity: 0.026 },
];

/* Mobile ring set: same count, same opacities, smaller base textures.
   Each ring is a GPU layer sized by its base px (scaling is free), so
   smaller bases cut compositor memory ~70% on phones. End scales are
   raised so rings still expand past the viewport and vanish. */
const RIPPLES_MOBILE = RIPPLES.map((r) => ({ ...r, size: Math.round(r.size * 0.6) }));

function RippleRing({
  progress,
  size,
  opacity,
  index,
  scaleBoost = 1,
}: {
  progress: MotionValue<number>;
  size: number;
  opacity: number;
  index: number;
  scaleBoost?: number;
}) {
  // The ripple keeps opening as the user scrolls: by the end of the
  // section even the innermost ring is larger than the viewport, so no
  // arcs remain on screen — like zooming into the centre of the ripple.
  // Outer rings travel further, widening the gaps. Start state is
  // deliberately compact. `scaleBoost` compensates smaller mobile ring
  // textures so start/end visual sizes match the desktop behaviour.
  const scale = useTransform(
    progress,
    [0, 1],
    [(0.62 - index * 0.05) * scaleBoost, (7 + index * 1.6) * scaleBoost]
  );
  const ringOpacity = useTransform(
    progress,
    [0, 0.3, 0.85, 1],
    [opacity * 0.7, opacity * 1.35, 0, 0]
  );
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.55 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.4, ease: EASE, delay: 0.1 + index * 0.14 }}
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{ width: size, height: size, x: "-50%", y: "-50%", willChange: "transform" }}
    >
      <motion.div
        className="w-full h-full rounded-full border"
        style={{
          scale,
          opacity: ringOpacity,
          borderColor: "rgb(27, 58, 44)",
          willChange: "transform, opacity",
        }}
      />
    </motion.div>
  );
}

export default function WhyReframe() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const stackRef = useRef<HTMLDivElement>(null);

  // Ripple driver: progress of the step stack through the viewport.
  // Mobile gets softer physics (lower stiffness, higher damping) so the
  // rings glide rather than jitter against touch-scroll momentum.
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start end", "end start"],
  });
  const rippleProgress = useSpring(
    scrollYProgress,
    isMobile
      ? { stiffness: 40, damping: 28, mass: 0.8, restDelta: 0.001 }
      : { stiffness: 55, damping: 22, restDelta: 0.001 }
  );

  const ripples = isMobile ? RIPPLES_MOBILE : RIPPLES;
  const scaleBoost = isMobile ? 1 / 0.6 : 1;

  return (
    <section className="relative bg-parchment pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">

      {/* Soft sage glow behind the header */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 320px at 50% 12%, rgba(111,171,133,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Centred header ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-forest text-[2.1rem] sm:text-[2.7rem] lg:text-[3.2rem] leading-[1.05] tracking-[-0.03em]">
            {HEADING_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.08 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
            className="mt-5 text-[15px] text-charcoal/70 leading-[1.7]"
          >
            Three principles behind every treatment plan at Reframe.
          </motion.p>
        </div>

        {/* ── Centred step stack — ripple rings radiate from its centre ──── */}
        <div ref={stackRef} className="relative max-w-xl mx-auto mt-14 lg:mt-16 flex flex-col items-center text-center">
          {/* Ripples */}
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none">
            {ripples.map((ring, i) =>
              reduceMotion ? (
                <div
                  key={ring.size}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    borderColor: `rgba(27, 58, 44, ${ring.opacity})`,
                  }}
                />
              ) : (
                <RippleRing
                  key={ring.size}
                  progress={rippleProgress}
                  size={ring.size}
                  opacity={ring.opacity}
                  index={i}
                  scaleBoost={scaleBoost}
                />
              )
            )}
          </div>
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center">

              {/* Connector — draws downward into each step after the first */}
              {i > 0 && (
                <motion.div
                  variants={reduceMotion ? undefined : connectorVariants}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 1 }}
                  aria-hidden="true"
                  className="w-px h-14 lg:h-16 my-6 origin-top"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(61,122,85,0.1), rgba(61,122,85,0.55))",
                  }}
                />
              )}

              {/* Step */}
              <motion.div
                variants={reduceMotion ? undefined : stepVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.55 }}
                className="group flex flex-col items-center"
              >
                {/* Number — dual-green gradient, rises out of a mask */}
                <span className="block overflow-hidden">
                  <motion.span
                    variants={reduceMotion ? undefined : numberVariants}
                    className="block font-display font-bold text-[3rem] lg:text-[3.6rem] leading-[0.95] tracking-[-0.03em] bg-gradient-to-b from-fern to-grove bg-clip-text text-transparent transition-transform duration-300 group-hover:-translate-y-0.5"
                  >
                    {step.number}
                  </motion.span>
                </span>

                <motion.div variants={reduceMotion ? undefined : copyVariants}>
                  <h3 className="mt-4 font-display font-bold text-forest text-[1.35rem] lg:text-[1.5rem] leading-[1.1] tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] text-charcoal/75 leading-[1.7] max-w-md mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ── Bottom trust line ──────────────────────────────────────────── */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 lg:mt-20 flex flex-col items-center gap-5 text-center"
        >
          <p className="text-[14px] text-charcoal/70">
            Central Wellington. No referral required. ACC and Southern Cross accepted.
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
