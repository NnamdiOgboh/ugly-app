import React from "react";
import { motion } from "framer-motion";


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };
  
    return (
      <motion.footer 
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="footer-container">
          <motion.div className="footer-content" variants={containerVariants}>
            <motion.div className="footer-section" variants={itemVariants}>
              <motion.div 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3>uglyarts</h3>
                <p>Redefining beauty through authentic artistic expression</p>
              </motion.div>
            </motion.div>
            
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <motion.button 
                    onClick={() => {
                      const element = document.getElementById('home');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 5, color: "#667eea" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => {
                      const element = document.getElementById('gallery');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 5, color: "#667eea" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gallery
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 5, color: "#667eea" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.button>
                </li>
              </ul>
            </motion.div>
            
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Connect</h4>
              <div className="social-media">
                <motion.a 
                  href="#" 
                  className="social-icon" 
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>📷</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-icon" 
                  aria-label="Twitter"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>🐦</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-icon" 
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>💼</span>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-icon" 
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>📱</span>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>Contact Info</h4>
              <div className="contact-info">
                <motion.p
                  whileHover={{ x: 5, color: "#667eea" }}
                  transition={{ duration: 0.2 }}
                >
                  📧 Email
                </motion.p>
                <motion.p
                  whileHover={{ x: 5, color: "#667eea" }}
                  transition={{ duration: 0.2 }}
                >
                  📱 +number
                </motion.p>
                <motion.p
                  whileHover={{ x: 5, color: "#667eea" }}
                  transition={{ duration: 0.2 }}
                >
                  📍 Cleveland, Ohio
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>&copy; {currentYear} uglyarts. All rights reserved.</p>
              <div className="footer-legal">
                <motion.a 
                  href="#" 
                  className="legal-link"
                  whileHover={{ color: "#667eea" }}
                  transition={{ duration: 0.2 }}
                >
                  Privacy Policy
                </motion.a>
                <span className="separator">|</span>
                <motion.a 
                  href="#" 
                  className="legal-link"
                  whileHover={{ color: "#667eea" }}
                  transition={{ duration: 0.2 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    );
}