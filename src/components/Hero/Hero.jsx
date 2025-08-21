// Updated Hero.jsx with fixed text overflow
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";
import OverlapReveal from "../ScrollEffects/OverlapReveal";
import ScrollStopper from "../ScrollEffects/ScrollStopper";
import "./Hero.css";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" ref={containerRef}>
      <ScrollStopper stopPoint={0.3}>
        <div className="container">
          <div className="hero-content">
            <motion.div className="hero-text" style={{ y, opacity }}>
              <motion.div
                className="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Sparkles size={16} /> <span>vibe with the future</span>
              </motion.div>

              <h1>
                <OverlapReveal direction="right" speed={100}>
                  <span className="heading-line">Create websites</span>
                </OverlapReveal>
                <OverlapReveal direction="left" speed={100} delay={0.2}>
                  <span className="gradient-text heading-line">
                    that actually slay
                  </span>
                </OverlapReveal>
              </h1>

              <OverlapReveal direction="up" speed={50} delay={0.4}>
                <p>
                  No cap—our templates are straight fire. Create bussin'
                  websites with our dope tools. It's giving main character
                  energy for your brand.
                </p>
              </OverlapReveal>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.button
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 0, 2, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's slay <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} /> Watch the vibe
                </motion.button>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="stat">
                  <span className="stat-number">100k+</span>
                  <span className="stat-label">vibes created</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">good energy</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mockup-content">
                  <motion.div
                    className="floating-card card-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ y: -5 }}
                  >
                    <span>🔥</span>
                    <p>viral content</p>
                  </motion.div>

                  <motion.div
                    className="floating-card card-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ y: -5 }}
                  >
                    <span>🚀</span>
                    <p>growth</p>
                  </motion.div>

                  <motion.div
                    className="floating-card card-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <span>💫</span>
                    <p>engagement</p>
                  </motion.div>

                  <div className="mockup-grid">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="mockup-grid-item"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: i % 2 === 0 ? "#8b5cf6" : "#ec4899",
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollStopper>

      {/* Animated background elements */}
      <motion.div
        className="hero-bg-element elem-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="hero-bg-element elem-2"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <motion.div
        className="hero-bg-element elem-3"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
