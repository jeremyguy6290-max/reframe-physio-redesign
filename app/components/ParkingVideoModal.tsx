"use client";

import { useState, useEffect, useRef } from "react";
import { X, Play } from "lucide-react";

interface ParkingVideoModalProps {
  buttonLabel?: string;
  buttonClassName?: string;
}

export default function ParkingVideoModal({
  buttonLabel = "Watch parking guide",
  buttonClassName,
}: ParkingVideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsOpen(false);
  }

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === backdropRef.current) close();
  }

  const defaultButtonClass =
    "inline-flex items-center gap-1.5 text-[12px] font-medium text-grove border border-grove/25 px-3.5 py-2 rounded-full hover:bg-foam hover:border-grove/40 transition-colors";

  return (
    <>
      <button
        onClick={open}
        className={buttonClassName ?? defaultButtonClass}
        aria-label="Watch parking guide video"
      >
        <Play size={11} strokeWidth={2.5} className="flex-shrink-0" />
        {buttonLabel}
      </button>

      {isOpen && (
        <div
          ref={backdropRef}
          onClick={onBackdropClick}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-forest/65 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Parking guide video"
        >
          <div className="bg-cream rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl shadow-forest/30">
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-linen">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-fern mb-0.5">
                  Parking guide
                </p>
                <p className="text-sm font-medium text-forest">
                  Finding Reframe Physio
                </p>
              </div>
              <button
                onClick={close}
                className="w-8 h-8 rounded-full bg-foam border border-linen flex items-center justify-center text-charcoal hover:bg-mint/20 hover:border-mint/50 transition-colors"
                aria-label="Close video"
              >
                <X size={14} strokeWidth={2} />
              </button>
            </div>

            {/* Video */}
            <div className="bg-forest/5">
              <video
                ref={videoRef}
                src="/videos/reframe-parking-guide.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full block"
                style={{ maxHeight: "60vh" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
