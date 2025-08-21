// src/components/Header/Header.jsx (Enhanced)
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles size={20} />
            <span>Modern</span>
          </motion.div>

          <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
            <motion.a
              href="#features"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#testimonials"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Pricing
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact
            </motion.a>
          </nav>

          <div className="header-actions">
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 0, 2, 0],
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
