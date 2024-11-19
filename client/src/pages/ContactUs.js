import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem;
  background: linear-gradient(to bottom, #f8f4f1, #eae4db);
  border-radius: 20px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.05), transparent);
    z-index: 0;
  }
`;

const BackIcon = styled.i`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  color: #a3968b;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #000;
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #3b332e;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: #a3968b;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.h2`
text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: #6b5b4b;
  margin-bottom: 3rem;
  z-index: 2;
  position: relative;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ContactCard = styled.div`
  width: 350px;
  padding: 2rem;
  background: linear-gradient(to bottom, #fff, #f4f0ec);
  border-radius: 16px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.05), transparent);
    z-index: 1;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3b332e;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #6b5b4b;
  margin-bottom: 1.5rem;
  z-index: 2;
  position: relative;
`;

const Phone = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #3b332e;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
  transition: color 0.3s ease, text-decoration 0.3s ease;


   &:hover {
    color: #6846c3;
    text-decoration: underline;
  }
`;

const Email = styled.a`
  font-size: 0.9rem;
  color: #8a72ff;
  text-decoration: none;
  margin-top: 0.5rem;
  display: inline-block;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: #6846c3;
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
text-align: center;
  margin-top: 3rem;
  font-size: 1rem;
  color: #a3968b;
  z-index: 2;
  position: relative;
  letter-spacing: 0.5px;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, #decab3 20%, transparent 70%);
  opacity: 0.4;
  z-index: 1;
`;

const Contact = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <GradientOverlay />
      <BackIcon
        className="fa-solid fa-arrow-left"
        onClick={goBack}
        aria-label="Go back"
      ></BackIcon>

      {/* Title */}
      <Title>Contact Us</Title>

      {/* Subheading */}
      <Subheading>We’d love to hear from you</Subheading>

      {/* Co-Founders Section */}
      <CardContainer>
        {/* Contact Card: Manasvi Kushwaha */}
        <ContactCard>
          <Name>Manasvi Kushwaha</Name>
          <Role>Co-Founder</Role>
          <Phone ><a href="tel:+917021920836">+91 7021920836</a></Phone>
          <Email href="mailto:manasvi@harmaig.com">manasvi@harmaig.com</Email>
        </ContactCard>

        {/* Contact Card: Yeeshu Soni */}
        <ContactCard>
          <Name>Yeeshu Soni</Name>
          <Role>Co-Founder</Role>
          <Phone ><a href="tel:+919516136454">+91 9516136454</a></Phone>
          <Email href="mailto:yeeshu@harmaig.com">yeeshu@harmaig.com</Email>
        </ContactCard>
      </CardContainer>

      {/* Footer */}
      <FooterText>
        For further assistance, feel free to reach out. Your satisfaction is our
        priority.
      </FooterText>
    </Container>
  );
};

export default Contact;
