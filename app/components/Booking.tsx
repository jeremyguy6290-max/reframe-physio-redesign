"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Phone, Mail, Calendar } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

const trustPoints = [
  "No referral required",
  "ACC provider",
  "Southern Cross approved",
  "Parking available",
  "Central Wellington CBD",
];

export default function Booking() {
  return (
    <section id="booking" className="pt-28 pb-16 lg:pt-36 lg:pb-20 scroll-mt-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: info ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-28 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-[2.8rem] text-cream leading-[1.05] tracking-[-0.025em]">
                Book your appointment
              </h2>
              <p className="mt-4 text-[15px] text-[#C6C2B6] leading-relaxed">
                All bookings run through Cliniko — choose your service, pick a
                time, done.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:0272414888"
                className="flex items-center gap-3 text-sm text-[#E5DDD0] hover:text-cream transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-sage/40 transition-colors duration-200">
                  <Phone size={15} className="text-sage" />
                </span>
                027 241 4888
              </a>
              <a
                href="mailto:reframephysio@gmail.com"
                className="flex items-center gap-3 text-sm text-[#E5DDD0] hover:text-cream transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-sage/40 transition-colors duration-200">
                  <Mail size={15} className="text-sage" />
                </span>
                reframephysio@gmail.com
              </a>
            </div>

            {/* Trust points */}
            <div className="bg-white/[0.04] rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={14} className="text-sage" />
                <p className="font-display text-xs font-semibold text-sage uppercase tracking-[0.14em]">
                  Good to know
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-[#D8D4C8]"
                  >
                    <CheckCircle2 size={14} className="text-sage flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Right: Cliniko redirect card ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-cream rounded-3xl p-8 lg:p-10 flex flex-col gap-8">

              {/* Heading */}
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-fern mb-3">
                  Online booking
                </p>
                <h3 className="font-display font-bold text-2xl lg:text-[1.9rem] text-forest leading-[1.08] tracking-[-0.02em] mb-3">
                  Book online through Cliniko
                </h3>
                <p className="text-[14.5px] text-charcoal/80 leading-relaxed">
                  Select your service, choose a time, and complete your booking
                  in a few steps.
                </p>
              </div>

              {/* Primary CTA */}
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-grove text-cream font-semibold text-[14.5px] px-7 py-4 rounded-full hover:bg-forest transition-colors duration-200 shadow-lg shadow-grove/20 hover:shadow-xl hover:shadow-grove/30 w-full sm:w-auto"
              >
                Open Cliniko booking
                <ExternalLink
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Divider */}
              <div className="h-px bg-linen" />

              {/* Prefer to call/email */}
              <div>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ash mb-4">
                  Prefer to contact us directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:0272414888"
                    className="flex-1 flex items-center justify-center gap-2 border border-linen text-grove text-sm font-medium py-3 px-5 rounded-full hover:bg-foam hover:border-mint transition-colors duration-200"
                  >
                    <Phone size={14} className="text-fern" />
                    027 241 4888
                  </a>
                  <a
                    href="mailto:reframephysio@gmail.com"
                    className="flex-1 flex items-center justify-center gap-2 border border-linen text-grove text-sm font-medium py-3 px-5 rounded-full hover:bg-foam hover:border-mint transition-colors duration-200"
                  >
                    <Mail size={14} className="text-fern" />
                    Email us
                  </a>
                </div>
              </div>

              {/* Small note */}
              <p className="text-[12px] text-ash leading-relaxed -mt-2">
                For urgent or complex enquiries, calling or emailing directly
                may be the fastest option. We aim to respond within one
                business day.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
