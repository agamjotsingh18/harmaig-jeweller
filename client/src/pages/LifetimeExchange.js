// Import necessary libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f5f5f5;
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

const ContentWrapper = styled.div`
  background: #fffef8;
  border-radius: 15px;
  border: 1px solid #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  padding: 2.5rem;
  text-align: center;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4a2c20;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: #8b572a;
  margin: 2rem 0 1rem;
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
  margin: 0 auto 1.5rem auto;
  max-width: 800px;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const HighlightBox = styled.div`
  background: #fff8dc;
  border: 1px solid #d4af37;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  font-weight: bold;
`;



// Component
const LifetimeExchange = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <PageContainer>
      <BackButton onClick={goBack} className="fa-solid fa-arrow-left"></BackButton>
      <ContentWrapper>
        <Title>Lifetime Exchange and Buy-Back</Title>
        <Paragraph>
          We offer Lifetime Exchange and Buy-Back for all Harmaig purchases within India. You can initiate these processes by visiting a store or through an online request. 
        </Paragraph>
        <HighlightBox>
          The exchange or buy-back value will be based on the market price on the day of the request. 
        </HighlightBox>
        <Paragraph>
          For online exchanges or buy-backs, a processing charge of INR 500 for shipping and handling will be applied. If done at a store, no such charge will be applicable.
        </Paragraph>

        <SubTitle>Please Note:</SubTitle>
        <List>
          <li>Any discounts or gifts received during your purchase will be deducted from the refund or exchanged value. You may also choose to return the gift.</li>
          <li>If a solitaire certificate is missing, a standard deduction of INR 3,500 will apply. For larger solitaires, the deduction may be higher depending on the size.</li>
        </List>

        <SubTitle>Lifetime Exchange</SubTitle>
        <Paragraph>
          The final exchange value will be credited as Harmaig Gold Wallet after a Quality Check (QC). These credits are valid for 365 days and can be used to purchase jewellery (excluding Coins and Solitaires). Credits cannot be converted into cash.
        </Paragraph>

        <SubTitle>Lifetime Buy-Back</SubTitle>
        <Paragraph>
          The final buy-back value will be credited as Harmaig Cash in Harmaig Gold Wallet after QC. This cash is valid for 365 days and can be used for future purchases or can be encashed.
        </Paragraph>
      </ContentWrapper>
    </PageContainer>
  );
};

export default LifetimeExchange;
