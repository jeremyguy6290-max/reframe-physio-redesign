"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { CLINIKO_URL } from "../lib/booking";

interface Section {
  heading: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  label: string;
  title: string;
  subtitle?: string;
  intro: string;
  sections: Section[];
  ctaHeading: string;
  ctaBody: string;
}

export default function LegalPage({
  label,
  title,
  subtitle,
  intro,
  sections,
  ctaHeading,
  ctaBody,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream pt-[112px] pb-24 lg:pt-[128px] lg:pb-32">
          <div className="max-w-2xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="mb-12">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-fern">
                  {label}
                </span>
                <h1 className="font-serif text-4xl lg:text-5xl text-forest mt-3 leading-[1.1] tracking-[-0.02em]">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-sm text-ash mt-2">{subtitle}</p>
                )}
                <div className="h-px bg-linen mt-8" />
              </div>

              {/* Intro */}
              <p className="text-[15px] text-charcoal leading-[1.8] mb-12">
                {intro}
              </p>

              {/* Sections */}
              <div className="flex flex-col gap-10">
                {sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-serif text-xl text-forest mb-3 leading-snug">
                      {section.heading}
                    </h2>
                    <div className="text-[14.5px] text-charcoal leading-[1.8] flex flex-col gap-3">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-linen my-14" />

              {/* CTA */}
              <div className="bg-parchment rounded-2xl p-8 border border-linen text-center">
                <h2 className="font-serif text-2xl text-forest mb-3">
                  {ctaHeading}
                </h2>
                <p className="text-[14.5px] text-charcoal leading-relaxed mb-6 max-w-md mx-auto">
                  {ctaBody}
                </p>
                <a
                  href={CLINIKO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-grove text-cream text-sm font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors duration-200 shadow-md shadow-grove/15"
                >
                  Book an appointment
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
