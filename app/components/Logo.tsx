interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

function CloudMark() {
  return (
    <img
      src="/images/reframe-cloud-reference.png"
      alt=""
      aria-hidden="true"
      className="h-9 w-auto object-contain"
    />
  );
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isDark = variant === "dark";
  const nameColor = isDark ? "text-forest" : "text-cream";
  const tagColor = isDark ? "text-fern" : "text-sage";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <CloudMark />
      <span
        className={`font-sans text-[17px] tracking-tight leading-none select-none ${nameColor}`}
      >
        <span className="font-semibold">Reframe</span>
        <span className={`font-light ml-[2px] ${tagColor}`}>Physio</span>
      </span>
    </div>
  );
}
