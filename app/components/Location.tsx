"use client";

import { motion } from "framer-motion";
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
        buttonClassName="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-grove hover:text-forest transition-colors"
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

export default function Location() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
              <span className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase text-fern">
                Find us
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-[2.8rem] text-forest mt-4 leading-[1.05] tracking-[-0.025em]">
                Central Wellington,
                <br />
                easy to reach
              </h2>
              <p className="mt-4 text-[15px] text-charcoal/80 leading-relaxed">
                Anglican House, in the heart of the CBD — easy to reach by car,
                bus, or on foot.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {details.map(({ icon: Icon, label, value, sub, extra }) => (
                <div
                  key={label}
                  className="bg-parchment rounded-2xl p-5 border border-linen flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={14} className="text-fern" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ash">
                      {label}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-forest leading-snug">
                    {value}
                  </p>
                  <p className="text-xs text-charcoal">{sub}</p>
                  {extra}
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/maps/search/Anglican+House,+32+Mulgrave+St,+Pipitea,+Wellington+6011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-linen text-grove text-sm font-medium px-5 py-3 rounded-full hover:bg-foam hover:border-mint transition-colors w-fit"
            >
              <MapPin size={14} />
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
            <div className="rounded-3xl overflow-hidden aspect-square border border-mint/40 shadow-lg shadow-forest/8">
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
