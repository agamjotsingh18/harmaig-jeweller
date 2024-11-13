import React from 'react'
import Hero from './Hero'
import ProductList from '../pages/ProductList'
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: "Times New Roman", serif; /* Choose a sophisticated serif font */
  font-size: 2rem; /* Adjust font size as needed */
  font-weight: bold;
  text-align: center;
  color: #333; /* Elegant dark color */
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  
  /* Optional styles to add elegance */
  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    background-color: #333;
    margin: 0.5rem auto;
  }
`;

const Dashboard = () => {
  return (
    <div>
        <Hero/>
        <Heading>Explore a Selection of the Maison's Creations</Heading>
        <ProductList/>
    </div>
  )
}

export default Dashboard