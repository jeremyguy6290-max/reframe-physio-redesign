"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { CLINIKO_URL } from "../lib/booking";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Booking", href: "/#booking" },
  { label: "Referrals", href: "/#referrals" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(229,221,208,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" aria-label="Reframe Physio — home">
            <Logo variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[13.5px] font-medium text-charcoal hover:text-grove transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-grove after:transition-all after:duration-200 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0272414888"
              className="text-[13px] text-charcoal hover:text-grove transition-colors hidden xl:block"
            >
              027 241 4888
            </a>
            <a
              href={CLINIKO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grove text-cream text-[13.5px] font-semibold px-5 py-2.5 rounded-full hover:bg-forest transition-all duration-200 shadow-md shadow-grove/15"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-forest rounded-lg hover:bg-foam transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slides in */}
      {menuOpen && (
        <div className="lg:hidden bg-cream border-t border-linen shadow-xl shadow-forest/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="py-3 px-3 text-sm font-medium text-charcoal hover:text-grove hover:bg-foam rounded-xl transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-linen flex flex-col gap-2">
              <a
                href="tel:0272414888"
                className="py-2 px-3 text-sm text-charcoal"
              >
                027 241 4888
              </a>
              <a
                href={CLINIKO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grove text-cream text-sm font-semibold px-5 py-3.5 rounded-full text-center hover:bg-forest transition-colors shadow-sm"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
