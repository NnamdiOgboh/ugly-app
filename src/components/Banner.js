import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle } from 'react-feather';
import img from '../assets/img/ogboh.jpeg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Hi I'm CHINEDU OGBOH", "WELCOME TO MY CIRCUS"];
    const period = 2000;
  
    const tick = useCallback(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }, [loopNum, isDeleting, text, toRotate, period]);
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [delta, tick]);
  
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
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
  
    return (
      <section id="home" className="banner">
        <motion.div 
          className="banner-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="banner-text" variants={itemVariants}>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
            >
              {text}
            </motion.h1>
            <motion.p 
              className="artist-intro"
              variants={itemVariants}
            >
              This is the section where you write about yourself and anything you would want your audience to know about the ugly art.
            </motion.p>
            <motion.button 
              className="cta-button" 
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's connect <ArrowRightCircle size={25} style={{ marginLeft: '10px' }} />
            </motion.button>
          </motion.div>
          <motion.div 
            className="banner-image"
            initial={{ x: 100, opacity: 0, rotate: 10 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 1, type: "spring", stiffness: 80 }}
          >
            <motion.div 
              className="artist-placeholder"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 50px rgba(255, 255, 255, 0.3)"
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img src={img} alt="Artist" />
              
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
}