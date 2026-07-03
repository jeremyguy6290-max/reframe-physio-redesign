import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { CLINIKO_URL } from "../lib/booking";
import { HOURS_PRIMARY, HOURS_SECONDARY } from "../lib/hours";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About John Lee", href: "#about" },
  { label: "Book an appointment", href: "#booking" },
  { label: "Referrals", href: "#referrals" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const providers = ["ACC registered", "Southern Cross approved"];

export default function Footer() {
  return (
    <footer className="bg-footer-flow text-cream">
      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-14 lg:pt-32 lg:pb-16">
        <div className="grid md:grid-cols-[1.6fr_1fr_1.3fr] gap-10 lg:gap-14">
          {/* Col 1: Brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo variant="light" />

            <p className="text-[13.5px] text-mint/75 leading-relaxed max-w-xs">
              Specialist physiotherapy for pain, dizziness, concussion, and
              complex movement conditions in central Wellington.
            </p>

            {/* Provider badges */}
            <div className="flex flex-wrap gap-2">
              {providers.map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-medium text-mint/90 bg-white/[0.06] border border-sage/30 px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:0272414888"
                className="flex items-center gap-2.5 text-[13.5px] text-mint/80 hover:text-cream transition-colors"
              >
                <Phone size={13} className="text-sage flex-shrink-0" />
                027 241 4888
              </a>
              <a
                href="mailto:reframephysio@gmail.com"
                className="flex items-center gap-2.5 text-[13.5px] text-mint/80 hover:text-cream transition-colors"
              >
                <Mail size={13} className="text-sage flex-shrink-0" />
                reframephysio@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-[13.5px] text-mint/80">
                <MapPin size={13} className="text-sage flex-shrink-0 mt-0.5" />
                <span>
                  Anglican House, 32 Mulgrave St
                  <br />
                  Pipitea, Wellington 6011
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-sage mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13.5px] text-mint/75 hover:text-cream transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Booking CTA */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-sage mb-4">
                Ready to get started?
              </p>
              <p className="text-[13.5px] text-mint/75 leading-relaxed">
                Book your initial assessment with John Lee. No referral
                required.
              </p>
            </div>

            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-cream text-forest text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-parchment transition-colors duration-200"
            >
              Book an appointment
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <div className="pt-1">
              <p className="text-[11px] font-semibold text-sage mb-1.5 uppercase tracking-wider">
                Hours
              </p>
              <p className="text-[13.5px] text-mint/80">
                {HOURS_PRIMARY}
              </p>
              <p className="text-xs text-mint/60 mt-0.5">
                {HOURS_SECONDARY}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mint/60">
            © {new Date().getFullYear()} Reframe Physio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              className="text-xs text-mint/60 hover:text-cream transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <span className="text-mint/30 text-xs">·</span>
            <a
              href="/accessibility-statement"
              className="text-xs text-mint/60 hover:text-cream transition-colors duration-150"
            >
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
