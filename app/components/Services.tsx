"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Activity, RotateCcw, Zap, GitBranch, Hand, ArrowRight, CalendarCheck } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

const services = [
  {
    icon: Activity,
    title: "Pain Management",
    href: "/pain-management",
    description:
      "Chronic pain affects more than the body. We take a whole-person approach — addressing the nervous system, lifestyle, and psychological factors — to help you rebuild confidence and return to meaningful function.",
    color: "#3D7A55",
    bg: "#E0EFE5",
  },
  {
    icon: RotateCcw,
    title: "Vestibular Physiotherapy",
    href: "/vestibular-physio",
    description:
      "Dizziness, vertigo, and balance problems can be debilitating. Using Vesticam assessment technology and specialist vestibular techniques, we identify the source and guide you through evidence-based recovery.",
    color: "#2C5440",
    bg: "#E8F4EC",
  },
  {
    icon: Zap,
    title: "Concussion Rehab",
    href: "/concussion-rehab",
    description:
      "Headaches, dizziness, and brain fog after a concussion require careful, graded management. We provide personalised rehabilitation that addresses both physical and cognitive symptoms at the right pace.",
    color: "#1B3A2C",
    bg: "#F0EBE0",
  },
  {
    icon: GitBranch,
    title: "FND Rehab",
    href: "/fnd-rehab",
    description:
      "Functional Neurological Disorder (FND) involves real neurological symptoms without structural damage. Our approach focuses on retraining movement patterns, building body confidence, and restoring control.",
    color: "#3D7A55",
    bg: "#E0EFE5",
  },
  {
    icon: Hand,
    title: "Manual Therapy",
    href: "/manual-therapy",
    description:
      "Expert hands-on treatment — joint mobilisation, soft tissue work, and dry needling — integrated with targeted exercise and movement retraining for lasting results.",
    color: "#2C5440",
    bg: "#E8F4EC",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-fern" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-fern">
              What we treat
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-[2.6rem] text-forest leading-[1.12] tracking-[-0.01em]">
            Specialist services for complex conditions
          </h2>
          <p className="mt-4 text-[15px] text-charcoal leading-relaxed">
            Every condition we treat requires more than a generic protocol.
            We take the time to understand you — then build a plan that fits.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Link
                  href={service.href}
                  prefetch={true}
                  className="group relative bg-cream rounded-2xl p-6 lg:p-7 flex flex-col gap-4 border border-linen hover:border-mint/70 hover:shadow-lg hover:shadow-forest/6 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: service.bg }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Accent line */}
                  <div
                    className="w-8 h-0.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />

                  <h3 className="font-sans font-semibold text-forest text-[17px] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs font-medium text-fern group-hover:gap-2 transition-all duration-200 pt-1">
                    Learn more
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Sixth card: CTA */}
          <motion.div
            variants={cardVariants}
            className="group relative bg-forest rounded-2xl p-6 lg:p-7 flex flex-col gap-4 border border-grove/60 hover:border-fern/60 hover:shadow-lg hover:shadow-forest/20 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-grove/60 border border-fern/30">
              <CalendarCheck size={20} strokeWidth={1.75} className="text-sage" />
            </div>

            <div className="w-8 h-0.5 rounded-full bg-fern/50" />

            <h3 className="font-sans font-semibold text-cream text-[17px] leading-snug">
              Not sure where to start?
            </h3>
            <p className="text-sm text-mint/80 leading-relaxed flex-1">
              Book an initial assessment and we&apos;ll help identify what&apos;s going on,
              what matters most, and the right next step for you.
            </p>

            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-grove text-cream text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-fern transition-colors duration-200 w-fit mt-1"
            >
              Book an appointment
              <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
