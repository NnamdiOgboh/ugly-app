import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

  // Sample artwork data - in a real app, this would come from an API or database
  const artworks = [
    {
      id: 1,
      title: "Emotions in Motion",
      medium: "Acrylic on Canvas",
      year: "2023",
      description: "An abstract exploration of human emotions through bold colors and dynamic brushstrokes."
    },
    {
      id: 2,
      title: "Urban Decay",
      medium: "Mixed Media",
      year: "2023",
      description: "A commentary on modern city life and the beauty found in deterioration."
    },
    {
      id: 3,
      title: "Silent Whispers",
      medium: "Oil on Canvas",
      year: "2022",
      description: "A minimalist piece that speaks to the power of subtlety and negative space."
    },
    {
      id: 4,
      title: "Fractured Dreams",
      medium: "Digital Art",
      year: "2023",
      description: "A digital exploration of broken aspirations and renewed hope."
    },
    {
      id: 5,
      title: "Nature's Rebellion",
      medium: "Watercolor",
      year: "2022",
      description: "Depicting nature's resilience against human interference."
    },
    {
      id: 6,
      title: "Inner Landscapes",
      medium: "Charcoal",
      year: "2023",
      description: "A monochromatic journey through the artist's psychological terrain."
    }
  ];

  const openModal = (artwork) => {
    setSelectedImage(artwork);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="gallery">
      <motion.div 
        className="gallery-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Artwork Gallery
        </motion.h2>
        <motion.p 
          className="gallery-description"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Explore my collection of artworks that challenge conventional beauty and embrace 
          the authentic expression of human experience.
        </motion.p>
        
        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
        >
          {artworks.map((artwork, index) => (
            <motion.div 
              key={artwork.id} 
              className="gallery-item" 
              onClick={() => openModal(artwork)}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <motion.div 
                className="artwork-placeholder"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="artwork-icon">🖼️</span>
                <p>Artwork {artwork.id}</p>
              </motion.div>
              <div className="artwork-info">
                <h3>{artwork.title}</h3>
                <p className="artwork-medium">{artwork.medium} • {artwork.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal for enlarged view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="modal-overlay" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <motion.button 
                className="modal-close" 
                onClick={closeModal}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <div className="modal-image">
                <motion.div 
                  className="artwork-placeholder-large"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="artwork-icon-large">🖼️</span>
                  <p>High Resolution Artwork</p>
                </motion.div>
              </div>
              <motion.div 
                className="modal-info"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3>{selectedImage.title}</h3>
                <p className="modal-medium">{selectedImage.medium} • {selectedImage.year}</p>
                <p className="modal-description">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}