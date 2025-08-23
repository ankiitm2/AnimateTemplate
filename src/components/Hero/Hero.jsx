// src/components/Hero/Hero.jsx (CyberShade Inspired)
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  MousePointer,
  Zap,
  Heart,
  Code,
  Cpu,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import GlitchText from "../GlitchText/GlitchText";
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
  const rotateX = useTransform(mouseY, [0, 600], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 800], [-1, 1]);

  return (
    <section
      className="hero cyber-hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>

      {/* Animated Glow Orbs */}
      <div className="cyber-orbs">
        <motion.div
          className="cyber-orb orb-1"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="cyber-orb orb-2"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="cyber-orb orb-3"
          animate={{
            x: [0, 40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="cyber-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <Sparkles size={16} />
              <span>next-gen web experience</span>
              <div className="cyber-badge-accent"></div>
            </motion.div>

            <h1>
              <div className="cyber-title">
                <GlitchText text="CREATE" />
                <GlitchText text="WEBSITES" delay={0.2} />
                <motion.span
                  className="gradient-text cyber-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  THAT DOMINATE
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="cyber-description"
            >
              Advanced technology meets stunning design. Our frameworks are
              engineered for performance and built to convert. Stop blending
              in—start dominating.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                className="btn cyber-btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={18} />
                <span>Launch Project</span>
                <div className="cyber-btn-accent"></div>
              </motion.button>
              <motion.button
                className="btn cyber-btn-secondary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={18} />
                <span>Explore Code</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              <div className="cyber-stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">possibilities</span>
              </div>
              <div className="cyber-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">performance</span>
              </div>
              <div className="cyber-stat">
                <span className="stat-number">0.1s</span>
                <span className="stat-label">load time</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual cyber-visual"
            style={{
              rotateX,
              rotateY,
            }}
            transition={{ type: "spring", damping: 15 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1.2, delay: 0.8 }}
          >
            {/* Cyber Terminal Mockup */}
            <div className="cyber-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="terminal-title">terminal — zsh</div>
              </div>

              <div className="terminal-content">
                <div className="code-line">
                  <span className="code-prompt">$</span>
                  <span className="code-command">create project</span>
                </div>
                <div className="code-line">
                  <span className="code-output">
                    Initializing cyber engine...
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-output">
                    Loading advanced components...
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-output success">
                    ✓ Project ready in 0.4s
                  </span>
                </div>
                <div className="code-line">
                  <span className="code-prompt">$</span>
                  <span className="code-command blink">_</span>
                </div>
              </div>

              <div className="terminal-glow"></div>
            </div>

            {/* Floating Cyber Elements */}
            <motion.div
              className="cyber-floating element-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Cpu size={24} />
            </motion.div>

            <motion.div
              className="cyber-floating element-2"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Code size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
