import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollOverlap
 * - Wrap the NEXT section (the one that should come over the current)
 * - Behavior: when you scroll past the previous section, this wrapped section
 *   slides up from below and covers the previous section.
 *
 * Usage:
 * <Hero />
 * <ScrollOverlap><Alignment/></ScrollOverlap>
 */
export default function ScrollOverlap({ children, overlapPx = 0 }) {
  const ref = useRef(null);

  // viewport height in px (keeps mapping accurate on resize)
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // target: this wrapper element; offsets define when animation runs
  // start: when wrapper top reaches viewport top
  // end: when wrapper bottom reaches viewport top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 -> 1) to translateY in pixels.
  // Start below the viewport (vh px) and end at 0 (fully covering).
  // Subtract overlapPx if you want it to start slightly above/below.
  const startY = vh + overlapPx; // start position in px (completely below)
  const endY = 0;                // end position (aligned to top)

  const y = useTransform(scrollYProgress, [0, 1], [startY, endY]);

  return (
    // wrapper height = 2 * viewport so we have scroll space for the transition
    <div ref={ref} style={{ position: "relative", minHeight: `${vh * 2}px` }}>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          y,            // numeric px -> framer applies translateY(px)
          zIndex: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
