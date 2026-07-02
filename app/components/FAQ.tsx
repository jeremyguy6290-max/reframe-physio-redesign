"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";
import ParkingVideoModal from "./ParkingVideoModal";

interface FaqItem {
  q: string;
  a: React.ReactNode;
  extra?: React.ReactNode;
}

interface Category {
  label: string;
  faqs: FaqItem[];
}

const categories: Category[] = [
  {
    label: "General",
    faqs: [
      {
        q: "What types of conditions does Reframe Physio treat?",
        a: (
          <>
            At Reframe Physio, we specialize in a wide range of conditions to help you restore function and alleviate pain. Our experienced physiotherapist, John, who has over a decade of expertise, focuses on musculoskeletal issues, providing effective manual therapy for joint, muscle, and skeletal pain. We also offer comprehensive vestibular physiotherapy for balance disorders and vertigo, along with specialized concussion rehabilitation to aid in your recovery process.
            <br /><br />
            Whether you&apos;re dealing with chronic pain, a sports injury, or a recent concussion, Reframe Physio is also the one of the few clinics in NZ offering private input for FND rehab.
          </>
        ),
      },
      {
        q: "Does Reframe Physio accept Southern Cross insurance for physiotherapy treatments?",
        a: "Yes, Reframe Physio is an approved provider for Southern Cross Health Insurance. This means if you have a Southern Cross policy that includes physiotherapy benefits, you can use it to cover a portion or all of your treatment costs at our clinic.",
      },
      {
        q: "Is there parking available at Reframe Physio?",
        a: "Yes, Reframe Physio offers convenient on-site parking for all clients. If you have any specific parking concerns or need assistance, our friendly staff is always ready to help. We look forward to welcoming you to Reframe Physio, where your comfort and ease are our priorities.",
        extra: <ParkingVideoModal />,
      },
      {
        q: "Do I need a referral to book an appointment at Reframe Physio?",
        a: "No, you do not need a referral to book an appointment at Reframe Physio. Our experienced physiotherapist, John, who has over a decade of expertise in musculoskeletal, pain, vestibular, and concussion rehabilitation, is readily available to assist you directly.",
      },
      {
        q: "Can you assist with making an ACC claim?",
        a: "During your initial consultation, John will assess your condition and determine if it qualifies for ACC coverage. If eligible, he will assist you in completing the necessary paperwork and submitting your claim to ensure you receive the required support for your treatment. This process allows you to focus on your recovery while we handle the administrative details. For more specific information regarding ACC claims, feel free to contact us directly.",
      },
    ],
  },
  {
    label: "Privacy Policy",
    faqs: [
      {
        q: "How do you handle my personal information?",
        a: "At Reframe Physio, we respect your privacy. We collect personal information to manage appointments and respond to enquiries. Your data is kept secure and is never sold or shared without your consent. You can access, correct, or request deletion of your personal information at any time.",
      },
    ],
  },
  {
    label: "Accessibility",
    faqs: [
      {
        q: "Is your clinic accessible for people with disabilities?",
        a: "Yes, our clinic is fully accessible. We offer step-free access, adjustable equipment, and our staff are trained to assist as needed. If you experience any accessibility barriers, please contact us for assistance.",
      },
    ],
  },
  {
    label: "Payment Methods",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept a variety of payment methods including cash and Paywave (no surcharge). We also handle Southern cross and ACC claims for your convenience.",
      },
    ],
  },
  {
    label: "Treatment Approach",
    faqs: [
      {
        q: "What is your approach to treating chronic pain?",
        a: "Our approach to treating chronic pain involves a combination of manual therapy, targeted exercise, and evidence-based pain management strategies. We aim to address the root cause of your pain and restore your function. We aim to work on what you value most and at a pace that you feel safe with.",
      },
    ],
  },
  {
    label: "Appointments",
    faqs: [
      {
        q: "How can I book an appointment?",
        a: (
          <>
            You can book an appointment by calling us at 027 241 4888 or by visiting our website and using the{" "}
            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grove underline underline-offset-2 hover:text-forest transition-colors"
            >
              online booking system
            </a>
            . We also offer a free, non-obligatory quote if you&apos;re unsure about the services you need.
          </>
        ),
        extra: (
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-grove border border-grove/25 px-3.5 py-2 rounded-full hover:bg-foam hover:border-grove/40 transition-colors"
          >
            Open booking system
            <ExternalLink size={11} strokeWidth={2} />
          </a>
        ),
      },
    ],
  },
];

export default function FAQ() {
  const [activeCat, setActiveCat] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  function scrollTabs(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  function handleCatChange(idx: number) {
    setActiveCat(idx);
    setOpenIndex(null);
    tabRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  const currentFaqs = categories[activeCat].faqs;

  return (
    <section id="faq" className="bg-parchment py-24 lg:py-32 scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-fern">
            Common questions
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-[2.8rem] text-forest mt-4 leading-[1.05] tracking-[-0.025em]">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="relative mb-8"
        >
          {/* Left fade + arrow */}
          <div
            aria-hidden="true"
            className={`absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-parchment to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
          />
          <button
            onClick={() => scrollTabs(-140)}
            aria-label="Scroll FAQ categories left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-cream border border-linen flex items-center justify-center text-fern hover:text-grove hover:border-mint/60 shadow-sm transition-all duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronLeft size={13} strokeWidth={2.5} />
          </button>

          {/* Scrollable tab row */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => handleCatChange(i)}
                className={`flex-shrink-0 text-[12.5px] font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                  activeCat === i
                    ? "bg-grove text-cream"
                    : "bg-cream text-charcoal border border-linen hover:border-mint/60 hover:text-grove"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right fade + arrow */}
          <div
            aria-hidden="true"
            className={`absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-parchment to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
          />
          <button
            onClick={() => scrollTabs(140)}
            aria-label="Scroll FAQ categories right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-cream border border-linen flex items-center justify-center text-fern hover:text-grove hover:border-mint/60 shadow-sm transition-all duration-200 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronRight size={13} strokeWidth={2.5} />
          </button>
        </motion.div>

        {/* Accordion — re-animates on category change */}
        <motion.div
          key={activeCat}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex flex-col gap-3"
        >
          {currentFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-cream rounded-2xl border transition-colors duration-200 ${
                  isOpen ? "border-mint" : "border-linen hover:border-mint/60"
                }`}
              >
                <button
                  id={`faq-btn-${activeCat}-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${activeCat}-${i}`}
                >
                  <span
                    className={`font-sans font-medium text-[15px] leading-snug transition-colors duration-200 ${
                      isOpen ? "text-grove" : "text-forest"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-grove border-grove text-cream"
                        : "bg-foam border-linen text-fern"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus size={13} strokeWidth={2.5} />
                    ) : (
                      <Plus size={13} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${activeCat}-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${activeCat}-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 flex flex-col gap-4">
                    <p className="text-sm text-charcoal leading-relaxed">
                      {faq.a}
                    </p>
                    {faq.extra && faq.extra}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-charcoal mb-4">
            Have a question that&apos;s not answered here?
          </p>
          <a
            href="/#booking"
            className="inline-flex items-center gap-2 border border-linen text-grove text-sm font-medium px-5 py-2.5 rounded-full hover:bg-foam hover:border-mint transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
