// Import React and Styled Components
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
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #8b572a;
  margin-bottom: 2rem;
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
    }
  }
`;


// Component
const Lending = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title>Lending - Harmaig Terms and Conditions</Title>
        <List>
          <li>
            <strong>Eligibility:</strong>
            Harmaig offers jewellery lending services where customers can submit their own hallmark-certified jewellery to us and receive a loan or advance equivalent to a portion of its value. This service is available for jewellery items valued above INR 2 lakh and is subject to approval based on the item’s condition and market value.
          </li>
          <li>
            <strong>Security Deposit:</strong>
            A refundable security deposit is not required as the jewellery provided by the customer will serve as collateral. The loan amount will be determined based on the jewellery’s assessed value, typically up to 70-80% of the value.
          </li>
          <li>
            <strong>Return Period:</strong>
            Customers can retrieve their jewellery within the agreed loan tenure, which can range from 3 to 12 months. Early repayment of the loan will allow the customer to collect their jewellery at any time during this period. Failure to repay the loan within the tenure will lead to forfeiture of the jewellery.
          </li>
          <li>
            <strong>Condition of Jewellery:</strong>
            The jewellery must be submitted to Harmaig in its original condition and will be returned in the same form once the loan is fully repaid. Harmaig guarantees that the jewellery will be securely stored and handled with the utmost care.
          </li>
          <li>
            <strong>Penalties for Late Payment:</strong>
            If the loan is not repaid by the agreed-upon due date, Harmaig reserves the right to sell the jewellery to recover the loan amount. Late payments may also incur additional penalties as specified in the loan agreement.
          </li>
          <li>
            <strong>Non-Eligibility for Return:</strong>
            The jewellery submitted as collateral cannot be returned or exchanged under any of Harmaig's regular return or buy-back policies during the loan period. It will only be returned once the loan and any associated fees are fully repaid.
          </li>
        </List>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Lending;
