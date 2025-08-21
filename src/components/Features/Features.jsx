// Updated Features.jsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import FeatureGrid from "./FeatureGrid";
import "./Features.css";

const Features = () => {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description:
        "Built with performance in mind. Our templates load in milliseconds.",
    },
    {
      icon: "🎨",
      title: "Aesthetic AF",
      description:
        "Modern, clean designs that convert visitors into customers.",
    },
    {
      icon: "⚙️",
      title: "Easy to Customize",
      description:
        "Change colors, fonts, and layouts with our intuitive editor.",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Looks perfect on all devices, from mobile to desktop.",
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Rank higher in search results with our built-in SEO tools.",
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee.",
    },
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Main Character Features</h2>
          <p className="section-subtitle">
            Everything you need to create stunning websites that convert
            visitors into customers.
          </p>
        </motion.div>

        <FeatureGrid features={features} />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="features-bg-elem"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
    </section>
  );
};

export default Features;
