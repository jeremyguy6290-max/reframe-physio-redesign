"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldReduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [shouldReduceMotion]);

  return (
    <section className="relative overflow-hidden bg-forest" style={{ minHeight: "100svh" }}>

      {/* Full-bleed background video — poster image shown while loading / as fallback */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-physio-new.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-reference.mp4" type="video/mp4" />
      </video>

      {/* Gradient — clears in the middle, then dissolves fully into forest
          (#1B3A2C) well before the section ends, so the boundary with the
          services section below is invisible. The final 10% is solid forest. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,58,44,0.30) 0%, rgba(27,58,44,0.06) 32%, rgba(27,58,44,0.35) 55%, rgba(27,58,44,0.72) 72%, rgba(27,58,44,0.94) 84%, rgba(27,58,44,1.00) 90%)",
        }}
      />

      {/* Content anchored to bottom of viewport */}
      <div
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: "100svh", paddingTop: "112px" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-cream/50 mb-5">
              Wellington · Specialist physiotherapy
            </p>

            <h1 className="font-display font-bold text-[2.7rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.2rem] text-cream leading-[0.98] tracking-[-0.035em] mb-5">
              Pain, dizziness
              <br />
              and concussion.
            </h1>

            <p className="text-[15px] lg:text-[17px] text-cream/65 mb-9 max-w-xs lg:max-w-sm leading-[1.7]">
              Specialist evidence-based physiotherapy in central Wellington.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cream text-forest font-semibold text-[13.5px] px-7 py-4 rounded-full hover:bg-parchment transition-colors duration-200 shadow-lg shadow-forest/30"
              >
                Book an appointment
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center text-cream/80 font-medium text-[13.5px] px-7 py-4 rounded-full border border-cream/25 hover:border-cream/45 hover:text-cream transition-colors duration-200"
              >
                Our services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
