// Enhanced Footer.jsx
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>✨</span> Modern
            </motion.h3>
            <p>Creating main character energy for your brand.</p>
            <div className="social-links">
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Vibes</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Templates</a>
              <a href="#">Updates</a>
            </motion.div>

            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </motion.div>

            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">Support</a>
              <a href="#">Community</a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            Made with <Heart size={16} fill="currentColor" /> for the main
            characters
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="footer-floating-elem elem-1"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🎨
      </motion.div>

      <motion.div
        className="footer-floating-elem elem-2"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        💻
      </motion.div>
    </footer>
  );
};

export default Footer;
