"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { CLINIKO_URL } from "../lib/booking";

export interface ContentSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface ServicePageProps {
  serviceLabel: string;
  title: string;
  intro: string;
  whatItIs: ContentSection;
  approach: ContentSection;
  whyReframe: ContentSection;
  whatToExpect: ContentSection;
  ctaText: string;
}

export default function ServicePage({
  serviceLabel,
  title,
  intro,
  whatItIs,
  approach,
  whyReframe,
  whatToExpect,
  ctaText,
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main>
        {/* ── Service hero ─────────────────────────────────────────────── */}
        <section className="bg-cream pt-[108px] pb-20 lg:pt-[128px] lg:pb-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-[12.5px] font-medium text-fern hover:text-grove transition-colors mb-10"
              >
                <ArrowLeft size={13} strokeWidth={2.5} />
                Back to services
              </Link>

              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-fern/70 flex-shrink-0" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-fern">
                  {serviceLabel}
                </span>
              </div>

              <h1 className="font-serif text-4xl lg:text-[3.25rem] text-forest leading-[1.08] tracking-[-0.02em] mb-6">
                {title}
              </h1>

              <p className="text-[16px] lg:text-[17px] text-charcoal/80 leading-[1.8] mb-9 max-w-2xl">
                {intro}
              </p>

              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-grove text-cream font-semibold text-[13.5px] px-6 py-3.5 rounded-full hover:bg-forest transition-colors duration-200 shadow-lg shadow-grove/20"
              >
                {ctaText}
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>
        </section>

        <div className="h-px bg-linen" />

        {/* ── What it is ───────────────────────────────────────────────── */}
        <ContentSection bg="parchment" {...whatItIs} />

        {/* ── Treatment approach ───────────────────────────────────────── */}
        <ContentSection bg="cream" {...approach} />

        {/* ── Why Reframe — dark section ───────────────────────────────── */}
        <DarkSection {...whyReframe} />

        {/* ── What to expect ───────────────────────────────────────────── */}
        <ContentSection bg="cream" {...whatToExpect} />

        {/* ── Booking CTA ──────────────────────────────────────────────── */}
        <section className="bg-parchment py-20 lg:py-28 border-t border-linen">
          <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-fern">
                Get started
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-forest mt-3 mb-4 leading-[1.12]">
                Ready to take the next step?
              </h2>
              <p className="text-[15px] text-charcoal/70 leading-relaxed mb-8">
                No referral needed. ACC and Southern Cross accepted. Located
                in central Wellington.
              </p>
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-grove text-cream font-semibold text-[14px] px-7 py-4 rounded-full hover:bg-forest transition-colors duration-200 shadow-lg shadow-grove/20"
              >
                {ctaText}
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <div className="mt-7 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                {["ACC provider", "Southern Cross approved", "No referral needed"].map(
                  (item, i, arr) => (
                    <span key={item} className="flex items-center gap-3">
                      <span className="text-[12px] text-charcoal/50 font-medium">
                        {item}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-linen flex-shrink-0" />
                      )}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContentSection({
  bg,
  heading,
  body,
  bullets,
}: ContentSection & { bg: "cream" | "parchment" }) {
  const bgClass = bg === "cream" ? "bg-cream" : "bg-parchment";
  return (
    <section className={`${bgClass} py-16 lg:py-24`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-forest mb-6 leading-[1.15]">
            {heading}
          </h2>
          <div className="flex flex-col gap-4">
            {body.map((para, i) => (
              <p key={i} className="text-[15px] text-charcoal leading-[1.8]">
                {para}
              </p>
            ))}
          </div>
          {bullets && (
            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fern mt-[8px] flex-shrink-0" />
                  <span className="text-[14.5px] text-charcoal leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function DarkSection({ heading, body, bullets }: ContentSection) {
  return (
    <section className="bg-forest py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-fern/50" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-sage">
              Why Reframe
            </span>
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl text-cream mb-6 leading-[1.15]">
            {heading}
          </h2>
          <div className="flex flex-col gap-4">
            {body.map((para, i) => (
              <p key={i} className="text-[15px] text-mint/80 leading-[1.8]">
                {para}
              </p>
            ))}
          </div>
          {bullets && (
            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-fern mt-[8px] flex-shrink-0" />
                  <span className="text-[14.5px] text-mint/75 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
