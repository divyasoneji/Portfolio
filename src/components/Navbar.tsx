import React from "react";
import "../styles/Navbar.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Divya Soneji</div>
      <ul className="navbar-links">
        {["Home", "About", "Experience", "Projects"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            <li>{item}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
