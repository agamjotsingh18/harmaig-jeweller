// src/components/Drawer.js
import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";

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
  padding: 2rem;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.2rem;
  padding: 1rem 0;
  cursor: pointer;
  color: #555; /* Initial color: medium grey */
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #333; /* Darker grey */
    background-color: #e0e0e0; /* Light grey background */
  }
`;

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <DrawerContainer isOpen={isOpen}>
      <CloseIcon onClick={toggleDrawer}>
        <FiX />
      </CloseIcon>
      <MenuItem>All Jewellery</MenuItem>
      <MenuItem>Earrings</MenuItem>
      <MenuItem>Rings</MenuItem>
      <MenuItem>Digital Gold</MenuItem>
      <MenuItem>Collections</MenuItem>
      <MenuItem>Wedding</MenuItem>
      <MenuItem>More</MenuItem>
    </DrawerContainer>
  );
};

export default Drawer;
