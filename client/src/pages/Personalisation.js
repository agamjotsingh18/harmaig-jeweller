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
  background: #f9f4e9;
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
  background: #fff;
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
`;

const List = styled.ul`
  list-style-type: none;
  font-size: 1.2rem;
  color: #4a2c20;
  line-height: 1.8;
  margin: 0;

  li {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;

    
    strong {
        color: #d4af37;
        font-weight: 600;
        margin-bottom: 0.3rem;
        display: flex;
    flex-direction: row;
        }
        }
        `;


// Component
const Personalisation = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <BackButton onClick={goBack} className="fa-solid fa-arrow-left"></BackButton>
      <ContentContainer>
        <Title>Personalisation - Terms and Conditions</Title>

        <List>
          <li>
            <strong>✓ Customization Scope: </strong> Personalisation services include engraving, resizing, and custom design modifications. All requests are subject to feasibility based on the jewellery's design and material.
          </li>
          <li>
            <strong>✓ Charges: </strong> Additional charges may apply for personalization services, depending on the complexity of the request and materials used. These charges will be communicated prior to the work.
          </li>
          <li>
            <strong>✓ Non-Refundable: </strong> Customized products are non-refundable and non-returnable under the 30-day money back policy unless there is a manufacturing defect.
          </li>
          <li>
            <strong>✓ Timeframe: </strong> The completion of personalized orders depends on the extent of customization. Estimated timelines will be provided, with potential delays for complex customizations.
          </li>
          <li>
            <strong>✓ Approval Process: </strong> For extensive customizations, Harmaig will provide design mockups. Once approved by the customer, further changes will not be accepted.
          </li>
        </List>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Personalisation;
