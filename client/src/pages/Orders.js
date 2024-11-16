// Orders.js
import React from "react";
import styled from "styled-components";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  padding: 2rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Orders = () => {
    const navigate = useNavigate();

  return (
    <OrdersContainer>
      <IoBagCheckOutline size={48} color="${({ theme }) => theme.colors.primary}" />
      <EmptyMessage>No recent orders found.</EmptyMessage>
      <p>Make a purchase to see your order history here.</p>
      <Button onClick={() => navigate('/')}>Go to Shopping</Button>
    </OrdersContainer>
  );
};

export default Orders;
