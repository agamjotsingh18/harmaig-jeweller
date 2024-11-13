// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import heroImage from "../assets/festival.png"; // Replace with your image

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 40px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fonts.header};
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.body};
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Exquisite Jewellery</HeroTitle>
        <HeroSubtitle>Discover elegance redefined in every piece.</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
