import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const startY = vh + overlapPx;
  const endY = 0;                

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
          // height: "100vh",
          y,            // numeric px -> framer applies translateY(px)
          zIndex: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
