import React, { useState, useEffect, useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Will reset when it goes out of view
      },
      { threshold: 0.02 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`fade-in-section ${isVisible ? "is-active" : ""}`}
      style={{ transitionDelay: delay || "0ms" }}
    >
      {children}
    </section>
  );
};
