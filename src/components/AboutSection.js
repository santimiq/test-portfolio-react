import React from "react";
//Images
import home1 from "../img/home1.png";
// Import Styled Component from styles.js
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
//Animate
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any pgotography o videos ideas.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
