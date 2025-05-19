import React, { useState, useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section
      className={`fade-in-section ${isActive ? "is-active" : ""}`}
      style={{ transitionDelay: delay || "0ms" }}
    >
      {children}
    </section>
  );
};
