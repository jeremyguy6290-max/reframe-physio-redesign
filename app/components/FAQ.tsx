"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-parchment py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-fern">
            Common questions
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-forest mt-3 leading-[1.15]">
            Frequently asked questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-cream rounded-2xl border transition-colors duration-200 ${
                  isOpen ? "border-mint" : "border-linen hover:border-mint/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
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
                  >
                    {isOpen ? (
                      <Minus size={13} strokeWidth={2.5} />
                    ) : (
                      <Plus size={13} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-charcoal leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
