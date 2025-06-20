import React, { useState } from 'react';
import { motion } from 'framer-motion';


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      };
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
    
      const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      };
    
      return (
        <section id="contact" className="contact">
          <motion.div 
            className="contact-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="contact-content">
              <motion.div className="contact-info" variants={itemVariants}>
                <motion.h2
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  Get In Touch
                </motion.h2>
                <p className="contact-description">
                  I'd love to hear from you! Whether you're interested in commissioning a piece, 
                  collaborating on a project, or simply want to discuss art, feel free to reach out.
                </p>
                
                <motion.div className="contact-details" variants={containerVariants}>
                  <motion.div 
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="contact-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>Your Email</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="contact-icon">📱</span>
                    <div>
                      <h4>Phone</h4>
                      <p>Your Number</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="contact-icon">📍</span>
                    <div>
                      <h4>Location</h4>
                      <p>Cleveland, Ohio</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="contact-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="contact-icon">🌐</span>
                    <div>
                      <h4>Social Media</h4>
                      <div className="social-links">
                        <a href="https://www.instagram.com/uglyartgroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="contact-form-section"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                <motion.h3
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Send me a message
                </motion.h3>
                {isSubmitted ? (
                  <motion.div 
                    className="success-message"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <span className="success-icon">✅</span>
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    className="contact-form" 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.div 
                      className="form-group"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="form-group"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="form-group"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="form-group"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </motion.div>
                    
                    <motion.button 
                      type="submit" 
                      className="submit-button"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </section>
    );
}