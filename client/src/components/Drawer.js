import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import cataloguePDF from "../assets/catalogue.pdf";
import logo from "../assets/harmaig-logo.png";
import { useNavigate } from "react-router-dom";

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 1rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 51px;
  height: auto;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  padding: 1rem 0;
  cursor: pointer;
  color: #555;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #333;
    background-color: #e0e0e0;
  }
`;

const HighlightedButton = styled(MenuItem)`
  background-color: #ff6347;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

const ExtraInfoContainer = styled.div`
  margin-top: 4.5rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
`;

const ExtraInfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
  padding: 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.body};
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;

const Drawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const drawerRef = useRef(null);

  const handleButtonClick = () => {
    toggleDrawer(); // Close drawer
    navigate(`/products`);
  };

  const handleMoreClick = () => {
    toggleDrawer(); // Close drawer
    navigate(`/categories`);
  };

  const handleEarringsClick = () => {
    toggleDrawer(); // Close drawer
    navigate("/earrings");
  };
  const handleRingsClick = () => {
    toggleDrawer(); // Close drawer
    navigate("/categories", { state: { category: "Rings" } });
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleDrawer]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleDrawer} />
      <DrawerContainer isOpen={isOpen} ref={drawerRef}>
        <CloseIcon onClick={toggleDrawer}>
          <FiX />
        </CloseIcon>
        <LogoContainer>
          <Logo src={logo} alt="Brand Logo" />
        </LogoContainer>
        <MenuItem onClick={handleButtonClick}>All Jewellery</MenuItem>
        <MenuItem onClick={handleEarringsClick}>Earrings</MenuItem>
        <MenuItem onClick={handleRingsClick}>Rings</MenuItem>
        <MenuItem>Wedding</MenuItem>
        <MenuItem onClick={handleMoreClick}>More</MenuItem>
        <HighlightedButton onClick={() => window.open(cataloguePDF, "_blank")}>
          Download Catalogue
        </HighlightedButton>
        <ExtraInfoContainer>
          <ExtraInfoItem>✅ Hall Mark Certified</ExtraInfoItem>
          <ExtraInfoItem>✅ 7 Days Return Policy</ExtraInfoItem>
          <ExtraInfoItem>✅ Promising Trust and Transparency</ExtraInfoItem>
          <ExtraInfoItem>✅ 24*7 Support</ExtraInfoItem>
          <ExtraInfoItem>✅ Luxury at Doorstep</ExtraInfoItem>
        </ExtraInfoContainer>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
