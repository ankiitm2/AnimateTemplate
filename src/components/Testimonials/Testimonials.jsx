// Enhanced Testimonials.jsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      content:
        "This template is literally everything! My engagement went through the roof after switching. No cap!",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Influencer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      content:
        "I was able to create a fire website in just one day. The vibes are immaculate!",
      rating: 5,
    },
    {
      name: "Zoe Rodriguez",
      role: "Digital Artist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      content:
        "The conversion rate of my portfolio increased by 60% after switching. It's giving main character energy!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">They're Vibeing With Us</h2>
          <p className="section-subtitle">
            See what our community is saying about their experience. It's giving
            satisfied!
          </p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="testimonial-floating-elem elem-1"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🔥
      </motion.div>

      <motion.div
        className="testimonial-floating-elem elem-2"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        💫
      </motion.div>

      <motion.div
        className="testimonial-floating-elem elem-3"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🚀
      </motion.div>
    </section>
  );
};

export default Testimonials;
