// Import necessary libraries
import React from 'react';
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

const ContentContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  padding: 2.5rem;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #8b572a;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 0.5rem;
  text-align: center;
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
const ArtOfGifting = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title>Art of Gifting - Harmaig Terms and Conditions</Title>
        <List>
          <li>
            <strong>🎁 Gift Packaging:</strong> All purchases can be packaged in premium Harmaig gift boxes upon request. This service is complimentary for select items.
          </li>
          <li>
            <strong>🎁 Gift Vouchers:</strong> Harmaig gift vouchers are available for purchase and can be redeemed within 12 months from the date of issue. Vouchers are non-transferable and cannot be exchanged for cash.
          </li>
          <li>
            <strong>🎁 Gift Returns:</strong> Products received as gifts can be returned within 30 days, subject to standard return policies. The refund will be issued as Harmaig Credits to the recipient’s account, which can be used for future purchases.
          </li>
          <li>
            <strong>🎁 Gift Exchanges:</strong> Gift recipients may opt for exchanges under our Lifetime Exchange policy. However, any price differences between the exchanged items will be adjusted accordingly.
          </li>
        </List>
      </ContentContainer>
    </PageWrapper>
  );
};

export default ArtOfGifting;
