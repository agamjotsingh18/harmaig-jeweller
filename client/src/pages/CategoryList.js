import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { products } from "../components/data";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProductGrid = styled(CategoryGrid)`
  margin-top: 2rem;
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

const CategoryList = ({ filteredCategories }) => {
  const navigate  = useNavigate();
  const location= useLocation();
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(location.state?.category || null);


  const categories = [
    { imageUrl: "https://i.postimg.cc/y8WXqw0L/IMG-0527-2.webp", title: "Tops" },
    { imageUrl: "https://i.postimg.cc/RCcgX5Tf/Precious-Aura-X0-0963png.png", title: "Rings" },
    { imageUrl: "https://i.postimg.cc/W1mYzRdT/IMG-0782.jpg", title: "Pendants" },
    { imageUrl: "https://i.postimg.cc/XNDR60CP/IMG-0764.jpg", title: "Necklace" },
    { imageUrl: "https://i.postimg.cc/vTqMpgd2/IMG-0747.webp", title: "Mens rings" },
    { imageUrl: "https://i.postimg.cc/MpcKJDH7/IMG-0699.webp", title: "Mens chains" },
    { imageUrl: "https://i.postimg.cc/nhMMcxRQ/IMG-0737.webp", title: "Men's kada and bracelets" },
    { imageUrl: "https://i.postimg.cc/cCN8rzgG/IMG-0716.webp", title: "Jhumkas" },
    { imageUrl: "https://i.postimg.cc/nhnYdXLf/IMG-0532-2.webp", title: "Drops&Hoops" },
    { imageUrl: "https://i.postimg.cc/SNMWQWnh/IMG-0680.webp", title: "Chains" },
    { imageUrl: "https://i.postimg.cc/fTDwksLR/IMG-0549-2.webp", title: "Bracelets" },
    { imageUrl: "https://i.postimg.cc/ZqksmJMQ/13.png", title: "Bangles" },
    { imageUrl: "https://i.postimg.cc/jSqMmf9P/nose-pins-500x500.jpg", title: "Nose pins" },
    { imageUrl: "https://i.postimg.cc/G23YhPFx/M048-1-zoom.jpg", title: "Mangalsutra" },
    { imageUrl: "https://i.postimg.cc/SQMCrGSj/image-zoom.jpg", title: "Maang tika" },
  ];

  const displayedCategories = filteredCategories
  ? categories.filter((category) => filteredCategories.includes(category.title))
  : categories;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];


    

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = displayedCategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(displayedCategories.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  // React.useEffect(() => {
  //   if (selectedCategory && filteredProducts.length === 0) {
  //     setSelectedCategory(null);
  //   }
  // }, [selectedCategory, filteredProducts]);
  React.useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <>
      {!selectedCategory ? (
        <>
          <CategoryGrid>
            {currentCategories.map((category, index) => (
              <CategoryCard
                key={index}
                imageUrl={category.imageUrl}
                title={category.title}
                onClick={() => handleCategoryClick(category.title)}
              />
            ))}
          </CategoryGrid>
          <PaginationContainer>
            <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </PaginationButton>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
              Next
            </PaginationButton>
          </PaginationContainer>
        </>
      ) : (
        <ProductGrid>
          {filteredProducts.map((product) => (
            <CategoryCard
              key={product.id}
              imageUrl={product.image_url || product.images[0]}
              title={product.title}
              onClick={() => handleProductClick(product.id)} // Navigate to product detail
            />
          ))}
        </ProductGrid>
      )}
    </>
  );
};

export default CategoryList;
