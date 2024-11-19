import React, { useState } from "react";
import styled from "styled-components";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I have to pay shipment charges?",
      answer:
        "There are no shipping/delivery charges within India. For information on shipping charges for international orders, please see the Shipping and Handling Charges section under.",
    },
    {
      question: "Sending gifts to loved ones?",
      answer:
        "You can send any product from www.harmaig.com as a gift to your loved ones, with the option to include a personalized message.",
    },
    {
      question: "What if it gets lost or mis-product?",
      answer:
        "In the rare event that you receive the wrong product, we will gladly arrange for a replacement. If a replacement is not feasible, we will issue a refund through the payment method you used at the time of purchase.",
    },
    {
      question: "What is the Cash on Delivery (COD) payment option?",
      answer:
        "Cash on Delivery is a payment method offered by Harmaig, allowing you to pay in cash upon receiving your product. No advance payment is required for COD orders.",
    },
    {
      question: "Is there an extra charge for using Cash on Delivery?",
      answer:
        "No, there is no additional fee for opting for the COD service.",
    },
    {
      question: "Is there a limit on the cart value for COD orders?",
      answer:
        "Currently, COD is available for orders with a cart value ranging between INR 1,000 and INR 10,000, depending on eligible pin codes within India.",
    },
    {
      question: "How will I receive my refund for a COD order?",
      answer:
        "Refunds for COD orders can be processed via cheque or online transfer (NEFT). Option A: If you provide a canceled cheque with the returned product, the refund will be processed via NEFT within 7-15 working days. Option B: Without a canceled cheque, the refund will be sent by cheque to the address provided at the time of the order, which may take up to 30 working days.",
    },
    {
      question: "What are the terms and conditions for Cash on Delivery?",
      answer:
        "After placing a COD order, you will receive a confirmation call from our support team. If the call is not answered, we reserve the right to cancel the order. Payment must be made in full upon delivery, and the package can only be opened after payment is completed. Partial orders cannot be delivered.",
    },
    {
      question: "How do I cancel my COD order?",
      answer:
        "You can cancel a COD order by calling customer care at 1800-266-0123 or emailing hello@harmaig.com, provided the order has not yet been shipped.",
    },
    {
      question: "What currencies are accepted for Cash on Delivery?",
      answer:
        "Only Indian Rupees (INR) are accepted for COD payments. Notes of Rs 500 and Rs 1,000, which were declared illegal on November 9, 2016, will not be accepted.",
    },
  ];

  return (
    <FAQContainer>
      <FAQSection>
        <Heading>Frequently Asked Questions</Heading>
        {faqData.map((faq, index) => (
          <FAQBox key={index} active={activeQuestion === index}>
            <QuestionBox onClick={() => toggleQuestion(index)}>
              <QuestionText>{faq.question}</QuestionText>
              <Icon active={activeQuestion === index}>+</Icon>
            </QuestionBox>
            {activeQuestion === index && <Answer>{faq.answer}</Answer>}
          </FAQBox>
        ))}
      </FAQSection>
    </FAQContainer>
  );
};

export default FAQs;

// Styled Components
const FAQContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #eef2f3);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FAQSection = styled.div`
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FAQBox = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: ${(props) => (props.active ? "#f0f9ff" : "#f9f9f9")};
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.active ? "0 4px 15px rgba(0, 128, 255, 0.2)" : "0 2px 10px rgba(0, 0, 0, 0.05)"};
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 8px;
  background: ${(props) => (props.active ? "#eaf7ff" : "#ffffff")};
  &:hover {
    background: #f7faff;
  }
`;

const QuestionText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.active ? "#007bff" : "#6c757d")};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.active ? "rotate(45deg)" : "rotate(0deg)")};
`;

const Answer = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  border-top: 1px solid #e0e0e0;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
