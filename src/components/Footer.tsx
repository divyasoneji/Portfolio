import { FadeInSection } from "./FadeInSection";
import "../styles/Footer.css";

export const Footer = () => {
    return (
      <FadeInSection>
        <div id="footer">
          <div className="acknowledgments">
            <div>Built and designed by Divya Soneji. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
}