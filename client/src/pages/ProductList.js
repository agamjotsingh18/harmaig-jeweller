import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
  const products = [
    // Add 15 products with unique image URLs, titles, and prices
    // for illustration; here are the first few
    { imageUrl: "https://i.postimg.cc/j5fyCTMz/image1.jpg", title: "Classic Gold Ring", price: "1200" },
    { imageUrl: "https://i.postimg.cc/wBmSxyYF/image2.jpg", title: "Elegant Necklace", price: "2500" },
    { imageUrl: "https://i.postimg.cc/4xt5mznK/image3.jpg", title: "Diamond Earrings", price: "3000" },
    { imageUrl: "https://i.postimg.cc/0jw6c0TD/freepik-candid-image-photography-natural-textures-highly-r-37233.jpg", title: "Antique Doiya", price: "1200"},
    { imageUrl: "https://i.postimg.cc/7Pnf99Q1/freepik-candid-image-photography-natural-textures-highly-r-37232.jpg", title: "Antique Lucky", price: "1200" },
    { imageUrl: "https://i.postimg.cc/yxt5cc9D/freepik-3d-model-octane-render-volumetric-highly-detailed-37251.jpg", title: "Antique Mala", price: "1200" },
    { imageUrl: "https://i.postimg.cc/FshGCPFh/freepik-candid-image-photography-natural-textures-highly-r-37246.jpg", title: "Antique Set", price: "1200" },
    { imageUrl: "https://i.postimg.cc/W3bbHLyM/freepik-candid-image-photography-natural-textures-highly-r-37245.jpg", title: "Bangles", price: "1200" },
    { imageUrl: "https://i.postimg.cc/nrh2rzPC/freepik-candid-image-photography-natural-textures-highly-r-37244.jpg", title: "Women's Rings", price: "1200" },
    { imageUrl: "https://i.postimg.cc/mZ0xJWz7/freepik-candid-image-photography-natural-textures-highly-r-37241.jpg", title: "Men's Bracelets", price: "1200"  },
    { imageUrl: "https://i.postimg.cc/B63WbT3N/freepik-candid-image-photography-natural-textures-highly-r-37240.jpg", title: "Men's Lucky", price: "1200" },
    { imageUrl: "https://i.postimg.cc/59C3n6hq/freepik-candid-image-photography-natural-textures-highly-r-37239.jpg", title: "Men's Rings", price: "1200" },  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <ProductGrid>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
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
