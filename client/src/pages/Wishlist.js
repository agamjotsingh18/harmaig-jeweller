import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WishlistContainer = styled.div`
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

const Wishlist = () => {
    const navigate = useNavigate();
  return (
    <WishlistContainer>
      <FiHeart size={48} color="${({ theme }) => theme.colors.primary}" />
      <EmptyMessage>Your wishlist is empty!</EmptyMessage>
      <p>Add items to see them here!</p>
      <Button onClick={() => navigate('/products')}>Add Products</Button>
    </WishlistContainer>
  );
};

export default Wishlist;