// src/components/ScrollEffects/ScrollStopper.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ScrollStopper.css";

const ScrollStopper = ({ children, stopPoint = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, stopPoint - 0.2, stopPoint, stopPoint + 0.2, 1],
    [0, 0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, stopPoint - 0.2, stopPoint, stopPoint + 0.2, 1],
    [0.8, 0.8, 1, 1, 0.8]
  );

  return (
    <motion.div ref={ref} className="scroll-stopper" style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
};

export default ScrollStopper;
