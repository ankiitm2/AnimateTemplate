// src/hooks/useScrollAnimation.js (Enhanced)
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    ...options,
  });

  return { ref, isInView };
};

export const useScrollScale = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [0.8, 1]);
};

export const useScrollRotate = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [-5, 5]);
};

export const useScrollOpacity = (ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
};

export const useScrollParallax = (ref, distance = 50) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
};
