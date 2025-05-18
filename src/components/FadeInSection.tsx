import React, { useState, useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <section className={`fade-in-section ${isActive ? 'is-active' : ''}`}>
      {children}
    </section>
  );
};
