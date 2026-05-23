"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { CLINIKO_URL } from "../lib/booking";

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
        a: "We specialise in conditions that benefit from specialist physiotherapy input, including chronic and complex pain, vestibular disorders (dizziness, vertigo, and balance problems), concussion and post-concussion syndrome, Functional Neurological Disorder (FND), and musculoskeletal conditions requiring manual therapy. If you're unsure whether we can help, please get in touch.",
      },
      {
        q: "Do you accept Southern Cross health insurance?",
        a: "Yes. Reframe Physio is an approved Southern Cross provider. We recommend checking your policy for physiotherapy cover details before your appointment. Our team can assist with any queries about claiming.",
      },
      {
        q: "Is parking available?",
        a: "Yes, parking is available at Anglican House. There is also street parking nearby on Mulgrave Street and surrounding streets. We're well-served by Wellington's central bus routes.",
      },
      {
        q: "Do I need a referral to see a physiotherapist?",
        a: "No referral is required. You can book directly with us at any time. However, if your GP or specialist has provided a referral letter with relevant clinical notes, please bring it along — it helps us understand your history more quickly.",
      },
      {
        q: "Can you assist with ACC claims?",
        a: "Yes. We are an ACC registered provider and can help you navigate your ACC claim. If you have an existing ACC claim number, please bring it to your first appointment. We can also help initiate a new ACC claim if your injury qualifies.",
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

  function handleCatChange(idx: number) {
    setActiveCat(idx);
    setOpenIndex(null);
  }

  const currentFaqs = categories[activeCat].faqs;

  return (
    <section id="faq" className="bg-parchment py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-fern">
            Common questions
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-forest mt-3 leading-[1.15]">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="flex gap-2 overflow-x-auto pb-1 mb-8"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
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
            href="mailto:reframephysio@gmail.com"
            className="inline-flex items-center gap-2 border border-linen text-grove text-sm font-medium px-5 py-2.5 rounded-full hover:bg-foam hover:border-mint transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

      </div>
    </section>
  );
}
