"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Car, Clock, Landmark } from "lucide-react";
import { HOURS_PRIMARY, HOURS_SECONDARY } from "../lib/hours";
import ParkingVideoModal from "./ParkingVideoModal";

const details: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  extra?: React.ReactNode;
}[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "Anglican House, 32 Mulgrave St",
    sub: "Pipitea, Wellington 6011",
  },
  {
    icon: Landmark,
    label: "Landmark",
    value: "Less than 5 minutes from Parliament",
    sub: "Easy to find in the heart of central Wellington",
  },
  {
    icon: Car,
    label: "Parking",
    value: "On-site parking available",
    sub: "Street parking also nearby",
    extra: (
      <ParkingVideoModal
        buttonClassName="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-sage hover:text-mint transition-colors"
      />
    ),
  },
  {
    icon: Clock,
    label: "Hours",
    value: HOURS_PRIMARY,
    sub: HOURS_SECONDARY,
  },
];

const detailsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const detailItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Location() {
  return (
    <section id="contact" className="pt-16 pb-16 lg:pt-24 lg:pb-20 scroll-mt-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-[2.8rem] text-cream leading-[1.05] tracking-[-0.025em]">
                Central Wellington,
                <br />
                easy to reach
              </h2>
              <p className="mt-4 text-[15px] text-mint/75 leading-relaxed">
                Anglican House, in the heart of the CBD — easy to reach by car,
                bus, or on foot.
              </p>
            </div>

            <motion.div
              variants={detailsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {details.map(({ icon: Icon, label, value, sub, extra }) => (
                <motion.div
                  key={label}
                  variants={detailItemVariants}
                  className="bg-white/[0.05] rounded-2xl p-5 border border-white/10 flex flex-col gap-2 transition-colors duration-200 hover:border-sage/40"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={14} className="text-sage" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sage/70">
                      {label}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-cream leading-snug">
                    {value}
                  </p>
                  <p className="text-xs text-mint/70">{sub}</p>
                  {extra}
                </motion.div>
              ))}
            </motion.div>

            <a
              href="https://www.google.com/maps/search/Anglican+House,+32+Mulgrave+St,+Pipitea,+Wellington+6011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-fern/50 text-cream text-sm font-medium px-5 py-3 rounded-full hover:bg-white/[0.06] hover:border-sage/70 transition-colors w-fit"
            >
              <MapPin size={14} className="text-sage" />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Right: Google Map embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-square border border-fern/40 shadow-xl shadow-black/25 bg-white/[0.05]">
              <iframe
                src="https://www.google.com/maps?q=Anglican+House%2C+32+Mulgrave+St%2C+Pipitea%2C+Wellington+6011&output=embed"
                title="Reframe Physio — Anglican House, 32 Mulgrave St, Wellington"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
