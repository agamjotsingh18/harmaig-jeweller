import React, { useState } from "react";
import styled from "styled-components";

const DealsContainer = styled.div`
  background: #fff;
  padding: 3rem;
  text-align: center;
  font-family: 'Georgia', serif;
  color: #333;
  max-width: 800px;
  margin: 2rem auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  color: #111;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #555;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;

  &:focus {
    border-color: #000;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background: #111;
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #333;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const DoorwayDeals = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    setSuccessMessage("Your consultancy session has been successfully booked!");
  };

  return (
    <DealsContainer>
      <Title>Doorway Deals</Title>
      <Description>
        Book an exclusive consultancy session with our experts and
        elevate your experience. Fill in your details below to secure your
        spot.
      </Description>
      <BookingForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Input type="tel" placeholder="Contact Number" required />
        <Input type="text" placeholder="Preferred Address" required />
        <SubmitButton type="submit">Book Now</SubmitButton>
      </BookingForm>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </DealsContainer>
  );
};

export default DoorwayDeals;
