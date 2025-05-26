import { styled } from "@mui/system";
import { motion } from "framer-motion";

const MotionImage = styled(motion.img)``;

export const ProfilePhoto = () => {
  return (
    <MotionImage
      className="intro-profile-picture"
      src="/assets/me.PNG"
      alt="Divya Soneji"
      initial={{ boxShadow: "0px 0px 130px var(--neon-pink-fade)" }}
      animate={{
        boxShadow: [
          "0px 0px 80px var(--neon-pink-fade)",
          "0px 0px 130px var(--neon-pink-fade)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  );
};
