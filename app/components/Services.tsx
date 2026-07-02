"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

// Custom line icons — specialist SVGs, not generic Lucide icons
function PainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="w-full h-full">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="3" y1="12" x2="7" y2="12" />
      <line x1="17" y1="12" x2="21" y2="12" />
      <line x1="5.64" y1="5.64" x2="8.46" y2="8.46" />
      <line x1="15.54" y1="15.54" x2="18.36" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="15.54" y2="8.46" />
      <line x1="8.46" y1="15.54" x2="5.64" y2="18.36" />
    </svg>
  );
}

function VestibularIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10" />
      <path d="M22 12 18 8l-4 4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ConcussionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M9 22h6" />
      <path d="M12 22v-3" />
      <path d="M12 3a7 7 0 0 1 7 7c0 3.5-2 6-4 7H9c-2-1-4-3.5-4-7a7 7 0 0 1 7-7z" />
      <path d="M9.5 11c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5" />
    </svg>
  );
}

function FNDIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <circle cx="12" cy="4" r="2" />
      <line x1="12" y1="6" x2="12" y2="11" />
      <line x1="12" y1="11" x2="7" y2="16" />
      <line x1="12" y1="11" x2="17" y2="16" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function ManualIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-full h-full">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8.5" />
      <path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.76 0-5-2.24-5-5v-1" />
    </svg>
  );
}

interface Service {
  Icon: () => React.ReactElement;
  title: string;
  href: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: PainIcon,
    title: "Pain Management",
    href: "/pain-management",
    description:
      "Whole-person care for chronic and complex pain — addressing the nervous system, movement, and lifestyle.",
  },
  {
    Icon: VestibularIcon,
    title: "Vestibular Physio",
    href: "/vestibular-physio",
    description:
      "Evidence-based assessment and treatment for dizziness, vertigo, and balance disorders.",
  },
  {
    Icon: ConcussionIcon,
    title: "Concussion Rehab",
    href: "/concussion-rehab",
    description:
      "Graded, personalised rehabilitation for headaches, brain fog, and post-concussion symptoms.",
  },
  {
    Icon: FNDIcon,
    title: "FND Rehab",
    href: "/fnd-rehab",
    description:
      "Movement retraining and body confidence for functional neurological disorder.",
  },
  {
    Icon: ManualIcon,
    title: "Manual Therapy",
    href: "/manual-therapy",
    description:
      "Hands-on treatment — joint mobilisation, soft tissue work, and dry needling.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function ServiceCard({ service }: { service: Service }) {
  const { Icon, title, href, description } = service;
  return (
    <Link
      href={href}
      prefetch={true}
      className="group flex flex-col gap-4 p-6 bg-cream rounded-2xl border border-linen/70 hover:border-mint/60 hover:shadow-md hover:shadow-forest/6 transition-all duration-300 h-full"
    >
      <div className="w-10 h-10 rounded-xl bg-foam flex items-center justify-center text-forest flex-shrink-0">
        <span className="w-[22px] h-[22px] block">
          <Icon />
        </span>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-[1.05rem] text-forest leading-snug">
          {title}
        </h3>
        <p className="text-[13.5px] text-charcoal/75 leading-relaxed">
          {description}
        </p>
      </div>
      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-fern group-hover:gap-1.5 transition-all duration-200">
        Learn more
        <ArrowRight
          size={12}
          strokeWidth={2.5}
          className="group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </span>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-parchment py-24 lg:py-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-fern block mb-4">
            What we treat
          </span>
          <h2 className="font-serif text-3xl lg:text-[2.6rem] text-forest leading-[1.1] tracking-[-0.015em]">
            Specialist services for
            <br className="hidden lg:block" /> complex conditions.
          </h2>
        </motion.div>

        {/* Desktop: 5-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden lg:grid lg:grid-cols-5 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants} className="flex">
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: horizontal scroll rail */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
          {services.map((service) => (
            <div key={service.title} className="min-w-[260px] snap-start flex">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-linen"
        >
          <p className="text-[14px] text-charcoal/65">
            Not sure where to start? Book an initial assessment and we&apos;ll figure it out together.
          </p>
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-grove text-cream text-[13.5px] font-semibold px-6 py-3 rounded-full hover:bg-forest transition-colors duration-200 whitespace-nowrap shadow-md shadow-grove/15"
          >
            Book an appointment
            <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
