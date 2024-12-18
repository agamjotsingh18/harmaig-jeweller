// CategoryCard.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 345px;
  margin: 0.8rem;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const CategoryDetails = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};

  h3 {
    font-family: ${({ theme }) => theme.fonts.header};
    font-size: 1.2rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CategoryCard = ({ imageUrl, title, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CategoryImage src={imageUrl} alt={title} />
      <CategoryDetails>
        <h3>{title}</h3>
      </CategoryDetails>
    </CardContainer>
  );
};

export default CategoryCard;
