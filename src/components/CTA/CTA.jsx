// Enhanced CTA.jsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./CTA.css";

const CTA = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section cta">
      <div className="container">
        <motion.div
          className="cta-content"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Ready to slay the game?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Join thousands of creators and build your main character website
            today.
          </motion.p>
          <motion.div
            className="cta-actions"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
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
              Let's slay
            </motion.button>
            <motion.button
              className="btn btn-ghost"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              See the vibes
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="cta-floating-elem elem-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="cta-floating-elem elem-2"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🎯
      </motion.div>

      <motion.div
        className="cta-floating-elem elem-3"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🔥
      </motion.div>
    </section>
  );
};

export default CTA;
