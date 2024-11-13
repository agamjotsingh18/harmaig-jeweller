// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiMenu, FiSearch, FiHeart, FiUser, FiX, FiShoppingCart } from "react-icons/fi"; // Outlined icons from react-icons
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const Brand = styled.div`
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1rem;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }

  svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

// Modal styles
const SearchModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SearchModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-left: 1rem;
`;

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const drawerRef = useRef(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const closeDrawer = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    // Close drawer when clicking outside
    if (isDrawerOpen) {
      document.addEventListener("mousedown", closeDrawer);
    } else {
      document.removeEventListener("mousedown", closeDrawer);
    }

    // Close search modal on 'Esc' key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeSearchModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", closeDrawer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <NavbarContainer>
        <LeftSection>
          <MenuIcon onClick={toggleDrawer}>
            <FiMenu />
            <span style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>Menu</span>
          </MenuIcon>
          <SearchIcon onClick={openSearchModal}>
            <FiSearch />
            <span style={{ marginLeft: "0.3rem", fontSize: "1rem" }}>Search</span>
          </SearchIcon>
        </LeftSection>

        <Brand>HARMAiG JEWELLER</Brand>

        <RightIcons>
          <a href="#">Call Us</a>
          <FiHeart />
          <FiShoppingCart/>
          <IoBagCheckOutline />
          <HiOutlineBuildingStorefront />    
          <FiUser onClick={() => navigate('/login')} style={{ cursor: 'pointer' }} />
        </RightIcons>
      </NavbarContainer>

      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} ref={drawerRef} />

      {/* Search Modal */}
      <SearchModalOverlay isOpen={isSearchModalOpen} onClick={closeSearchModal}>
        <SearchModalContent onClick={(e) => e.stopPropagation()}>
          <SearchInput
            type="text"
            placeholder="Search for products, collections, and more..."
          />
          <CloseButton onClick={closeSearchModal}>
            <FiX />
          </CloseButton>
        </SearchModalContent>
      </SearchModalOverlay>
    </>
  );
};

export default Navbar;
