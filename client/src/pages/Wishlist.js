import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useWishlist } from "../context/WishlistContext";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { products } from "../components/data"; 


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

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const ProductDetails = styled.div`
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

const WishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 1rem;
  }
`;

const RemoveIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;


const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;
const AddToCartButton = styled.button`
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PriceTag = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

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


const Wishlist = () => {
    const navigate= useNavigate;
  const { wishlist, removeFromWishlist } = useWishlist();
  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  
  return (
    <WishlistContainer>
    {wishlist.length > 0 ? (
      <ProductGrid>
        {wishlist.map((product) => {
                        const price22K = product.prices.find((price) => price.karat === "22K")?.value;
return(
          <CardContainer key={product.id}>
            <ProductImage src={product.images[0]} alt={product.title} />
            <ProductDetails>
              <h3>{product.title}</h3>
              <PriceTag>₹{price22K}</PriceTag>
              <ActionsContainer>
                <AddToCartButton onClick={() => handleRemove(product.id)}>
                  Remove
                </AddToCartButton>
              </ActionsContainer>
            </ProductDetails>
          </CardContainer>
        );
})}
      </ProductGrid>
    ) : (
      <>
        <FiHeart size={48} />
        <EmptyMessage>Your wishlist is empty!</EmptyMessage>
        <p>Add items to see them here!</p>
        <Button onClick={() => navigate('/products')}>Add Products</Button>
      </>
    )}
  </WishlistContainer>

  );
};

export default Wishlist;
