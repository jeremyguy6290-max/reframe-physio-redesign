"use client";

import { CLINIKO_URL } from "../lib/booking";

export default function Announcement() {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between gap-4 h-10">

          <div className="flex items-center gap-3 min-w-0">
            <span className="flex-shrink-0 text-[9px] font-semibold uppercase tracking-widest text-forest bg-cream px-2.5 py-0.5 rounded-full">
              May 2026
            </span>
            <p className="text-[12.5px] font-medium text-cream truncate">
              VALD dynamometer testing is now available for more accurate rehab data.
            </p>
          </div>

          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-[12.5px] font-semibold text-cream underline-offset-2 hover:underline transition-colors duration-150"
          >
            Book now →
          </a>

        </div>
      </div>
    </div>
  );
}
