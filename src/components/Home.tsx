import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FadeInSection } from "./FadeInSection";
import { ProfilePhoto } from "./ProfilePhoto";
import "../styles/Home.css";

export const Home = () => {
  const [step, setStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (step === 0) {
      setTimeout(() => setStep(1), 1000); // Wait for "hi! i'm" to finish
    }
    if (step === 1) {
      setShowCursor(false);
    }
  }, [step]);

  return (
    <div id="home">
      <ProfilePhoto></ProfilePhoto>
      <span className="intro-title">
        <Typewriter
          words={["hi! i'm "]}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={0}
        />
        {step === 1 && (
          <span className="intro-name">
            <Typewriter
              words={["divya soneji"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={0}
            />
          </span>
        )}
      </span>
      <FadeInSection>
        <div>
          <a
            href="https://www.linkedin.com/in/divyasoneji/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="intro-social-icon"></LinkedInIcon>
          </a>
          <a
            href="https://github.com/divyasoneji"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="intro-social-icon"></GitHubIcon>
          </a>
          <a href="mailto:divya.soneji@hotmail.com">
            <EmailIcon className="intro-social-icon"></EmailIcon>
          </a>
        </div>
        <div className="intro-description">
          I'm a<b> Software Engineer </b>from Vancouver with
          <b> 2+ years </b>of industry experience in developing and maintaining
          scalable<b> web </b>and <b> desktop </b>
          applications. I specialize in C#, .NET, TypeScript, React, and Python
          and I'm facinated by large-scale, high-impact products that drive
          innovation!
        </div>
        <a href="#about">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <KeyboardDoubleArrowDownIcon className="intro-go-down" />
          </motion.div>
        </a>
      </FadeInSection>
    </div>
  );
};
