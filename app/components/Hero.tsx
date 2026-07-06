"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";
import { useIsMobile } from "../lib/useIsMobile";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const HEADLINE_LINES = ["Pain, dizziness", "and concussion."];

export default function Hero() {
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  // The slow Ken Burns drift continuously re-composites a full-screen
  // video layer — fine on desktop GPUs, a scroll-jank source on phones.
  // Mobile gets a perfectly stable, non-transformed video instead.
  const driftEnabled = !shouldReduceMotion && !isMobile;

  useEffect(() => {
    const video = videoWrapRef.current?.querySelector("video");
    if (!video) return;

    // Belt and braces on top of the parse-time attributes below.
    video.defaultMuted = true;
    video.muted = true;

    if (shouldReduceMotion) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      video.play().catch(() => {});
    };
    // Attempt immediately, retry as data arrives, and once more on the
    // first touch (covers devices that gate autoplay until interaction,
    // e.g. iOS Low Power Mode — a scroll counts as the touch).
    tryPlay();
    const events = ["loadedmetadata", "loadeddata", "canplay"] as const;
    events.forEach((e) => video.addEventListener(e, tryPlay, { once: true }));
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    return () => {
      events.forEach((e) => video.removeEventListener(e, tryPlay));
      window.removeEventListener("touchstart", tryPlay);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden bg-forest" style={{ minHeight: "100svh" }}>

      {/* Full-bleed background video with an ultra-slow drift (transform-only,
          disabled automatically under reduced motion via MotionConfig) */}
      <motion.div
        className="absolute inset-0"
        animate={driftEnabled ? { scale: [1, 1.045] } : { scale: 1 }}
        transition={
          driftEnabled
            ? { duration: 26, ease: "linear", repeat: Infinity, repeatType: "mirror" }
            : { duration: 0.3 }
        }
      >
        {/* Rendered as a raw HTML string so the `muted` attribute is
            present in the server-rendered markup at parse time — React
            sets muted only as a JS property, which mobile browsers ignore
            when deciding autoplay eligibility. This is the reliable fix
            for the poster + play-button state on phones. */}
        <div
          ref={videoWrapRef}
          className="absolute inset-0"
          dangerouslySetInnerHTML={{
            __html: `<video src="/videos/hero-reference.mp4" autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture poster="/images/hero-physio-new.jpg" class="absolute inset-0 w-full h-full object-cover" aria-hidden="true"></video>`,
          }}
        />
      </motion.div>

      {/* Gradient — clears in the middle, then dissolves fully into forest
          (#1B3A2C) well before the section ends, so the boundary with the
          services section below is invisible. The final 10% is solid forest. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,58,44,0.28) 0%, rgba(27,58,44,0.04) 30%, rgba(27,58,44,0.06) 55%, rgba(27,58,44,0.35) 68%, rgba(27,58,44,0.75) 80%, rgba(27,58,44,0.95) 88%, rgba(27,58,44,1.00) 93%)",
        }}
      />

      {/* Content anchored to bottom of viewport */}
      <div
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: "100svh", paddingTop: "112px" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 lg:pb-24">

          {/* Headline — masked line-by-line rise */}
          <h1 className="font-display font-bold text-[2.7rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.2rem] text-cream leading-[0.98] tracking-[-0.035em] mb-5">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtext — follows the headline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
            className="text-[15px] lg:text-[17px] text-cream/65 mb-9 max-w-xs lg:max-w-sm leading-[1.7]"
          >
            Specialist evidence-based physiotherapy in central Wellington.
          </motion.p>

          {/* CTAs — last in the sequence */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-cream text-forest font-semibold text-[13.5px] px-7 py-4 rounded-full hover:bg-parchment transition-colors duration-200 shadow-lg shadow-forest/30"
            >
              Book an appointment
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="/#services"
              className="inline-flex items-center text-cream/80 font-medium text-[13.5px] px-7 py-4 rounded-full border border-cream/25 hover:border-cream/45 hover:text-cream transition-colors duration-200"
            >
              Our services
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
