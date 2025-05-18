import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Button } from "@mui/material";
import { FadeInSection } from "./FadeInSection";
import "../styles/Intro.css";

export const Intro = () => {
  const [step, setStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (step === 0) {
      setTimeout(() => setStep(1), 1000); // Wait for "hi, i'm" to finish
    }
  }, [step]);

  return (
    <div id="intro">
      <img
        src="/assets/cute-working-cat.gif"
        alt="Hello!"
        style={{ width: "200px", height: "auto" }}
      />
      <span className="intro-title">
        <Typewriter
          words={["hi, i'm "]}
          loop={1}
          cursor={showCursor}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={0}
          onLoopDone={() => setShowCursor(false)}
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
        <div className="intro-subtitle">welcome to my portfolio ☕︎</div>
        <div className="intro-description">
          I'm a <strong>Software Engineer</strong> from Vancouver with{" "}
          <strong>3 years</strong> of industry experience in developing and
          maintaining scalable <strong>web</strong> and <strong>desktop</strong>{" "}
          applications. I'm proficient in C#, .NET, TypeScript, React, and
          Python. I hold a<strong> BSc. Degree in Computer Science</strong> from{" "}
          <strong>Simon Fraser University</strong> and I'm strongly fascinated
          by large-scale, high-impact products!
        </div>

        <Button
          className="intro-email"
          variant="outlined"
          startIcon={<EmailRoundedIcon />}
          href="mailto:divya.soneji@hotmail.com"
        >
          Email
        </Button>
      </FadeInSection>
    </div>
  );
};
