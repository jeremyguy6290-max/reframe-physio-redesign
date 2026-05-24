"use client";

import { motion } from "framer-motion";
import { Stethoscope, ArrowRight, FileText, Users } from "lucide-react";

const referralTypes = [
  {
    icon: FileText,
    title: "Pain management",
    description: "Complex or persistent pain presentations, including central sensitisation and chronic pain.",
  },
  {
    icon: Stethoscope,
    title: "Vestibular & concussion",
    description: "Post-concussion syndrome, BPPV, vestibular neuritis, and related balance disorders.",
  },
  {
    icon: Users,
    title: "FND & autonomic",
    description: "Functional Neurological Disorder and autonomic dysfunction requiring specialist physiotherapy input.",
  },
];

export default function Referrals() {
  return (
    <section id="referrals" className="bg-grove py-24 lg:py-32 relative overflow-hidden scroll-mt-32">
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 10% 60%, rgba(61,122,85,0.25) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-sage">
              For healthcare providers
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-[1.15]">
              Referrals
            </h2>
            <p className="text-[15px] text-mint/80 leading-relaxed">
              Healthcare providers can refer patients for specialist
              physiotherapy support across pain, vestibular, concussion and
              FND presentations.
            </p>
            <p className="text-[15px] text-mint/80 leading-relaxed">
              We accept referrals from GPs, specialists, and allied health
              professionals. No formal referral letter is required — a brief
              clinical summary is welcome but not mandatory.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="mailto:reframephysio@gmail.com"
                className="inline-flex items-center gap-2 bg-cream text-grove text-sm font-medium px-5 py-3 rounded-full hover:bg-foam transition-colors duration-200 w-fit shadow-sm"
              >
                Send a referral email
                <ArrowRight size={15} />
              </a>
              <a
                href="tel:0272414888"
                className="inline-flex items-center gap-2 border border-fern/40 text-cream text-sm font-medium px-5 py-3 rounded-full hover:bg-grove/60 transition-colors duration-200 w-fit"
              >
                Call: 027 241 4888
              </a>
            </div>
          </motion.div>

          {/* Right: referral categories */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold tracking-wider uppercase text-sage mb-2">
              We accept referrals for
            </p>
            {referralTypes.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-forest/40 backdrop-blur-sm rounded-2xl p-5 border border-fern/20 flex gap-4 hover:bg-forest/60 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-grove/60 flex items-center justify-center flex-shrink-0 border border-fern/20">
                  <Icon size={18} strokeWidth={1.6} className="text-sage" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream mb-1">{title}</p>
                  <p className="text-xs text-mint/70 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 bg-forest/30 rounded-xl p-4 border border-fern/20">
              <p className="text-xs text-mint/70 leading-relaxed">
                <span className="font-semibold text-cream">ACC claims: </span>
                We can assist patients with ACC claims and co-manage with their
                GP or specialist as required.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
