// src/components/Features/FeatureGrid.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./FeatureGrid.css";

const FeatureGrid = ({ features }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Staggered opacity animation
  const opacityRange = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const opacity = features.map((_, i) =>
    useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      opacityRange.map((val, j) => (j <= i ? 0 : 1))
    )
  );

  // Staggered y animation
  const y = features.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [50 + i * 20, 0])
  );

  // Staggered scale animation
  const scale = features.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [0.8 + i * 0.05, 1])
  );

  return (
    <div className="feature-grid" ref={ref}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-grid-item"
          style={{
            opacity: opacity[index],
            y: y[index],
            scale: scale[index],
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
        >
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
