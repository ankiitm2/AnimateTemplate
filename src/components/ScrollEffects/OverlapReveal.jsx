// src/components/ScrollEffects/OverlapReveal.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./OverlapReveal.css";

const OverlapReveal = ({ children, direction = "left", speed = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [-speed, 0] : [speed, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} className="overlap-reveal" style={{ x, opacity }}>
      {children}
    </motion.div>
  );
};

export default OverlapReveal;
