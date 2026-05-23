"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream" style={{ minHeight: "100svh" }}>

      {/* ── Layer 1: Full-bleed background image (desktop only) ──────────── */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero-physio.jpg"
          alt="Specialist physiotherapy treatment at Reframe Physio, Wellington"
          fill
          className="object-cover"
          style={{ objectPosition: "65% center" }}
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* ── Layer 2: Left-to-right cream gradient overlay (desktop only) ─── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(250,247,240,0.97) 0%, rgba(250,247,240,0.90) 20%, rgba(250,247,240,0.68) 38%, rgba(250,247,240,0.12) 55%, transparent 72%)",
        }}
      />

      {/* Bottom atmospheric overlay (desktop only) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to top, rgba(27,58,44,0.22) 0%, transparent 100%)",
        }}
      />

      {/* ── Layer 3: Foreground content ──────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{ minHeight: "100svh", paddingTop: "108px" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
          <div className="max-w-[540px]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-fern/70 flex-shrink-0" />
                <span className="text-[11.5px] font-semibold tracking-[0.16em] uppercase text-fern">
                  Wellington&rsquo;s specialist physio clinic
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.1rem] xl:text-[3.4rem] text-forest leading-[1.12] tracking-[-0.025em] mb-7">
                Specialist physio{" "}
                <br className="hidden lg:block" />
                for pain, dizziness{" "}
                <br className="hidden lg:block" />
                and concussion.
              </h1>

              {/* Supporting copy */}
              <p className="text-[15.5px] lg:text-[16.5px] text-charcoal/85 leading-[1.75] mb-9">
                Evidence-based care for complex movement conditions in central
                Wellington. We help you understand what&rsquo;s happening,
                rebuild confidence, and move better.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-9">
                <a
                  href={CLINIKO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-grove text-cream font-semibold text-[13.5px] px-6 py-3.5 rounded-full hover:bg-forest transition-colors duration-200 shadow-lg shadow-grove/25"
                >
                  Book an appointment
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 text-grove font-medium text-[13.5px] px-6 py-3.5 rounded-full border border-grove/30 bg-cream hover:bg-foam hover:border-grove/50 transition-colors duration-200"
                >
                  View services
                </a>
              </div>

              {/* Trust chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  "ACC provider",
                  "Southern Cross approved",
                  "No referral needed",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-cream border border-fern/30 text-charcoal text-[12px] font-medium px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={11} className="text-fern flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
