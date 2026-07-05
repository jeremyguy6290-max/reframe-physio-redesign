import { useEffect, useState } from "react";

/* SSR-safe viewport check. Defaults to false (desktop behaviour) until
   mounted, then tracks the breakpoint live. Used to give mobile devices
   cheaper animation variants without touching the desktop experience. */
export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
