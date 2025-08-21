// src/components/Hero/Hero.jsx (Enhanced with Interactive Visual)
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  MousePointer,
  Zap,
  Heart,
} from "lucide-react";
import { useRef, useState } from "react";
import OverlapReveal from "../ScrollEffects/OverlapReveal";
import ScrollStopper from "../ScrollEffects/ScrollStopper";
import "./Hero.css";

const Hero = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  // Transform mouse position for various effects
  const rotateX = useTransform(mouseY, [0, 600], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 800], [-5, 5]);
  const backgroundPos = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `${50 + x / 40}% ${50 + y / 40}%`
  );

  return (
    <section
      className="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScrollStopper stopPoint={0.3}>
        <div className="container">
          <div className="hero-content">
            <motion.div className="hero-text">
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
              style={{
                rotateX,
                rotateY,
              }}
              transition={{ type: "spring", damping: 15 }}
            >
              {/* Interactive Website Mockup */}
              <div className="interactive-mockup">
                <div className="browser-window">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="browser-content">
                    {/* Animated Hero Section in the Mockup */}
                    <div className="mockup-hero">
                      <motion.div
                        className="mockup-title"
                        animate={
                          isHovered
                            ? { color: "#8b5cf6" }
                            : { color: "#ffffff" }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        Your Brand Here
                      </motion.div>

                      <motion.div
                        className="mockup-cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started
                      </motion.div>
                    </div>

                    {/* Floating Interactive Elements */}
                    <motion.div
                      className="floating-element element-1"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Zap size={24} />
                    </motion.div>

                    <motion.div
                      className="floating-element element-2"
                      animate={{
                        y: [0, 15, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                    >
                      <Heart size={24} fill="currentColor" />
                    </motion.div>

                    <motion.div
                      className="floating-element element-3"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 3, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Sparkles size={24} />
                    </motion.div>

                    {/* Interactive Grid */}
                    <div className="interactive-grid">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="grid-cell"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor:
                              i % 3 === 0
                                ? "#8b5cf6"
                                : i % 3 === 1
                                ? "#ec4899"
                                : "#6366f1",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="mockup-glow"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Instruction for user */}
              <motion.div
                className="interaction-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <MousePointer size={16} />
                <span>Move around to interact</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ScrollStopper>

      {/* Animated background elements with parallax */}
      <motion.div
        className="hero-bg-element elem-1"
        style={{ x: useTransform(mouseX, [0, 800], [-10, 10]) }}
      ></motion.div>

      <motion.div
        className="hero-bg-element elem-2"
        style={{ y: useTransform(mouseY, [0, 600], [-15, 15]) }}
      ></motion.div>

      <motion.div
        className="hero-bg-element elem-3"
        style={{
          x: useTransform(mouseX, [0, 800], [15, -15]),
          y: useTransform(mouseY, [0, 600], [10, -10]),
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
