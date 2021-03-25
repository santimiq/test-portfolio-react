import React from 'react';
//Images
import home1 from '../img/home1.png'
// Import Styled Component from styles.js
import {StyledAbout, StyledDescription, StyledHide, StyledImage } from "../styles"

const AboutSection = () =>{
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span></h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any pgotography o videos ideas.</p>
                <button>Contact us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="Guy with a camera"/>
            </StyledImage>
        </StyledAbout>
    )
}


export default AboutSection;
