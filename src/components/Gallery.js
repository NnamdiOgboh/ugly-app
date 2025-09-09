import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getImages } from "../api";

export const Gallery = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6); // Limit to 6 images initially
  const [selectedImage, setSelectedImage] = useState(null); // For enlarging an image

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };

    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...responseJson.resources,
    ]);
    setNextCursor(responseJson.next_cursor);
    setVisibleImages((currentVisible) => currentVisible + 6); // Show 6 more images
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <>
      <div id="gallery" className="gallery-header">
        <h1>My Gallery</h1>
        <p>
          Explore my collection of artworks that challenge conventional beauty
          and embrace the authentic expression of human experience.
        </p>
      </div>

      <div className="image-grid">
        {imageList.slice(0, visibleImages).map((image) => (
          <motion.img
            key={image.public_id}
            src={image.url}
            alt={image.public_id}
            className="image-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleImageClick(image)} // Enlarge image on click
          />
        ))}
      </div>

      <div className="load-more">
        {nextCursor && (
          <motion.button
            onClick={handleLoadMoreButtonClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        )}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0 }}
            animate={{ scale: 0.8 }}
            exit={{ scale: 0 }}
          >
            <img src={selectedImage.url} alt={selectedImage.public_id} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};