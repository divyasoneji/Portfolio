import { styled } from "@mui/system";
import { motion } from "framer-motion";

const MotionImage = styled(motion.img)``;

export const ProfilePhoto = () => {
  return (
    <MotionImage
      className="intro-profile-picture"
      src="/assets/me.PNG"
      alt="Divya Soneji"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};
