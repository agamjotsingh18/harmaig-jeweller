import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const KnowUs = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {/* Back Button */}
      <BackButton onClick={goBack} aria-label="Go Back">
        <i className="fa-solid fa-arrow-left"></i>
      </BackButton>

      {/* Title */}
      <Title>Know Us</Title>

      {/* Content */}
      <Paragraph>
        We are a direct-to-consumer (D2C) jewelry brand, backed by a rich family heritage in the jewelry business since 1992. Now, we're embarking on an online venture led by IIT Bombay students.
      </Paragraph>
      <Paragraph>
        We are <Highlight>Artisans of Opulence</Highlight>, crafting pioneering gold designs with supreme trust, premium service, and blazing speed in the world of luxury—where every opus embodies emotion, sophistication, and revolution.
      </Paragraph>
    </Container>
  );
};

export default KnowUs;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  border: 2px solid #d3d3d3;
  border-radius: 24px;
  background: #f6f5f0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #a28764;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    color: #d4af37;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Serif", serif;
  color: #4c3f35;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #6b5b4b;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const Highlight = styled.span`
  color: #a28764;
  font-weight: bold;
`;

