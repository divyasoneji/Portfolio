import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/NavigationMenu.css";

export const NavigationMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = ["Home", "About", "Experience", "Projects"];

  return (
    <nav className="navbar">
      {menuOpen === false && (
        <MenuOutlinedIcon className="menu-icon-open" onClick={toggleMenu} />
      )}
      {menuOpen && (
        <CloseIcon className="menu-icon-close" onClick={toggleMenu} />
      )}

      {menuOpen &&
        menuItems.map((item, index) => (
          <motion.div
            key={item}
            className="bubble-container"
            initial={{ opacity: 0, scale: 0, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4, type: "spring" }}
            style={{ top: `${80 + index * 60}px`, left: "20px" }}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.div>
        ))}
    </nav>
  );
};
