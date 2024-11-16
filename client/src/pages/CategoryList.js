// CategoryList.js
import React, { useState } from "react";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center; /* Centers the items horizontally */
  align-items: center; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:700px) {
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

const CategoryList = () => {
  
  
  
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { imageUrl: "https://i.postimg.cc/j5fyCTMz/image1.jpg", title: "Tops" },
    { imageUrl: "https://i.postimg.cc/wBmSxyYF/image2.jpg", title: "Rings" },
    { imageUrl: "https://i.postimg.cc/4xt5mznK/image3.jpg", title: "Pendants" },
    { imageUrl: "https://i.postimg.cc/0jw6c0TD/freepik-candid-image-photography-natural-textures-highly-r-37233.jpg", title: "Nose pins" },
    { imageUrl: "https://i.postimg.cc/7Pnf99Q1/freepik-candid-image-photography-natural-textures-highly-r-37232.jpg", title: "Necklace" },
    { imageUrl: "https://i.postimg.cc/yxt5cc9D/freepik-3d-model-octane-render-volumetric-highly-detailed-37251.jpg", title: "Mens rings" },
    { imageUrl: "https://i.postimg.cc/FshGCPFh/freepik-candid-image-photography-natural-textures-highly-r-37246.jpg", title: "Mens chains" },
    { imageUrl: "https://i.postimg.cc/W3bbHLyM/freepik-candid-image-photography-natural-textures-highly-r-37245.jpg", title: "Men's kada and bracelets" },
    { imageUrl: "https://i.postimg.cc/j5fyCTMz/image1.jpg", title: "Mangalsutra" },
    { imageUrl: "https://i.postimg.cc/4xt5mznK/image3.jpg", title: "Maang tika" },
    { imageUrl: "https://i.postimg.cc/wBmSxyYF/image2.jpg", title: "Jhumkas" },
    { imageUrl: "https://i.postimg.cc/yxt5cc9D/freepik-3d-model-octane-render-volumetric-highly-detailed-37251.jpg", title: "Drops&Hoops" },
    { imageUrl: "https://i.postimg.cc/FshGCPFh/freepik-candid-image-photography-natural-textures-highly-r-37246.jpg", title: "Chains" },
    { imageUrl: "https://i.postimg.cc/W3bbHLyM/freepik-candid-image-photography-natural-textures-highly-r-37245.jpg", title: "Bracelets" },
    { imageUrl: "https://i.postimg.cc/j5fyCTMz/image1.jpg", title: "Bangles" }
  ];
 
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <CategoryGrid>
      {currentProducts.map((category, index) => (
        <CategoryCard key={index} imageUrl={category.imageUrl} title={category.title} />
      ))}
    </CategoryGrid>

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

export default CategoryList;
