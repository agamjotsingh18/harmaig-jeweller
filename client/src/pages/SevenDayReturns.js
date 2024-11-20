// Import necessary libraries
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

// Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f4f4f4;
  font-family: 'Georgia', serif;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

const BackButton = styled.i`
  font-size: 1.5rem;
  color: #8b572a;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #d4af37;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4a2c20;
  margin: 0 auto;
`;

const Section = styled.div`
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #d4af37;
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #8b572a;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #4a2c20;
  margin-bottom: 1rem;
`;

const List = styled.ol`
  padding-left: 1.5rem;
  font-size: 1.2rem;
  color: #4a2c20;
  line-height: 1.8;

  li {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const Highlighted = styled.div`
  background: #fff8dc;
  padding: 1.5rem;
  border: 1px solid #d4af37;
  border-radius: 10px;
  margin-top: 1rem;
  font-weight: bold;
`;


// Component
const SevenDayReturns = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <PageWrapper>
      <Header>
        <BackButton onClick={goBack} className="fa-solid fa-arrow-left"></BackButton>
        <Title>Return Policies</Title>
      </Header>
      <Section>
        <SubTitle>Harmaig's 7-Day Money Back Policy</SubTitle>
        <Paragraph>
          Under our 7-day money back policy (note: this does not apply to solitaires above INR 3 lakh and coins), you will receive a 100% refund, credited to your Harmaig account.
        </Paragraph>
        <Highlighted>
          Enjoy free return shipping and quick refunds within 2-3 working days.
        </Highlighted>
      </Section>
      <Section>
        <SubTitle>Will I have to pay for return shipping under the 7-day money back policy?</SubTitle>
        <Paragraph>
          No, we offer FREE return shipping across India for all products under this policy.
        </Paragraph>
      </Section>
      <Section>
        <SubTitle>How do I return a product to Harmaig within 7 days?</SubTitle>
        <Paragraph>Select the item you wish to return from your order.</Paragraph>
        <List>
          <li>Pack the jewellery in its original packaging along with any certification.</li>
          <li>If the product is valued under INR 35,000, simply hand it over to the pickup personnel.</li>
          <li>
            For products valued above INR 35,000:
            <ul>
              <li>If a Harmaig employee picks up the item, hand it over directly.</li>
              <li>
                If a third-party logistics partner handles the pickup, you'll receive a tamper-proof packet from us. Secure and seal your jewellery in it before handing it over. Once sealed, the packet cannot be opened without destroying it.
              </li>
            </ul>
          </li>
          <li>Collect a receipt or confirmation of the pickup (e.g., paper receipt, tracking photo, SMS confirmation).</li>
        </List>
      </Section>
    </PageWrapper>
  );
};

export default SevenDayReturns;
