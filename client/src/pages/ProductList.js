import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import ProductDetail from "../components/ProductDetail";
import ProductCard from "../components/ProductCard";
import { products } from "../components/data"; 

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center; /* Centers the items horizontally */
  align-items: center; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProductList = () => {
  const navigate = useNavigate();


  
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);


  const handleProductClick = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <ProductGrid>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
         product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </ProductGrid>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <span>Page {currentPage} of {totalPages}</span>
        <PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default ProductList;