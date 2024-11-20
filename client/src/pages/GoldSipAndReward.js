// Import React and Styled Components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: #f9f4e9;
  font-family: 'Georgia', serif;
  min-height: 100vh;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #d4af37;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  padding: 2.5rem;
  position: relative;
  box-sizing: border-box;
`;

const BackButton = styled.i`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: #8b572a;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #8b572a;
  margin-bottom: 2rem;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 0.5rem;
  text-align: center;
  font-weight: 700;
`;

const List = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  color: #4a2c20;
  line-height: 1.8;
  padding: 0;

  li {
    margin-bottom: 1.8rem;
    display: flex;
    flex-direction: column;

    strong {
      color: #d4af37;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
  }
`;

// Component
const GoldSipAndReward = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <BackButton
          onClick={goBack}
          className="fa-solid fa-arrow-left"
        ></BackButton>
        <Title>SIP (Systematic Investment Plan) - Harmaig Terms and Conditions</Title>
        <List>
          <li>
            <strong>Plan Options:</strong>
            Harmaig’s SIP allows customers to make fixed monthly contributions toward the purchase of jewellery. The plans are available for a minimum investment of INR 1,000 per month.
          </li>
          <li>
            <strong>Tenure:</strong>
            The SIP tenure can range from 6 months to 24 months. At the end of the tenure, the accumulated amount can be used to purchase jewellery from Harmaig.
          </li>
          <li>
            <strong>Harmaig Contribution:</strong>
            For customers who pay consistently for 11 months, Harmaig will cover the payment for the 12th and final month, allowing customers to enjoy an extra month’s contribution as a benefit.
          </li>
          <li>
            <strong>Payment Mode:</strong>
            Monthly SIP payments can be made via auto-debit from the customer’s bank account, UPI, or credit/debit card. Failure to make timely payments may result in plan cancellation or penalties.
          </li>
          <li>
            <strong>Purchase Value:</strong>
            The value of the jewellery purchased at SIP maturity will be based on the prevailing gold and diamond rates. Discounts or rate locks are not applicable.
          </li>
          <li>
            <strong>Pre-Mature Withdrawal:</strong>
            Customers can exit the SIP before completing the tenure. However, the amount paid will be adjusted toward any available purchase at the time, and no cash refunds will be provided.
          </li>
          <li>
            <strong>Non-Transferable:</strong>
            SIP accounts and their associated benefits are non-transferable. The amount can only be used by the account holder to make purchases from Harmaig.
          </li>
          <li>
            <strong>Additional Benefit:</strong>
            If the customer has successfully paid for 11 months, Harmaig will make the 12th month’s payment on their behalf, and the jewellery order corresponding to the accumulated amount will be automatically placed.
          </li>
          <li>
            <strong>Features:</strong>
            Gold Subscription, Gold Investment.
          </li>
        </List>
      </ContentContainer>
    </PageWrapper>
  );
};

export default GoldSipAndReward;
