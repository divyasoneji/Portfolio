import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
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
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={0}
            />
          </span>
        )}
      </span>
    </div>
  );
};
