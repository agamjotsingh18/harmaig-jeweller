// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import heroImage from "../assets/festival.png"; // Replace with your image

const HeroSection = styled.section`
  height: 100vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-color: #333; /* Fallback background */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 15px 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fonts.header};

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.body};

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
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
