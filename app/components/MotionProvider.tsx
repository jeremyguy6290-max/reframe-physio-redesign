"use client";

import { MotionConfig } from "framer-motion";

/* reducedMotion="user" makes every motion component in the tree drop
   transform/layout animations (keeping opacity only) when the visitor
   has prefers-reduced-motion enabled. */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
