// Dashboard.js
import React, { useState } from 'react';
import Hero from './Hero';
import CategoryList from '../pages/CategoryList';
import ProductList from '../pages/ProductList';
import styled from 'styled-components';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';

const Heading = styled.h2`
  font-family: "Times New Roman", serif; /* Choose a sophisticated serif font */
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #333;
    margin: 0.5rem auto;
  }

     @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    &::after {
      width: 40px;
    }
  }
`;

const Container = styled.div`   
  @media (max-width: 768px) {  }
`;

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Tracks selected category
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle); // Set the selected category
  };
  const handleProductClick = (productId) => {
    console.log("Product Id", productId);
    navigate(`/product-detail/${productId}`, {state: {productId}});
  };
    return (
      <Container>
        <Carousel />
        <Heading>Find What You Love by Category</Heading>
        <CategoryList
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
        <Heading>Discover the Magic Behind HARMAiG</Heading>
        <Hero />
        <Heading>Shop Our Entire Range</Heading>
        <ProductList onProductClick={handleProductClick} />
      </Container>    
  );
};

export default Dashboard;
