import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/MatchaCheers.css";

export const MatchaCheers: React.FC = () => {
  const [clinked, setClinked] = useState(false);

  const handleCheers = () => {
    setClinked(true);
    setTimeout(() => setClinked(false), 1000); // Reset after animation
    new Audio("/assets/clink-sound.mp3").play(); // Play clink sound
  };

  return (
    <div className="matcha-cheers">
      <motion.img
        src="/assets/matcha-cutout.png"
        alt="Iced Matcha Latte"
        className="matcha left"
        animate={{
          x: clinked ? 20 : -30,
          y: clinked ? -15 : 0,
          scale: clinked ? 1.2 : 1,
          rotate: clinked ? -20 : -10,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ x: 25, rotate: -15 }}
        onHoverStart={handleCheers}
      />
      <motion.img
        src="/assets/matcha-cutout.png"
        alt="Iced Matcha Latte"
        className="matcha right"
        animate={{
          x: clinked ? -20 : 30,
          y: clinked ? -15 : 0,
          scale: clinked ? 1.2 : 1,
          rotate: clinked ? 20 : 10,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ x: -25, rotate: 15 }}
        onHoverStart={handleCheers}
      />
      {clinked && (
        <motion.div
          className="cheers-text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          Cheers!
        </motion.div>
      )}
      <motion.div
        className="hover-text"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ← Hover
      </motion.div>
    </div>
  );
};
