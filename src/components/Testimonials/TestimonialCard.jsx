import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, image, content, rating, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="testimonial-content">"{content}"</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
