import { styled } from "@mui/system";
import { motion } from "framer-motion";

const MotionImage = styled(motion.img)``;

export const ProfilePhoto = () => {
  return (
    <MotionImage
      className="intro-profile-picture"
      src="/assets/me.PNG"
      alt="Divya Soneji"
      initial={{ boxShadow: "0px 0px 60px var(--neon-pink)"}}
      animate={{
        boxShadow: [
          "0px 0px 120px var(--neon-pink)",
          "0px 0px 60px var(--neon-pink)"
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  );
};
