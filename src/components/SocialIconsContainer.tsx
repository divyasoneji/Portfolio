import React from "react";

interface SocialIconsContainerProps {
  children: React.ReactNode;
}

const SocialIconsContainer: React.FC<SocialIconsContainerProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default SocialIconsContainer;
