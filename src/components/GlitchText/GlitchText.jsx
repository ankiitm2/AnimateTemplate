// src/components/GlitchText/GlitchText.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./GlitchText.css";

const GlitchText = ({ text, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className="glitch-text"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <span className="glitch-text-main">{text}</span>
      <span className="glitch-text-accent">{text}</span>
      <span className="glitch-text-accent glitch-text-accent-2">{text}</span>
      {isHovered && (
        <>
          <motion.span
            className="glitch-text-glitch"
            initial={{ x: 0 }}
            animate={{ x: [0, 4, -4, 0] }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="glitch-text-glitch glitch-text-glitch-2"
            initial={{ x: 0 }}
            animate={{ x: [0, -3, 3, 0] }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.span>
  );
};

export default GlitchText;
