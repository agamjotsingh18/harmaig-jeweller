import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FiMenu, FiSearch, FiHeart, FiUser, FiX, FiShoppingCart } from "react-icons/fi";
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

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SearchIcon = styled(MenuIcon)``;

const Brand = styled.div`
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.1rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  svg {
    font-size: 1.3rem;
    cursor: pointer;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide right icons on mobile */
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 8px;
    width: 41px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem; /* Adds space between the icons */
  }
`;

const MobileMenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  @media (min-width: 769px) {
    display: none; /* Hide hamburger menu on larger screens */
  }
`;

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
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false); // Close mobile menu on desktop screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("mousedown", closeDrawer);
    } else {
      document.removeEventListener("mousedown", closeDrawer);
    }

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
          <MenuIcon onClick={toggleDrawer} aria-label="Toggle Menu">
            <FiMenu />
            <span style={{ marginLeft: "0.5rem", fontSize: "1rem" }}>Menu</span>
          </MenuIcon>
          <SearchIcon onClick={openSearchModal} aria-label="Open Search">
            <FiSearch />
            <span style={{ marginLeft: "0.3rem", fontSize: "1rem" }}>Search</span>
          </SearchIcon>
        </LeftSection>

        <Brand>HARMAiG</Brand>

        {/* Right Icons Section (only visible on desktop) */}
        <RightIcons>
          <a href="/" aria-label="Contact Us">Call Us</a>
          <FiHeart aria-label="Wishlist" onClick={() => navigate('/wishlist')}/>
          <FiShoppingCart aria-label="Cart" onClick={() => navigate('/cart')}/>
          <IoBagCheckOutline aria-label="Orders" onClick={() => navigate('/orders')}/>
          <HiOutlineBuildingStorefront aria-label="Stores" onClick={() => navigate('/stores')}/>
          <FiUser aria-label="User Profile" onClick={() => navigate('/login')} />
        </RightIcons>

        {/* Mobile Menu (only visible on mobile screens) */}
        <MobileMenu style={{ display: isMobileMenuOpen ? "flex" : "none" }}>
        <FiHeart aria-label="Wishlist" onClick={() => navigate('/wishlist')}/>
          <FiShoppingCart aria-label="Cart" onClick={() => navigate('/cart')}/>
          <IoBagCheckOutline aria-label="Orders" onClick={() => navigate('/orders')}/>
          <HiOutlineBuildingStorefront aria-label="Stores" onClick={() => navigate('/stores')}/>
          <FiUser aria-label="User Profile" onClick={() => navigate('/login')} />
        </MobileMenu>

        {/* Hamburger Menu Icon (only visible on mobile screens) */}
        <MobileMenuIcon
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <FiMenu />
        </MobileMenuIcon>
      </NavbarContainer>

      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} ref={drawerRef} />

      <SearchModalOverlay isOpen={isSearchModalOpen} onClick={closeSearchModal}>
        <SearchModalContent onClick={(e) => e.stopPropagation()}>
          <SearchInput
            type="text"
            placeholder="Search for products, collections, and more..."
            aria-label="Search input"
          />
          <CloseButton onClick={closeSearchModal} aria-label="Close Search">
            <FiX />
          </CloseButton>
        </SearchModalContent>
      </SearchModalOverlay>
    </>
  );
};

export default Navbar;
