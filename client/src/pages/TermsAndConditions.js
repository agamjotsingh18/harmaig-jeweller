// Import necessary libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background: #faf8f2;
  font-family: 'Georgia', serif;
  min-height: 100vh;
`;

const BackButton = styled.i`
  font-size: 1.5rem;
  color: #8b572a;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #d4af37;
  }
`;

const ContentContainer = styled.div`
  background: #fffef8;
  border-radius: 15px;
  border: 1px solid #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  padding: 2.5rem;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4a2c20;
  margin-bottom: 1rem;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 0.5rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #8b572a;
  margin: 2rem 0 1rem;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a2c20;
  margin: 1.5rem 0 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4a2c20;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  text-align: left;
  font-size: 1.2rem;
  color: #4a2c20;
  line-height: 1.8;
  margin: 0 auto 1.5rem auto;
  max-width: 800px;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;

    strong {
      color: #8b572a;
    }
  }
`;


// Component
const TermsAndConditions = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <PageWrapper>
      <BackButton onClick={goBack} className="fa-solid fa-arrow-left"></BackButton>
      <ContentContainer>
        <Title>Terms & Conditions</Title>

        <SectionTitle>Services</SectionTitle>
        <SubTitle>Repairs - Harmaig Terms and Conditions</SubTitle>

        <List>
          <li>
            <strong>Eligibility:</strong> Repairs will be carried out only on jewellery purchased from Harmaig. Proof of purchase (invoice, certificate) must be presented.
          </li>
          <li>
            <strong>Free Repairs:</strong> Jewellery under warranty will be repaired free of charge, subject to normal wear and tear conditions. Damage caused by mishandling, accidents, or unauthorized repairs will void the warranty.
          </li>
          <li>
            <strong>Repair Charges:</strong> For products out of warranty, repair costs will be based on the extent of damage, including material costs (if applicable). Customers will receive a quotation before any work is undertaken.
          </li>
          <li>
            <strong>Timeline:</strong> The time required for repairs depends on the complexity of the work. Customers will be informed of the estimated delivery date.
          </li>
          <li>
            <strong>Exclusions:</strong> Customized or highly intricate jewellery may not be eligible for standard repair services.
          </li>
        </List>
      </ContentContainer>
    </PageWrapper>
  );
};

export default TermsAndConditions;
