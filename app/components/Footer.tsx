import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { CLINIKO_URL } from "../lib/booking";

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
    <footer className="bg-forest text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-[1.6fr_1fr_1.3fr] gap-10 lg:gap-14">
          {/* Col 1: Brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo variant="light" />

            <p className="text-[13.5px] text-mint/65 leading-relaxed max-w-xs">
              Specialist physiotherapy for pain, dizziness, concussion, and
              complex movement conditions in central Wellington.
            </p>

            {/* Provider badges */}
            <div className="flex flex-wrap gap-2">
              {providers.map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-medium text-sage bg-grove/50 border border-fern/25 px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:0272414888"
                className="flex items-center gap-2.5 text-[13.5px] text-mint/75 hover:text-cream transition-colors"
              >
                <Phone size={13} className="text-sage flex-shrink-0" />
                027 241 4888
              </a>
              <a
                href="mailto:reframephysio@gmail.com"
                className="flex items-center gap-2.5 text-[13.5px] text-mint/75 hover:text-cream transition-colors"
              >
                <Mail size={13} className="text-sage flex-shrink-0" />
                reframephysio@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-[13.5px] text-mint/75">
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
                    className="text-[13.5px] text-mint/65 hover:text-cream transition-colors duration-150"
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
              <p className="text-[13.5px] text-mint/65 leading-relaxed">
                Book your initial assessment with John Lee. No referral
                required.
              </p>
            </div>

            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-fern text-cream text-sm font-semibold px-5 py-3.5 rounded-full hover:bg-sage hover:text-forest transition-colors duration-200"
            >
              Book an appointment
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>

            <div className="pt-1">
              <p className="text-[11px] font-semibold text-sage mb-1.5 uppercase tracking-wider">
                Hours
              </p>
              <p className="text-[13.5px] text-mint/65">
                Tues, Wed, Fri: 8:00am – 6:00pm
              </p>
              <p className="text-xs text-mint/40 mt-0.5">
                Mon, Thurs, Sat &amp; Sun: by appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-fern/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mint/35">
            © {new Date().getFullYear()} Reframe Physio. All rights reserved.
          </p>
          <p className="text-xs text-mint/35">
            Anglican House, 32 Mulgrave St, Wellington
          </p>
        </div>
      </div>
    </footer>
  );
}
