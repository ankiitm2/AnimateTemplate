import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="feature-card"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
